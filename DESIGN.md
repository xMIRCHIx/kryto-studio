# Design Brief

## Direction

Kryto Studio — Bold, high-contrast dark modern design for a premium creative studio with cyan energy and warm accent highlights.

## Tone

Luxury tech meets creative confidence: sophisticated dark palette with vibrant cyan CTAs and warm creative accents, no frill, maximum impact.

## Differentiation

Deep charcoal luxury backgrounds paired with electric cyan accents and warm creative orange highlights create a distinctive premium studio aesthetic distinct from generic tech dark themes.

## Color Palette

| Token      | OKLCH         | Role                           |
|-----------|---------------|--------------------------------|
| background | 0.14 0.008 260 | Deep charcoal base, luxury feel |
| foreground | 0.95 0.012 260 | Near-white text, high contrast  |
| card       | 0.18 0.012 260 | Elevated surface for portfolios |
| primary    | 0.70 0.25 190  | Cyan: CTAs, active states       |
| accent     | 0.65 0.22 40   | Warm orange: portfolio highlights |
| muted      | 0.20 0.015 260 | Subtle secondary surfaces      |

## Typography

- Display: Space Grotesk — bold geometric headlines, hero text, strong visual presence
- Body: DM Sans — clean, legible paragraph text and UI labels
- Scale: hero `text-6xl md:text-7xl font-bold tracking-tight`, h2 `text-3xl md:text-4xl font-bold`, label `text-sm font-semibold tracking-widest`, body `text-base md:text-lg`

## Elevation & Depth

Multi-layer depth through three shadow tiers: `shadow-subtle` (micro interactions), `shadow-card` (portfolio cards, moderate lift), `shadow-elevated` (hero modals, deep presence). Cards sit above muted background via `bg-card` with subtle `border-border` definition.

## Structural Zones

| Zone    | Background       | Border            | Notes                                  |
|---------|-----------------|-------------------|----------------------------------------|
| Header  | bg-card         | border-b border-border | Logo + nav, slight elevation         |
| Content | bg-background   | —                 | Main portfolio grid, sections scroll  |
| Footer  | bg-muted/40     | border-t border-border | Legal, social, simple structure      |
| Cards   | bg-card         | border border-border | Portfolio items, even shadow spacing |

## Spacing & Rhythm

Section padding 4rem / 2rem mobile, card gaps 1.5rem, content inside cards 1.5rem. Header 1rem vertical padding, footer 2rem. Micro-spacing within buttons/labels: 0.5rem. Rhythm alternates between card sections and full-bleed content blocks for visual breathing room.

## Component Patterns

- Buttons: Rounded `rounded-md`, solid `bg-primary` with cyan, hover darkens via opacity, focus ring `ring-2 ring-primary`.
- Cards: `rounded-lg`, `bg-card`, `border border-border`, `shadow-card`. Portfolio grid: 1 col mobile, 2 col tablet, 3 col desktop.
- Badges: `rounded-full`, `bg-accent/10`, `text-accent`, `text-xs font-semibold`. For service tags (Web Dev, Video Editing, etc.).

## Motion

- Entrance: `fadeIn` 0.5s on page load, `slideUp` 0.6s on portfolio items staggered.
- Hover: Button text/background shift via `transition-smooth`, icon rotation +5deg, subtle shadow lift.
- Decorative: Subtle ambient pulse on active service buttons, no excessive animation.

## Constraints

- Do NOT use default Tailwind blue; cyan primary (0.70 0.25 190) only for CTAs and emphasis.
- Do NOT mix font families mid-section; Space Grotesk for headings, DM Sans for body.
- Do NOT apply full-page background gradients; use solid colors with strategic card elevation.
- Portfolio filters/tabs: use `bg-muted` for inactive, `bg-primary` for active, no separate theme state.

## Signature Detail

Warm creative orange (0.65 0.22 40) accent applied as a subtle underline or left border on portfolio card highlights — signals creative excellence without overwhelming the cyan primary focus.
