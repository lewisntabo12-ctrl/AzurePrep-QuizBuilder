export interface Question {
  id: number;
  topic: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const quizQuestions: Question[] = [
  {
    id: 1,
    topic: 'Cloud Concepts',
    question:
      'Which of the following best describes the public cloud deployment model?',
    options: [
      'Resources are provisioned exclusively for a single organization on-premises.',
      'Resources are owned and operated by a third-party cloud provider and shared across multiple tenants over the public internet.',
      'Resources are hosted in a private data center with no internet connectivity.',
      'Resources are split equally between on-premises and a cloud provider with no network connection.',
    ],
    correctAnswer: 1,
    explanation:
      'In the public cloud model, a third-party cloud provider owns and operates the infrastructure, which is shared by multiple organizations (tenants) and accessed over the public internet.',
  },
  {
    id: 2,
    topic: 'Cloud Concepts',
    question: 'What is the primary difference between IaaS and PaaS?',
    options: [
      'IaaS provides virtual machines; PaaS provides a managed platform for developing and deploying applications without managing the underlying infrastructure.',
      'IaaS is free; PaaS requires a paid subscription.',
      'IaaS is only for public cloud; PaaS is only for private cloud.',
      'IaaS provides applications; PaaS provides networking.',
    ],
    correctAnswer: 0,
    explanation:
      'IaaS gives you virtualized computing infrastructure (VMs, storage, networking). PaaS goes further, providing a managed platform and environment for building, deploying, and managing applications without worrying about the underlying OS or infrastructure.',
  },
  {
    id: 3,
    topic: 'Cloud Concepts',
    question: 'Which scenario best describes a hybrid cloud deployment?',
    options: [
      'A company uses only Azure for all its workloads.',
      'A company runs a private cloud in its data center and extends specific workloads to Azure for burst capacity.',
      'A company uses multiple public cloud providers simultaneously.',
      'A company has no cloud presence and runs everything on-premises.',
    ],
    correctAnswer: 1,
    explanation:
      'A hybrid cloud combines on-premises (or private cloud) resources with public cloud resources, allowing data and workloads to move between them as needed.',
  },
  {
    id: 4,
    topic: 'Cloud Concepts',
    question:
      'Which of the following is an example of cloud agility?',
    options: [
      'Purchasing physical servers that take 6 weeks to arrive.',
      'Quickly provisioning a new virtual machine within minutes to meet increased demand.',
      'Signing a 3-year contract for fixed server capacity.',
      'Hiring additional IT staff to manage on-premises servers.',
    ],
    correctAnswer: 1,
    explanation:
      'Agility in the cloud means the ability to rapidly provision and de-provision resources to respond to changing business needs, often within minutes.',
  },
  {
    id: 5,
    topic: 'Azure Core Services',
    question:
      'Which Azure service provides a managed relational database service that supports SQL Server, PostgreSQL, and MySQL?',
    options: [
      'Azure Cosmos DB',
      'Azure SQL Database (with options for PostgreSQL and MySQL as separate managed services)',
      'Azure Table Storage',
      'Azure Redis Cache',
    ],
    correctAnswer: 1,
    explanation:
      'Azure provides fully managed relational database services: Azure SQL Database for SQL Server, Azure Database for PostgreSQL, and Azure Database for MySQL. These are collectively part of Azure\'s managed relational database offerings.',
  },
  {
    id: 6,
    topic: 'Azure Core Services',
    question:
      'What is the purpose of Azure Virtual Network (VNet)?',
    options: [
      'To provide a global CDN for content delivery.',
      'To enable AI-powered image analysis.',
      'To create isolated, logically segmented network environments in Azure where resources can communicate securely.',
      'To monitor application performance.',
    ],
    correctAnswer: 2,
    explanation:
      'Azure VNet allows you to create isolated, private network spaces in the cloud where you can securely connect VMs, databases, and other resources, and control traffic with network security groups and firewalls.',
  },
  {
    id: 7,
    topic: 'Azure Core Services',
    question:
      'Which Azure service is a globally distributed, multi-model database designed for low-latency, high-availability workloads?',
    options: [
      'Azure SQL Database',
      'Azure Cosmos DB',
      'Azure Blob Storage',
      'Azure Data Lake Storage',
    ],
    correctAnswer: 1,
    explanation:
      'Azure Cosmos DB is Microsoft\'s globally distributed, multi-model database service that offers single-digit-millisecond latency and multi-homing capabilities with automatic failover.',
  },
  {
    id: 8,
    topic: 'Azure Core Services',
    question:
      'Which Azure service would you use to host a containerized web application without managing the underlying server infrastructure?',
    options: [
      'Azure Virtual Machines',
      'Azure App Service',
      'Azure Kubernetes Service (AKS)',
      'Azure Functions',
    ],
    correctAnswer: 1,
    explanation:
      'Azure App Service is a PaaS offering that lets you host web applications (including containerized apps) without managing the underlying servers. It handles scaling, patching, and infrastructure.',
  },
  {
    id: 9,
    topic: 'Core Solutions & Management Tools',
    question:
      'Which Azure service is designed for hosting serverless functions that run in response to events?',
    options: [
      'Azure Logic Apps',
      'Azure Functions',
      'Azure App Service',
      'Azure Container Instances',
    ],
    correctAnswer: 1,
    explanation:
      'Azure Functions is a serverless compute service that runs event-driven code on-demand without having to explicitly provision or manage infrastructure. You pay only for the compute time used.',
  },
  {
    id: 10,
    topic: 'Core Solutions & Management Tools',
    question:
      'What is Azure IoT Hub primarily used for?',
    options: [
      'Hosting virtual machines for IoT applications.',
      'Providing a managed service for bidirectional communication between IoT devices and the cloud.',
      'Storing large IoT datasets in a data lake.',
      'Running AI models on edge devices.',
    ],
    correctAnswer: 1,
    explanation:
      'Azure IoT Hub is a managed service that acts as a central message hub for bi-directional communication between IoT applications and the devices they manage.',
  },
  {
    id: 11,
    topic: 'Core Solutions & Management Tools',
    question:
      'Which Azure management tool provides a unified portal for managing resources across multiple subscriptions?',
    options: [
      'Azure CLI',
      'Azure PowerShell',
      'Azure Portal',
      'Azure Advisor',
    ],
    correctAnswer: 2,
    explanation:
      'The Azure Portal is a web-based, unified console that provides a single dashboard for managing all your Azure resources across multiple subscriptions and services.',
  },
  {
    id: 12,
    topic: 'Core Solutions & Management Tools',
    question:
      'What is the purpose of Azure Advisor?',
    options: [
      'To automate the deployment of ARM templates.',
      'To provide personalized best-practice recommendations to optimize Azure deployments for cost, security, performance, and reliability.',
      'To monitor real-time application logs.',
      'To manage user identities and access.',
    ],
    correctAnswer: 1,
    explanation:
      'Azure Advisor analyzes your deployed resources and provides personalized recommendations across five categories: cost, security, reliability, operational excellence, and performance.',
  },
  {
    id: 13,
    topic: 'Security, Privacy & Compliance',
    question:
      'What is the purpose of Azure Active Directory (Azure AD / Microsoft Entra ID)?',
    options: [
      'To provide a directory service for on-premises Active Directory only.',
      'To provide cloud-based identity and access management service that authenticates users and provides access to resources.',
      'To store virtual machine disk images.',
      'To monitor network traffic between Azure regions.',
    ],
    correctAnswer: 1,
    explanation:
      'Azure Active Directory (now Microsoft Entra ID) is a cloud-based identity and access management service. It authenticates users, manages identities, and controls access to applications and resources.',
  },
  {
    id: 14,
    topic: 'Security, Privacy & Compliance',
    question:
      'Which Azure service provides threat protection across hybrid cloud workloads and offers security recommendations?',
    options: [
      'Azure Key Vault',
      'Azure Security Center / Microsoft Defender for Cloud',
      'Azure Information Protection',
      'Azure Sentinel',
    ],
    correctAnswer: 1,
    explanation:
      'Microsoft Defender for Cloud (formerly Azure Security Center) is a unified infrastructure security management system that provides threat protection, security posture management, and recommendations across hybrid cloud workloads.',
  },
  {
    id: 15,
    topic: 'Security, Privacy & Compliance',
    question:
      'Which Azure feature allows you to restrict network traffic to and from Azure resources based on rules?',
    options: [
      'Azure Firewall',
      'Network Security Group (NSG)',
      'Azure Load Balancer',
      'Azure Application Gateway',
    ],
    correctAnswer: 1,
    explanation:
      'A Network Security Group (NSG) contains a list of security rules that allow or deny inbound and outbound network traffic to and from various types of Azure resources.',
  },
  {
    id: 16,
    topic: 'Azure Pricing & Support',
    question:
      'Which Azure pricing option provides discounted rates compared to pay-as-you-go pricing in exchange for a commitment of 1 or 3 years?',
    options: [
      'Azure Free Account',
      'Azure Reserved Instances',
      'Azure Spot Instances',
      'Azure Dev/Test Pricing',
    ],
    correctAnswer: 1,
    explanation:
      'Azure Reserved Instances (now called Azure Reservations) offer significant discounts (up to 72%) compared to pay-as-you-go prices when you commit to a 1-year or 3-year term for specific services.',
  },
  {
    id: 17,
    topic: 'Azure Pricing & Support',
    question:
      'What does the Azure Total Cost of Ownership (TCO) calculator help you determine?',
    options: [
      'How much revenue your cloud app will generate.',
      'The cost savings of migrating your on-premises workloads to Azure.',
      'The exact monthly bill for Azure services.',
      'The number of Azure subscriptions you need.',
    ],
    correctAnswer: 1,
    explanation:
      'The Azure TCO calculator helps you estimate the cost savings you can achieve by migrating your on-premises workloads to Azure by comparing the total cost of running those workloads on-premises versus in the cloud.',
  },
  {
    id: 18,
    topic: 'Azure Pricing & Support',
    question:
      'Which Azure support plan is designed for enterprise-grade workloads with 24/7 access to engineers and a response time of under 15 minutes for critical issues?',
    options: [
      'Basic',
      'Developer',
      'Standard',
      'Professional Direct (ProDirect / Unified)',
    ],
    correctAnswer: 3,
    explanation:
      'The Professional Direct (now part of Unified) support plan provides enterprise-grade support with 24/7 access, a response time of under 15 minutes for critical (Sev A) issues, and architectural guidance from a Technical Account Manager.',
  },
  {
    id: 19,
    topic: 'Cloud Concepts',
    question:
      'Which of the following describes the concept of economies of scale in cloud computing?',
    options: [
      'The cloud becomes more expensive as you add more resources.',
      'The per-unit cost of computing decreases as the provider scales infrastructure across many customers.',
      'Each customer must purchase their own physical servers.',
      'Cloud providers charge a fixed fee regardless of usage.',
    ],
    correctAnswer: 1,
    explanation:
      'Economies of scale mean that as a cloud provider builds larger infrastructure and serves more customers, the per-unit cost of computing, storage, and networking decreases. These savings are passed on to customers through lower prices.',
  },
  {
    id: 20,
    topic: 'Azure Core Services',
    question:
      'What are the three main types of Azure Storage accounts?',
    options: [
      'General Purpose v1, General Purpose v2, and Blob Storage (legacy)',
      'Standard, Premium, and Ultra',
      'Hot, Cool, and Archive',
      'LRS, GRS, and ZRS',
    ],
    correctAnswer: 0,
    explanation:
      'The main storage account types are General Purpose v1 (legacy), General Purpose v2 (current, recommended), and Blob Storage (legacy). GRS/LRS/ZRS are redundancy options, and Hot/Cool/Archive are access tiers.',
  },
];
