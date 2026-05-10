export type Engagement = {
  period: string;
  client: string;
  summary: string;
  tags?: string[];
};

export const engagements: Engagement[] = [
  {
    period: "Apr 2025 – nu",
    client: "Styrelsen for Arbejdsmarked og Rekruttering (STAR)",
    summary:
      "Migration af Windows- og Linux-baseret infrastruktur fra SIT/KMD til EU cloud — automatiseret RKE2-platform, Ansible-baseret patching, GitOps med Argo CD.",
    tags: ["Kubernetes", "RKE2", "Ansible", "Terraform", "Argo CD"],
  },
  {
    period: "Jul 2024 – nu",
    client: "Andel",
    summary:
      "Design og implementering af on-prem Kubernetes-platforme i OT- og IT-zoner — med fokus på airgapped-deployment.",
    tags: ["Kubernetes", "OT/IT", "Airgapped", "Mentor"],
  },
  {
    period: "Dec 2023 – mar 2025",
    client: "Nota",
    summary:
      "Ny Kubernetes-platform på Rancher RKE2 + GitOps med FluxCD. Etableret HashiCorp Vault til centraliseret secrets-håndtering.",
    tags: ["RKE2", "FluxCD", "Vault"],
  },
  {
    period: "Jul 2022 – sep 2023",
    client: "Getinge Digital Health Solutions",
    summary:
      "Azure DevOps-pipelines og AKS-klynger til både intern udvikling og production for SaaS-produkter. Multi-tenancy-design.",
    tags: ["Azure DevOps", "AKS", "Helm"],
  },
  {
    period: "Aug 2021 – apr 2022",
    client: "Sunclass Airlines",
    summary:
      "Migration af .NET build- og deploy-pipelines fra ældre TFS/Octopus til en samlet Azure DevOps-organisation.",
    tags: ["Azure DevOps", "Octopus", ".NET"],
  },
  {
    period: "Maj 2020 – jun 2021",
    client: "Nets Group",
    summary:
      "Platform-team for stort .NET-program. Custom Octopus-tooling til komplekse deployment-scenarier samt best practice-coaching i Octopus og Jenkins.",
    tags: ["Octopus", "Jenkins", ".NET"],
  },
  {
    period: "Nov 2019 – apr 2020",
    client: "ALD Automotive (Skandinavien)",
    summary:
      "DevOps på tværs af to udviklingsteams og infrastruktur-team — backend brugt af 30-40.000 brugere. Implementering af nyt CI/CD-setup på Azure DevOps.",
    tags: ["Azure DevOps", "TeamCity", "Octopus"],
  },
  {
    period: "Mar 2019 – nov 2019",
    client: "Tryg",
    summary:
      "DevOps-engineer i SAFe-program. Implementering af manglende tooling, coaching i DevOps-mindset, CI/CD-pipeline til microservices.",
    tags: ["GitLab", "Chef", "Docker", "GOSU"],
  },
  {
    period: "Jul 2016 – feb 2019",
    client: "Jyske Bank / BRFKredit",
    summary:
      "ALM-team og senere DevOps Services-team — coaching og tooling til hele organisationens .NET-udvikling. Drev XAML→Team Builds-transformation.",
    tags: ["TFS", "Octopus", "Docker", "Kubernetes"],
  },
  {
    period: "Mar 2016 – jun 2016",
    client: "William Demant / DGS / Oticon",
    summary:
      "Arkitekt på integrationer mellem CRM/HR og BizTalk — automatisering af Azure-komponent-deployment under Cloud-First-strategi.",
    tags: ["Azure", "BizTalk", "Powershell"],
  },
  {
    period: "Jun 2015 – apr 2016",
    client: "Topdanmark",
    summary:
      "Product Owner og Scrum Master + solution architect. Etablerede testdata-infrastruktur til ny SQL Server-baseret platform sideløbende med eksisterende mainframe.",
    tags: ["Powershell", "SQL Server", "Agile"],
  },
  {
    period: "Mar 2015 – apr 2015",
    client: "Carlsberg",
    summary:
      "BizTalk-arkitekt — udarbejdede guidelines for ny integrationsplatform til Kina-region med fokus på deployment- og operations-krav.",
    tags: ["BizTalk", "Integration"],
  },
  {
    period: "Jan 2015",
    client: "Pandora",
    summary:
      "Integration lead developer på undersøgelse af integrationsbehov for nyt POS-system; ESB-design.",
    tags: ["BizTalk", "ESB"],
  },
  {
    period: "Nov 2013 – aug 2014",
    client: "William Demant / DGS / Oticon",
    summary:
      "Integrationsarkitekt — design og udvikling af integrationer mellem MS Dynamics CRM, Dynamics AX og backend-services. Automatiseret deployment-proces på tværs af miljøer.",
    tags: ["Dynamics CRM", "BizTalk", "SQL Server"],
  },
  {
    period: "Aug 2012 – okt 2013",
    client: "Falck",
    summary:
      "Integrationsarkitekt og udvikler — integrationer mellem nyt callcenter/work-process-system og finansielle backends. Automatisering af deployment-pakker og operations-tooling.",
    tags: ["BizTalk", "Powershell"],
  },
  {
    period: "Okt 2011 – apr 2012",
    client: "Logica (Norge)",
    summary: "BizTalk-baserede integrationer i norsk konsulentregi.",
    tags: ["BizTalk", "Integration"],
  },
  {
    period: "Okt 2010 – okt 2011",
    client: "Codan / Royal Sun Alliance Group",
    summary:
      "Kvalitetssikring af ny BizTalk-platform leveret af tredjepart — Active Directory-grupper, BizTalk-installationer og webserver-farms.",
    tags: ["BizTalk", "Active Directory", "IIS"],
  },
  {
    period: "2009 – apr 2010",
    client: "Banedanmark",
    summary:
      "Design og implementering af BizTalk-integrationsinfrastruktur — best practice for udvikling, deployment og drift.",
    tags: ["BizTalk", "Powershell"],
  },
  {
    period: "2007 – 2008",
    client: "BRFKredit",
    summary:
      "BizTalk-konsulent på flere projekter — arkitekt, udvikler, samt rekruttering og oplæring af nye BizTalk-folk og operations-personale.",
    tags: ["BizTalk", "SOA"],
  },
  {
    period: "2006 – 2007",
    client: "Bisnode DK",
    summary:
      "Lead på implementering af forretningskritisk .NET-applikation — overtagelse fra større international service-leverandør.",
    tags: [".NET", "Implementation"],
  },
];
