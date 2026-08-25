import * as stylex from "@stylexjs/stylex";
import { ProjectShelf } from "@/components/project-shelf";
import { projects } from "@/data/projects";
import { vars } from "@/styles/tokens.stylex";

export default function Home() {
    return (
        <>
            <header {...stylex.props(styles.nav)}>
                <a href="#projects" {...stylex.props(styles.wordmark)}>timo / sites</a>
                <a href="https://krito.tech/" rel="noreferrer" target="_blank" {...stylex.props(styles.navLink)}>Personal work ↗</a>
            </header>

            <main {...stylex.props(styles.shell)}>
                <section aria-labelledby="page-title" {...stylex.props(styles.hero)}>
                    <p {...stylex.props(styles.eyebrow)}>personal project index</p>
                    <h1 id="page-title" {...stylex.props(styles.title)}>Small tools. Clear jobs.</h1>
                    <p {...stylex.props(styles.lede)}>Games, travel helpers, reading tools, and a few projects that started with a particular problem.</p>
                </section>

                <ProjectShelf projects={projects} />
            </main>

            <footer aria-label="Footer" {...stylex.props(styles.footer)}>
                <p {...stylex.props(styles.footerCopy)}>timo / sites · personal project index</p>
                <div {...stylex.props(styles.footerLinks)}>
                    <a href="https://github.com/timsun28" rel="noreferrer" target="_blank" {...stylex.props(styles.footerLink)}>GitHub ↗</a>
                    <a href="https://krito.tech/" rel="noreferrer" target="_blank" {...stylex.props(styles.footerLink)}>Personal work ↗</a>
                </div>
            </footer>
        </>
    );
}

// Page-only styles stay next to the page markup.
const styles = stylex.create({
    nav: {
        alignItems: "center",
        borderBottomColor: vars.colorRule,
        borderBottomStyle: "solid",
        borderBottomWidth: "1px",
        display: "flex",
        justifyContent: "space-between",
        marginInline: "auto",
        maxWidth: "96rem",
        paddingBlock: vars.spaceMd,
        paddingInlineEnd: "clamp(1rem, 4vw, 3rem)",
        paddingInlineStart: "clamp(1rem, 4vw, 3rem)",
    },
    wordmark: {
        color: vars.colorInk,
        fontFamily: vars.fontDisplay,
        fontSize: vars.textLg,
        fontWeight: 600,
        letterSpacing: "-0.04em",
        minHeight: "2.75rem",
        textDecoration: "none",
        whiteSpace: "nowrap",
        outlineColor: { default: "transparent", ":focus-visible": vars.colorFocus },
        outlineOffset: "3px",
        outlineStyle: "solid",
        outlineWidth: "2px",
    },
    navLink: {
        alignItems: "center",
        borderColor: { default: vars.colorRule, ":hover": vars.colorAccent },
        borderRadius: vars.radiusSm,
        borderStyle: "solid",
        borderWidth: "1px",
        color: { default: vars.colorInk, ":active": vars.colorAccentDeep, ":hover": vars.colorAccentDeep },
        display: "inline-flex",
        fontFamily: vars.fontMono,
        fontSize: vars.textXs,
        fontWeight: 500,
        letterSpacing: "0.04em",
        minHeight: "2.75rem",
        paddingInline: vars.spaceSm,
        textDecoration: "none",
        transitionDuration: vars.durationShort,
        transitionProperty: "border-color, color",
        transitionTimingFunction: vars.easeOut,
        whiteSpace: "nowrap",
        outlineColor: { default: "transparent", ":focus-visible": vars.colorFocus },
        outlineOffset: "3px",
        outlineStyle: "solid",
        outlineWidth: "2px",
    },
    shell: { marginInline: "auto", maxWidth: "96rem", paddingBlock: vars.space3xl, paddingInlineEnd: "clamp(1rem, 4vw, 3rem)", paddingInlineStart: "clamp(1rem, 4vw, 3rem)" },
    hero: { display: "grid", gap: vars.spaceXl, marginBlockEnd: vars.space3xl, maxWidth: "72rem" },
    eyebrow: { color: vars.colorAccentDeep, fontFamily: vars.fontMono, fontSize: vars.textXs, fontWeight: 500, letterSpacing: "0.08em", margin: 0, textTransform: "uppercase" },
    title: { fontFamily: vars.fontDisplay, fontSize: vars.textDisplay, fontWeight: 600, letterSpacing: "-0.065em", lineHeight: 0.94, margin: 0, maxWidth: "12ch", minWidth: 0, overflowWrap: "anywhere" },
    lede: { color: vars.colorInkSoft, fontSize: vars.textXl, lineHeight: 1.4, margin: 0, maxWidth: "38rem" },
    footer: {
        alignItems: "center",
        borderTopColor: vars.colorRule,
        borderTopStyle: "solid",
        borderTopWidth: "1px",
        display: "flex",
        flexWrap: "wrap",
        gap: vars.spaceSm,
        justifyContent: "space-between",
        marginInline: "auto",
        maxWidth: "96rem",
        paddingBlock: vars.spaceLg,
        paddingInlineEnd: "clamp(1rem, 4vw, 3rem)",
        paddingInlineStart: "clamp(1rem, 4vw, 3rem)",
    },
    footerCopy: { color: vars.colorInkSoft, fontFamily: vars.fontMono, fontSize: vars.textXs, letterSpacing: "0.04em", margin: 0 },
    footerLinks: { display: "flex", flexWrap: "wrap", gap: vars.spaceSm },
    footerLink: {
        color: { default: vars.colorInkSoft, ":hover": vars.colorAccentDeep },
        fontSize: vars.textSm,
        fontWeight: 500,
        minHeight: "2.75rem",
        textDecorationColor: vars.colorAccent,
        textDecorationThickness: "1px",
        textUnderlineOffset: "0.2em",
        whiteSpace: "nowrap",
        outlineColor: { default: "transparent", ":focus-visible": vars.colorFocus },
        outlineOffset: "3px",
        outlineStyle: "solid",
        outlineWidth: "2px",
    },
});
