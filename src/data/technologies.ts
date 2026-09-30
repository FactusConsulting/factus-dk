import { engagements, type Engagement } from "./experience";

// Teknologier der får deres egen side under /erfaring/<slug>.
//
// Listen er bevidst kurateret: kun det jeg arbejder med i dag inden for
// DevOps, platform engineering og infrastruktur. Ældre integrations-teknologi
// (BizTalk m.fl.) står stadig i erfaringslisten, men får ikke egne sider.
//
// `tags` matcher mod `tags` i experience.ts. Det første tag er det "primære":
// et tag med det navn på et engagement linker til denne side.
export type Technology = {
  slug: string;
  name: string;
  category: "Platform" | "GitOps & CI/CD" | "Infrastruktur som kode" | "Sikkerhed";
  tags: string[];
  summary: string;
  body: string[];
};

export const technologies: Technology[] = [
  {
    slug: "kubernetes",
    name: "Kubernetes",
    category: "Platform",
    tags: ["Kubernetes", "RKE2", "AKS"],
    summary:
      "Design, opbygning og drift af Kubernetes-platforme — on-prem, i cloud og i airgapped miljøer.",
    body: [
      "Kubernetes er fundamentet i de fleste af de platforme jeg bygger i dag. Jeg har designet og implementeret platforme på både Rancher RKE2, Azure Kubernetes Service og vanilla Kubernetes — i cloud, on-prem og i airgapped miljøer.",
      "Fokus er altid dag-2-drift: opgraderinger, certifikater, secrets, adgangsstyring og multi-tenancy — så platformen stadig kan vedligeholdes, når projektet er slut og hverdagen tager over.",
    ],
  },
  {
    slug: "rke2",
    name: "Rancher RKE2",
    category: "Platform",
    tags: ["RKE2"],
    summary:
      "Sikkerhedshærdede Kubernetes-platforme på RKE2 — særligt on-prem, i EU-cloud og i airgapped miljøer.",
    body: [
      "RKE2 er Ranchers sikkerhedsfokuserede Kubernetes-distribution og mit foretrukne valg, når platformen skal køre on-prem, i en EU-cloud eller uden direkte internetadgang. Den er CIS-hærdet som udgangspunkt og velegnet til organisationer med skrappe krav til sikkerhed og compliance.",
      "Jeg har bygget RKE2-platforme fra bunden — automatiseret med Ansible og Terraform og styret via GitOps med FluxCD eller Argo CD — inklusive procedurer for opgradering og patching, som driftsteamet selv kan køre.",
    ],
  },
  {
    slug: "aks",
    name: "Azure Kubernetes Service (AKS)",
    category: "Platform",
    tags: ["AKS"],
    summary:
      "AKS-klynger til udvikling og produktion af SaaS-produkter — integreret med Azure DevOps og Helm.",
    body: [
      "Azure Kubernetes Service er et naturligt valg for organisationer, der i forvejen er bygget på Azure. Jeg har designet og drevet AKS-klynger til både intern udvikling og produktion af SaaS-produkter, herunder multi-tenancy-design og deployment via Azure DevOps og Helm.",
    ],
  },
  {
    slug: "airgapped",
    name: "Airgapped & OT-miljøer",
    category: "Platform",
    tags: ["Airgapped", "OT/IT"],
    summary:
      "Kubernetes i miljøer uden internetadgang og på tværs af OT- og IT-zoner.",
    body: [
      "Ikke alle platforme kan hente images og opdateringer direkte fra internettet. I kritisk infrastruktur og industrielle miljøer skal Kubernetes kunne køre airgapped og respektere adskillelsen mellem OT- og IT-zoner.",
      "Det stiller krav til alt fra container-registries og artefakt-spejling til opgraderingsprocedurer og overvågning. Jeg har designet og implementeret on-prem Kubernetes-platforme til netop den slags miljøer.",
    ],
  },
  {
    slug: "gitops",
    name: "GitOps",
    category: "GitOps & CI/CD",
    tags: ["FluxCD", "Argo CD"],
    summary:
      "Git som eneste sandhed for platform og applikationer — med FluxCD eller Argo CD.",
    body: [
      "Med GitOps ligger al konfiguration af platform og applikationer i Git, og en controller i clusteret sørger for, at virkeligheden matcher. Ændringer bliver pull requests: sporbare, reviewbare og nemme at rulle tilbage.",
      "Jeg har etableret GitOps-flows med både FluxCD og Argo CD, inklusive struktur for repositories, miljøer og promotion mellem test og produktion.",
    ],
  },
  {
    slug: "argo-cd",
    name: "Argo CD",
    category: "GitOps & CI/CD",
    tags: ["Argo CD"],
    summary: "GitOps-baseret deployment til Kubernetes med Argo CD.",
    body: [
      "Argo CD er et af de to udbredte GitOps-værktøjer til Kubernetes, med et stærkt web-UI og god understøttelse af mange clusters og teams. Jeg bruger Argo CD til at styre både platform-komponenter og applikationer — senest som en del af en automatiseret RKE2-platform i EU-cloud.",
    ],
  },
  {
    slug: "fluxcd",
    name: "FluxCD",
    category: "GitOps & CI/CD",
    tags: ["FluxCD"],
    summary: "Letvægts-GitOps til Kubernetes med FluxCD.",
    body: [
      "FluxCD er et letvægts, Kubernetes-nativt GitOps-værktøj, der passer godt til platforme, hvor alt — også platformen selv — skal styres deklarativt fra Git. Jeg har bygget platforme, hvor FluxCD håndterer alt fra infrastruktur-komponenter til applikations-deployments.",
    ],
  },
  {
    slug: "helm",
    name: "Helm",
    category: "GitOps & CI/CD",
    tags: ["Helm"],
    summary: "Pakning og versionering af Kubernetes-applikationer med Helm.",
    body: [
      "Helm er de facto standarden for at pakke og versionere applikationer til Kubernetes. Jeg bruger Helm både til tredjeparts-komponenter i platformen og til at give udviklingsteams genbrugelige charts, så nye services kommer i drift på en ensartet måde.",
    ],
  },
  {
    slug: "azure-devops",
    name: "Azure DevOps",
    category: "GitOps & CI/CD",
    tags: ["Azure DevOps"],
    summary:
      "CI/CD-pipelines i Azure DevOps — nye setups og migrering fra TFS, TeamCity og andre ældre build-servere.",
    body: [
      "Azure DevOps er et af de værktøjer jeg har arbejdet mest med — fra tiden som TFS til i dag. Jeg har både bygget nye pipeline-setups og samlet spredte build- og deploy-processer i én Azure DevOps-organisation.",
      "Fokus er på genbrugelige YAML-skabeloner, sporbarhed fra commit til produktion og en release-strategi der passer til organisationen.",
    ],
  },
  {
    slug: "octopus-deploy",
    name: "Octopus Deploy",
    category: "GitOps & CI/CD",
    tags: ["Octopus"],
    summary:
      "Release- og deployment-automation med Octopus Deploy — inkl. custom tooling til komplekse scenarier.",
    body: [
      "Octopus Deploy er stærk til release-styring og deployment på tværs af mange miljøer og kunder. Jeg har brugt Octopus i flere engagementer — fra best practice-coaching til custom tooling til komplekse deployment-scenarier i store .NET-programmer.",
    ],
  },
  {
    slug: "gitlab",
    name: "GitLab CI/CD",
    category: "GitOps & CI/CD",
    tags: ["GitLab"],
    summary: "CI/CD-pipelines til microservices med GitLab.",
    body: [
      "GitLab samler kode, CI/CD og container-registry i ét værktøj. Jeg har bygget GitLab-pipelines til microservice-arkitekturer som en del af større DevOps-transformationer.",
    ],
  },
  {
    slug: "docker",
    name: "Docker & containere",
    category: "Platform",
    tags: ["Docker"],
    summary: "Containerisering af applikationer som første skridt mod en moderne platform.",
    body: [
      "Containere er byggestenen i enhver moderne platform. Jeg har hjulpet organisationer med at containerisere både nye og eksisterende applikationer — herunder .NET-workloads — og med at få images bygget, scannet og versioneret i pipelines.",
    ],
  },
  {
    slug: "terraform",
    name: "Terraform",
    category: "Infrastruktur som kode",
    tags: ["Terraform"],
    summary: "Infrastruktur som kode med Terraform — så nye miljøer er en pull request.",
    body: [
      "Med Terraform beskrives infrastruktur som kode: netværk, virtuelle maskiner, clusters og cloud-ressourcer versioneres i Git og kan genskabes på ethvert tidspunkt. Jeg bruger Terraform til at bygge platforme, der kan reproduceres og ændres sikkert.",
    ],
  },
  {
    slug: "ansible",
    name: "Ansible",
    category: "Infrastruktur som kode",
    tags: ["Ansible"],
    summary: "Automatiseret konfiguration og patching af Linux- og Windows-servere med Ansible.",
    body: [
      "Ansible er mit foretrukne værktøj til konfiguration af servere og til de opgaver, der ligger under Kubernetes: installation af noder, hærdning og patching. Senest har jeg bygget Ansible-baseret patching af en blandet Windows- og Linux-infrastruktur som en del af en migration til EU-cloud.",
    ],
  },
  {
    slug: "vault",
    name: "HashiCorp Vault",
    category: "Sikkerhed",
    tags: ["Vault"],
    summary: "Centraliseret håndtering af secrets og certifikater med HashiCorp Vault.",
    body: [
      "Secrets i konfigurationsfiler og pipelines er en af de mest almindelige sikkerhedsrisici i en platform. Med HashiCorp Vault samles secrets og certifikater ét sted med adgangsstyring, audit-log og rotation.",
      "Jeg har etableret Vault som central secrets-håndtering integreret med Kubernetes og GitOps-flowet.",
    ],
  },
];

export const technologyCategories = [
  "Platform",
  "GitOps & CI/CD",
  "Infrastruktur som kode",
  "Sikkerhed",
] as const satisfies readonly Technology["category"][];

export function technologyBySlug(slug: string): Technology | undefined {
  return technologies.find((t) => t.slug === slug);
}

// Den side et tag på et engagement skal linke til, hvis der findes en.
export function technologyForTag(tag: string): Technology | undefined {
  return technologies.find((t) => t.tags[0] === tag);
}

export function engagementsWithTags(tags: readonly string[]): Engagement[] {
  return engagements.filter((e) => e.tags?.some((t) => tags.includes(t)));
}
