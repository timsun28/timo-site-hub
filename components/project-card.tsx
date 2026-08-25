import * as stylex from "@stylexjs/stylex";
import type { Project } from "@/data/projects";
import { vars } from "@/styles/tokens.stylex";

type ProjectCardProps = {
    project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <article {...stylex.props(styles.card)}>
            <div {...stylex.props(styles.cardTop)}>
                <span aria-hidden="true" {...stylex.props(styles.projectMark)}>{project.mark}</span>
                <span {...stylex.props(styles.category)}>{project.category}</span>
            </div>
            <div {...stylex.props(styles.cardBody)}>
                <h3 {...stylex.props(styles.cardTitle)}>{project.title}</h3>
                <p {...stylex.props(styles.cardDescription)}>{project.description}</p>
            </div>
            <div {...stylex.props(styles.cardFooter)}>
                <a href={`https://${project.url}`} rel="noreferrer" target="_blank" {...stylex.props(styles.visit)}>
                    Open site <span aria-hidden="true">↗</span>
                </a>
                <a href={project.github} rel="noreferrer" target="_blank" {...stylex.props(styles.source)}>Source</a>
            </div>
        </article>
    );
}

// This component owns these styles. Local `create` + `props` calls compile away.
const styles = stylex.create({
    card: {
        backgroundColor: { default: vars.colorPaper, ":focus-within": vars.colorSurface, ":hover": vars.colorSurface },
        borderColor: { default: vars.colorRule, ":focus-within": vars.colorAccent, ":hover": vars.colorAccent },
        borderRadius: vars.radiusCard,
        borderStyle: "solid",
        borderWidth: "1px",
        display: "grid",
        gap: vars.spaceMd,
        gridTemplateRows: "auto 1fr auto",
        minWidth: 0,
        padding: vars.spaceMd,
        transitionDuration: vars.durationShort,
        transitionProperty: "border-color, background-color",
        transitionTimingFunction: vars.easeOut,
    },
    cardTop: { alignItems: "start", display: "flex", justifyContent: "space-between" },
    projectMark: {
        alignItems: "center",
        backgroundColor: vars.colorSurface,
        borderColor: vars.colorRule,
        borderRadius: vars.radiusSm,
        borderStyle: "solid",
        borderWidth: "1px",
        color: vars.colorInkSoft,
        display: "inline-flex",
        fontFamily: vars.fontMono,
        fontSize: vars.textXs,
        fontWeight: 500,
        height: "2rem",
        justifyContent: "center",
        minWidth: "2rem",
    },
    category: { color: vars.colorInkSoft, fontFamily: vars.fontMono, fontSize: vars.textXs, letterSpacing: "0.04em", paddingBlock: vars.space2xs, whiteSpace: "nowrap" },
    cardBody: { display: "grid", gap: vars.spaceXs },
    cardTitle: { fontFamily: vars.fontDisplay, fontSize: vars.textXl, fontWeight: 600, letterSpacing: "-0.045em", lineHeight: 1.05, margin: 0, minWidth: 0, overflowWrap: "anywhere" },
    cardDescription: { color: vars.colorInkSoft, fontSize: vars.textSm, lineHeight: 1.5, margin: 0 },
    cardFooter: { alignItems: "center", display: "flex", flexWrap: "wrap", gap: vars.spaceMd, justifyContent: "space-between" },
    visit: {
        alignItems: "center",
        backgroundColor: { default: vars.colorAccent, ":active": vars.colorGraphite, ":hover": vars.colorAccentDeep },
        borderColor: { default: vars.colorAccent, ":active": vars.colorGraphite, ":hover": vars.colorAccentDeep },
        borderRadius: vars.radiusSm,
        borderStyle: "solid",
        borderWidth: "1px",
        color: vars.colorPaper,
        display: "inline-flex",
        fontSize: vars.textSm,
        fontWeight: 600,
        justifyContent: "center",
        minHeight: "2.75rem",
        paddingInline: vars.spaceMd,
        textDecoration: "none",
        transitionDuration: vars.durationShort,
        transitionProperty: "background-color, border-color",
        transitionTimingFunction: vars.easeOut,
        whiteSpace: "nowrap",
        outlineColor: { default: "transparent", ":focus-visible": vars.colorFocus },
        outlineOffset: "3px",
        outlineStyle: "solid",
        outlineWidth: "2px",
    },
    source: {
        alignItems: "center",
        color: { default: vars.colorInkSoft, ":active": vars.colorAccent, ":hover": vars.colorAccentDeep },
        display: "inline-flex",
        fontSize: vars.textSm,
        fontWeight: 500,
        minHeight: "2.75rem",
        textDecorationColor: vars.colorAccent,
        textDecorationThickness: "1px",
        textUnderlineOffset: "0.2em",
        transitionDuration: vars.durationFast,
        transitionProperty: "color",
        transitionTimingFunction: vars.easeOut,
        whiteSpace: "nowrap",
        outlineColor: { default: "transparent", ":focus-visible": vars.colorFocus },
        outlineOffset: "3px",
        outlineStyle: "solid",
        outlineWidth: "2px",
    },
});
