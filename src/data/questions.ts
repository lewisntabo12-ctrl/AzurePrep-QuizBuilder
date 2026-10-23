import type { Question } from '@/types';

export const questions: Question[] = [
  // ─── Cloud Concepts — Beginner ───
  {
    id: 'cc-b-001',
    category: 'cloud-concepts',
    topic: 'Benefits of Cloud Computing',
    difficulty: 'beginner',
    questionText:
      'Which characteristic of cloud computing allows you to scale resources up or down automatically based on demand?',
    options: [
      { id: 'a', text: 'Elasticity' },
      { id: 'b', text: 'Agility' },
      { id: 'c', text: 'Reliability' },
      { id: 'd', text: 'Predictability' },
    ],
    correctOptionId: 'a',
    explanation:
      'Elasticity is the ability of a cloud service to automatically add or remove resources (scale out or in) in response to changing demand. Agility refers to the speed of deploying new resources, not the scaling behaviour itself.',
    sourceReference: 'AZ-900 Skills Outline: Describe cloud concepts — benefits of cloud computing',
  },
  {
    id: 'cc-b-002',
    category: 'cloud-concepts',
    topic: 'Cloud Service Types',
    difficulty: 'beginner',
    questionText:
      'In the SaaS (Software as a Service) model, which of the following is managed by the cloud provider rather than the customer?',
    options: [
      { id: 'a', text: 'User accounts and data uploaded by users' },
      { id: 'b', text: 'Application source code and settings' },
      { id: 'c', text: 'Operating system patches and network infrastructure' },
      { id: 'd', text: 'All of the above except user account configuration' },
    ],
    correctOptionId: 'd',
    explanation:
      'In SaaS, the provider manages the application, middleware, OS, virtualization, servers, storage, and networking. The customer is responsible for their data, user accounts, and some configuration. Option D captures that the provider manages everything except user-level configuration and data.',
    sourceReference: 'AZ-900 Skills Outline: Describe types of cloud service — SaaS',
  },
  {
    id: 'cc-b-003',
    category: 'cloud-concepts',
    topic: 'Cloud Deployment Models',
    difficulty: 'beginner',
    questionText:
      'An organization wants to keep its existing on-premises data centre but also use some Azure public cloud services with minimal management overhead. Which deployment model best fits this scenario?',
    options: [
      { id: 'a', text: 'Public cloud' },
      { id: 'b', text: 'Private cloud' },
      { id: 'c', text: 'Hybrid cloud' },
      { id: 'd', text: 'Multi-cloud' },
    ],
    correctOptionId: 'c',
    explanation:
      'A hybrid cloud combines a public cloud (Azure) with an on-premises/private cloud, letting the organization use both while keeping existing investments. Multi-cloud refers to using multiple public cloud providers.',
    sourceReference: 'AZ-900 Skills Outline: Describe cloud deployment models',
  },
  {
    id: 'cc-b-004',
    category: 'cloud-concepts',
    topic: 'Benefits of Cloud Computing',
    difficulty: 'beginner',
    questionText:
      'Which term describes the ability to provision new compute resources within minutes instead of waiting weeks for hardware procurement?',
    options: [
      { id: 'a', text: 'Scalability' },
      { id: 'b', text: 'Agility' },
      { id: 'c', text: 'Fault tolerance' },
      { id: 'd', text: 'Disaster recovery' },
    ],
    correctOptionId: 'b',
    explanation:
      'Agility is the ability to rapidly provision and deprovision resources, enabling faster development and testing cycles. Scalability refers to increasing capacity, but agility specifically emphasises the speed of that process.',
    sourceReference: 'AZ-900 Skills Outline: Describe cloud concepts — benefits of cloud computing',
  },

  // ─── Cloud Concepts — Intermediate ───
  {
    id: 'cc-i-001',
    category: 'cloud-concepts',
    topic: 'Cloud Service Types',
    difficulty: 'intermediate',
    questionText:
      'Your team wants to deploy a custom web application without managing the underlying operating system or web server. Which cloud service type is most appropriate?',
    options: [
      { id: 'a', text: 'IaaS (Infrastructure as a Service)' },
      { id: 'b', text: 'PaaS (Platform as a Service)' },
      { id: 'c', text: 'SaaS (Software as a Service)' },
      { id: 'd', text: 'On-premises deployment' },
    ],
    correctOptionId: 'b',
    explanation:
      'PaaS provides a managed platform where the provider handles the OS, middleware, and runtime. You focus on your application code. IaaS would require you to manage the OS and web server, while SaaS gives you a ready-made application you cannot customise at the code level.',
    sourceReference: 'AZ-900 Skills Outline: Describe types of cloud service — PaaS',
  },
  {
    id: 'cc-i-002',
    category: 'cloud-concepts',
    topic: 'Benefits of Cloud Computing',
    difficulty: 'intermediate',
    questionText:
      'Which statement best describes the "consumption-based" pricing model in cloud computing?',
    options: [
      { id: 'a', text: 'You pay a fixed monthly fee regardless of usage' },
      { id: 'b', text: 'You pay only for the resources you use, and can stop paying when you stop using them' },
      { id: 'c', text: 'You pay upfront for a year of capacity in advance' },
      { id: 'd', text: 'You pay based on the number of users in your organization' },
    ],
    correctOptionId: 'b',
    explanation:
      'Consumption-based pricing means you are charged only for what you use. If you stop a virtual machine, you stop paying for compute (though associated storage may still incur charges). This is a core benefit over traditional CapEx hardware purchasing.',
    sourceReference: 'AZ-900 Skills Outline: Describe cloud concepts — consumption-based model',
  },
  {
    id: 'cc-i-003',
    category: 'cloud-concepts',
    topic: 'Cloud Service Types',
    difficulty: 'intermediate',
    questionText:
      'Which of the following is a shared responsibility that the customer manages in both IaaS and PaaS models?',
    options: [
      { id: 'a', text: 'Physical server hardware' },
      { id: 'b', text: 'Data and access management' },
      { id: 'c', text: 'Network infrastructure' },
      { id: 'd', text: 'Operating system updates' },
    ],
    correctOptionId: 'b',
    explanation:
      'Regardless of the service model, the customer is always responsible for their own data and access management (identity, permissions). In IaaS the customer also manages the OS, but in PaaS the provider handles the OS, so only data and access remain consistently the customer\u2019s responsibility.',
    sourceReference: 'AZ-900 Skills Outline: Describe shared responsibility model',
  },

  // ─── Cloud Concepts — Advanced ───
  {
    id: 'cc-a-001',
    category: 'cloud-concepts',
    topic: 'Cloud Deployment Models',
    difficulty: 'advanced',
    questionText:
      'A company uses Azure for its public-facing website but keeps its sensitive customer database on its own on-premises servers connected via a secure VPN. After a compliance audit, the auditor classifies this setup as which deployment model?',
    options: [
      { id: 'a', text: 'Public cloud with a private subnet' },
      { id: 'b', text: 'Hybrid cloud' },
      { id: 'c', text: 'Private cloud with public access' },
      { id: 'd', text: 'Multi-cloud architecture' },
    ],
    correctOptionId: 'b',
    explanation:
      'This is a classic hybrid cloud: public cloud services (Azure website) integrated with on-premises private infrastructure (the database server) via a secure connection. The key differentiator is the integration and data flow between the two environments.',
    sourceReference: 'AZ-900 Skills Outline: Describe cloud deployment models — hybrid',
  },
  {
    id: 'cc-a-002',
    category: 'cloud-concepts',
    topic: 'Benefits of Cloud Computing',
    difficulty: 'advanced',
    questionText:
      'An organization experiences unpredictable traffic spikes and wants to avoid overprovisioning hardware that sits idle most of the time. Which combination of cloud benefits directly addresses this requirement?',
    options: [
      { id: 'a', text: 'Reliability and security' },
      { id: 'b', text: 'Elasticity and the consumption-based model' },
      { id: 'c', text: 'Agility and global reach' },
      { id: 'd', text: 'Fault tolerance and disaster recovery' },
    ],
    correctOptionId: 'b',
    explanation:
      'Elasticity allows resources to scale automatically with demand, while the consumption-based model ensures you only pay for what you use. Together, they eliminate the need for idle overprovisioned hardware. Agility helps with speed but not directly with cost optimisation for spikes.',
    sourceReference: 'AZ-900 Skills Outline: Describe cloud concepts — elasticity & consumption model',
  },

  // ─── Azure Architecture and Services — Beginner ───
  {
    id: 'as-b-001',
    category: 'azure-architecture-and-services',
    topic: 'Core Architectural Components',
    difficulty: 'beginner',
    questionText:
      'What is the purpose of an Azure resource group?',
    options: [
      { id: 'a', text: 'To provide a single compute resource for applications' },
      { id: 'b', text: 'To hold related resources that share a common lifecycle and permissions' },
      { id: 'c', text: 'To define geographic boundaries for data residency' },
      { id: 'd', text: 'To serve as a billing dashboard for an organization' },
    ],
    correctOptionId: 'b',
    explanation:
      'A resource group is a logical container that holds related Azure resources. Resources in the same group share a lifecycle (they are created, updated, and deleted together) and can be managed under a common set of permissions via role-based access control.',
    sourceReference: 'AZ-900 Skills Outline: Describe Azure architecture and services — resource groups',
  },
  {
    id: 'as-b-002',
    category: 'azure-architecture-and-services',
    topic: 'Compute Services',
    difficulty: 'beginner',
    questionText:
      'Which Azure service provides fully managed virtual machines where the cloud provider handles hardware, host OS, and patching of the underlying infrastructure?',
    options: [
      { id: 'a', text: 'Azure Functions' },
      { id: 'b', text: 'Azure Virtual Machines' },
      { id: 'c', text: 'Azure App Service' },
      { id: 'd', text: 'Azure Kubernetes Service (AKS)' },
    ],
    correctOptionId: 'b',
    explanation:
      'Azure Virtual Machines are IaaS compute resources. The provider manages the physical hardware, host OS, and virtualization layer, but you (the customer) manage the guest OS, applications, and data. App Service and Functions are PaaS; AKS is a managed Kubernetes container orchestration service.',
    sourceReference: 'AZ-900 Skills Outline: Describe Azure compute services — VMs',
  },
  {
    id: 'as-b-003',
    category: 'azure-architecture-and-services',
    topic: 'Networking',
    difficulty: 'beginner',
    questionText:
      'What is an Azure Virtual Network (VNet)?',
    options: [
      { id: 'a', text: 'A DNS resolution service for Azure' },
      { id: 'b', text: 'A logical isolation of cloud resources within a private address space' },
      { id: 'c', text: 'A content delivery network for faster web delivery' },
      { id: 'd', text: 'A load balancer for distributing web traffic' },
    ],
    correctOptionId: 'b',
    explanation:
      'An Azure VNet is your own private address space within the Azure cloud. It provides isolation, segmentation, and connectivity for your Azure resources. You define IP ranges, subnets, and routing rules within a VNet.',
    sourceReference: 'AZ-900 Skills Outline: Describe Azure networking — VNet',
  },
  {
    id: 'as-b-004',
    category: 'azure-architecture-and-services',
    topic: 'Storage Services',
    difficulty: 'beginner',
    questionText:
      'Which Azure Storage service is best suited for storing unstructured data such as images, videos, and documents accessible via HTTP/HTTPS?',
    options: [
      { id: 'a', text: 'Azure Table Storage' },
      { id: 'b', text: 'Azure Queue Storage' },
      { id: 'c', text: 'Azure Blob Storage' },
      { id: 'd', text: 'Azure Disk Storage' },
    ],
    correctOptionId: 'c',
    explanation:
      'Azure Blob (Binary Large Object) Storage is designed for unstructured data like images, videos, documents, and backups. Table Storage is for structured NoSQL data, Queue Storage is for messaging, and Disk Storage provides managed disks for VMs.',
    sourceReference: 'AZ-900 Skills Outline: Describe Azure storage — Blob Storage',
  },

  // ─── Azure Architecture and Services — Intermediate ───
  {
    id: 'as-i-001',
    category: 'azure-architecture-and-services',
    topic: 'Core Architectural Components',
    difficulty: 'intermediate',
    questionText:
      'How do Azure Availability Zones differ from Availability Sets?',
    options: [
      { id: 'a', text: 'Availability Zones protect against rack failures; Availability Sets protect against data centre failures' },
      { id: 'b', text: 'Availability Zones are within a single data centre; Availability Sets span multiple regions' },
      { id: 'c', text: 'Availability Zones are physically separate data centres within one region; Availability Sets protect against failures within a single data centre' },
      { id: 'd', text: 'They are functionally identical and interchangeable' },
    ],
    correctOptionId: 'c',
    explanation:
      'Availability Zones are distinct physical locations within a single Azure region, each with independent power, cooling, and networking — they protect against data centre failures. Availability Sets place VMs across different fault domains (racks) and update domains within a single data centre — they protect against rack and hardware failures.',
    sourceReference: 'AZ-900 Skills Outline: Describe Azure architecture — availability zones & sets',
  },
  {
    id: 'as-i-002',
    category: 'azure-architecture-and-services',
    topic: 'Identity Services',
    difficulty: 'intermediate',
    questionText:
      'What is the primary difference between Azure Active Directory (now Microsoft Entra ID) and on-premises Active Directory Domain Services (AD DS)?',
    options: [
      { id: 'a', text: 'Azure AD uses LDAP; AD DS uses REST APIs' },
      { id: 'b', text: 'Azure AD is identity-based (HTTP/HTTPS protocols); AD DS is primarily a directory service using Kerberos/LDAP' },
      { id: 'c', text: 'Azure AD can only be used with Azure services; AD DS can only be used on-premises' },
      { id: 'd', text: 'Azure AD requires Group Policy Objects; AD DS does not' },
    ],
    correctOptionId: 'b',
    explanation:
      'Microsoft Entra ID (formerly Azure AD) is an identity and access management service designed for the cloud using HTTP/HTTPS protocols (SAML, OAuth, OpenID Connect). On-premises AD DS is a full directory service using Kerberos and LDAP and supports Group Policy. They serve different but complementary purposes and can be synced together.',
    sourceReference: 'AZ-900 Skills Outline: Describe Azure identity — Microsoft Entra ID',
  },
  {
    id: 'as-i-003',
    category: 'azure-architecture-and-services',
    topic: 'Compute Services',
    difficulty: 'intermediate',
    questionText:
      'Which Azure compute service is best suited for running event-driven, short-lived code without provisioning or managing any infrastructure?',
    options: [
      { id: 'a', text: 'Azure Virtual Machines' },
      { id: 'b', text: 'Azure App Service' },
      { id: 'c', text: 'Azure Functions' },
      { id: 'd', text: 'Azure Container Instances' },
    ],
    correctOptionId: 'c',
    explanation:
      'Azure Functions is a serverless compute service that runs event-driven code on demand. You write the function and Azure handles the infrastructure, scaling, and billing per execution. VMs and App Service require you to provision capacity, and Container Instances require you to manage the container image.',
    sourceReference: 'AZ-900 Skills Outline: Describe Azure compute — serverless / Azure Functions',
  },
  {
    id: 'as-i-004',
    category: 'azure-architecture-and-services',
    topic: 'Storage Services',
    difficulty: 'intermediate',
    questionText:
      'You need to store frequently accessed documents and also archive old backups that are rarely accessed but must be retained for compliance. Which Azure Storage feature lets you manage both cost-effectively within a single account?',
    options: [
      { id: 'a', text: 'Azure Storage Explorer' },
      { id: 'b', text: 'Blob Storage access tiers (Hot, Cool, Archive)' },
      { id: 'c', text: 'Azure Backup vault' },
      { id: 'd', text: 'Azure Files shares' },
    ],
    correctOptionId: 'b',
    explanation:
      'Blob Storage access tiers let you balance storage cost and retrieval time. Hot tier is for frequent access, Cool tier is for infrequent access (lower storage cost, higher retrieval cost), and Archive tier is for rarely accessed data at the lowest cost. You can move blobs between tiers as access patterns change.',
    sourceReference: 'AZ-900 Skills Outline: Describe Azure storage — access tiers',
  },

  // ─── Azure Architecture and Services — Advanced ───
  {
    id: 'as-a-001',
    category: 'azure-architecture-and-services',
    topic: 'Core Architectural Components',
    difficulty: 'advanced',
    questionText:
      'A multinational company needs to deploy an application in Azure that must meet data residency requirements in the European Union, while also ensuring high availability across geographies. Which combination of Azure concepts should the architect use?',
    options: [
      { id: 'a', text: 'A single region in the EU with Availability Sets' },
      { id: 'b', text: 'A region pair in the EU with geo-redundant storage and Azure Traffic Manager' },
      { id: 'c', text: 'Multiple regions across the globe with Azure Front Door' },
      { id: 'd', text: 'A single Availability Zone in an EU region' },
    ],
    correctOptionId: 'b',
    explanation:
      'An Azure region pair within the EU satisfies data residency requirements while providing geo-redundancy. Geo-redundant storage (GRS) replicates to the paired region. Azure Traffic Manager can distribute traffic across both regions for high availability. Using regions outside the EU would violate the residency requirement.',
    sourceReference: 'AZ-900 Skills Outline: Describe Azure architecture — region pairs & data residency',
  },
  {
    id: 'as-a-002',
    category: 'azure-architecture-and-services',
    topic: 'Networking',
    difficulty: 'advanced',
    questionText:
      'Your company has a VNet with subnets for a web tier and a database tier. You want to allow the web tier to reach the database tier on port 1433, but block all other traffic between them and all inbound traffic from the internet to the database subnet. What should you configure?',
    options: [
      { id: 'a', text: 'Azure Firewall rules only' },
      { id: 'b', text: 'Network Security Groups (NSGs) with inbound and outbound rules on each subnet' },
      { id: 'c', text: 'Azure DDoS Protection on the VNet' },
      { id: 'd', text: 'Azure Application Gateway with WAF' },
    ],
    correctOptionId: 'b',
    explanation:
      'Network Security Groups (NSGs) are the primary tool for filtering network traffic to and from Azure resources. By attaching NSGs to the web and database subnets, you can create rules that allow only port 1433 from the web subnet to the database subnet and deny all other inbound traffic. NSGs operate at layers 3 and 4.',
    sourceReference: 'AZ-900 Skills Outline: Describe Azure networking — NSGs',
  },

  // ─── Azure Management and Governance — Beginner ───
  {
    id: 'mg-b-001',
    category: 'azure-management-and-governance',
    topic: 'Cost Management',
    difficulty: 'beginner',
    questionText:
      'Which Azure tool helps you estimate the monthly cost of running a set of Azure resources before you deploy them?',
    options: [
      { id: 'a', text: 'Azure Cost Management' },
      { id: 'b', text: 'Azure Pricing Calculator' },
      { id: 'c', text: 'Azure Advisor' },
      { id: 'd', text: 'Azure Blueprints' },
    ],
    correctOptionId: 'b',
    explanation:
      'The Azure Pricing Calculator lets you select and configure Azure resources and see an estimated monthly cost before deployment. Azure Cost Management is used after deployment to monitor and analyse actual spending. Azure Advisor provides best-practice recommendations, and Blueprints is for environment provisioning.',
    sourceReference: 'AZ-900 Skills Outline: Describe cost management — pricing calculator',
  },
  {
    id: 'mg-b-002',
    category: 'azure-management-and-governance',
    topic: 'Monitoring',
    difficulty: 'beginner',
    questionText:
      'What is the primary purpose of Azure Monitor?',
    options: [
      { id: 'a', text: 'To manage user identities and access' },
      { id: 'b', text: 'To collect and analyse telemetry from Azure resources and applications' },
      { id: 'c', text: 'To enforce compliance policies on resources' },
      { id: 'd', text: 'To schedule automated backups' },
    ],
    correctOptionId: 'b',
    explanation:
      'Azure Monitor is a platform for collecting, analysing, and acting on telemetry from Azure resources, applications, and guests. It provides metrics, logs, alerts, and dashboards. Identity is handled by Microsoft Entra ID, compliance by Azure Policy, and backups by Azure Backup.',
    sourceReference: 'AZ-900 Skills Outline: Describe monitoring — Azure Monitor',
  },
  {
    id: 'mg-b-003',
    category: 'azure-management-and-governance',
    topic: 'Governance',
    difficulty: 'beginner',
    questionText:
      'Which Azure service enables you to enforce organisational standards and assess compliance at scale across your Azure resources?',
    options: [
      { id: 'a', text: 'Azure Policy' },
      { id: 'b', text: 'Azure Resource Manager (ARM) templates' },
      { id: 'c', text: 'Azure DevOps' },
      { id: 'd', text: 'Azure Service Health' },
    ],
    correctOptionId: 'a',
    explanation:
      'Azure Policy evaluates resources against defined policy rules (e.g., "all resources must be in allowed regions" or "storage accounts must use HTTPS"). Non-compliant resources are flagged or blocked. ARM templates are for provisioning, DevOps is for CI/CD pipelines, and Service Health provides status notifications.',
    sourceReference: 'AZ-900 Skills Outline: Describe governance — Azure Policy',
  },
  {
    id: 'mg-b-004',
    category: 'azure-management-and-governance',
    topic: 'Cost Management',
    difficulty: 'beginner',
    questionText:
      'What is the difference between CapEx (Capital Expenditure) and OpEx (Operational Expenditure) in the context of cloud computing?',
    options: [
      { id: 'a', text: 'CapEx is for software; OpEx is for hardware' },
      { id: 'b', text: 'CapEx is upfront spending on physical assets; OpEx is ongoing spending on services as they are used' },
      { id: 'c', text: 'CapEx is for cloud services; OpEx is for on-premises hardware' },
      { id: 'd', text: 'CapEx and OpEx are the same in cloud computing' },
    ],
    correctOptionId: 'b',
    explanation:
      'CapEx refers to upfront spending on physical infrastructure (servers, networking equipment) that depreciates over time. OpEx refers to ongoing operational costs — like cloud service usage — that you pay as you go. Cloud computing shifts spending from CapEx to OpEx, which offers more flexibility and better cash flow management.',
    sourceReference: 'AZ-900 Skills Outline: Describe cost management — CapEx vs OpEx',
  },

  // ─── Azure Management and Governance — Intermediate ───
  {
    id: 'mg-i-001',
    category: 'azure-management-and-governance',
    topic: 'Governance',
    difficulty: 'intermediate',
    questionText:
      'Your company wants to ensure that no Azure resources are created outside of the "West Europe" and "North Europe" regions. Which Azure governance feature should you use?',
    options: [
      { id: 'a', text: 'Azure Blueprints with an allowed-locations policy assignment' },
      { id: 'b', text: 'Azure RBAC role assignments' },
      { id: 'c', text: 'Azure Resource Manager locks' },
      { id: 'd', text: 'Azure Service Health alerts' },
    ],
    correctOptionId: 'a',
    explanation:
      'Azure Policy has a built-in "allowed locations" policy definition. You can assign it at a management group or subscription level to restrict resource creation to specified regions. Azure Blueprints packages this policy (along with ARM templates and RBAC) into a repeatable compliance package. RBAC controls who can act, not where; locks prevent deletion; Service Health provides status alerts.',
    sourceReference: 'AZ-900 Skills Outline: Describe governance — Azure Policy & Blueprints',
  },
  {
    id: 'mg-i-002',
    category: 'azure-management-and-governance',
    topic: 'Monitoring',
    difficulty: 'intermediate',
    questionText:
      'What is the difference between Azure Monitor Logs and Azure Monitor Metrics?',
    options: [
      { id: 'a', text: 'Logs are for real-time dashboards; Metrics are for long-term storage' },
      { id: 'b', text: 'Metrics are numerical values collected at regular intervals; Logs contain varied data types and are queried using Kusto Query Language (KQL)' },
      { id: 'c', text: 'Metrics require Log Analytics workspace; Logs do not' },
      { id: 'd', text: 'There is no difference; they are two names for the same feature' },
    ],
    correctOptionId: 'b',
    explanation:
      'Azure Monitor Metrics are lightweight numerical data (e.g., CPU percentage, memory usage) collected at regular intervals and stored for 93 days by default, suitable for near-real-time alerting and dashboards. Azure Monitor Logs are richer, varied data (events, traces, custom logs) stored in a Log Analytics workspace and queried using KQL, suitable for deep analysis and troubleshooting.',
    sourceReference: 'AZ-900 Skills Outline: Describe monitoring — Azure Monitor logs & metrics',
  },
  {
    id: 'mg-i-003',
    category: 'azure-management-and-governance',
    topic: 'Cost Management',
    difficulty: 'intermediate',
    questionText:
      'A department manager needs to be notified when the team\u2019s monthly Azure spending reaches 80% of their allocated budget. Which Azure feature should you configure?',
    options: [
      { id: 'a', text: 'Azure Spending Limit (a hard cap on subscription spending)' },
      { id: 'b', text: 'Azure Budgets with an alert threshold at 80%' },
      { id: 'c', text: 'Azure Advisor cost recommendations' },
      { id: 'd', text: 'Azure Reservations for VMs' },
    ],
    correctOptionId: 'b',
    explanation:
      'Azure Budgets lets you set a spending target for a subscription or resource group and configure alert thresholds (e.g., 80%, 90%, 100%). When spending crosses a threshold, notifications are sent. Spending Limit is a hard cap that suspends the subscription, not a notification. Advisor gives recommendations; Reservations are for cost savings through commitments.',
    sourceReference: 'AZ-900 Skills Outline: Describe cost management — Azure Budgets',
  },

  // ─── Azure Management and Governance — Advanced ───
  {
    id: 'mg-a-001',
    category: 'azure-management-and-governance',
    topic: 'Governance',
    difficulty: 'advanced',
    questionText:
      'A company has multiple subscriptions and wants to apply a set of governance rules consistently across all of them, including tagging requirements, allowed regions, and RBAC role assignments. What is the most efficient approach?',
    options: [
      { id: 'a', text: 'Manually configure each subscription\u2019s settings individually' },
      { id: 'b', text: 'Create a Management Group hierarchy and assign policies and RBAC at the management group level' },
      { id: 'c', text: 'Use Azure DevOps pipelines to script each subscription' },
      { id: 'd', text: 'Create a custom Azure Policy for each subscription' },
    ],
    correctOptionId: 'b',
    explanation:
      'Management Groups provide a hierarchical structure above subscriptions. Policies and RBAC assigned at the management group level are inherited by all child subscriptions, ensuring consistent governance without repetitive per-subscription configuration. This is the recommended approach for enterprise-scale governance in Azure.',
    sourceReference: 'AZ-900 Skills Outline: Describe governance — management groups',
  },
  {
    id: 'mg-a-002',
    category: 'azure-management-and-governance',
    topic: 'Compliance',
    difficulty: 'advanced',
    questionText:
      'Your organization needs to demonstrate compliance with ISO 27001 for its Azure-hosted workloads. Which Azure service provides official third-party audit reports and compliance documentation for Azure services?',
    options: [
      { id: 'a', text: 'Azure Compliance Dashboard in the Azure portal' },
      { id: 'b', text: 'Microsoft Purview Compliance Portal' },
      { id: 'c', text: 'Microsoft Service Trust Portal' },
      { id: 'd', text: 'Azure Security Center' },
    ],
    correctOptionId: 'c',
    explanation:
      'The Microsoft Service Trust Portal provides access to compliance documentation, audit reports (including ISO 27001, SOC, GDPR), and other trust materials for Azure and other Microsoft cloud services. Microsoft Purview handles data governance and classification. Azure Security Center (now Microsoft Defender for Cloud) provides security posture management but not official audit reports.',
    sourceReference: 'AZ-900 Skills Outline: Describe compliance — Service Trust Portal',
  },
];
