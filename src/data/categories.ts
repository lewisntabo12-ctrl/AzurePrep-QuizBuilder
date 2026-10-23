import type { Category } from '@/types';

export const categories: Category[] = [
  {
    id: 'cloud-concepts',
    name: 'Cloud Concepts',
    shortName: 'Cloud Concepts',
    description:
      'Understand cloud concepts including benefits, types of cloud services, and deployment models.',
    icon: 'Cloud',
    skillsOutline:
      'Describe cloud concepts (25–30%) — benefits of cloud computing, types of cloud services, deployment models.',
  },
  {
    id: 'azure-architecture-and-services',
    name: 'Azure Architecture and Services',
    shortName: 'Architecture & Services',
    description:
      'Explore core Azure architectural components, compute, networking, storage, and identity services.',
    icon: 'Server',
    skillsOutline:
      'Describe Azure architecture and services (35–40%) — regions, availability zones, resources, compute, networking, storage, identity.',
  },
  {
    id: 'azure-management-and-governance',
    name: 'Azure Management and Governance',
    shortName: 'Management & Governance',
    description:
      'Learn about cost management, governance, compliance, and monitoring tools in Azure.',
    icon: 'ShieldCheck',
    skillsOutline:
      'Describe Azure management and governance (30–35%) — cost management, governance, compliance, monitoring, tools.',
  },
];
