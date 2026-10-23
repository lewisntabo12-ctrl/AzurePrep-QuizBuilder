# AzurePrep QuizBuilder

### Learn. Practise. Understand.

AzurePrep QuizBuilder is an educational application being developed to help
learners prepare for the Microsoft Azure Fundamentals (AZ-900) certification
through structured practice questions, explanations, and a more engaging
learning experience.

The project is inspired by our own learning journey and the need for an
accessible way to practise cloud computing concepts, identify knowledge gaps,
and strengthen understanding before attempting a certification examination.

> **Disclaimer:** AzurePrep QuizBuilder is an independent educational project.
> It is not affiliated with, endorsed by, or sponsored by Microsoft.
> Microsoft Azure and AZ-900 are referenced for educational purposes.


## Project Overview

Preparing for a cloud certification requires more than memorizing
definitions. Learners need opportunities to practise, understand why an
answer is correct, recognize misconceptions, and revisit concepts they
have not mastered.

AzurePrep QuizBuilder aims to bring these learning activities into one
structured application.

The application focuses on the Microsoft Azure Fundamentals (AZ-900)
learning areas and aims to make independent practice more interactive,
organized, and informative.

Rather than presenting practice questions alone, the project is designed
around a learning cycle:

**Learn → Practise → Review → Improve**

The application is being developed as part of the
**Vibe Coding Hackathon: AZ-900 Exam Prep Edition, for the #1MillionDevs
Movement!**

Our approach combines AI-assisted development with human review, original
educational content, and iterative testing.

## Problem Statement

Learners preparing for cloud computing certifications need effective ways
to practise concepts and evaluate their understanding.

Studying documentation is important, but learners may also benefit from
a structured environment where they can answer questions, receive
explanations, and identify topics that require further study.

A practice experience that focuses only on selecting answers may not
provide enough context for learners to understand their mistakes.

AzurePrep QuizBuilder addresses this learning challenge by aiming to
combine topic-based practice with answer explanations and progress
feedback.

### The Challenge We Are Addressing

- Organizing practice around clearly defined learning areas.
- Helping learners understand concepts instead of relying solely on
  memorization.
- Providing meaningful feedback after answering questions.
- Making practice sessions easier to navigate.
- Helping learners recognize areas where additional study may be needed.
- Connecting practice activities with reliable learning resources.

## Our Solution

AzurePrep QuizBuilder is designed as a guided quiz-based learning
experience.

Learners will be able to select a learning area, configure a practice
session, answer questions, review explanations, and examine their
performance.

The intended experience emphasizes three principles:

### 1. Learn

Organize cloud fundamentals into manageable learning areas and provide
access to relevant learning resources.

### 2. Practise

Allow learners to work through original practice questions organized
by category and, where supported, difficulty.

### 3. Understand

Provide explanations and answer reviews that help learners understand
the reasoning behind correct answers and learn from incorrect choices.

The goal is not simply to produce a score. It is to support a deeper
understanding of cloud computing concepts.

## Project Objectives

The project aims to:

1. Develop an accessible and intuitive AZ-900 practice application.
2. Organize practice questions around the official certification
   learning areas.
3. Encourage conceptual understanding through answer explanations.
4. Provide a clear interface for configuring and completing practice
   sessions.
5. Present performance feedback after practice sessions.
6. Connect learners with trustworthy educational resources.
7. Apply AI-assisted development responsibly while reviewing and
   testing generated code.
8. Build a maintainable frontend and backend through collaboration
   and version control.
9. Provide documentation that helps contributors understand the
   project's purpose, structure, and development process.

## Learning Areas

The application is organized around three principal AZ-900 learning areas.

### 1. Cloud Concepts

This area focuses on foundational cloud computing knowledge, including
concepts such as:

- Cloud computing fundamentals.
- Cloud service types.
- Cloud deployment models.
- Shared responsibility.
- Cloud benefits and considerations.

### 2. Azure Architecture and Services

This area focuses on understanding Microsoft Azure's architecture and
services, including topics such as:

- Azure's global infrastructure.
- Azure resources and resource organization.
- Compute services.
- Networking services.
- Storage services.
- Identity and access concepts.

### 3. Azure Management and Governance

This area focuses on managing, monitoring, securing, and governing
Azure environments, including topics such as:

- Cost management.
- Governance and compliance.
- Resource management.
- Monitoring and service management.
- Security and management tools.

The precise topics and their coverage should follow the current official
AZ-900 study guide.

## Planned Features

The following features describe the intended application experience.
Their availability depends on implementation and testing.

### 1. Learning Dashboard

A central page intended to introduce the application and help learners
navigate the available learning areas.

Planned elements include:

- A clear project introduction.
- Learning category cards.
- Access to quiz configuration.
- Learning progress indicators where supported.
- Navigation to relevant learning resources.

### 2. Quiz Configuration

A setup experience intended to let learners configure a practice session.

Planned options include:

- Selecting a learning category.
- Selecting a difficulty level, where supported.
- Choosing the number of questions.
- Starting a practice session.

### 3. Interactive Quiz Interface

A focused interface for answering practice questions.

Planned elements include:

- Clear question presentation.
- Answer options.
- Question navigation where appropriate.
- Progress indicators.
- Feedback after answering.
- Protection against accidentally submitting multiple answers.

### 4. Explanations and Answer Review

A learning-focused review experience intended to explain answers.

Planned elements include:

- The correct answer.
- An explanation of the relevant concept.
- Feedback on the learner's selection.
- Relevant learning resources when available.

### 5. Results and Performance Feedback

A results page intended to summarize a completed practice session.

Potential information includes:

- The final score.
- Correct and incorrect responses.
- Answers requiring further review.
- Links to relevant learning material.

### 6. Learning Resources

A dedicated area for accessing reliable educational resources.

This section will prioritize official Microsoft Learn documentation
and the current AZ-900 study guide.

### 7. Responsive User Interface

The interface is being designed with different screen sizes in mind.

The goal is to provide a consistent and usable experience on desktop,
tablet, and mobile devices.

---

## How It Works

The intended learner journey is:

1. **Open the application:** The learner arrives at the dashboard.
2. **Choose a learning area:** The learner selects a category.
3. **Configure a session:** The learner chooses the available practice
   options.
4. **Answer questions:** The learner works through the selected questions.
5. **Review feedback:** The application provides answer feedback and
   explanations as implemented.
6. **Examine results:** The learner reviews their performance after
   completing the session.
7. **Continue learning:** The learner revisits challenging concepts
   using explanations and learning resources.

The exact workflow may evolve as the frontend and backend are integrated.


## Project Architecture

AzurePrep QuizBuilder is being developed with a separation between the
frontend and backend responsibilities.

### Frontend

The frontend is responsible for the user-facing experience, including:

- Displaying learning categories.
- Presenting quiz questions and answer options.
- Managing interface interactions.
- Showing answer feedback.
- Displaying results and learning resources.

### Backend

The backend is being developed separately and is intended to support
the application's data and application logic.

Depending on the agreed implementation, its responsibilities may include:

- Providing practice questions.
- Validating submitted answers.
- Returning explanations and feedback.
- Managing question data.
- Supporting result processing and persistence where implemented.

The precise API endpoints, request formats, response formats, and
database design must be agreed upon by the frontend and backend
contributors.


