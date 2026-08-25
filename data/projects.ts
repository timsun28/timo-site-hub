export type Project = {
    readonly title: string;
    readonly description: string;
    readonly url: string;
    readonly github: string;
    readonly category: "Games" | "Utility" | "Travel" | "Books" | "Finance" | "Health";
    readonly mark: string;
};

export const projects = [
    { title: "Sudoku Combination Finder", description: "Find killer-sudoku combinations from a sum and a cell count.", url: "sudoku.krito.tech", github: "https://github.com/timsun28/Sudoku-combination-finder", category: "Games", mark: "Σ" },
    { title: "Data Usage Calculator", description: "Work out how much mobile data should be left this month. It saves the limit locally.", url: "data.krito.tech", github: "https://github.com/timsun28/Data-Usage-Calculator", category: "Utility", mark: "GB" },
    { title: "Chess Clock", description: "A no-fuss clock for keeping a chess game moving.", url: "chess.krito.tech", github: "https://github.com/timsun28/Chess-Clock", category: "Games", mark: "♞" },
    { title: "Nines Score Tracker", description: "Keep score for Nines with themes you can change to suit the table.", url: "nines.krito.tech", github: "https://github.com/timsun28/NextJS-Nines-App", category: "Games", mark: "9" },
    { title: "New Zealand DOC Hike Finder", description: "Find DOC hikes, with offline support for places where the signal disappears.", url: "hike.krito.tech", github: "https://github.com/timsun28/NextJS-DOC-App", category: "Travel", mark: "NZ" },
    { title: "France Department Lookup", description: "Turn a French department number into a name and a Wikipedia link.", url: "france.krito.tech", github: "https://github.com/timsun28/france-departments", category: "Travel", mark: "FR" },
    { title: "Italy Green Zone Finder", description: "Check whether a place in Italy sits in a green zone.", url: "italy.greenzone.krito.tech", github: "https://github.com/timsun28/italy.greenzones.krito.tech", category: "Travel", mark: "IT" },
    { title: "Mistborn Reading Tracker", description: "Track a Mistborn reread and the wait for Era 3.", url: "mistborn.krito.tech", github: "https://github.com/timsun28/mistborn-era-tracker", category: "Books", mark: "MB" },
    { title: "PDF to Payment QR Converter", description: "Pull payment details from an invoice and make an EPC QR code.", url: "pdf2qr.krito.tech", github: "https://github.com/timsun28/pdf2qr.krito.tech", category: "Finance", mark: "QR" },
    { title: "Pushup Trainer", description: "A three-day pushup plan with set counts, reps, and a rest timer.", url: "pushup.krito.tech", github: "https://github.com/timsun28/pushup.krito.tech", category: "Health", mark: "3×" },
] as const satisfies readonly Project[];
