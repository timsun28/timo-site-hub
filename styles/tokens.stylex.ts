import * as stylex from "@stylexjs/stylex";

/**
 * Shared design tokens use StyleX variables, not hand-written `var(--...)`
 * strings. Import `vars` into component-local StyleX style objects.
 */
export const vars = stylex.defineVars({
    colorPaper: "oklch(98.5% 0.004 250)",
    colorSurface: "oklch(96.5% 0.007 250)",
    colorInk: "oklch(24% 0.02 258)",
    colorInkSoft: "oklch(34% 0.018 257)",
    colorRule: "oklch(82% 0.012 258)",
    colorAccent: "oklch(54% 0.16 250)",
    colorAccentDeep: "oklch(42% 0.13 250)",
    colorGraphite: "oklch(22% 0.016 260)",
    colorFocus: "oklch(48% 0.2 256)",
    fontDisplay: '"Space Grotesk", ui-sans-serif, system-ui, sans-serif',
    fontBody: '"Inter", ui-sans-serif, system-ui, sans-serif',
    fontMono: '"JetBrains Mono", ui-monospace, monospace',
    space2xs: "0.25rem",
    spaceXs: "0.5rem",
    spaceSm: "0.75rem",
    spaceMd: "1rem",
    spaceLg: "1.5rem",
    spaceXl: "2rem",
    space2xl: "3rem",
    space3xl: "4.5rem",
    textXs: "0.75rem",
    textSm: "0.875rem",
    textLg: "1.25rem",
    textXl: "1.5rem",
    textDisplay: "clamp(3.1rem, 8vw, 7.5rem)",
    radiusSm: "0.375rem",
    radiusCard: "0.625rem",
    durationFast: "70ms",
    durationShort: "140ms",
    easeOut: "cubic-bezier(0.16, 1, 0.3, 1)",
});
