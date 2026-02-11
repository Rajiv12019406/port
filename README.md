# Professional Portfolio — Legal Tech Style

A modern, responsive React portfolio inspired by [amitgupta.work](https://amitgupta.work/), built with **Vite**, **Tailwind CSS**, and **Framer Motion**.

## Tech Stack

- **React 18** (Vite)
- **Tailwind CSS** — design system, spacing, colors
- **Framer Motion** — scroll and hover animations
- Placeholder content (replace with your own copy, images, and links)

## Design

- **Colors:** Dark hero (brand-dark/navy), sky blue accent (brand-accent), cream/white sections
- **Typography:** DM Sans (body), Playfair Display (headings)
- **Layout:** Sticky navbar, hero carousel, alternating content sections, cards and tag-style skills
- **Responsive:** Mobile-first, tablet and desktop breakpoints

## Sections (in order)

1. **Navbar** — Home, About, Experience, Publications, Gallery, Contact, Connect
2. **Hero** — Rotating headlines (carousel), subtext, location/tags, Learn More
3. **About** — Long-form bio
4. **Core Competencies** — 6 competency cards (AML, Blockchain, Supreme Court, Legal Research, Data Privacy, FinTech)
5. **Education** — 3 entries with bullets (Master’s IIT-K, LL.B., B.Tech)
6. **Professional Experience** — 5 roles with company, dates, bullets
7. **Research Publications** — 6 publication cards with venue and tag
8. **Video CTA** — “Take Back Your Time. Get Back Your Focus.” + Watch Now + video placeholder
9. **Key Achievements** — 4 achievement cards
10. **Policy, Risk & Compliance** — 3 areas with bullet lists
11. **Technical Skills** — Legal & Regulatory + Technology & Data Analysis (tag-style)
12. **Certifications & Professional Development** — Education cards + Additional Achievements
13. **Speaking Engagements** — Conference/seminar blocks with video placeholders
14. **Professional Highlights** — Gallery grid (placeholder tiles)
15. **Connect & Collaborate** — Location, Phone, Email, LinkedIn, CTA
16. **Footer** — Copyright and tagline

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── HeroSection.jsx
│   ├── AboutSection.jsx
│   ├── CoreCompetencies.jsx
│   ├── EducationSection.jsx
│   ├── ExperienceSection.jsx
│   ├── ResearchSection.jsx
│   ├── VideoCTASection.jsx
│   ├── AchievementsSection.jsx
│   ├── ComplianceSection.jsx
│   ├── TechnicalSkillsSection.jsx
│   ├── CertificationsSection.jsx
│   ├── SpeakingSection.jsx
│   ├── HighlightsSection.jsx
│   ├── ContactSection.jsx
│   └── Footer.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Customization

- Replace `[Your Name]` in **Navbar** and **Footer** with your name.
- Update **ContactSection** with your Location, Phone, Email, and LinkedIn URL.
- Swap placeholder copy and images in each section with your real content.
- Adjust colors in `tailwind.config.js` (brand.accent, brand.dark, etc.) if needed.
