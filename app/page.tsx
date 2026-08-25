"use client";

import * as stylex from "@stylexjs/stylex";
import { useEffect, useMemo, useState } from "react";
import { styles } from "@/styles/site.styles";

const sites = [
    { title: "Sudoku Combination Finder", description: "Find killer-sudoku combinations from a sum and a cell count.", url: "sudoku.krito.tech", github: "https://github.com/timsun28/Sudoku-combination-finder", category: "Games", mark: "Σ" },
    { title: "Data Usage Calculator", description: "Work out how much mobile data should be left this month. It saves the limit locally.", url: "data.krito.tech", github: "https://github.com/timsun28/Data-Usage-Calculator", category: "Utility", mark: "GB" },
    { title: "Chess Clock", description: "A no-fuss clock for keeping a chess game moving.", url: "chess.krito.tech", github: "https://github.com/timsun28/Chess-Clock", category: "Games", mark: "♞" },
    { title: "Nines Score Tracker", description: "Keep score for Nines with themes you can change to suit the table.", url: "nines.krito.tech", github: "https://github.com/timsun28/NextJS-Nines-App", category: "Games", mark: "9" },
    { title: "New Zealand DOC Hike Finder", description: "Find DOC hikes, with offline support for places where the signal disappears.", url: "hike.krito.tech", github: "https://github.com/timsun28/NextJS-DOC-App", category: "Travel", mark: "NZ" },
    { title: "France Department Lookup", description: "Turn a French department number into a name and a Wikipedia link.", url: "france.krito.tech", github: "https://github.com/timsun28/france-departments", category: "Travel", mark: "FR" },
    { title: "Italy Green Zone Finder", description: "Check whether a place in Italy sits in a green zone.", url: "italy.greenzone.krito.tech", github: "https://github.com/timsun28/italy.greenzones.krito.tech", category: "Travel", mark: "IT" },
    { title: "Mistborn Reading Tracker", description: "Track a Mistborn reread and the wait for Era 3.", url: "mistborn.krito.tech", github: "https://github.com/timsun28/mistborn-era-tracker", category: "Books", mark: "MB" },
    { title: "PDF to Payment QR Converter", description: "Pull payment details from an invoice and make an EPC QR code.", url: "pdf2qr.krito.tech", github: "https://github.com/timsun28/pdf-to-qr", category: "Finance", mark: "QR" },
    { title: "Pushup Trainer", description: "A three-day pushup plan with set counts, reps, and a rest timer.", url: "pushup.krito.tech", github: "https://github.com/timsun28/pushup.krito.tech", category: "Health", mark: "3×" },
] as const;

const categories = ["All", ...Array.from(new Set(sites.map((site) => site.category)))] as const;
type Category = (typeof categories)[number];

export default function Home() {
    const [selectedCategory, setSelectedCategory] = useState<Category>("All");
    const [count, setCount] = useState(0);
    const visibleSites = useMemo(() => sites.filter((site) => selectedCategory === "All" || site.category === selectedCategory), [selectedCategory]);

    useEffect(() => {
        const target = visibleSites.length;
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
    }, [visibleSites.length]);

    return (
        <div {...stylex.props(styles.page)}>
            <header {...stylex.props(styles.nav)}>
                <a href="#projects" {...stylex.props(styles.wordmark)}>timo / sites</a>
                <a href="https://krito.tech/" rel="noreferrer" target="_blank" {...stylex.props(styles.navLink)}>Personal work ↗</a>
            </header>

            <main {...stylex.props(styles.shell)}>
                <section aria-labelledby="page-title" {...stylex.props(styles.hero)}>
                    <p {...stylex.props(styles.eyebrow)}>personal project index</p>
                    <h1 id="page-title" {...stylex.props(styles.title)}>Small tools. Clear jobs.</h1>
                    <div {...stylex.props(styles.heroBottom)}>
                        <p {...stylex.props(styles.lede)}>Games, travel helpers, reading tools, and a few projects that started with a particular problem.</p>
                        <div aria-live="polite" {...stylex.props(styles.count)}>
                            <strong {...stylex.props(styles.countNumber)}>{count}</strong>
                            <p {...stylex.props(styles.countText)}>{selectedCategory === "All" ? "sites on this shelf" : `${selectedCategory.toLowerCase()} sites`}</p>
                        </div>
                    </div>
                </section>

                <section aria-labelledby="projects" id="projects">
                    <div {...stylex.props(styles.controls)}>
                        <h2 id="projects" {...stylex.props(styles.controlLabel)}>Browse by kind</h2>
                        <div aria-label="Filter projects" {...stylex.props(styles.filters)}>
                            {categories.map((category) => <button aria-pressed={selectedCategory === category} key={category} onClick={() => setSelectedCategory(category)} type="button" {...stylex.props(styles.filter, selectedCategory === category && styles.filterSelected)}>{category}</button>)}
                        </div>
                    </div>

                    <div {...stylex.props(styles.grid)}>
                        {visibleSites.map((site) => (
                            <article key={site.url} {...stylex.props(styles.card)}>
                                <div {...stylex.props(styles.cardTop)}><span aria-hidden="true" {...stylex.props(styles.projectMark)}>{site.mark}</span><span {...stylex.props(styles.category)}>{site.category}</span></div>
                                <div {...stylex.props(styles.cardBody)}><h3 {...stylex.props(styles.cardTitle)}>{site.title}</h3><p {...stylex.props(styles.cardDescription)}>{site.description}</p></div>
                                <div {...stylex.props(styles.cardFooter)}>
                                    <a href={`https://${site.url}`} rel="noreferrer" target="_blank" {...stylex.props(styles.visit)}>Open site <span aria-hidden="true">↗</span></a>
                                    <a href={site.github} rel="noreferrer" target="_blank" {...stylex.props(styles.source)}>Source</a>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </main>

            <footer aria-label="Footer" {...stylex.props(styles.footer)}>
                <p {...stylex.props(styles.footerCopy)}>timo / sites · personal project index</p>
                <div {...stylex.props(styles.footerLinks)}>
                    <a href="https://github.com/timsun28" rel="noreferrer" target="_blank" {...stylex.props(styles.footerLink)}>GitHub ↗</a>
                    <a href="https://krito.tech/" rel="noreferrer" target="_blank" {...stylex.props(styles.footerLink)}>Personal work ↗</a>
                </div>
            </footer>
        </div>
    );
}
