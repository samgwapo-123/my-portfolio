# UI Design & Frontend Quality Standard
## A practical design system and implementation guide for AI coding agents

> **Primary objective:** Build interfaces that feel intentionally art-directed, product-specific, polished, and genuinely useful—not like generic AI-generated templates.
>
> This document is a project-level standard. Read it before creating or modifying UI. Treat it as an ongoing quality bar, not a one-time prompt.

---

## 1. Core directive

Do not produce the first familiar layout that comes to mind. First understand the product, its users, the task they need to complete, and the visual character the interface should communicate.

Every interface must have:

1. **A clear visual direction** — a deliberate design concept, not a random collection of trendy effects.
2. **Strong hierarchy** — users should immediately understand what matters and what to do next.
3. **Distinctive composition** — layouts should be designed around the content, not assembled from the same navbar + centered hero + three cards + logo strip template.
4. **Purposeful detail** — typography, spacing, borders, shadows, imagery, icons, and motion should support the product's identity.
5. **Real usability** — responsive behavior, accessibility, meaningful states, and working interactions are mandatory.
6. **A refinement pass** — inspect the result, identify generic or weak areas, and improve them before declaring the work complete.

A visually impressive page that is confusing or unusable is not good UI. A functional page that looks like an untouched starter template is not finished UI.

## 2. Anti-AI-slop rules

Avoid these common defaults unless the product genuinely calls for them:

- Generic purple/blue gradients on a white background.
- The same centered hero headline, subtitle, two buttons, and floating dashboard mockup.
- Repeated rows of identical rounded cards for every kind of content.
- Excessive glassmorphism, blur, glow, neon borders, and gradient text.
- Huge headings that consume the viewport without communicating useful information.
- Overuse of pill-shaped buttons, badges, and rounded containers.
- Decorative blobs, random orbs, star icons, sparkles, and abstract shapes with no purpose.
- Every section having the same two-column layout or the same card grid.
- Too many borders, shadows, nested cards, and boxed sections.
- Fake metrics, fake testimonials, fake logos, fake activity, or invented product capabilities.
- Emoji used as a substitute for a coherent icon system.
- Placeholder copy such as “ 혁신적인 solutions”, “Unlock your potential”, “Seamless experience”, or meaningless marketing filler.
- Arbitrary animations that delay reading or make controls harder to use.
- A dashboard where every number is equally prominent and every panel competes for attention.
- Mobile layouts that merely shrink desktop content.

**Rule:** If a design choice could be copied unchanged into almost any SaaS product, question whether it is specific enough.

Do not interpret “avoid AI-like UI” as “make everything unusual.” Clarity, restraint, consistency, and strong information architecture are more valuable than novelty for its own sake.

## 3. Design before implementation

Before writing components, briefly establish the design direction.

### 3.1 Understand the product

Identify:

- Product type: dashboard, SaaS, portfolio, ecommerce, admin panel, landing page, internal tool, student project, etc.
- Primary audience and their technical familiarity.
- The main user task on each screen.
- The most important content and actions.
- Brand personality: calm, technical, playful, editorial, premium, utilitarian, expressive, etc.
- Existing design constraints: brand colors, logo, typography, framework, component library, and established patterns.

Do not invent brand facts, product features, user statistics, or content. If information is missing, use sensible neutral assumptions and keep them easy to change.

### 3.2 Choose a visual concept

Choose one coherent direction that fits the product. Examples:

- **Editorial:** expressive typography, asymmetric grids, strong image composition, generous whitespace.
- **Technical / developer tool:** precise spacing, dense but readable information, restrained color, clear data hierarchy.
- **Premium product:** confident typography, controlled contrast, refined surfaces, careful transitions.
- **Playful / creative:** expressive color, unusual composition, lively but controlled interactions.
- **Utility / operations:** fast scanning, compact layouts, clear status colors, high information density.
- **Minimal:** fewer elements, strong type scale, excellent spacing, subtle detail.

Do not blindly copy a reference website. Extract the underlying design principle and adapt it to the product.

### 3.3 Establish design tokens

Define or reuse shared tokens before styling many screens:

- Background and surface colors.
- Primary, secondary, accent, and semantic colors.
- Text colors and muted text.
- Border and divider colors.
- Typography families, sizes, weights, and line heights.
- Spacing scale.
- Content widths and layout breakpoints.
- Border radii.
- Shadow levels.
- Motion durations and easing.

Use CSS variables or the project's existing token system. Avoid scattering arbitrary hex values, spacing values, and radii throughout components.

Example token structure (adapt values to the actual brand):

```css
:root {
  --background: ...;
  --foreground: ...;
  --surface: ...;
  --surface-muted: ...;
  --primary: ...;
  --accent: ...;
  --border: ...;
  --muted: ...;

  --font-display: ...;
  --font-body: ...;

  --space-1: ...;
  --space-2: ...;
  --space-3: ...;
  --space-4: ...;

  --radius-sm: ...;
  --radius-md: ...;
  --radius-lg: ...;
}
```

Do not use the example ellipses literally. Set real values that match the project's visual direction.

## 4. Layout and composition

### 4.1 Create hierarchy intentionally

- Give each page one clear primary focus.
- Make the most important action visually obvious.
- Use size, weight, contrast, spacing, and position to establish hierarchy.
- Group related information and separate unrelated information.
- Keep supporting content visually subordinate.
- Use whitespace to create rhythm, not as a substitute for content.
- Align elements to a consistent grid.
- Use readable line lengths for long-form text.

### 4.2 Avoid repetitive composition

Do not force every section into cards. Consider alternatives:

- Open editorial sections.
- Split layouts.
- Asymmetric grids.
- Full-bleed media.
- Side navigation with a focused work area.
- Tables for comparable structured data.
- Timelines for chronological information.
- Lists for scannable records.
- Tabs for related views.
- Accordions for secondary details.
- Bento grids only when the content genuinely has varied importance or shape.

Use card containers when they establish meaningful grouping, interaction, or separation—not as a default wrapper.

### 4.3 Use appropriate density

- Marketing pages can use more whitespace and larger visual elements.
- Operational dashboards should prioritize scanning and task completion.
- Data-heavy pages should remain compact without becoming cramped.
- Forms should make labels, instructions, validation, and progress easy to understand.
- Mobile interfaces should prioritize the primary task and progressively reveal secondary details.

### 4.4 Responsive design

Design for narrow screens as a real layout, not an afterthought.

- Test small phones, large phones, tablets, laptops, and wide screens.
- Prevent horizontal overflow.
- Reflow grids and navigation intentionally.
- Make touch targets comfortably usable.
- Keep important actions reachable.
- Do not hide essential content merely to preserve a desktop composition.
- Check long labels, empty states, tables, dialogs, and navigation on mobile.
- Use responsive typography and spacing rather than fixed desktop dimensions.

## 5. Typography

Typography is a major part of the visual identity. Do not rely on browser defaults or use one font size for everything.

- Use a deliberate type pairing or a single well-chosen family.
- Choose display type for personality and body type for sustained readability.
- Establish a consistent type scale.
- Use weight and size to communicate hierarchy.
- Keep paragraph line lengths comfortable.
- Use appropriate line height; dense UI text and editorial copy need different treatment.
- Avoid oversized headings on every page.
- Avoid making every label uppercase with excessive letter spacing.
- Use tabular numerals for financial figures, metrics, and aligned numeric data where useful.
- Ensure muted text still has sufficient contrast.

Possible font directions (choose based on product identity, not trend alone): Inter, Geist, Manrope, DM Sans, Plus Jakarta Sans, IBM Plex Sans, Space Grotesk, Sora, Instrument Serif, Fraunces, or a suitable system font. Check availability and licensing before adding fonts.

## 6. Color, surfaces, and depth

- Build a limited, coherent palette.
- Use semantic colors consistently: success, warning, danger, and informational.
- Reserve accent colors for meaningful emphasis and actions.
- Maintain sufficient text and control contrast.
- Use subtle surface differences to create depth where needed.
- Use shadows sparingly and consistently.
- Do not add gradients just to make a page look “modern.”
- Do not use glass effects unless transparency and layering fit the concept.
- Avoid low-contrast gray-on-gray interfaces.
- Make light and dark themes feel intentionally designed if both are supported.

## 7. Components and reference libraries

Use the project's existing stack first. Inspect installed dependencies, conventions, aliases, and components before adding new packages.

### 7.1 shadcn/ui — reliable product foundations

Reference: https://ui.shadcn.com/

Use shadcn/ui for accessible, composable foundations such as:

- Buttons, inputs, labels, selects, checkboxes, switches.
- Dialogs, drawers, popovers, tooltips, dropdown menus.
- Tabs, accordions, navigation, command menus.
- Tables, calendars, charts, forms, and feedback states.
- Consistent theming and reusable primitives.

Guidelines:

- Treat shadcn/ui as a foundation, not a finished visual identity.
- Customize tokens, variants, spacing, typography, and composition to fit the product.
- Prefer semantic variants over one-off styling.
- Preserve keyboard behavior and accessibility.
- Read the current component documentation and API before using unfamiliar components.
- Use the official registry and review third-party registry code before installing it.
- Do not replace a working component system just to follow a trend.

### 7.2 21st.dev — component and design inspiration

Reference: https://21st.dev/

Use it to explore:

- Hero sections and navigation.
- Cards, grids, and interactive components.
- AI chat interfaces and product widgets.
- Backgrounds, shaders, and visual treatments.
- Themes and complete page patterns.

Guidelines:

- Search for a component that solves the actual design problem.
- Evaluate its visual fit, code quality, accessibility, responsiveness, and dependencies.
- Adapt it to the project's design tokens.
- Do not paste several unrelated components into one page.
- Treat community components as external code: inspect before installing.

### 7.3 React Bits — expressive motion and visual components

Reference: https://www.reactbits.dev/

Use it for selected:

- Text animations.
- Background effects.
- Interactive components.
- Micro-interactions.
- Motion-driven visual elements.

Guidelines:

- Choose effects that reinforce the product's identity or communicate state.
- Prefer a few strong moments over motion everywhere.
- Check the component's framework, CSS/Tailwind requirements, and installation instructions.
- Tune every available parameter to the design instead of accepting defaults.
- Ensure effects do not obstruct text, controls, or performance.

### 7.4 Magic UI — polished landing-page effects

Reference: https://magicui.design/

Useful component families include:

- Bento grids and marquees.
- Animated beams and borders.
- Text reveals, blur-fade, and word transitions.
- Interactive buttons and cards.
- Background patterns, particles, and light effects.
- Device mockups and visual demonstrations.

Guidelines:

- Use Magic UI selectively, especially for marketing and presentation surfaces.
- Keep one dominant visual effect per major section.
- Do not combine multiple attention-grabbing effects in the same viewport.
- Avoid decorative animation in dense operational screens.
- Check current installation instructions and dependencies.

### 7.5 Motion — interaction and animation system

Reference: https://motion.dev/

Use Motion for React when it is appropriate for:

- Enter and exit transitions.
- Hover, tap, and drag gestures.
- Layout transitions.
- Scroll-triggered and scroll-linked animation.
- Staggered content reveals.
- Shared layout and presence transitions.

Guidelines:

- Motion must communicate hierarchy, feedback, continuity, or affordance.
- Keep durations short for routine interface feedback.
- Use spring motion when it feels natural, not as a default for everything.
- Animate transform and opacity where possible; avoid expensive layout animation when a cheaper alternative works.
- Avoid animating large lists or entire pages unnecessarily.
- Respect `prefers-reduced-motion` and Motion's reduced-motion support.
- Ensure content remains understandable if animation is disabled.
- Do not delay essential interactions behind decorative sequences.

### 7.6 Impeccable — design critique and refinement

Reference: https://impeccable.style/

Use its workflow and vocabulary to guide design work:

- `shape` — turn a product idea into a concrete design direction.
- `audit` — identify implementation and design problems.
- `critique` — find what makes an interface feel weak or generic.
- `layout` — improve composition and hierarchy.
- `typeset` — refine typography.
- `colorize` — improve color use.
- `animate` — add purposeful motion.
- `bolder` / `overdrive` — explore a stronger visual direction when appropriate.
- `quieter` / `distill` — remove clutter and simplify.
- `adapt` — improve responsive behavior.
- `clarify` — make actions and information easier to understand.
- `harden` — handle edge cases and failure states.
- `polish` — finish details.
- `document` — record the design system for future work.

If Impeccable is installed in the coding environment, use its actual supported commands and workflows. Do not pretend it is installed or invent command results. If it is not installed, apply the same critique-and-refinement principles manually.

## 8. Component selection rules

Before building a custom component:

1. Check whether the project already has an equivalent.
2. Check the official component library.
3. Search the reference libraries for a suitable pattern.
4. Inspect the source and dependencies.
5. Confirm accessibility, responsiveness, and compatibility.
6. Adapt the component to the product's tokens and interaction model.

Prefer a small, consistent component vocabulary over a large collection of unrelated visual patterns.

Do not add a library for one tiny effect if CSS or an existing dependency can handle it cleanly. Avoid duplicate animation libraries and overlapping component systems.

## 9. Interaction design and states

Every interactive element must have a clear purpose and complete behavior.

### Required states to consider

- Default.
- Hover.
- Focus-visible.
- Active / pressed.
- Disabled.
- Loading.
- Success.
- Error.
- Empty.
- Selected.
- Expanded / collapsed.

### Interaction rules

- Buttons must perform the action their labels promise.
- Links must navigate to meaningful destinations.
- Inputs need visible labels and useful validation.
- Forms need loading, success, and error feedback.
- Destructive actions should have appropriate confirmation or undo.
- Dialogs and menus should support keyboard use and sensible focus behavior.
- Provide clear feedback after user actions.
- Avoid hover-only functionality.
- Do not use a clickable-looking element that does nothing.
- Avoid surprising navigation or state changes.
- Preserve user input when validation fails where practical.

## 10. Motion and micro-interaction principles

Use motion to make an interface feel responsive and understandable—not to show off the animation library.

Good uses:

- A button press that confirms interaction.
- A menu or dialog that opens and closes smoothly.
- A tab indicator that follows the selected tab.
- A list item that enters after a successful action.
- A number that transitions when its value changes.
- A subtle hover response that makes an interactive surface discoverable.
- A progress indicator that communicates actual progress.

Avoid:

- Constant floating, pulsing, spinning, or bouncing.
- Scroll hijacking.
- Long intro animations before users can interact.
- Animating every word or card.
- Large parallax effects that distract from content.
- Motion that causes layout shifts or makes text difficult to read.
- Infinite animation without a meaningful reason.

Suggested starting ranges (adjust to context):

| Interaction | Typical duration |
|---|---:|
| Button / hover feedback | 100–180 ms |
| Tooltip / small menu | 120–200 ms |
| Dialog / drawer | 180–280 ms |
| Layout transition | 200–350 ms |
| Larger, intentional reveal | 300–500 ms |

These are starting points, not rigid requirements. Prefer consistent timing and easing across the product.

## 11. Accessibility and inclusive design

Accessibility is part of implementation quality.

- Use semantic HTML.
- Use buttons for actions and anchors for navigation.
- Provide labels for form controls.
- Maintain logical heading order.
- Support keyboard navigation.
- Make focus states visible.
- Use appropriate ARIA only when native semantics are insufficient.
- Provide meaningful alternative text for informative images.
- Do not communicate status through color alone.
- Check contrast.
- Respect reduced-motion preferences.
- Ensure dialogs manage focus correctly.
- Make touch targets practical on mobile.
- Keep error messages specific and connected to their fields.

Do not remove native browser behavior without a good reason.

## 12. Content and visual assets

- Use real product content when available.
- Use authentic screenshots, product imagery, and illustrations when they add value.
- Do not invent customer logos, testimonials, ratings, analytics, or user counts.
- Avoid random stock imagery that does not support the message.
- Use consistent image aspect ratios and intentional cropping.
- Use a consistent icon family and stroke weight.
- Prefer SVG or the project's established icon library over emoji for interface icons.
- Give images appropriate alt text.
- Use skeletons or placeholders only when they represent a real loading state.
- Make empty states explain what happened and what the user can do next.

## 13. Page-specific guidance

### Landing pages

- Communicate what the product is, who it helps, and why it matters quickly.
- Give the hero a distinctive composition and a meaningful visual anchor.
- Use proof only when it is real and verifiable.
- Vary section layouts according to the content.
- Use a clear call to action.
- Avoid generic feature-card grids repeated down the entire page.

### Dashboards and admin panels

- Prioritize the user's daily tasks and most important information.
- Establish clear navigation and page context.
- Make data scannable with useful labels, comparisons, and units.
- Use charts only when they clarify a pattern or decision.
- Avoid decorative charts and meaningless metrics.
- Use tables for precise comparisons and operational records.
- Provide filters, sorting, pagination, and empty states when relevant.
- Make status and destructive actions unmistakable.

### Forms and onboarding

- Ask only for information needed at that step.
- Group related fields.
- Use clear labels and concise helper text.
- Explain validation errors next to the relevant field.
- Show progress when a flow has multiple steps.
- Preserve entered information when moving between steps.
- Provide a clear completion state.

### Portfolios

- Let the work and the person's role be the focus.
- Use strong typography and intentional project imagery.
- Make project descriptions specific.
- Include real links and relevant technical details.
- Avoid unnecessary dashboard-like cards for every section.
- Keep contact information and navigation easy to find.

### Ecommerce

- Make product imagery, price, options, availability, and primary actions clear.
- Keep product selection and checkout friction low.
- Make cart and checkout feedback immediate.
- Do not hide important costs or conditions.
- Support empty, loading, error, and unavailable states.

## 14. Engineering quality

A polished interface must also be maintainable.

- Follow the framework and conventions already used by the repository.
- Reuse existing components and tokens.
- Keep components focused and composable.
- Separate data, state, and presentation appropriately.
- Avoid unnecessary dependencies.
- Avoid duplicated CSS and contradictory utility classes.
- Do not rewrite unrelated parts of the application during a focused UI task.
- Preserve existing business logic and API contracts unless the task requires changes.
- Use stable keys for rendered collections.
- Handle loading, error, empty, and success states.
- Avoid console errors, broken imports, hydration issues, and React warnings.
- Optimize images and avoid unnecessary large assets.
- Lazy-load expensive sections when appropriate.
- Avoid layout shifts and unnecessary re-renders.
- Test actual interactions, not just the static appearance.

Never sacrifice working functionality to achieve a visual effect.

## 15. Required AI implementation workflow

Follow this sequence for each substantial UI task.

### Phase 1 — Inspect

- Read the relevant project files.
- Identify framework, routing, styling system, component library, icon library, and animation dependencies.
- Inspect existing pages and shared components.
- Identify what must remain unchanged.
- Do not assume the project uses a stack that it does not use.

### Phase 2 — Plan

- Identify the user and primary task.
- Choose a visual direction.
- Define the page hierarchy and composition.
- Reuse or define design tokens.
- Identify components and interactions needed.
- Decide where motion adds real value.
- Keep the plan proportional to the task.

### Phase 3 — Implement

- Build with reusable components.
- Apply the visual system consistently.
- Use appropriate reference components where useful.
- Make all controls functional.
- Include responsive layouts and interaction states.
- Preserve existing business logic.

### Phase 4 — Inspect and critique

Review the actual rendered interface when browser or screenshot tools are available.

Ask:

- Does this look specific to this product?
- Is the hierarchy immediately clear?
- Is the composition too predictable?
- Are there too many cards, pills, gradients, shadows, or borders?
- Is the typography distinctive and readable?
- Is the spacing consistent?
- Are the most important actions obvious?
- Does anything look decorative but meaningless?
- Does the mobile layout feel intentionally designed?
- Are all states and interactions complete?

If visual inspection tools are unavailable, inspect the code carefully and state that browser-level visual verification was not performed. Do not claim to have visually tested what you did not see.

### Phase 5 — Refine

Fix the highest-impact issues first:

1. Information hierarchy and layout.
2. Typography and spacing.
3. Color and contrast.
4. Component consistency.
5. Responsive behavior.
6. Interaction and motion.
7. Small visual details.

Do not spend time polishing tiny shadows while the page structure is still generic or confusing.

### Phase 6 — Verify

- Run the project's available lint, type-check, build, and test commands where practical.
- Resolve errors introduced by the changes.
- Check responsive breakpoints.
- Test primary actions and form behavior.
- Check keyboard focus and reduced motion.
- Report what was changed and what could not be verified.

## 16. Definition of done

A UI task is not complete until the relevant checks pass.

- [ ] The design has a clear, product-appropriate visual direction.
- [ ] The result does not rely on generic AI template patterns.
- [ ] Typography and hierarchy are intentional.
- [ ] Spacing, colors, borders, and radii are consistent.
- [ ] Layout is responsive and has no unintended overflow.
- [ ] Components fit together as one coherent system.
- [ ] All visible controls work.
- [ ] Loading, empty, error, and success states are handled where relevant.
- [ ] Accessibility basics are addressed.
- [ ] Motion is purposeful and respects reduced-motion preferences.
- [ ] Existing functionality and business logic remain intact.
- [ ] Relevant build, lint, type, and test checks have been run.
- [ ] The interface has been critiqued and refined at least once.

## 17. Instructions to the AI agent

When asked to build or improve a UI:

1. Read this file first.
2. Inspect the actual repository and current implementation.
3. Do not immediately generate a generic layout.
4. Make design decisions based on the product and users.
5. Use the reference libraries as sources of patterns and components, not as permission to blindly copy.
6. Keep the visual identity coherent across every page.
7. Prefer fewer, better-executed effects over excessive decoration.
8. Do not claim a feature, interaction, test, or visual inspection is complete unless it actually is.
9. Do not stop when the page merely compiles. Critique and refine the rendered result when possible.
10. If an existing design is already strong, preserve it and improve only what needs improvement.

**The target is not “more effects.” The target is a distinctive, coherent, usable, production-quality interface that looks deliberately designed by someone who understands the product.**

---

## 18. Official reference links

Use the official documentation and component pages for current APIs, installation steps, examples, and compatibility. These libraries change over time; verify current instructions before installing or implementing a component.

| Reference | Best used for |
|---|---|
| [React Bits](https://reactbits.dev/) | Animated React components, text effects, backgrounds, and micro-interactions |
| [21st.dev](https://21st.dev/) | Community components, themes, templates, and design inspiration |
| [shadcn/ui](https://ui.shadcn.com/) | Accessible foundations, theming, components, blocks, and registries |
| [Magic UI](https://magicui.design/) | Animated components, landing-page sections, backgrounds, and visual effects |
| [Motion](https://motion.dev/) | React/JavaScript animation, gestures, layout, and scroll interactions |
| [Impeccable](https://impeccable.style/) | AI design workflows, critique, audits, refinement, and design-system documentation |

### Additional useful references

- [shadcn/ui component documentation](https://ui.shadcn.com/docs/components)
- [shadcn/ui theming](https://ui.shadcn.com/docs/theming)
- [shadcn/ui registries](https://ui.shadcn.com/docs/registry)
- [Motion for React](https://motion.dev/docs/react)
- [Motion accessibility](https://motion.dev/docs/react-accessibility)
- [Magic UI components](https://magicui.design/docs/components)
- [Impeccable documentation](https://impeccable.style/docs/)
- [Impeccable design workflows](https://impeccable.style/docs/)

---

*End of UI Design & Frontend Quality Standard.*
