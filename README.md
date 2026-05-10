# factus.dk

Marketing-site for Factus Consulting Aps. Søsterprojekt til [ai-ops.dk](https://github.com/FactusConsulting/ai-ops-dk). Bygget med [Astro](https://astro.build) + [Tailwind CSS v4](https://tailwindcss.com), hostet statisk på Cloudflare Pages.

## Kom i gang lokalt

```sh
npm install
npm run dev   # starter dev-server på http://localhost:4321
```

| Kommando | Handling |
| :-- | :-- |
| `npm run dev` | Lokal dev-server med hot reload |
| `npm run build` | Producer statisk site i `./dist/` |
| `npm run preview` | Preview af produktions-build lokalt |

## Hvor du redigerer hvad

| Vil du rette… | Find filen her |
| :-- | :-- |
| Navn, email, telefon, LinkedIn, navigation, firma | `src/config/site.ts` |
| Hero-tekst (forsidens topafsnit) | `src/components/Hero.astro` |
| Ydelses-kort (de 6 services) | `src/components/Services.astro` |
| "Om mig" tekst og facts | `src/components/About.astro` |
| Erfaringsliste (kunder + opgaver) | `src/data/experience.ts` |
| Kontakt-sektion | `src/components/Contact.astro` |
| Header og navigation | `src/components/Header.astro` |
| Footer | `src/components/Footer.astro` |
| Globale farver, fonts, knap-stil | `src/styles/global.css` |
| Logo / favicon | `public/favicon.svg` |

### Tilføj et nyt engagement til erfaringslisten

Åbn `src/data/experience.ts` og tilføj et nyt objekt øverst i `engagements`-arrayet:

```ts
{
  period: "Maj 2026 – nu",
  client: "Kundens navn",
  summary: "Én kort linje om hvad opgaven handlede om.",
  tags: ["Teknologi", "Anden ting"],
},
```

Forsiden viser de 5 nyeste, og `/erfaring` viser hele listen.

### Skift profil-billede

Lige nu vises et placeholder-monogram (LWA) i `src/components/About.astro`. Læg dit billede i `public/profil.jpg` og udskift `<div>`-blokken med:

```astro
<img src="/profil.jpg" alt={site.owner.name} class="w-full h-full object-cover" />
```

## Deploy til Cloudflare Pages

Domænet `factus.dk` er allerede registreret hos Cloudflare. Gør følgende én gang for at koble repo til Pages:

1. På [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Vælg `FactusConsulting/factus-dk` og opsæt build-indstillinger:
   - **Framework preset:** `Astro`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Environment variable:** `NODE_VERSION=22`
3. Klik **Save and Deploy**.
4. Når det første deploy er kørt: **Custom domains** → **Set up a custom domain** → `factus.dk` (og `www.factus.dk`). Cloudflare opsætter DNS automatisk.

Hver gang du pusher til `main`, deployer Cloudflare automatisk. Pull requests får et preview-URL.

## Forhold til ai-ops.dk

Dette site dækker den brede konsulent-praksis (DevOps, Kubernetes, Platform). AI-specifikke ydelser er på [ai-ops.dk](https://ai-ops.dk). De to sites linker til hinanden — content er bevidst delt op så hver målgruppe får det relevante uden støj.
