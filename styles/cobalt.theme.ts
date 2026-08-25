import * as stylex from "@stylexjs/stylex";
import { vars } from "@/styles/tokens.stylex";

/** Apply this once at the app root. A second theme can override these values. */
export const cobaltTheme = stylex.createTheme(vars, {
    colorPaper: "oklch(98.5% 0.004 250)",
    colorSurface: "oklch(96.5% 0.007 250)",
    colorInk: "oklch(24% 0.02 258)",
    colorInkSoft: "oklch(34% 0.018 257)",
    colorRule: "oklch(82% 0.012 258)",
    colorAccent: "oklch(58% 0.2 256)",
    colorAccentDeep: "oklch(45% 0.16 256)",
    colorGraphite: "oklch(22% 0.016 260)",
    colorFocus: "oklch(48% 0.2 256)",
});
