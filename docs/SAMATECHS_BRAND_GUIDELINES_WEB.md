# SAMATECHS Web Brand Guidelines

## Purpose

This file translates the supplied **SAMATECHS Brand Guideline** into implementation rules for the new website.

The original brand rules are authoritative. The **Claymorphism Web Adaptation** section below is a website-specific design direction added for this project. It must extend the brand rather than replace it.

---

# 1. Brand Position

SAMATECHS is a boutique strategic advisory and analytics firm serving leadership teams dealing with complex strategic, operational, risk, technology, analytics, AI, and U.S.–GCC market challenges.

The visual identity must communicate:

- Strategic clarity
- Executive confidence
- Quantitative rigor
- Enterprise intelligence
- Technology fluency
- High-accountability advisory
- Sophisticated U.S.–GCC perspective
- Implementation discipline

The website must feel **premium, senior-led, analytical, futuristic, and institutionally credible**.

It must **not** feel like:

- A generic SaaS landing page
- A playful AI startup
- A crypto/Web3 website
- A consumer mobile app
- A template-based consulting site
- A neon cyberpunk concept
- A glassmorphism clone

---

# 2. Logo Meaning and Visual DNA

The SAMATECHS logo is built around the concept of **enterprise intelligence**.

Its paths and intersecting nodes abstract a sophisticated neural network. The mark represents an organization acting as a strategic mind: taking fragmented data and complex challenges and transforming them into clear, high-impact, decision-ready intelligence.

For digital design, this means the visual system may draw from:

- Converging paths
- Decision nodes
- Structured networks
- Radial movement
- Controlled intersections
- Data becoming organized
- Complexity resolving into clarity

These ideas should influence the site's signature visual language.

Do not turn this into decorative circuitry everywhere. Use it deliberately.

---

# 3. Logo Rules

## Clear Space

Maintain a minimum clear space around the logo equal to **one quarter of the icon width (X/4)** on all sides.

## Approved Behavior

Use the supplied official logo assets exactly as provided.

The brand guideline demonstrates the logo on light, dark, blue, and high-contrast backgrounds.

Choose the appropriate official variant for contrast.

## Never

- Change the logo color arbitrarily.
- Use two unrelated colors inside the logo.
- Stretch or distort the logo.
- Change the logo typeface.
- Rotate the logo.
- Add a drop shadow to the logo.
- Rebuild or reinterpret the logo shape with CSS.
- Place content inside the minimum clear-space area.

If no production-ready logo asset exists in the repository, do not redesign the mark. Extract or request an approved asset, or temporarily use a clearly labeled placeholder.

---

# 4. Core Color System

The primary palette is the foundation of the website.

## Primary Blues

| Token | Hex | Intended Role |
|---|---:|---|
| Sovereign Blue | `#005BC2` | Institutional trust, governance, primary brand anchor |
| Digital Pulse Blue | `#0078FF` | Main interactive accent, digital transformation |
| Intelligence Blue | `#3393FF` | AI/data highlights, secondary blue emphasis |

## Deep Neutrals

| Token | Hex | Intended Role |
|---|---:|---|
| Deep Navy | `#121A23` | Premium dark surfaces, hero/footer |
| Slate Navy | `#212D3A` | Elevated dark surfaces |
| Steel Slate | `#425367` | Muted text, supporting surfaces |

## Light Neutrals

| Token | Hex | Intended Role |
|---|---:|---|
| White | `#FFFFFF` | High-clarity surfaces |
| Ice | `#E9F0F9` | Main light-page background |
| Mist Blue | `#BDD4EE` | Clay surface, border, secondary background |

### Color Priority

The website should rely primarily on:

1. Deep Navy / Sovereign Blue
2. Digital Pulse Blue
3. White / Ice
4. Mist Blue
5. Intelligence Blue

Do not replace the brand's blue/navy dominance with unrelated trend colors.

---

# 5. Secondary and Functional Colors

Secondary colors support the primary palette; they never become the dominant brand color.

## Secondary

| Family | Hex |
|---|---:|
| Strategic Gold | `#D6A24B` |
| Soft Gold | `#E3BF82` |
| Pale Gold | `#F1DFC1` |
| Deep Teal | `#1F9E8C` |
| Digital Teal | `#2AD5BD` |
| Pale Teal | `#7FE6D7` |

## Functional / Status

| Meaning | Hex |
|---|---:|
| Positive / Success | `#3FA66E` |
| Attention / Amber | `#E3A63A` |
| Critical / Coral | `#E85C4A` |

Functional colors are for actual status, analytics, alerts, or meaningful data states. Do **not** use them as decoration.

Use at most one secondary accent in a visual composition unless a real data/status use case requires otherwise.

All text placed over colored surfaces must satisfy **WCAG AA** contrast. Gold and amber surfaces require dark text rather than white when white does not meet contrast.

---

# 6. Typography

## English

### Display / Major Headings
**Montserrat**

Use for:
- Hero headline
- Page titles
- Section headlines
- Major statements
- Strong navigation moments

The guideline describes Montserrat as giving the main headlines a bold geometric structure suitable for an executive environment.

### Body / UI
**Quicksand**

Use for:
- Body copy
- Navigation
- Buttons
- Form labels
- Cards
- Supporting text
- UI text

Quicksand's softer rounded geometry provides a controlled contrast to the more structural Montserrat display face.

## Arabic

**IBM Plex Sans Arabic**

If Arabic is introduced later, use IBM Plex Sans Arabic and support correct RTL composition.

## Suggested Web Type Scale

This scale is a web implementation recommendation, not a replacement for the official font choices.

- Hero: `clamp(3rem, 7vw, 7.25rem)` / Montserrat 600–700
- H1: `clamp(2.7rem, 5vw, 5.5rem)` / Montserrat 600–700
- H2: `clamp(2rem, 3.6vw, 4rem)` / Montserrat 600
- H3: `clamp(1.35rem, 2vw, 2rem)` / Montserrat 600
- Lead: `1.125rem–1.35rem` / Quicksand 500
- Body: `1rem–1.125rem` / Quicksand 400–500
- Utility: `0.75rem–0.875rem` / Quicksand 500–600

Keep line lengths controlled. Long advisory copy should remain easy to scan.

---

# 7. Brand Pattern and Graphic Language

The official brand system includes a repeating pattern derived from the logo geometry.

For web use:

- Use it sparingly as a low-contrast structural field.
- It may appear in a hero background, section transition, footer, or subtle mask.
- Avoid repeating it behind long body text.
- Do not use it merely to fill empty space.
- It should feel architectural, not ornamental.

The guideline also presents an enlarged radial graphic element derived from the secondary logo mark. This may be used as a cropped oversized form to create scale and visual tension.

---

# 8. Iconography

Use **Phosphor Icons**.

The official guideline specifies Phosphor as the flexible icon family for interfaces, diagrams, presentations, and related applications.

Implementation rules:

- Prefer one consistent stroke weight.
- Use icons only when they clarify meaning.
- Avoid mixed icon libraries.
- Do not place icons in every card by default.
- Use the blue/navy palette unless functional status colors have a real meaning.

---

# 9. Image Direction

The official image moodboard uses a futuristic, high-contrast, technology-led visual language.

Recurring qualities include:

- Deep blue and indigo lighting
- Controlled glow
- Abstract optical / dimensional forms
- Human silhouettes
- Human + machine interaction
- Soft gradients with strong focal points
- Strategic use of negative space
- A balance of human intelligence and advanced technology

For the website:

- Prefer cinematic, minimal, editorial technology imagery.
- Use imagery that feels credible for boardrooms, data, AI, enterprise transformation, and international growth.
- Avoid cliché stock photography of people pointing at laptops.
- Avoid generic city skylines unless they have a strong strategic reason.
- Avoid oversaturated neon cyberpunk visuals.
- Avoid random 3D blobs that have no relationship to the logo or subject.

If photography is not available, abstract brand-native visuals are preferable to generic stock.

---

# 10. Layout and Grid

The brand guideline uses disciplined grid systems.

Reference formats in the source guideline:

| Format | Grid | Margin | Gutter |
|---|---:|---:|---:|
| 1080 × 1080 social | 6 columns | 64 px | 24 px |
| 1080 × 1920 story/reel | 6 columns | 64 px | 24 px |
| 1920 × 1080 presentation | 12 columns | 96 px | 32 px |
| A4 | 8 columns | 18 mm | 5 mm |

## Web Adaptation

Use a **12-column desktop grid** as the primary website structure.

Recommended:
- Max content width: `1440px–1600px`
- Desktop outer gutter: `clamp(28px, 5vw, 96px)`
- Tablet outer gutter: `32px`
- Mobile outer gutter: `20px`
- Desktop column gap: `24px–32px`

The grid is an invisible positioning system, not a visible decoration.

Do not let headings, body copy, and cards float at arbitrary positions. Anchor them to the grid.

---

# 11. Alignment Principles

The source guideline treats alignment as a real structural system.

For English web layouts:

- Default to left alignment.
- Large headlines should begin on a grid line.
- Body copy should align to a related grid line.
- Center alignment is an exception, not the default.
- Use centered copy only for very short standalone statements or intentional hero moments.
- Do not center long paragraphs.

For future Arabic pages, mirror the system to right alignment.

---

# 12. Claymorphism Web Adaptation

## Objective

Use **Claymorphism** as the website's contemporary visual expression while maintaining SAMATECHS' serious B2B/G2B identity.

The clay treatment must feel like **precision-molded strategic instruments**, not playful children's UI.

## Material Language

Use:

- Soft extruded surfaces
- Controlled convex / concave depth
- Rounded forms inspired by the logo's curved pathways
- Dual-light shadow logic
- Subtle inset highlights
- Layered blue/navy materials
- High-contrast typography on top

Avoid:

- Puffy pastel rainbow cards
- Bubble-heavy interfaces
- Candy colors
- Excessively large corner radii everywhere
- Glassmorphism blur as the main effect
- Fake glossy plastic
- Excessive floating spheres

## Suggested Clay Tokens

### Light clay surface

```css
--clay-light: #E9F0F9;
--clay-light-edge: #BDD4EE;
--clay-light-highlight: rgba(255,255,255,.72);
--clay-light-shadow: rgba(66,83,103,.20);
```

### Blue clay surface

```css
--clay-blue: #0078FF;
--clay-blue-deep: #005BC2;
--clay-blue-highlight: rgba(255,255,255,.22);
--clay-blue-shadow: rgba(18,26,35,.30);
```

### Dark clay surface

```css
--clay-dark: #121A23;
--clay-dark-elevated: #212D3A;
--clay-dark-highlight: rgba(255,255,255,.08);
--clay-dark-shadow: rgba(0,0,0,.38);
```

### Recommended radius

- Major clay surfaces: `24px–36px`
- Buttons: `14px–18px`
- Small controls: `12px–16px`

Do not use the same radius for every component.

## Shadow Principle

Use two-part clay depth:

1. A darker external shadow to create lift.
2. A subtle inner/top highlight to create material volume.

The shadow must remain restrained enough that text and content feel more important than the effect.

---

# 13. Signature Website Element

## The Strategic Intelligence Field

The website's memorable visual signature should be a **logo-derived interactive decision field**.

Concept:

- Start from the SAMATECHS radial/node geometry.
- Translate the paths into softly extruded clay-like blue channels.
- Let several paths begin fragmented and converge toward one controlled decision node.
- On initial load, the network should resolve from complexity into structure.
- Pointer movement may create very subtle parallax/depth.
- On scroll, the visual can transition from the hero into the three advisory pillars.

This directly embodies the brand promise:
**complexity → clarity → disciplined action.**

This is the project's main aesthetic risk.

Spend the visual boldness here. Keep the rest of the website quieter.

Do not replace this with a generic 3D orb, animated globe, dashboard screenshot, or particle cloud.

---

# 14. Motion

Motion should be deliberate and limited.

Use one orchestrated visual system:

- Hero decision-field formation
- Controlled section reveals
- Subtle clay press / lift on interactive elements
- Gentle network/path transitions

Recommended interaction speeds:

- UI hover: `160–220ms`
- Surface movement: `240–360ms`
- Hero reveal: `700–1200ms`

Respect `prefers-reduced-motion`.

Avoid constant floating animation on every component.

---

# 15. Accessibility

Minimum requirements:

- WCAG AA color contrast
- Visible keyboard focus
- Semantic heading hierarchy
- Keyboard-accessible navigation
- Form labels connected to controls
- Clear validation and error messages
- Reduced-motion support
- No important information communicated by color alone
- Descriptive image alt text
- Logical tab order

---

# 16. Website Design Guardrails

## Do

- Let typography and layout carry authority.
- Use Claymorphism selectively.
- Use negative space.
- Make the hero unmistakably SAMATECHS.
- Use the logo geometry as a design system.
- Keep the copy readable and executive.
- Keep primary CTAs clear.
- Use real source content.
- Make mobile design intentional rather than a collapsed desktop layout.

## Do Not

- Use generic template sections without redesigning them.
- Add fake client logos.
- Invent statistics, awards, office locations, or case-study results.
- Invent testimonials.
- Use purple/pink gradients as a default AI aesthetic.
- Use unrelated neon colors.
- Use excessive glass blur.
- Turn every section into a floating card.
- Put a glowing gradient behind every heading.
- Use numbered labels unless the content is actually sequential.
- Add decorative elements that do not encode a real brand idea.

---

# 17. Overall Art Direction

**Premium strategic intelligence, molded into a tactile digital system.**

The website should feel like SAMATECHS has taken the rigor of an executive advisory firm and expressed it through a controlled, modern, technology-native material language.

The final result should be futuristic without losing credibility, distinctive without becoming theatrical, and visually advanced without distracting from the advisory content.
