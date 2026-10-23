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
    topic: "Describe Cloud Concepts",
    question: "Your company is migrating to the cloud and wants to eliminate the upfront costs of purchasing physical servers. Which billing model does this represent?",
    options: [
      "Capital Expenditure (CapEx)",
      "Operational Expenditure (OpEx)",
      "Fixed pricing",
      "Reserved instances"
    ],
    correctAnswer: 1,
    explanation: "OpEx allows you to pay as you go, removing the need for upfront capital costs (CapEx) for physical infrastructure."
  },
  {
    id: 2,
    topic: "Describe Azure Architecture and Services",
    question: "You need to ensure your application remains available even if an entire Azure data center goes down due to a power outage. What Azure feature should you use?",
    options: [
      "Azure Resource Groups",
      "Availability Zones",
      "Azure Virtual Machine Scale Sets",
      "Azure Load Balancer"
    ],
    correctAnswer: 1,
    explanation: "Availability Zones are physically separate datacenters within an Azure region, protecting applications from datacenter-level failures."
  },
  {
    id: 3,
    topic: "Describe Cloud Concepts",
    question: "Which cloud service model requires the customer to manage the operating system, while the cloud provider manages the underlying hardware?",
    options: [
      "Software as a Service (SaaS)",
      "Platform as a Service (PaaS)",
      "Infrastructure as a Service (IaaS)",
      "Database as a Service (DBaaS)"
    ],
    correctAnswer: 2,
    explanation: "In an IaaS model, the cloud provider manages the hardware, but the customer is responsible for OS configuration, networking, and applications."
  },
  {
    id: 4,
    topic: "Describe Azure Management and Governance",
    question: "You need a unified management layer to deploy, update, and delete all resources for your Azure solution in a single coordinated operation. Which service provides this?",
    options: [
      "Azure Resource Manager (ARM)",
      "Azure Policy",
      "Azure Active Directory (Entra ID)",
      "Azure Advisor"
    ],
    correctAnswer: 0,
    explanation: "Azure Resource Manager (ARM) is the deployment and management service for Azure, allowing you to manage resources in groups."
  },
  {
    id: 5,
    topic: "Describe Azure Architecture and Services",
    question: "Your enterprise requires a dedicated, private connection to Azure that does not travel over the public internet. Which service should you implement?",
    options: [
      "Azure VPN Gateway",
      "Azure ExpressRoute",
      "Azure Front Door",
      "Azure Traffic Manager"
    ],
    correctAnswer: 1,
    explanation: "Azure ExpressRoute provides a private, dedicated connection to Azure datacenters, bypassing the public internet for higher security and reliability."
  }
];