# Prompt journal

## 01 — User request
Помоги выполнить UI/UX Assignment на тему ScamLens — Cybersecurity (сайт проверки подозрительных URL): создать редактируемый дизайн в Figma с Auto Layout, компонентами с вариантами и токенами, подключить Figma MCP к VS Code, сгенерировать HTML/CSS, сравнить скриншоты V1/V2, улучшить дизайн, подготовить GitHub-репозиторий и отчёт с промптами. Веди работу пошагово, начиная с Figma.

## Execution record
- Assignment requirements retrieved from the referenced conversation.
- Figma creation and design skills read.
- Figma tools became unavailable before a file could be created.
- No design-generation or code-generation prompt has been executed yet.

Record subsequent prompts verbatim with their target frame URL, resulting artifact and verification evidence. Do not describe proposed prompts as executed prompts.

## 02 — Figma frame implementation prompt
Use 'mcp_figma_mcp_ser_get_design_context' to read this Figma frame:
[ВСТАВЬ ССЫЛКУ НА ФРЕЙМ]

Implement it faithfully using HTML, CSS and minimal JavaScript.
Save files in v1/index.html, v1/styles.css and v1/script.js.

Match typography, colors, spacing and layout. Use CSS variables
for design tokens. Make the page responsive.
URL checking must use clearly labelled demo results.

Save this exact prompt in docs/prompts.md without deleting
existing content. If Figma access fails, report the error
instead of inventing the design.

## 03 — Figma V2 iteration prompt
Continue with the assignment iteration using Figma MCP.

Preserve the original Figma V1 frame (node 3:45) and all v1 files.

1. Duplicate the Figma frame as “ScamLens / Desktop / V2”.
2. Add a 390px mobile frame with stacked hero columns,
20px side padding and touch targets of at least 44px.
3. Apply named spacing tokens consistently. Add form component
variants for empty, focused, invalid URL, loading and demo result.
Reuse existing components and tokens wherever possible.
4. Verify the actual Figma changes, then use get_design_context
on V2 to generate HTML/CSS/JS in v2/.
5. Capture V1 and V2 at matching viewport sizes. Do not label
scaled or unreliable captures as exact 1440px screenshots.
6. Update docs/comparison.md and append this prompt to
docs/prompts.md. Distinguish verified findings from limitations.

If a tool fails, report the exact blocker without claiming success.

## 04 — Figma mobile verification and delivery prompt
Fix the remaining verification issues before preparing delivery.

Inspect Figma mobile frame 4:176: verify its actual width,
height and child bounds. The reported 10×390 render is unusable.
Ensure the frame is 390px WIDE, with content-driven height,
20px side padding, a 40px hero heading and no clipped content.

If the frame is correct, fix the export instead of changing
the design. Re-read its context and update only v2 if needed.
Preserve V1.

Save usable Figma and browser screenshots at matching widths.
Use the existing browser tools; avoid further package installs.
Document actual dimensions and remaining limitations honestly.

Then prepare README.md and docs/report.md with Figma links,
prompts, before/after images, the differences table and conclusions.
Add a short Russian defense guide.
Prepare .gitignore excluding .venv, caches and credentials.
Do not publish to GitHub yet.
