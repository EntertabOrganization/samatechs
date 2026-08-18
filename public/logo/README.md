# Dropping in the official SAMATECHS logo

No production-ready logo asset was supplied for this build. Per
`docs/SAMATECHS_BRAND_GUIDELINES_WEB.md` (Section 3), the mark must never be
rebuilt or reinterpreted in CSS — so `src/components/brand/Logo.tsx`
currently renders a plain Montserrat wordmark placeholder instead.

## To install the real logo

1. Add the official files here, e.g.:
   - `logo-dark.svg` — for light backgrounds
   - `logo-light.svg` — for dark/navy backgrounds
2. Edit `src/components/brand/Logo.tsx` to render an `<Image>` (or inline
   SVG) pointing at the appropriate file for the `tone` prop, preserving:
   - Minimum clear space of **X/4** of the icon width on all sides
   - No recoloring, stretching, rotation, or drop shadow
   - The correct light/dark/blue variant for the background it sits on

That single file is the only place the logo is referenced, so no other
component needs to change.
