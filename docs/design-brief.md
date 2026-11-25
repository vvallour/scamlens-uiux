# ScamLens — UI/UX Assignment

## Product
An educational URL-checking interface that helps users understand suspicious links before opening them. The assignment prototype uses clearly labelled demonstration results; it must not claim to perform a real security scan or guarantee safety.

## Figma first
- Desktop landing page: 1440 px; mobile adaptation: 390 px.
- Main flow: enter URL → validation → checking → result.
- Result states: low risk, suspicious, high risk, unavailable.
- Sections: navigation, headline, URL form, demonstration result, how it works, privacy note, footer.
- Visual direction: light neutral background, deep navy text, teal primary action; status colors paired with text labels.
- Typeface: Manrope, subject to availability in Figma.
- Layout: 8 px spacing system, readable content width, vertical and horizontal Auto Layout, descriptive layer names.

## Components and foundations
- Button: primary/secondary; default/hover/disabled/loading.
- URL input: empty/focus/filled/error.
- Result card: low-risk/suspicious/high-risk/unavailable.
- Status badge: corresponding risk states.
- Repeated explanation items: instances with editable text properties.
- Variables: semantic colors, spacing, radii, font sizes; string variables for reusable interface copy; typography styles.

## Evidence sequence
1. Create and inspect editable Figma V1; preserve its frame and screenshot.
2. Connect the Figma remote MCP in VS Code and verify get_design_context.
3. Generate HTML/CSS from the V1 frame; preserve the exact prompt and screenshot.
4. Record observed differences in spacing, colors, typography and responsive behavior.
5. Improve the Figma source based on those observations; preserve V2 separately.
6. Generate V2, compare matching viewport screenshots, document improvements and remaining differences.
7. Prepare GitHub repository and final report with real links and evidence.

## Current status
Brief prepared. No Figma file has been created. VS Code connection, code generation, screenshots and GitHub publication have not been performed.
