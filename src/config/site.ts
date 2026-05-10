export const site = {
  name: "Factus Consulting",
  shortName: "Factus",
  domain: "factus.dk",
  url: "https://factus.dk",
  tagline: "DevOps, Platform Engineering og AI for danske virksomheder",
  description:
    "Selvstændig konsulent med 15+ års erfaring i at bygge, automatisere og drive software-platforme — fra Kubernetes og GitOps til AI-infrastruktur. Hjælper teams og organisationer med at få teknologien til at flugte med forretningen.",
  owner: {
    name: "Lars Wolfgang Andersen",
    role: "DevOps · Platform · Kubernetes engineer",
    email: "lars@factus.dk",
    phone: "+45 20 46 80 20",
    linkedin: "https://www.linkedin.com/in/larswa/",
    location: "Herlev, Danmark",
  },
  company: {
    legalName: "Factus Consulting ApS",
    address: "Rørløkken 62, 2730 Herlev",
    cvr: "36900725",
  },
  related: {
    aiOps: "https://ai-ops.dk",
  },
  nav: [
    { label: "Ydelser", href: "/#ydelser" },
    { label: "Erfaring", href: "/erfaring" },
    { label: "Om mig", href: "/#om-mig" },
    { label: "AI-ydelser ↗", href: "https://ai-ops.dk", external: true },
    { label: "Kontakt", href: "/#kontakt" },
  ],
} as const;
