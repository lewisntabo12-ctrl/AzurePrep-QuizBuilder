import type { LearningResource } from '@/types';

export const learningResources: LearningResource[] = [
  // Cloud Concepts
  {
    id: 'lr-cc-001',
    category: 'cloud-concepts',
    title: 'Introduction to cloud computing',
    description:
      'Learn the fundamental concepts of cloud computing, including service models (IaaS, PaaS, SaaS) and deployment models (public, private, hybrid).',
    url: 'https://learn.microsoft.com/en-us/training/modules/introduction-to-cloud-computing/',
    type: 'module',
  },
  {
    id: 'lr-cc-002',
    category: 'cloud-concepts',
    title: 'Describe cloud service types',
    description:
      'Understand the differences between Infrastructure as a Service, Platform as a Service, and Software as a Service and when to use each.',
    url: 'https://learn.microsoft.com/en-us/training/paths/describe-cloud-service-types/',
    type: 'module',
  },
  {
    id: 'lr-cc-003',
    category: 'cloud-concepts',
    title: 'Cloud computing benefits and considerations',
    description:
      'Explore the benefits of cloud computing including scalability, elasticity, agility, and the consumption-based model.',
    url: 'https://learn.microsoft.com/en-us/training/modules/describe-cloud-computing/',
    type: 'guide',
  },
  {
    id: 'lr-cc-004',
    category: 'cloud-concepts',
    title: 'AZ-900 study guide — Cloud Concepts domain',
    description:
      'The official AZ-900 study guide outlining the skills measured in the Cloud Concepts domain (25–30% of the exam).',
    url: 'https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900',
    type: 'reference',
  },

  // Azure Architecture and Services
  {
    id: 'lr-as-001',
    category: 'azure-architecture-and-services',
    title: 'Explore Azure core architectural components',
    description:
      'Learn about regions, availability zones, resource groups, subscriptions, and the Azure Resource Manager.',
    url: 'https://learn.microsoft.com/en-us/training/paths/az-900-describe-core-architectural-components/',
    type: 'module',
  },
  {
    id: 'lr-as-002',
    category: 'azure-architecture-and-services',
    title: 'Describe Azure compute and networking services',
    description:
      'Understand Azure Virtual Machines, App Service, Azure Functions, AKS, and core networking services like VNets and Load Balancers.',
    url: 'https://learn.microsoft.com/en-us/training/paths/az-900-describe-azure-compute-networking-services/',
    type: 'module',
  },
  {
    id: 'lr-as-003',
    category: 'azure-architecture-and-services',
    title: 'Describe Azure storage services',
    description:
      'Learn about Blob, Disk, File, and Table storage, access tiers, and redundancy options in Azure Storage.',
    url: 'https://learn.microsoft.com/en-us/training/paths/az-900-describe-azure-storage-services/',
    type: 'module',
  },
  {
    id: 'lr-as-004',
    category: 'azure-architecture-and-services',
    title: 'Describe Azure identity, access, and security',
    description:
      'Understand Microsoft Entra ID, RBAC, zero trust, and how Azure protects your resources with security services.',
    url: 'https://learn.microsoft.com/en-us/training/paths/az-900-describe-azure-identity-access-security/',
    type: 'module',
  },
  {
    id: 'lr-as-005',
    category: 'azure-architecture-and-services',
    title: 'AZ-900 study guide — Architecture & Services domain',
    description:
      'The official AZ-900 study guide outlining the skills measured in the Azure Architecture and Services domain (35–40% of the exam).',
    url: 'https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900',
    type: 'reference',
  },

  // Azure Management and Governance
  {
    id: 'lr-mg-001',
    category: 'azure-management-and-governance',
    title: 'Describe cost management in Azure',
    description:
      'Learn about the pricing calculator, Total Cost of Ownership (TCO) calculator, Azure Cost Management, budgets, and tags.',
    url: 'https://learn.microsoft.com/en-us/training/paths/az-900-describe-cost-management-azure/',
    type: 'module',
  },
  {
    id: 'lr-mg-002',
    category: 'azure-management-and-governance',
    title: 'Describe governance and compliance in Azure',
    description:
      'Understand Azure Policy, Azure Blueprints, Microsoft Purview, resource locks, and the Service Trust Portal.',
    url: 'https://learn.microsoft.com/en-us/training/paths/az-900-describe-governance-compliance-azure/',
    type: 'module',
  },
  {
    id: 'lr-mg-003',
    category: 'azure-management-and-governance',
    title: 'Describe monitoring and reporting tools in Azure',
    description:
      'Learn about Azure Monitor, Azure Service Health, Azure Advisor, and how to use KQL for log queries.',
    url: 'https://learn.microsoft.com/en-us/training/paths/az-900-describe-monitoring-reporting-azure/',
    type: 'module',
  },
  {
    id: 'lr-mg-004',
    category: 'azure-management-and-governance',
    title: 'AZ-900 study guide — Management & Governance domain',
    description:
      'The official AZ-900 study guide outlining the skills measured in the Management and Governance domain (30–35% of the exam).',
    url: 'https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/az-900',
    type: 'reference',
  },
];
