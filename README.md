# Jaydyn Davis Portfolio

A concise portfolio focused on reverse engineering and vulnerability research.

- `/`: short overview with Battelle experience, HUCTF recognition, selected
  projects, and direct contact links.
- `/in-depth`: experience, project implementation details, expandable lab
  archives, technical skills, education, and teaching.

## Development

```sh
npm install
npm run dev
npm run build
npm start
```

## Content

Shared facts, skills, projects, and work experience live in
`lib/portfolio.ts`. Lab entries live in `lib/labs.ts`. Uploaded photos
are served from `public/images/`. UI decisions are documented in
`doc/ui-design-spec.md`.

The original resume PDFs remain in `public/` as legacy assets. The
portfolio does not link them because their education details are outdated.

Built with Next.js, TypeScript, and CSS. Both pages render on the server. Native disclosures and section links work
without JavaScript; the mobile menu adds close-on-select and Escape support.
