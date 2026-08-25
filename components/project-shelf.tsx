"use client";

import * as stylex from "@stylexjs/stylex";
import { useEffect, useMemo, useState } from "react";
import { ProjectCard } from "@/components/project-card";
import type { Project } from "@/data/projects";
import { vars } from "@/styles/tokens.stylex";

type ProjectShelfProps = {
    projects: readonly Project[];
};

export function ProjectShelf({ projects }: ProjectShelfProps) {
    const categories = useMemo(() => ["All", ...Array.from(new Set(projects.map((project) => project.category)))] as const, [projects]);
    type Category = (typeof categories)[number];

    const [selectedCategory, setSelectedCategory] = useState<Category>("All");
    const [count, setCount] = useState(projects.length);
    const visibleProjects = useMemo(
        () => projects.filter((project) => selectedCategory === "All" || project.category === selectedCategory),
        [projects, selectedCategory],
    );

    useEffect(() => {
        const target = visibleProjects.length;
        const start = performance.now();
        let frame = 0;

        const tick = (now: number) => {
            if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                setCount(target);
                return;
            }

            const progress = Math.min((now - start) / 500, 1);
            setCount(Math.round(target * (1 - Math.pow(1 - progress, 3))));
            if (progress < 1) frame = requestAnimationFrame(tick);
        };

        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, [visibleProjects.length]);

    return (
        <section aria-labelledby="projects-title" id="projects" {...stylex.props(styles.section)}>
            <div {...stylex.props(styles.controls)}>
                <div>
                    <h2 id="projects-title" {...stylex.props(styles.controlLabel)}>Browse by kind</h2>
                    <p aria-live="polite" {...stylex.props(styles.count)}>
                        {count} {selectedCategory === "All" ? "sites on this shelf" : `${selectedCategory.toLowerCase()} sites`}
                    </p>
                </div>
                <div aria-label="Filter projects" {...stylex.props(styles.filters)}>
                    {categories.map((category) => {
                        const isSelected = selectedCategory === category;
                        return (
                            <button
                                aria-pressed={isSelected}
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                type="button"
                                {...stylex.props(styles.filter, isSelected && styles.filterSelected)}
                            >
                                {category}
                            </button>
                        );
                    })}
                </div>
            </div>

            <div {...stylex.props(styles.grid)}>
                {visibleProjects.map((project) => <ProjectCard key={project.url} project={project} />)}
            </div>
        </section>
    );
}

const styles = stylex.create({
    section: { borderTopColor: vars.colorRule, borderTopStyle: "solid", borderTopWidth: "1px", paddingBlockStart: vars.spaceLg },
    controls: { alignItems: "center", display: "flex", flexWrap: "wrap", gap: vars.spaceMd, justifyContent: "space-between", marginBlockEnd: vars.spaceXl },
    controlLabel: { color: vars.colorInkSoft, fontFamily: vars.fontMono, fontSize: vars.textXs, letterSpacing: "0.08em", margin: 0, textTransform: "uppercase" },
    count: { color: vars.colorInkSoft, fontSize: vars.textSm, marginBlock: vars.space2xs, marginInline: 0 },
    filters: { alignItems: "center", display: "flex", flexWrap: "wrap", gap: vars.spaceXs },
    filter: {
        backgroundColor: "transparent",
        borderColor: { default: vars.colorRule, ":hover": vars.colorAccent },
        borderRadius: vars.radiusSm,
        borderStyle: "solid",
        borderWidth: "1px",
        color: { default: vars.colorInkSoft, ":active": vars.colorAccentDeep, ":hover": vars.colorInk },
        cursor: "pointer",
        fontSize: vars.textSm,
        fontWeight: 500,
        minHeight: "2.75rem",
        paddingInline: vars.spaceSm,
        transitionDuration: vars.durationShort,
        transitionProperty: "border-color, color",
        transitionTimingFunction: vars.easeOut,
        whiteSpace: "nowrap",
        outlineColor: { default: "transparent", ":focus-visible": vars.colorFocus },
        outlineOffset: "3px",
        outlineStyle: "solid",
        outlineWidth: "2px",
    },
    filterSelected: { borderColor: vars.colorAccent, color: vars.colorAccentDeep },
    grid: {
        display: "grid",
        gap: vars.spaceMd,
        gridTemplateColumns: {
            default: "minmax(0, 1fr)",
            "@media (min-width: 42rem)": "repeat(2, minmax(0, 1fr))",
            "@media (min-width: 76rem)": "repeat(3, minmax(0, 1fr))",
        },
    },
});
