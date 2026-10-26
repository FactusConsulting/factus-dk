import { site } from "../config/site";

// Ydelserne vises som kort på forsiden (title, body, bullets) og får hver sin
// side under /ydelser/<slug> med resten af felterne.
export type Service = {
  slug: string;
  icon: keyof typeof serviceIcons;
  title: string;
  body: string;
  bullets: string[];
  cta?: { label: string; href: string; external?: boolean };

  metaDescription: string;
  headline: string;
  intro: string;
  situations: string[];
  approach: { title: string; text: string }[];
  deliverables: string[];
  // Slugs fra technologies.ts
  technologies: string[];
  // Engagementer med mindst ét af disse tags vises som relevant erfaring
  engagementTags: string[];
};

export const serviceIcons = {
  compass: "M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41M15 12l-3 6-3-6 3-3 3 3z",
  stack: "M12 3l9 4-9 4-9-4 9-4zm0 9l9-4M3 7l9 4m0 4l9-4-9 4-9-4 9 4zm0 4l9 4 9-4",
  wrench: "M14.7 6.3a4 4 0 015.66 5.66l-1.41-1.41-2.83 2.83-2.83-2.83 2.83-2.83-1.42-1.42zM3 17l8.5-8.5m6 6L20 17l-3 3-2.5-2.5",
  graduation: "M22 10L12 5 2 10l10 5 10-5zm-4 3v5c-2 1.5-4 2.5-6 2.5s-4-1-6-2.5v-5",
  stethoscope: "M6 3v6a4 4 0 008 0V3M10 3v6m6 0v3a6 6 0 01-12 0M16 12a3 3 0 100 6 3 3 0 000-6z",
  ai: "M12 2L3 7l9 5 9-5-9-5zM3 12l9 5 9-5M3 17l9 5 9-5",
} as const;

export const services: Service[] = [
  {
    slug: "kubernetes",
    icon: "stack",
    title: "Kubernetes platforme",
    body:
      "Design og implementering af Kubernetes-platforme — on-prem, cloud, hybrid eller airgapped. Med fokus på drift, opgradering og sikkerhed dag-1 og 5 år frem.",
    bullets: [
      "RKE2 / vanilla Kubernetes / AKS / EKS",
      "Multi-tenancy, OT/IT-zoner, airgapped",
      "Vault, secrets, certifikat-håndtering",
    ],
    metaDescription:
      "Kubernetes-konsulent: design, opbygning og drift af Kubernetes-platforme på RKE2, AKS og vanilla Kubernetes — on-prem, i cloud og i airgapped miljøer.",
    headline: "Kubernetes-platforme der kan driftes — også om fem år.",
    intro:
      "Det er relativt nemt at få en Kubernetes-cluster op at køre. Det svære er at drive den: opgraderinger, certifikater, secrets, backup, adgangsstyring og et setup som jeres eget team kan forstå og vedligeholde. Jeg designer og bygger platforme med dag-2-drift for øje fra første commit.",
    situations: [
      "I skal flytte workloads fra virtuelle maskiner eller en ældre hosting-aftale til containere og Kubernetes.",
      "Platformen skal køre on-prem, i en EU-cloud, airgapped eller på tværs af OT- og IT-zoner — ikke kun i public cloud.",
      "I har en cluster, men opgraderinger er skræmmende, og viden er samlet hos én person.",
      "Flere teams skal dele platformen, og I mangler en model for multi-tenancy, adgang og ressourcer.",
    ],
    approach: [
      {
        title: "Afklaring",
        text: "Krav til drift, sikkerhed, netværk og compliance kortlægges — herunder hvad jeres eget team realistisk kan vedligeholde.",
      },
      {
        title: "Arkitektur",
        text: "Valg af distribution, netværk, storage, ingress, secrets og GitOps-model — dokumenteret, så beslutningerne kan genbesøges.",
      },
      {
        title: "Opbygning som kode",
        text: "Clusters bygges med Terraform, Ansible og GitOps, så et nyt miljø er en pull request — ikke et projekt.",
      },
      {
        title: "Overdragelse",
        text: "Runbooks, opgraderingsprocedure og hands-on-træning, så jeres team kan tage over.",
      },
    ],
    deliverables: [
      "Produktionsklar platform bygget som kode",
      "GitOps-opsætning til platform-komponenter og applikationer",
      "Dokumenteret procedure for opgradering og patching",
      "Håndtering af secrets og certifikater",
      "Runbooks og overdragelse til drift",
    ],
    technologies: ["kubernetes", "rke2", "aks", "airgapped", "helm", "vault", "terraform", "ansible"],
    engagementTags: ["Kubernetes", "RKE2", "AKS"],
  },
  {
    slug: "devops-ci-cd",
    icon: "wrench",
    title: "DevOps & CI/CD",
    body:
      "Pipelines der gør det trygt og hurtigt at release software — fra commit til produktion. Bygget om eller bygget op fra bunden.",
    bullets: [
      "Azure DevOps, GitHub Actions, GitLab",
      "Octopus Deploy, FluxCD, Argo CD",
      "Versionsstyring og release-strategi",
    ],
    metaDescription:
      "DevOps- og CI/CD-konsulent: nye pipelines og migrering fra TFS, Jenkins og ældre build-servere til Azure DevOps, GitHub Actions og GitLab.",
    headline: "Pipelines der gør release til en ikke-begivenhed.",
    intro:
      "En god pipeline er kedelig: Den bygger, tester og deployer det samme hver gang, og ingen holder vejret, når der releases. Jeg bygger nye CI/CD-setups og rydder op i eksisterende — med fokus på sporbarhed, genbrug og en release-strategi, der passer til organisationen.",
    situations: [
      "Builds og deployments afhænger af manuelle trin eller af én persons viden.",
      "I skal migrere fra TFS, Jenkins eller ældre build-servere til Azure DevOps, GitHub Actions eller GitLab.",
      "Hver applikation har sin egen pipeline, og ingen af dem ligner hinanden.",
      "Deployments til test og produktion tager for lang tid eller fejler uforudsigeligt.",
    ],
    approach: [
      {
        title: "Kortlægning",
        text: "Det nuværende flow fra commit til produktion gennemgås — inkl. godkendelser, miljøer og hvor tiden forsvinder.",
      },
      {
        title: "Standardisering",
        text: "Genbrugelige pipeline-skabeloner og fælles konventioner for versionering, artefakter og miljøer.",
      },
      {
        title: "Migrering i bølger",
        text: "Applikationer flyttes over trinvist, så udvikling og drift ikke går i stå undervejs.",
      },
      {
        title: "Forankring",
        text: "Teamet lærer at vedligeholde og udvide pipelines selv.",
      },
    ],
    deliverables: [
      "Standardiserede, genbrugelige pipeline-skabeloner",
      "Versions- og release-strategi",
      "Automatiseret deployment på tværs af miljøer",
      "Dokumentation og oplæring af teamet",
    ],
    technologies: ["azure-devops", "octopus-deploy", "gitlab", "docker", "gitops", "helm"],
    engagementTags: ["Azure DevOps", "Octopus", "GitLab", "Jenkins", "TeamCity"],
  },
  {
    slug: "platform-engineering",
    icon: "compass",
    title: "Platform engineering",
    body:
      "Self-service-platforme der gør udviklere produktive uden at infrastruktur-teamet drukner i tickets. Tooling, conventions og governance.",
    bullets: [
      "GitOps-flow med FluxCD eller Argo CD",
      "Self-service templates og scaffolding",
      "Cost- og kapacitets-tracking",
    ],
    metaDescription:
      "Platform engineering: interne udviklerplatforme med GitOps, selvbetjening og indbygget governance — så udviklere bliver produktive, og drift ikke drukner i tickets.",
    headline: "En intern platform, som udviklerne faktisk har lyst til at bruge.",
    intro:
      "Platform engineering handler om at gøre den rigtige vej til den nemme vej. I stedet for at hvert team selv opfinder deployment, overvågning og secrets-håndtering, får de en fælles, selvbetjent platform med gode standarder indbygget — og infrastruktur-teamet slipper for at drukne i tickets.",
    situations: [
      "Udviklingsteams venter på infrastruktur-teamet for at få miljøer, adgange eller nye services.",
      "Hvert team har sit eget setup, og det er svært at håndhæve sikkerhed og governance på tværs.",
      "I vil i gang med GitOps, men mangler en model for repositories, miljøer og promotion.",
      "Det er uklart, hvad platformen koster, og hvem der bruger hvad.",
    ],
    approach: [
      {
        title: "Platformen som produkt",
        text: "Vi tager udgangspunkt i udviklernes behov og definerer platformens “gyldne stier” — de veje, der skal være nemmest at gå.",
      },
      {
        title: "GitOps som fundament",
        text: "Al konfiguration ligger i Git og rulles ud med FluxCD eller Argo CD — sporbart, reviewbart og reproducerbart.",
      },
      {
        title: "Selvbetjening",
        text: "Skabeloner og scaffolding, så nye services kommer i drift med logging, overvågning og sikkerhed indbygget fra start.",
      },
      {
        title: "Governance uden friktion",
        text: "Policies, adgangsstyring og synlighed i omkostninger bygges ind i platformen i stedet for i manuelle processer.",
      },
    ],
    deliverables: [
      "GitOps-model for repositories, miljøer og promotion",
      "Selvbetjenings-skabeloner til nye services",
      "Fælles standarder for sikkerhed, logging og overvågning",
      "Synlighed i kapacitet og omkostninger",
    ],
    technologies: ["gitops", "fluxcd", "argo-cd", "kubernetes", "helm", "terraform", "vault"],
    engagementTags: ["FluxCD", "Argo CD", "Vault"],
  },
  {
    slug: "ai-mlops-infrastruktur",
    icon: "ai",
    title: "AI- og MLOps-infrastruktur",
    body:
      "AI-platforme, RAG-løsninger og lokale LLM'er — bygget og drevet med samme DevOps- og platform-discipliner som resten af infrastrukturen.",
    bullets: [
      "GPU-infrastruktur (cloud / Hetzner / on-prem)",
      "Self-hosted LLMs (vLLM, llama.cpp, Ollama)",
      "CI/CD og GitOps for modeller og RAG",
    ],
    cta: { label: "Mere på ai-ops.dk", href: site.related.aiOps, external: true },
    metaDescription:
      "AI- og MLOps-infrastruktur fra et DevOps-perspektiv: GPU-platforme, self-hosted LLM'er og CI/CD for modeller — automatiseret, versioneret og til at drive.",
    headline: "AI-workloads drevet med samme disciplin som resten af platformen.",
    intro:
      "En sprogmodel eller ML-model i produktion er også bare en workload — med GPU'er, store artefakter og særlige krav til sikkerhed og data. Jeg griber AI- og MLOps-infrastruktur an fra et DevOps- og platform-perspektiv: automatiseret, versioneret, overvåget og til at drive.",
    situations: [
      "I vil køre sprogmodeller selv — on-prem, i EU-cloud eller på dedikerede GPU-servere — frem for at sende data til en ekstern tjeneste.",
      "Et AI-proof-of-concept virker, men der er ingen vej til stabil drift.",
      "Modeller, prompts og konfiguration deployes manuelt, uden versionering eller mulighed for rollback.",
      "I skal have styr på GPU-kapacitet, omkostninger og adgang på tværs af teams.",
    ],
    approach: [
      {
        title: "Platform først",
        text: "GPU-noder, model-serving og vector-databaser bygges ind i samme platform og GitOps-model som jeres øvrige workloads.",
      },
      {
        title: "Self-hosted modeller",
        text: "Serving med fx vLLM eller llama.cpp, dimensioneret efter jeres krav til svartider, kapacitet og budget.",
      },
      {
        title: "Pipelines for modeller",
        text: "Modeller, konfiguration og RAG-komponenter versioneres og deployes gennem pipelines — med mulighed for rollback.",
      },
      {
        title: "Drift og governance",
        text: "Overvågning, adgangsstyring og logning, så AI-løsningen lever op til de samme krav som resten af jeres systemer.",
      },
    ],
    deliverables: [
      "GPU-klar platform — i cloud, på dedikerede servere eller on-prem",
      "Self-hosted model-serving",
      "CI/CD og GitOps for modeller og RAG-komponenter",
      "Overvågning af kapacitet, performance og omkostninger",
    ],
    technologies: ["kubernetes", "gitops", "docker", "terraform", "ansible"],
    engagementTags: [],
  },
  {
    slug: "coaching-mentoring",
    icon: "graduation",
    title: "Coaching & mentoring",
    body:
      "Jeres folk skal kunne bære det videre. Workshops, parring og struktureret oplæring i de teknologier og processer vi indfører.",
    bullets: [
      "DevOps-mindset og kulturforandring",
      "Hands-on Kubernetes og GitOps-træning",
      "Mentor for tech leads og team leads",
    ],
    metaDescription:
      "Coaching og mentoring i DevOps, Kubernetes og GitOps: workshops, pair-programming og mentor-forløb, så viden bliver i jeres team.",
    headline: "Et team der kan bære det videre, når jeg går.",
    intro:
      "Ny teknologi og nye processer holder kun, hvis de mennesker, der skal leve med dem, forstår dem. Jeg arbejder tæt sammen med jeres folk — i workshops, pair-programming og løbende sparring — så viden bliver hos jer og ikke hos konsulenten.",
    situations: [
      "I har indført Kubernetes eller GitOps, men kun få på holdet føler sig trygge ved det.",
      "Udvikling og drift arbejder stadig i hver sin silo, og overdragelser skaber friktion.",
      "Nye tech leads eller platform-folk har brug for en erfaren sparringspartner.",
    ],
    approach: [
      {
        title: "Hands-on frem for slides",
        text: "Læringen sker på jeres egen platform og kode — ikke på konstruerede eksempler.",
      },
      {
        title: "Pairing i hverdagen",
        text: "Vi løser rigtige opgaver sammen, så viden overføres, mens arbejdet bliver gjort.",
      },
      {
        title: "Struktureret forløb",
        text: "Workshops og øvelser tilpasset holdets niveau — fra grundbegreber til drift og fejlfinding.",
      },
    ],
    deliverables: [
      "Workshops i Kubernetes, GitOps og CI/CD",
      "Pairing og sparring i det daglige arbejde",
      "Mentor-forløb for tech leads og platform-folk",
      "Runbooks og dokumentation skrevet sammen med teamet",
    ],
    technologies: ["kubernetes", "gitops", "azure-devops", "octopus-deploy"],
    engagementTags: ["Coaching", "Mentor"],
  },
  {
    slug: "platform-review",
    icon: "stethoscope",
    title: "Platform- og DevOps-review",
    body:
      "Eksisterende platform der bremser jer? Jeg laver et struktureret review og giver konkrete anbefalinger — teknisk, organisatorisk og operationelt.",
    bullets: [
      "Arkitektur- og opsætnings-review",
      "Procesgennemgang (release, drift, on-call)",
      "Prioriteret action-plan",
    ],
    metaDescription:
      "Platform- og DevOps-review: uafhængig gennemgang af jeres Kubernetes-platform, pipelines og driftsprocesser med en prioriteret action-plan.",
    headline: "Et klart billede af, hvor platformen bremser — og hvad I gør ved det.",
    intro:
      "Når platformen eller release-processen er blevet en flaskehals, er det sjældent én ting, der er galt. Et struktureret review giver et uafhængigt blik udefra og en prioriteret plan, I kan handle på — teknisk, organisatorisk og operationelt.",
    situations: [
      "Releases er langsomme eller risikable, og ingen er helt sikre på hvorfor.",
      "Platformen er vokset organisk, og I overvejer at bygge om.",
      "Nye sikkerheds- eller compliance-krav kræver et overblik over, hvor I står i dag.",
    ],
    approach: [
      {
        title: "Interviews",
        text: "Samtaler med udviklere, drift og ledelse om, hvor det gør ondt, og hvad der virker.",
      },
      {
        title: "Teknisk gennemgang",
        text: "Clusters, pipelines, infrastruktur som kode, secrets, overvågning og backup gennemgås.",
      },
      {
        title: "Procesgennemgang",
        text: "Release-flow, on-call, incident-håndtering og overdragelser mellem teams.",
      },
      {
        title: "Prioriteret plan",
        text: "Konkrete anbefalinger sorteret efter effekt og indsats — fra quick wins til længere sigt.",
      },
    ],
    deliverables: [
      "Kortlægning af nuværende platform og processer",
      "Oversigt over risici og flaskehalse",
      "Prioriteret action-plan med quick wins og længere sigt",
      "Gennemgang af resultaterne med team og ledelse",
    ],
    technologies: ["kubernetes", "gitops", "azure-devops", "terraform", "vault"],
    engagementTags: [],
  },
];

export function serviceHref(service: Service): string {
  return `/ydelser/${service.slug}`;
}
