# SAMATECHS Website

Next.js (App Router) + TypeScript + Tailwind v4 marketing site for SAMATECHS,
a boutique strategic advisory and analytics firm.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Source of truth

- `docs/SAMATECHS_BRAND_GUIDELINES_WEB.md` — brand, color, type, claymorphism, and layout rules.
- `docs/SAMATECHS_WEBSITE_CONTENT.md` — all page copy. All copy is mirrored into typed
  constants under `src/content/`; edit copy there, not inline in components.

## Known placeholders

These are intentionally left unset rather than invented — see the source content's own
bracketed instructions:

- **Logo**: no official asset was supplied. `src/components/brand/Logo.tsx` renders a
  typographic wordmark placeholder. See `public/logo/README.md` to drop in the real mark.
- **Contact details**: address, email, phone, and LinkedIn URL are `null` in
  `src/content/contact.ts` and render an honest "to be provided" state.
- **Contact form submission**: posts to `process.env.SAMATECHS_CONTACT_ENDPOINT`
  (see `.env.example`). Until that's set, the form shows a "not yet connected" state
  instead of faking success — see `src/app/contact/actions.ts`.
- **Partner experience / case results**: the homepage's "Experience Our Partners Bring"
  section is deliberately free of metrics or client names per the source content, which
  flags that section for future client-approved, quantified results.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run lint` — ESLint
- `npx tsc --noEmit` — strict type check
