import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

export const runtime = 'nodejs';

interface EvaluateRequestBody {
  question: string;
  selectedAnswer: string;
  correctAnswer: string;
  topic: string;
}

export async function POST(req: NextRequest) {
  try {
    const { question, selectedAnswer, correctAnswer, topic } =
      (await req.json()) as EvaluateRequestBody;

    if (!question || !selectedAnswer || !correctAnswer) {
      return NextResponse.json(
        { error: 'Missing required fields.' },
        { status: 400 }
      );
    }

    const apiKey = process.env.ANTHROPIC_API_KEY;

    if (!apiKey) {
      const isCorrect = selectedAnswer === correctAnswer;
      return NextResponse.json({
        isCorrect,
        feedback: isCorrect
          ? 'Correct! You selected the right answer.'
          : 'Incorrect. Review the concept and try again.',
        studyTip:
          'AI evaluation requires an API key. Check the server configuration for full feedback.',
        provider: 'fallback',
      });
    }

    const anthropic = new Anthropic({ apiKey });

    const prompt = `You are an expert Azure certification tutor helping a student prepare for the AZ-900 exam.

Topic: ${topic}
Question: ${question}
Student's selected answer: ${selectedAnswer}
Correct answer: ${correctAnswer}

Provide a concise, encouraging evaluation. First state whether the student's answer is correct or incorrect. Then explain WHY the correct answer is right in 2-3 sentences using clear, simple language. Finally, provide a short study tip related to this topic.

Format your response EXACTLY as JSON:
{
  "isCorrect": boolean,
  "feedback": "2-3 sentence explanation",
  "studyTip": "1 sentence study tip"
}`;

    const message = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 400,
      messages: [{ role: 'user', content: prompt }],
    });

    const textBlock = message.content.find(
      (block): block is Anthropic.TextBlock => block.type === 'text'
    );
    const text = textBlock?.text ?? '';

    try {
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const parsed = JSON.parse(jsonMatch[0]);
        return NextResponse.json({ ...parsed, provider: 'anthropic' });
      }
    } catch {
      // fall through to fallback
    }

    const isCorrect = selectedAnswer === correctAnswer;
    return NextResponse.json({
      isCorrect,
      feedback: isCorrect
        ? 'Correct! Well done.'
        : 'Incorrect. The correct answer is: ' + correctAnswer,
      studyTip: text.slice(0, 200),
      provider: 'anthropic',
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: `Evaluation failed: ${message}` },
      { status: 500 }
    );
  }
}
