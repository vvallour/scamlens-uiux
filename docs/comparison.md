# ScamLens V1/V2 comparison

## Evidence and scope

- Original Figma V1: `ScamLens / Desktop / V1`, node `3:45`
- Figma V2 desktop: `ScamLens / Desktop / V2`, node `4:22`
- Figma V2 mobile: `ScamLens / Mobile / V2`, node `4:176`
- Form component set: `URL Checker / Form States`, node `4:362`
- Original `v1/` files were preserved unchanged.
- V2 code is isolated in `v2/`.

## Verified Figma findings

- Frame `4:176` is 390 px wide.
- Its inspected metadata height was 16,612 px and several section/child bounds were incorrect for a mobile frame.
- The header navigation and demo button were outside the intended 350 px content area.
- The hero title text was not compliant with the requested 40 px size.
- The how-it-works and risk sections contained child widths of 18 px and large inherited text heights instead of stacked 350 px mobile widths.
- The form component set was verified at node `4:362` with `Empty`, `Focused`, `Invalid URL`, `Loading`, and `Demo result` variants.

## Verified browser implementation findings

- V2 uses 20 px side padding at the 620 px breakpoint.
- V2 sets the hero heading to 40 px with a 48 px line-height at the mobile breakpoint.
- V2 uses a stacked hero grid and stacked process/risk grids.
- V2 has no visible-element overflow in the browser probe.
- Browser probes reported 487 px inner width despite requests for 390 px, so browser captures are not exact 390 px captures.
- Browser interaction testing verified invalid-URL feedback and an explicitly labeled demo result.

## Differences table

| Area | V1 | V2 / verified state | Evidence |
|---|---|---|---|
| Desktop layout | Two-column hero | V2 desktop frame duplicated from V1 | Figma nodes `3:45` and `4:22` |
| Mobile hero | No dedicated frame | Dedicated 390 px-wide frame exists, but source child bounds require repair | Figma metadata for `4:176` |
| Mobile side padding | No explicit 20 px implementation | V2 CSS uses `--page-gutter: 20px` at <=620 px | `v2/styles.css` |
| Hero heading | 64 px desktop | 40 px at <=620 px | `v2/styles.css` and browser computed style |
| Form states | Static form | Empty, focused, invalid, loading and demo result variants exist; V2 JS handles invalid/loading/demo feedback | Figma node `4:362`; `v2/script.js` |
| Touch targets | Mixed | Header, navigation and demo controls use at least 44 px in V2 CSS | `v2/styles.css` |
| Demo labeling | Demo label present | Demo label and “not a live security scan” disclosure retained | V1 and V2 content |

## Capture labels

- `screenshots/v1-figma-scaled-desktop.png`: 785 x 1440 Figma export, scaled rather than exact viewport evidence.
- `screenshots/v2-figma-scaled-desktop.png`: 785 x 1440 Figma export, scaled rather than exact viewport evidence.
- `screenshots/v2-figma-mobile.png`: unusable 10 x 390 export; excluded from visual comparison.
- `screenshots/v1-browser-mobile-match.png`: browser full-page capture at the browser-reported matching 487 px inner width.
- `screenshots/v2-browser-mobile.png`: browser full-page capture at the browser-reported matching 487 px inner width.

## V2 code verification update

- `v2/assets/scamlens-mark.svg` was copied from `v1/assets/scamlens-mark.svg`.
- Both V2 logo references now use `assets/scamlens-mark.svg`; no `../v1/` path remains.
- The browser loaded the SVG successfully with natural dimensions 40 x 40.
- At the mobile breakpoint, the `<h1>` computed to `40px` font size and `48px` line-height.
- The header brand and demo button are in one row. The demo button computed to `133.6px` wide, `white-space: nowrap`, and `flex-shrink: 0` in the browser session.
- The overflow probe found no element to the left or right of the reported viewport.
- Refreshed screenshots: `screenshots/v1-browser-mobile-refreshed.png` and `screenshots/v2-browser-mobile-fixed.png`.

The V1 and V2 browser session both reported 487 px inner width after requesting 390 px, so this is verified responsive behavior under the available browser tooling, not an exact 390 px viewport test.

## Remaining limitations

- Figma MCP reached the Starter-plan tool-call limit during the layout repair. The exact repair could not be completed or re-verified in the canvas.
- The 10 x 390 Figma export is not usable for visual comparison and was not relabeled as a successful mobile export.
- Browser automation did not honor the requested 390 px viewport consistently. It reported 487 px inner width for the shared browser session.
- No exact 390 px Figma-vs-browser pixel comparison or exact 1440 px desktop pixel comparison is claimed.
- No GitHub repository or publication action was performed.
