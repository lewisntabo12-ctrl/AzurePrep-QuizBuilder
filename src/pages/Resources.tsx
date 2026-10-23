import { useEffect, useState } from 'react';
import {
  Cloud,
  Server,
  ShieldCheck,
  ExternalLink,
  FileText,
  GraduationCap,
  BookMarked,
  FileCheck,
} from 'lucide-react';
import type { LearningResource, CategoryId } from '@/types';
import { Card } from '@/components/ui/Card';
import { LoadingSpinner, ErrorState, EmptyState } from '@/components/ui/Feedback';
import { quizDataService } from '@/services/quizDataService';
import type { Page } from '@/components/Header';

interface ResourcesProps {
  onNavigate: (page: Page) => void;
}

const categoryInfo: {
  id: CategoryId;
  name: string;
  icon: typeof Cloud;
  color: string;
}[] = [
  { id: 'cloud-concepts', name: 'Cloud Concepts', icon: Cloud, color: 'text-brand-blue' },
  { id: 'azure-architecture-and-services', name: 'Azure Architecture and Services', icon: Server, color: 'text-brand-teal' },
  { id: 'azure-management-and-governance', name: 'Azure Management and Governance', icon: ShieldCheck, color: 'text-brand-navy' },
];

const typeIcons: Record<string, typeof FileText> = {
  module: GraduationCap,
  guide: BookMarked,
  documentation: FileText,
  reference: FileCheck,
};

const typeLabels: Record<string, string> = {
  module: 'Learning Module',
  guide: 'Guide',
  documentation: 'Documentation',
  reference: 'Reference',
};

export function Resources({ onNavigate }: ResourcesProps) {
  const [resources, setResources] = useState<LearningResource[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        setError(null);
 const data = await quizDataService.getLearningResources();
        if (mounted) {
          setResources(data);
          setLoading(false);
        }
      } catch {
        if (mounted) {
          setError('Unable to load learning resources. Please try again.');
          setLoading(false);
        }
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const getResourcesByCategory = (categoryId: CategoryId) =>
    resources.filter((r) => r.category === categoryId);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 animate-fade-in">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-brand-navy mb-2">Learning Resources</h1>
        <p className="text-ink-secondary max-w-2xl">
          Official Microsoft Learn materials organized by AZ-900 domain. These links open in a new tab
          and take you to the official Microsoft Learn site.
        </p>
      </div>

      {/* Curriculum Reference */}
      <Card className="p-5 mb-8 bg-brand-navy text-white">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold mb-1">AZ-900 Curriculum Reference</h2>
            <p className="text-sm text-slate-300">
              The official study guide outlines all skills measured in the exam.
            </p>
          </div>
          <a
            href="https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-blue text-white text-sm font-semibold hover:bg-brand-blue-light transition-colors flex-shrink-0"
          >
            Open Study Guide
            <ExternalLink size={16} />
          </a>
        </div>
      </Card>

      {/* Resources by Category */}
      {loading ? (
        <LoadingSpinner label="Loading resources..." />
      ) : error ? (
        <ErrorState message={error} onRetry={() => window.location.reload()} />
      ) : resources.length === 0 ? (
        <EmptyState
          icon={<BookMarked size={48} />}
          title="No resources found"
          message="Learning resources will appear here once loaded."
        />
      ) : (
        <div className="space-y-10">
          {categoryInfo.map((cat) => {
            const catResources = getResourcesByCategory(cat.id);
            if (catResources.length === 0) return null;

            const Icon = cat.icon;

            return (
              <section key={cat.id}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-xl bg-brand-blue/10 ${cat.color}`}>
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-brand-navy">{cat.name}</h2>
                    <p className="text-xs text-ink-muted">
                      {catResources.length} resource{catResources.length !== 1 ? 's' : ''}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {catResources.map((resource) => {
                    const TypeIcon = typeIcons[resource.type] ?? FileText;
                    return (
                      <a
                        key={resource.id}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block focus-ring rounded-2xl"
                      >
                        <Card hover className="p-5 h-full">
                          <div className="flex items-start justify-between gap-3 mb-3">
                            <div className="flex items-center gap-2">
                              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-surface-page text-brand-navy">
                                <TypeIcon size={18} />
                              </div>
                              <span className="text-xs font-semibold text-ink-muted uppercase tracking-wider">
                                {typeLabels[resource.type] ?? resource.type}
                              </span>
                            </div>
                            <ExternalLink
                              size={16}
                              className="text-ink-muted group-hover:text-brand-blue transition-colors flex-shrink-0 mt-1"
                            />
                          </div>
                          <h3 className="text-sm font-bold text-brand-navy mb-2 group-hover:text-brand-blue transition-colors leading-snug">
                            {resource.title}
                          </h3>
                          <p className="text-xs text-ink-secondary leading-relaxed">
                            {resource.description}
                          </p>
                        </Card>
                      </a>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      )}

      {/* CTA */}
      <div className="mt-12 text-center">
        <Card className="p-8 bg-surface-card">
          <h2 className="text-lg font-bold text-brand-navy mb-2">Ready to test your knowledge?</h2>
          <p className="text-sm text-ink-secondary mb-5">
            Put what you've learned into practice with a quiz tailored to your chosen domain.
          </p>
          <button
            onClick={() => onNavigate('quiz-setup')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-blue text-white text-sm font-semibold hover:bg-brand-blue-dark transition-all duration-200 focus-ring shadow-sm hover:shadow-md active:scale-[0.98]"
          >
            Start Practising
          </button>
        </Card>
      </div>
    </div>
  );
}
