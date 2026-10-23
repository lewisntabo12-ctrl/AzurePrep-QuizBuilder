import { AlertTriangle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="mt-auto border-t border-surface-border bg-surface-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-50 border border-amber-200">
            <AlertTriangle className="text-amber-600 flex-shrink-0 mt-0.5" size={20} />
            <p className="text-sm text-amber-900 leading-relaxed">
              <span className="font-semibold">Disclaimer:</span> AzurePrep QuizBuilder is an
              unofficial, independent learning tool. It is not affiliated with, endorsed by, or
              sponsored by Microsoft. Azure is a trademark of Microsoft Corporation. This tool does
              not guarantee success in the official AZ-900 certification exam.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-ink-secondary">
            <p>AzurePrep QuizBuilder &middot; Learn. Practise. Understand.</p>
            <p className="text-ink-muted">
              For official preparation, visit{' '}
              <a
                href="https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-blue hover:underline font-medium"
              >
                Microsoft Learn
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
