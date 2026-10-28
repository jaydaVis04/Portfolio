# Portfolio UI Spec

## Direction

A concise white research portfolio for technical recruiters and engineers.
The overview pairs the research specialization with real Battelle and CTF photos.
The expanded route keeps the same typography and navigation, with details
available through native disclosures. The latest direct user update overrides
older claims in PORTFOLIO_CONTENT_BRIEF.md.

## Tokens

- Background: white #ffffff; surface: #f3f6f4.
- Ink: #192923; secondary text: #526159; borders: #dce5df.
- Accent: deep green #185c43; accent surface: #eaf4ee.
- Typeface: IBM Plex Sans for text and headings; no decorative terminal fonts.
- Spacing: 8, 16, 24, 48px; compact 32px section gaps on small screens.
- Radius: 6px for controls, 12px for photos and the competition feature.
- Motion: one short hero entrance; reduced-motion preference disables it.

## Registry

- components/shared/PortfolioHeader.tsx: overview and in-depth navigation.
- components/shared/MobileNavigation.tsx: native disclosure with close-on-select
  and Escape behavior as progressive enhancement.
- components/shared/ContactLinks.tsx: email, GitHub, and LinkedIn actions.
- components/shared/Competition.tsx: compact result and full challenge summary.
- components/simple/SimplePortfolio.tsx: short default route.
- components/in-depth/: experience, recognition, projects, labs, skills,
  education, and contact.
- lib/portfolio.ts: shared facts, experience, projects, and skills.
- lib/labs.ts: preserved lab archive.

## Interaction And Content

- Keep the homepage approximately two desktop viewports, with no hidden key facts.
- Use a noticeable In depth portfolio link and a visible page mode.
- Native details/summary controls keep teaching, project details, and labs concise.
- Repo links use supplied URLs; unavailable repos stay readable without fake links.
- All interactive elements have visible keyboard focus; touch targets reach 44px.
- Images retain natural color and have meaningful alt text.
- DoD Secret clearance, GPA 3.30, December 2027 graduation, no minor or
  certification claims. CTF award is explicitly a team prize.
- Battelle dates identify the co-op term without declaring the ongoing term complete.
