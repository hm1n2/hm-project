---
id: traddy
name: "TRADDY"
country: KR
category: travel
homepage: "https://traddy.app"
primary_color: "#1ec7be"
logo:
  type: text
  slug: "TRADDY"
verified: "2026-06-12"
omd: "0.1"
runtime_deps:
  icons: lucide-react
  fonts: [Paperozi, Pretendard]
tokens:
  source: prose-derived
  extracted: "2026-06-12"
  colors:
    primary: "#1ec7be"
    hot-pink: "#ff3c78"
    mint: "#1ec7be"
    mint-sky: "#1dc3ff"
    canary: "#ffd84d"
    purple: "#6456dc"
    canvas: "#0e1011"
    surface-1: "#17181a"
    surface-2: "#222327"
    surface-3: "#404149"
    surface-light: "#ffffff"
    surface-subtle: "#f3f3f3"
    text-primary: "#eff0f4"
    text-body: "#323232"
    text-muted: "#999999"
    text-subdued: "#666666"
    border: "#e5e5e5"
    border-subtle: "#d5d5d5"
    error: "#ef4343"
  typography:
    family: { display: "Paperozi", sans: "Pretendard", mono: "Pretendard" }
    discount: { size: 27, weight: 700, lineHeight: 1.35, use: "Discount price, coupon amount" }
    confirm:  { size: 18, weight: 500, lineHeight: 1.4, use: "Full-width confirm button" }
    button:   { size: 16, weight: 600, lineHeight: 1.4, use: "Primary button label" }
    body:     { size: 15, weight: 400, lineHeight: 1.4, use: "Body, product name" }
    caption:  { size: 13, weight: 400, lineHeight: 1.4, use: "Caption, meta" }
    badge:    { size: 12, weight: 500, lineHeight: 1.4, use: "Badge, tag" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, section: 56 }
  rounded: { sm: 4, md: 6, lg: 8, full: 9999 }
  components:
    button-primary: { type: button, bg: "#1ec7be", fg: "#ffffff", radius: "8px", font: "16px / 600", use: "Primary CTA for join, request, or continue flows; 50px height" }
    button-confirm: { type: button, bg: "#1ec7be", fg: "#ffffff", radius: "8px", font: "18px / 500", use: "Full-width drawer-bottom confirm for final intent actions; 56px height" }
    button-secondary: { type: button, bg: "#323232", fg: "#ffffff", radius: "4px", font: "14px / 500", use: "Inline secondary action for save, later, or route detail; 34px height" }
    button-outline: { type: button, bg: "#ffffff", fg: "#323232", radius: "4px", font: "14px / 500", use: "Outline cancel, close, or skip; 1px #e5e5e5 border, 34px height" }
    button-discovery: { type: button, bg: "#ff3c78", fg: "#ffffff", radius: "6px", font: "15px / 600", use: "Short discovery CTA for browsing nearby plans or profiles; 40px height" }
    card-coupon: { type: card, bg: "#eefcfb", fg: "#1ec7be", font: "27px / 700", use: "Highlight card for today's route, host note, or matching summary" }
    nudge-urgency: { type: toast, bg: "rgba(255,216,77,0.18)", fg: "#9a7a00", radius: "4px", font: "14px / 500", use: "Gentle timing nudge for limited meetup windows or soon-closing plans; 38px height" }
  components_harvested: true
---

TRADDY is a mobile-first travel companion service for solo travelers who want to keep their independence while opening the door to light, trustworthy connections along today's route.

## 1. Visual Theme & Atmosphere

TRADDY uses a bright-first visual world where the primary stage is white and breathable, allowing a solo traveler to feel calm before making any social decision. The root canvas should read as open, clean, and easy to scan, with lively accents arriving in controlled doses rather than flooding the screen. Mint (#1ec7be) is the lead brand color: it carries the product's trust, freshness, and light-footed travel energy across key actions and orientation cues. Hot-pink (#ff3c78) adds emotional lift and a friendly spark of possibility, while sky-mint blue (#1dc3ff) supports discovery, route freshness, and airy presence moments. A canary yellow accent (#ffd84d) may appear in small doses for timely highlights, celebratory nudges, or attention cues that should feel cheerful rather than urgent. Purple (#6456dc) is no longer a core part of the palette and should be treated as optional legacy contrast only. Dark neutrals still exist, but they act as contrast tools for compact actions, bottom navigation, and emphasis surfaces rather than as the default environment. Typography splits deliberately: Paperozi is used for titles and expressive headlines, while Pretendard remains the body typeface for readable Korean UI copy. The compact 4–8 px radius scale keeps the interface grounded and trustworthy even when the accent colors feel lively.

## 2. Color Palette & Roles

- **Primary Mint:** `#1ec7be` — primary CTA buttons, trust anchors, join/continue actions, highlighted confirmation states
- **Secondary Hot-Pink:** `#ff3c78` — playful lift for discovery CTA, profile accents, selected filters, and optimistic highlights
- **Secondary Sky-Mint:** `#1dc3ff` — airy companion tone for route cues, nearby discovery, and active presence highlights
- **Point Canary Yellow:** `#ffd84d` — small celebratory highlights, timely nudges, badges, or notice accents
- **Supporting Purple:** `#6456dc` — optional legacy contrast only; avoid introducing it into new UI unless absolutely needed
- **App Background:** `#ffffff` — root app canvas (default across the main product)
- **Surface Dark-1:** `#17181a` — bottom navigation bar background, dark compact action surfaces
- **Surface Dark-2:** `#222327` — elevated dark utility surfaces when stronger contrast is needed
- **Surface Dark-3:** `#404149` — tertiary dark utility fills
- **Surface Light:** `#ffffff` — main cards, sheets, and content containers on the bright canvas
- **Surface Subtle:** `#f3f3f3` — empty state icon containers, light dividers, passive background bands
- **Text Primary (dark):** `#eff0f4` — body copy on dark utility surfaces
- **Text Body (light):** `#323232` — primary body copy on the white app background
- **Text Muted:** `#999999` — secondary labels, helper text, disabled states
- **Text Subdued:** `#666666` — route meta, timestamps, and quieter context
- **Border Default:** `#e5e5e5` — card outlines, field boundaries, dividers
- **Border Subtle:** `#d5d5d5` — lightweight separators, outline button strokes
- **Error / Danger:** `#ef4343` — error banners, failed requests, ended availability labels
- **Connection ring:** `conic-gradient(from -68deg, #ff2b51, #ffae8e)` — energetic accent ring for active people and highlighted social moments
- **Route ring:** `conic-gradient(from -68deg, #1ec7be, #1dc3ff)` — freshness-forward gradient for nearby routes, discovery, and host emphasis
- **Notice accent:** `#ffd84d` — tiny status sparks, featured markers, or event badges used in moderation

## 3. Typography Rules

- **Display typeface:** Paperozi via custom `@font-face` declarations mapped to the provided Paperlogy CDN files, weights 100–900; use for titles, hero copy, section headlines, and short branded emphasis only
- **Body typeface:** Pretendard (woff2, variable weight 45–920), with Pretendard Fallback (Arial-based) for system fallback; use for body copy, captions, labels, buttons, forms, and all dense UI text
- **Body / Product name:** 15px / weight 400–500
- **Price / Emphasis:** 15px / weight 700; discount price 27px / weight 700
- **Button primary:** 16px / weight 600
- **Button confirm full-width:** 18px / weight 500
- **Caption / Meta:** 13px / weight 400–500
- **Badge / Tag:** 11–12px / weight 500
- **Title usage:** Paperozi 600–800 for short headings; avoid long paragraphs or compact UI labels in Paperozi
- **Page header height:** 56px (CSS export constant)
- **Letter spacing:** −0.2 px to −0.5 px on headings and price figures; Korean text benefits from tight negative tracking
- **Line height:** 135–145% for readable body, tabular-nums variant for prices and timers

## 4. Component Stylings

### Primary Actions

**Primary CTA (join / request / continue)**
- Background: `#1ec7be`
- Text: `#ffffff`
- Radius: 8px
- Height: 50px
- Font: 16px / 600

**Full-Width Confirm (drawer bottom)**
- Background: `#1ec7be`
- Text: `#ffffff`
- Height: 56px
- Font: 18px / 500

**Dark Secondary (save / later / detail inline)**
- Background: `#323232`
- Text: `#ffffff`
- Radius: 4px
- Height: 34px
- Font: 14px / 500

**Outline Delete / Cancel**
- Background: `#ffffff`
- Text: `#323232`
- Border: 1px solid `#e5e5e5`
- Radius: 4px
- Height: 34px
- Font: 14px / 500

**Discovery CTA**
- Background: `#ff3c78`
- Text: `#ffffff`
- Radius: 6px
- Height: 40px
- Font: 15px / 600

---

### Highlight Card

**Active Highlight**
- Background: `#ffffff`
- Background: `#eefcfb`
- Text (emphasis): `#1ec7be`
- Font: 27px / 700

**Completed / Inactive Highlight**
- Background: `#ffffff`
- Border: 5px solid `#f3f3f3`
- Text: `#999999`
- Font: 13px / 500

---

### Timing Nudge Bar

**Limited-Time Window**
- Background: `rgba(255, 216, 77, 0.18)`
- Text: `#9a7a00`
- Radius: 4px
- Height: 38px
- Font: 14px / 500–600

---
**Transformation note:** Visual energy, spacing, and component metrics were retained from the reference system, while the palette hierarchy was rebalanced to mint-first with pink, sky, and canary accents for TRADDY.
**Brandfit note:** Voice, role naming, and UI examples were rewritten from `docs/brandvoice.md` on 2026-06-12. Voice samples remain planning-stage copy, not production-validated messaging.

## 5. Layout Principles

TRADDY is a single-column, mobile-first app (max-width 420px on desktop, 100% on mobile). The root `.main` container is fixed to 420px wide on desktop and stacks vertically: page header (56px fixed top), scrollable content, bottom nav (52px + safe-area bottom). The white app canvas should dominate the main feed, while cards, chips, and lightweight bands create rhythm inside that frame. Horizontal scroll is appropriate for nearby routes, people suggestions, and plan curation rows where frictionless browsing matters more than dense information packing.

## 6. Depth & Elevation

The UI relies on background-color contrast rather than heavy drop shadows for layering. Because the default canvas is white, depth should come from subtle outlines, surface shifts (`#ffffff` to `#f3f3f3`), and occasional dark anchors such as bottom navigation or compact secondary actions. Drawers and modals emerge from below (vaul-drawer, bottom-sheet pattern) using the Radix animation system. An `rgba(0,0,0,0.1)` scrim is applied to floating overlays. Gradient rings may sit behind circular avatars or plan badges as halo accents, but the main content area should remain airy rather than glow-heavy.

## 7. Do's and Don'ts

### Do
- Use `#ffffff` as the default app stage so the product feels open, calm, and easy to scan
- Use `#1ec7be` for primary commitment actions such as joining, requesting, or confirming a plan
- Use hot-pink for emotional lift, sky-mint for route freshness, and canary yellow only for small cheerful attention cues
- Keep body copy at 15px / 400 on light surfaces for readability at arm's length
- Let canary nudges feel bright and friendly rather than alarming
- Maintain the 420px max-width constraint in desktop contexts to preserve mobile layout fidelity

### Don't
- Don't use dark backgrounds as the default app canvas; keep them as contrast surfaces only
- Don't use `#ff3c78` as the primary CTA color — it is the playful secondary accent, not the final commitment signal
- Don't use Paperozi for body paragraphs, long labels, or compact controls
- Don't let yellow spread into large surfaces; it works best as a quick point of attention
- Don't let purple overtake the palette; if used at all, it stays tertiary or legacy-only
- Don't add shadows to buttons; elevation is communicated through surface contrast and outline structure
- Don't place gradient rings on every avatar or card; reserve them for active or highlighted moments
- Don't exceed 8px border-radius on purchase buttons; 24–31px is reserved for pill tags and avatar-adjacent elements
- Don't use font weight below 500 for interactive UI text; 400 is reserved for body copy and meta descriptions

## 8. Responsive Behavior

TRADDY is deliberately mobile-first rather than broadly responsive. The root `.main` container is fixed at 420px wide and centered on desktop, with `max-width:100%` applied on actual mobile viewports. At ≤460px the container becomes fluid. The bottom nav respects `env(safe-area-inset-bottom)` for notched devices. Desktop visitors should see the same bright, framed mobile column rather than a stretched tablet layout.

## 9. Agent Prompt Guide

To produce TRADDY-consistent UI:
- Bright canvas: `background #ffffff`, body text `#323232`, Pretendard 15px/400
- Title system: Paperozi for headlines and branded emphasis, Pretendard for all body and UI text
- Primary CTA: `background #1ec7be`, white text, 8px radius, 50px height, 16px/600
- Secondary action: `background #323232`, white text, 4px radius, 34px height, 14px/500
- Discovery accent: use `#ff3c78` for playful lift and `#1dc3ff` for fresh route and presence cues
- Timing nudge bar: `rgba(255,216,77,0.18)` background, `#9a7a00` text, 4px radius, 38px height
- Highlight card: `#eefcfb` tint interior with mint emphasis, 27px/700 for strong numbers or route markers
- Section dividers: 1px solid `#f3f3f3`
- No box-shadow on action elements; rely on background contrast, outlines, and spacing for layering

## 10. Voice & Tone

**Tone adjectives:** reassuring, lightly exciting, friendly, tactful

| Do | Don't |
|----|-------|
| Use gentle proposal-style copy ("가볍게 찾아볼까요?", "천천히 둘러봐도 좋아요") | Use hard commands or pressure phrases ("지금 당장", "놓치지 마세요") |
| Respect solo travel while opening the possibility of connection | Frame the product like a dating app or a forced social experience |
| Lead with calm clarity in errors or empty states | Blame the user or make them feel late, careless, or excluded |
| Use warm, simple Korean that feels easy to trust | Use trendy English-heavy slang or exaggerated emotional copy |

**Voice samples (illustrative):**
- *"가고 싶은 곳이 있다면, 같은 결의 사람과 함께일 수도 있어요."* — onboarding invitation
- *"아직 딱 맞는 동행은 안 보이네요. 비슷한 루트부터 가볍게 둘러볼 수 있어요."* — empty state reassurance
- *"혼자 떠난 여행도, 누군가와 함께라면 또 다른 하루가 될 수 있어요."* — landing message

## 11. Principles

1. **Solo-first, not solo-only.** The product must respect a user's independent plan before suggesting any social action. UI implication: browsing, saving, and route planning should feel complete even before a user decides to connect.

2. **Connection should feel gentle.** The system should invite, not push. UI implication: CTAs should be proposal-based, and urgency treatments should support timing clarity rather than fear of missing out.

3. **Trust is visual before it is verbal.** A bright canvas, readable spacing, and restrained accents should reduce anxiety before copy does. UI implication: white space, subtle dividers, and tidy card structure are part of the trust model.

4. **Energy belongs in highlights.** Playful color should show up in moments of discovery, active presence, and positive momentum, not as a constant wall of stimulation. UI implication: keep hot-pink, sky accents, and canary cues sparse so they stay meaningful.

5. **Mobile-first, always.** The product is designed for on-the-go decisions during travel. UI implication: the 420px max-width is a design constraint, not a limitation — all interaction models should stay thumb-native and easy to scan quickly.

## 12. States

- **Empty (Nearby companions):** `#f3f3f3` circle container (64px) with a route or user icon in `#c2c2c2`; text "아직 딱 맞는 동행은 안 보이네요" in `#999` 15px/400; CTA to browse nearby routes in `#17181a` background
- **Loading (Nearby feed):** full-viewport light canvas `#ffffff` with centered spinner; card placeholders keep `background-size:contain` or fixed aspect-ratio blocks to prevent layout shift
- **Error (Route refresh):** light surface with clear text in `#323232` and support accent in `#1ec7be`; message should read "잠시 연결이 흔들렸어요. 한 번만 다시 불러올게요."
- **Error (Closed or unavailable plan):** text label "지금은 연결이 어려워요" in `#e83c3b` 15px/700; related thumbnail or card can reduce to 50% opacity via `.disabled`
- **Success (Request sent / plan joined):** action panel switches to `#f8f8f8`; icon color moves from `#eb2b51` to `#999`; label reads "가볍게 연결해뒀어요"
- **Skeleton (Route card):** `border-radius:8px; outline:1px solid rgba(0,0,0,0.05)` on the wrapper; image or map preview keeps a fixed aspect ratio to prevent layout shift
- **Disabled (Inactive highlight card):** `opacity:0.5` applied to all child elements inside the card
- **Timer / Freshness:** `font-variant-numeric:tabular-nums; font-feature-settings:"tnum"` on all time displays; color `#1ec7be`

## 13. Motion & Easing

**Duration scale:**
- Micro (state feedback): 80ms — bottom nav slide (`transition: all 0.08s linear`)
- Short (UI transitions): 150ms — Tailwind default (`cubic-bezier(0.4, 0, 0.2, 1)`)
- Medium (drawer open/close): 200–300ms — Radix accordion/drawer (`ease-out`)
- Long (highlight ring animation): 810ms — pulse-border, ripple-border (`cubic-bezier(0.167, 0.166, 1, 1)`)

**Easing tokens:**
- Standard: `cubic-bezier(0.4, 0, 0.2, 1)` (ease-in-out, Material-derived)
- Decelerate (drawer enter): `ease-out`
- Active ring: `cubic-bezier(0.167, 0.167, 0.833, 0.833)` for ripple ring
- Pulse entry: `cubic-bezier(0.167, 0.166, 1, 1)` for avatar or plan-highlight pulse

**Rules:**
- The highlight-ring animation (ripple-sm: scale 1.02→1.2, opacity 1→0) runs 4× then loops only when a person, plan, or status is genuinely active
- Bottom nav slides out (`translateY(100%)`) with 80ms linear — fast enough to feel native, not abrupt
- Drawer content uses Vaul/Radix `data-[state=open]` animate-in at 150ms; `data-[state=closed]` at 300ms (asymmetric: opens fast, closes deliberately)
- No spring physics; all motion is CSS cubic-bezier


---

## Included Components

The following components are part of this design system:

- Button
- Input
- Table
- Card
- Badge
- Tabs
- Dialog


---

## Iconography & SVG Guidelines

### Icon Library

Use a single, consistent icon library throughout the project.

- **Lucide React** (`lucide-react`): Recommended for TRADDY. The neutral 2px outline style fits the product's calm base and lets the lively color accents do the emotional work.

Use Lucide everywhere. Do not mix icon libraries within the same project.

### SVG Usage Rules

- All icons must be inline SVG components (not `<img>` tags) for color and size control.
- Icon size follows the type scale: 16px (inline), 20px (buttons), 24px (standalone).
- Icon color inherits from `currentColor` -- never hard-code fill/stroke colors.
- For custom/brand icons, export as SVG components with `currentColor` fills.
- Stroke width: 1.5px-2px for outline icons. Keep consistent across the project.

### Icon Sizing Scale

| Context | Size | Usage |
|---------|------|-------|
| Inline text | 16px (1rem) | Badges, labels, breadcrumbs |
| Button icon | 18px (1.125rem) | Icon buttons, CTA icons |
| Standalone | 24px (1.5rem) | Navigation, card icons |
| Feature | 32-48px | Hero sections, empty states |

### SVG Optimization

- Run all custom SVGs through SVGO before committing.
- Remove unnecessary attributes: `xmlns`, `xml:space`, editor metadata.
- Use `viewBox` instead of fixed `width`/`height` for scalability.


---

## Document Policies

### No Emojis

This design system should not use emojis in core product UI elements, component labels, status indicators, or system documentation.
Use SVG icons from the chosen icon library instead. Emojis render inconsistently across platforms and can cheapen the calm trust baseline.

- Status indicators: use colored dots or icon components, not emoji.
- Section markers: use text prefixes ("DO:" / "DON'T:") or icons, not checkmark/cross emojis.
- Navigation: use icon components, not emoji.

### Format Compliance

This document follows the Google Stitch DESIGN.md 9-section format:
1. Visual Theme & Atmosphere
2. Color Palette & Roles
3. Typography Rules
4. Component Stylings
5. Layout Principles
6. Depth & Elevation
7. Do's and Don'ts
8. Responsive Behavior
9. Agent Prompt Guide

Extended with:
- Iconography & SVG Guidelines
- Document Policies

Total target length: 250-400 lines. Keep sections concise and actionable.
