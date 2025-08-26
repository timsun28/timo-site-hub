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
            category: "Games",
            gradient: "from-blue-500 to-purple-600",
        },
        {
            title: "Data Usage Calculator",
            description:
                "Calculate how much mobile data you should have left at any time in the month. This app uses localstorage to save your monthly limit.",
            url: "data.krito.tech",
            github: "https://github.com/timsun28/Data-Usage-Calculator",
            category: "Utility",
            gradient: "from-green-500 to-teal-600",
        },
        {
            title: "Chess Clock",
            description: "An easy to use app to keep track of the time you have left in a chess game!",
            url: "chess.krito.tech",
            github: "https://github.com/timsun28/Chess-Clock",
            category: "Games",
            gradient: "from-orange-500 to-red-600",
        },
        {
            title: "Nines Score Tracker",
            description:
                "Keep track of your score in the card game Nines for x amount of players. This app supports different themes so you can customize it to your liking!",
            url: "nines.krito.tech",
            github: "https://github.com/timsun28/NextJS-Nines-App",
            category: "Games",
            gradient: "from-pink-500 to-rose-600",
        },
        {
            title: "New Zealand DOC Hike Finder",
            description:
                "Find hikes in New Zealand's national parks with data from the DOC API. This app works offline as a PWA (Progressive Web App). This is important in NZ where there is no mobile data coverage in most national parks.",
            url: "hike.krito.tech",
            github: "https://github.com/timsun28/NextJS-DOC-App",
            category: "Travel",
            gradient: "from-emerald-500 to-green-600",
        },
        {
            title: "Italy greenzone finder",
            description:
                "Find out if a region in Italy is a green zone or not. This app uses data scraped from green-zones.eu and used geocode.maps.co to convert cities to coordinates.",
            url: "italy.greenzone.krito.tech",
            github: "https://github.com/timsun28/italy.greenzones.krito.tech",
            category: "Travel",
            gradient: "from-cyan-500 to-blue-600",
        },
        {
            title: "Mistborn Reading Tracker",
            description:
                "A Mistborn book series reading tracker that counts down towards the release of era 3 of the Mistborn book series by Brandon Sanderson.",
            url: "mistborn.krito.tech",
            github: "https://github.com/timsun28/mistborn-era-tracker",
            category: "Books",
            gradient: "from-violet-500 to-purple-600",
        },
        {
            title: "PDF to Payment QR Converter",
            description:
                "Transform PDF invoices and bills into EPC QR codes instantly with AI-powered data extraction. Automatically detects IBAN, amounts, and creditor details from PDF documents, then generates European banking-compatible QR codes for seamless payments. Features a modern, secure interface with real-time QR code generation.",
            url: "pdf2qr.krito.tech",
            github: "https://github.com/timsun28/pdf-to-qr",
            category: "Finance",
            gradient: "from-indigo-500 to-blue-600",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            {/* Background Pattern */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23ffffff' fill-opacity='0.05'%3e%3ccircle cx='30' cy='30' r='1.5'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`,
                }}
            ></div>

            <main className="relative flex flex-col min-h-screen px-4 py-8 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6">
                        Welcome!
                    </h1>

                    <div className="max-w-4xl mx-auto space-y-6">
                        <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed">
                            Discover my collection of innovative web applications and tools
                        </p>

                        <div className="flex flex-wrap justify-center gap-6 mt-8">
                            <a
                                href="https://github.com/timsun28"
                                className="group relative px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white font-medium transition-all duration-300 hover:bg-white/20 hover:scale-105 border border-white/20"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span className="relative z-10">View on GitHub</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </a>

                            <a
                                href="https://krito.tech/"
                                className="group relative px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span className="relative z-10">Professional Work</span>
                            </a>
                        </div>

                        <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
                            Explore my latest projects below. Most applications are Progressive Web Apps (PWAs),
                            offering offline functionality and native app-like experiences on your devices.
                        </p>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {sites.map((site, index) => (
                        <div
                            key={index}
                            className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10 fade-in-up"
                            style={{
                                animationDelay: `${index * 100}ms`,
                            }}
                        >
                            {/* Gradient Border */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-r ${site.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm`}
                            ></div>

                            {/* Category Badge */}
                            <div className="flex justify-between items-start mb-4">
                                <span
                                    className={`inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${site.gradient} text-white`}
                                >
                                    {site.category}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-white group-hover:text-blue-100 transition-colors duration-300">
                                    {site.title}
                                </h2>

                                <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                                    {site.description}
                                </p>

                                {/* Links */}
                                <div className="flex flex-col gap-3 pt-4">
                                    <a
                                        href={`https://${site.url}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group/link flex items-center gap-2 text-cyan-300 hover:text-cyan-100 font-semibold transition-all duration-300 hover:translate-x-1"
                                    >
                                        <span className="w-2 h-2 bg-cyan-400 rounded-full group-hover/link:bg-cyan-300 transition-colors duration-300"></span>
                                        {site.url}
                                        <svg
                                            className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform duration-300"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.25 17h-8.5A2.25 2.25 0 011.5 14.75v-8.5A2.25 2.25 0 013.75 4h5a.75.75 0 010 1.5h-5z"
                                                clipRule="evenodd"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </a>

                                    <a
                                        href={site.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group/link flex items-center gap-2 text-slate-400 hover:text-slate-300 font-medium transition-all duration-300 hover:translate-x-1"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        View Source
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div className="text-center mt-16 pb-8">
                    <p className="text-slate-500 text-sm">Built with Next.js, React & Tailwind CSS</p>
                </div>
            </main>
        </div>
    );
}
