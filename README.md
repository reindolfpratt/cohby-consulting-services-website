# Cohby Consulting Services Website

Welcome to the official repository for **Cohby Consulting Services** ([cohbyconsultingservices.com](https://cohbyconsultingservices.com)), an elite digital engineering and cloud consultancy operating across the **UK** and **Canada**.

> [!IMPORTANT]
> **AI AGENT DIRECTIVE - UI OVERHAUL IN PROGRESS**
> This repository is undergoing a comprehensive **front-end UI / UX redesign**. The core business domain, services, routes, and logic are established, but the **look and feel (visual presentation, theme, typography, color harmony, and visitor experience)** must be elevated to a world-class, premium tier.
> 
> When modifying or building on this codebase, refer to the **UI & Look-and-Feel Audit** below to understand the current presentation, its structural friction points, and the design requirements.

> [!CAUTION]
> **PERMANENT DESIGN SYSTEM RULE - THE "OVAL DOT THING" MUST NEVER APPEAR ON THIS WEBSITE AGAIN**
>
> 1. **STRICT, UNCONDITIONAL PROHIBITION ON OVAL PILL BADGES WITH DOTS ("THE OVAL DOT THING")**:
>    - **NEVER** introduce, reintroduce, or generate floating oval / pill / capsule badges with dots (e.g., `● BESPOKE SOFTWARE`, `● ACTIVE`, `● LIVE`, `animate-pulse` dots, glowing green/cyan/pink dots, or status indicators) anywhere on this website - neither over images, over cards, in hero sections, nor in headers.
>    - **This is the single biggest "AI signature" and template cliché in modern web design.** It immediately makes the website look like an automated AI-generated template rather than a high-caliber corporate consultancy.
>    - **Zero tolerance**: If you or any AI agent are tempted to place a pill badge with a dot next to text, **DO NOT DO IT**.
>    - **Alternative**: If category, technical indicator, or context must be stated, write it simply, cleanly, and directly using understated typography (e.g., `// SYSTEMS WE WORK ON`, `// BESPOKE SOFTWARE`, or standard editorial text without oval capsule enclosures or dot graphics).
>
> 2. **NO "4K" JARGON OR FAKE TELEMETRY LABELS**:
>    - Never stamp "4K", "4K Active", "99.99% Mesh", or fake telemetry stats onto images, cards, or user-facing copy. Visual quality is communicated through crisp, high-resolution rendering and clean layout - never through amateur marketing badges.
>
> 3. **MINIMALIST PARTNER & PLATFORM TICKERS**:
>    - Ecosystem and partner tickers must consist exclusively of authentic, transparent vector logos (Salesforce, AWS, Azure, Oracle Cloud, Tableau, HubSpot, Zoho) moving cleanly across the website's deep blue-black background (`#080914`). No card boxes, no borders, no badges.
>
> 4. **RESPECT THE WEBSITE'S BLUE-BLACK PALETTE**:
>    - The base theme color of the website is an atmospheric deep blue-black (`#080914` / `hsl(240 10% 3.5%)`), not flat pitch black. All containers, strips, and overlays must harmonize with this palette.

---

## 1. Business & Brand Overview

- **Organization**: Cohby Consulting Services
- **Locations**: United Kingdom (+44 7424 742415) & Canada (+1 343 883 2087)
- **Primary Email**: `info@cohbyconsultingservices.com`
- **Target Audience**: Enterprise executives, high-growth businesses, educational institutions, and non-profit organizations seeking custom cloud infrastructure, AI automation, and Salesforce architecture.

### Primary Service Lines
1. **Salesforce Consulting & Customization**: Bespoke implementations, NPSP (Nonprofit Success Pack), custom Apex development, Lightning Web Components, workflow automations, and third-party CRM integrations.
2. **Cloud Solutions & Infrastructure**: Cloud migration, scalable cloud architecture (AWS, Azure, GCP), serverless microservices, security compliance, and disaster recovery.
3. **AI Engineering & Automation**: Custom LLM and machine learning integrations, document parsing, RPA, conversational AI chatbots, and multi-channel marketing loops.
4. **Data Analysis & BI**: Predictive modeling, business intelligence pipelines, PowerBI/Tableau dashboards, data warehouse architecture, and ETL data migration.
5. **Non-Profit Technology**: Power of Us licensing guidance, donor and volunteer management, and Salesforce NPSP configuration.

### Featured Product Portfolio
- **CohbyLearn (Cohby LMS)**: Multi-tenant, AI-powered learning management platform with automated curriculum building, SCORM 1.2/2004 compliance, and native conferencing ([cohbylearn.com](http://www.cohbylearn.com/)).
- **ATS Resume Tailor**: AI-driven resume optimization and job application assistant with automated ATS score auditing and document exports ([atsresumetailor.com](https://www.atsresumetailor.com/)).

---

## 2. Technical Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | React 18 (SPA with `react-router-dom` v6) |
| **Build Tool** | Vite 5 with SWC (`@vitejs/plugin-react-swc`) |
| **Language** | TypeScript 5.8 |
| **Styling** | Tailwind CSS 3.4, PostCSS, Autoprefixer |
| **UI Primitives** | Radix UI primitives (`@radix-ui/react-*`), `shadcn/ui` components |
| **Icons** | `lucide-react` |
| **Motion & Animation** | `motion` (v12 / Motion for React) |
| **Client State / Fetching**| `@tanstack/react-query` v5 |
| **Forms & Validation** | `react-hook-form`, `zod` |

---

## 3. UI Look & Feel Architecture (Current State Audit)

### 3.1 Visual Theme Concept: The "Split-Theme"
The current site implements a hybrid visual identity combining two distinct visual aesthetics:
1. **Upper Fold / Hero Sections - Midnight Space Theme**:
   - **Background**: Deep midnight black (`hsl(240 10% 3.5%)` / `#070709`) overlaid with fixed blurred radial glass orbs (`LiquidGlassBackground`) in cyan (`rgba(30, 200, 255)`), hot pink, and rose (`#EDC1CB`).
   - **Interactive Canvas (`CometField.tsx`)**: Fullscreen starfield background with shooting stars and a canvas comet that tracks the user's cursor.
   - **Visual Motifs**: 4-column blueprint gridlines (`grid-blueprint`), tall frosted glass arch cutouts (`rounded-t-[16rem] backdrop-blur-[24px]`), and monospaced tech tags (`// Elite Digital Architecture`).
   - **Headings**: Massive uppercase sans-serif text paired with lowercase italic serif accent words (e.g. `Bespoke Systems. Real *results*.`).
2. **Transition**:
   - Every page features an abrupt vertical gradient fade (`linear-gradient(180deg, hsl(240,10%,4%) 0%, #f0ede9 100%)`).
3. **Lower Fold / Content Sections - "Studio Clay" Light Theme**:
   - **Background**: Editorial light warm clay (`#f0ede9` / `.bg-studio-light`), inspired by editorial studio showcases (e.g., Unseen Studio).
   - **Visual Motifs**: Architectural side pillar lines (`studio-pillar-left`, `studio-pillar-right`), subtle hairline borders (`studio-rule`), dark charcoal headings (`#121214`), and pill-shaped filter tags.
4. **Footer**:
   - Abruptly reverts to midnight glassmorphism (`LiquidGlassBackground variant="footer"`) with dark background and glass cards.

### 3.2 Color System Tokens
- **Background**: `hsl(240 10% 3.5%)` (`#070709`)
- **Card**: `hsl(240 8% 6%)` (`#0e0e11`)
- **Primary**: Cloud Cyan `hsl(200 78% 48%)`
- **Secondary**: Deep Blue `hsl(209 65% 33%)`
- **Accent**: Unseen Rose `hsl(346 52% 84%)` (`#EDC1CB`)
- **Studio Light Clay**: `#f0ede9` (Text: `#121214`)

### 3.3 Key Components & Patterns
- `src/components/Navigation.tsx`: Floating pill-style glassmorphism navbar (`liquid-glass-nav`) with dropdown menus, active spring layout pill (`NavActivePill`), and a rounded CTA button.
- `src/components/Footer.tsx`: Dark footer with social links, directory columns, and company details.
- `src/components/LiquidGlassBackground.tsx`: Multi-layered gradient orbs, satin waves, sheen overlays, and chromatic border effects.
- `src/components/motion/CometField.tsx`: Dual-canvas particle and cursor-trail system.
- `src/components/motion/Reveal.tsx`: Scroll reveal and staggered text animations via Framer Motion.
- `src/components/motion/Magnetic.tsx`: Physics-based spring pull on buttons and interactive triggers.

---

## 4. UI/UX Pain Points & Opportunities for the Redesign

Visitors currently encounter several design shortcomings that dilute the brand's premium consulting message:

1. **Abrupt Dark-to-Light Split Discontinuity**:
   - Transitioning from a cosmic midnight cyber aesthetic into a warm light clay editorial aesthetic within the same scroll creates a fractured user experience. It feels like two separate websites glued together.
2. **Over-Decoration & Clutter**:
   - Combining blueprint gridlines, giant arch cutouts, multi-colored neon glass orbs, floating comets, and canvas starfields creates visual noise that competes with the actual consulting copy and value propositions.
3. **Typography Inconsistency**:
   - Heading hierarchy shifts dramatically across sections (ultra-heavy uppercase tech sans vs. delicate serif italics vs. mono technical indicators vs. editorial serif text).
4. **Mobile Responsiveness & Viewport Cramping**:
   - The large fixed arch frames and multi-column blueprint grids can feel cramped and visually awkward on smaller tablet and mobile screens.
5. **Component Repetition**:
   - Across secondary pages (`About`, `Solutions`, `AIAutomation`, `CloudSolutions`, `BookConsultation`), the same layout formula is repeated with minimal visual variety (hero arch cutout -> gradient fade -> 2-column light clay list).

---

## 5. Site Map & Route Architecture

| Route | Page Component | Description & Current Layout |
| :--- | :--- | :--- |
| `/` | `src/pages/Home.tsx` | Main landing page: Hero with arch, capability rows, why us pillars, process grid, and dark CTA block. |
| `/about` | `src/pages/About.tsx` | Mission, core engineering values, and regional presence (UK & Canada). |
| `/solutions` | `src/pages/Solutions.tsx` | Categorized directory of all 12 services with category filter pills and service cards. |
| `/cloud-solutions` | `src/pages/CloudSolutions.tsx` | Cloud infrastructure, migration, multi-cloud strategy, and security frameworks. |
| `/ai-automation` | `src/pages/AIAutomation.tsx` | AI engineering, workflows, chatbots, and platform capabilities. |
| `/data-analysis` | `src/pages/DataAnalysis.tsx` | Business intelligence, data pipelines, predictive models, and reporting. |
| `/non-profits` | `src/pages/NonProfits.tsx` | Salesforce non-profit technology overview and entry point for charities. |
| `/non-profits/free-salesforce`| `src/pages/nonprofit-subpages/FreeSalesforce.tsx` | Power of Us program guide and 10 free Salesforce Enterprise licenses walkthrough. |
| `/non-profits/npsp-basics` | `src/pages/nonprofit-subpages/NPSPBasics.tsx` | Nonprofit Success Pack data architecture and configuration guide. |
| `/non-profits/challenges` | `src/pages/nonprofit-subpages/Challenges.tsx` | Common operational roadblocks faced by charities and technological solutions. |
| `/products/cohbylearn` | `src/pages/CohbyLearn.tsx` | Cohby LMS product showcase, SCORM compliance, streaming engine, and feature grid. |
| `/products/ats-resume` | `src/pages/ATSResume.tsx` | ATS Resume Tailor tool showcase with pricing tiers, builder preview, and score metrics. |
| `/book-consultation` | `src/pages/BookConsultation.tsx` | Consultation scheduling page with expectations breakdown and booking form / contact action. |
| `/contact` | `src/pages/Contact.tsx` | Contact info (phone numbers for UK/Canada, email, address) and interactive inquiry form. |
| `/privacy-policy` | `src/pages/PrivacyPolicy.tsx` | Legal privacy policy document. |
| `/terms-of-service` | `src/pages/TermsOfService.tsx` | Legal terms of service document. |
| `/thank-you` | `src/pages/ThankYou.tsx` | Form submission confirmation page. |

---

## 6. Local Development & Deployment

### Quickstart
```sh
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Production build
npm run build

# 4. Preview production build
npm run preview
```

### Deployment
This repository is configured for modern static deployment (e.g. GitHub Pages, Vercel, Netlify, or Lovable). All client routes are routed via `_redirects` / `index.html` fallback.
