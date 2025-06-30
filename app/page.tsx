import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const sites = [
        {
            title: "Sudoku Combination Finder",
            description:
                "Find all combinations of a given killer sudoku puzzle by specifying the sum and the number of cells",
            url: "sudoku.krito.tech",
            github: "https://github.com/timsun28/Sudoku-combination-finder",
        },
        {
            title: "Data Usage Calculator",
            description:
                "Calculate how much mobile data you should have left at any time in the month. This app uses localstorage to save your monthly limit.",
            url: "data.krito.tech",
            github: "https://github.com/timsun28/Data-Usage-Calculator",
        },
        {
            title: "Chess Clock",
            description: "An easy to use app to keep track of the time you have left in a chess game!",
            url: "chess.krito.tech",
            github: "https://github.com/timsun28/Chess-Clock",
        },
        {
            title: "Nines Score Tracker",
            description:
                "Keep track of your score in the card game Nines for x amount of players. This app supports different themes so you can customize it to your liking!",
            url: "nines.krito.tech",
            github: "https://github.com/timsun28/NextJS-Nines-App",
        },
        {
            title: "New Zealand DOC Hike Finder",
            description:
                "Find hikes in New Zealand's national parks with data from the DOC API. This app works offline as a PWA (Progressive Web App). This is important in NZ where there is no mobile data coverage in most national parks.",
            url: "hike.krito.tech",
            github: "https://github.com/timsun28/NextJS-DOC-App",
        },
        {
            title: "Italy greenzone finder",
            description:
                "Find out if a region in Italy is a green zone or not. This app uses data scraped from green-zones.eu and used geocode.maps.co to convert cities to coordinates.",
            url: "italy.greenzone.krito.tech",
            github: "https://github.com/timsun28/italy.greenzones.krito.tech",
        },
        {
            title: "Mistborn Reading Tracker",
            description:
                "A Mistborn book series reading tracker that counts down towards the release of era 3 of the Mistborn book series by Brandon Sanderson.",
            url: "mistborn.krito.tech",
            github: "",
        },
    ];
    return (
        <main className="flex flex-col  h-screen m-4 mt-8 dark:text-white">
            <h1 className="text-4xl text-center">Welcome!</h1>
            <div className="mx-auto">
                <p className="text-xl">
                    You can find all my side projects on my{" "}
                    <a href="https://github.com/timsun28" className="underline" target="_blank" rel="noreferrer">
                        Github
                    </a>
                    !
                </p>
                <p className="text-xl">
                    To see my professional work, check out my{" "}
                    <a href="https://krito.tech/" target="_blank" rel="noreferrer" className="underline">
                        krito.tech
                    </a>{" "}
                    page and get in touch!
                </p>
                <p className="max-w-3xl text-xl">
                    But here is a short list of my most recent projects. Click on the links to see them in action! Most
                    apps are PWA (Progressive Web Apps) so you can install them on your phone for offline usage.
                </p>
            </div>

            <div className="flex flex-wrap mx-auto justify-evenly gap-8 mt-8">
                {sites.map((site, index) => (
                    <div
                        key={index}
                        className="flex flex-col gap-2 px-4 py-8 border rounded-lg border-slate-800 dark:border-white md:w-96"
                    >
                        <h2 className="text-2xl font-bold">{site.title}</h2>
                        <p className="text-xl">{site.description}</p>
                        <a href={`https://${site.url}`} target="_blank" rel="noreferrer" className="text-xl underline">
                            {site.url}
                        </a>
                        <a href={site.github} target="_blank" rel="noreferrer" className="text-xl underline">
                            Github
                        </a>
                    </div>
                ))}
            </div>
        </main>
    );
}
