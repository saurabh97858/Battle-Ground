import { NavLink } from "react-router";
import { DEFAULT_FEATURE_ORDER } from "../../utils/featureCatalog";

const featureIcons = {
    problems: "💻",
    "revision-mentor": "🧠",
    "mock-interview": "🎙️",
    "dsa-visualizer": "📐",
    "battle-lobby": "⚔️",
};

function FeatureShowcase({ darkMode }) {
    const marqueeFeatures = [...DEFAULT_FEATURE_ORDER, ...DEFAULT_FEATURE_ORDER];

    return (
        <section className="mx-auto max-w-[1440px] overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
                <p
                    className={`text-xs font-bold uppercase tracking-[0.22em] ${
                        darkMode ? "text-indigo-400" : "text-indigo-600"
                    }`}
                >
                    Features
                </p>
                <h2
                    className={`mt-3 text-3xl font-black sm:text-4xl ${
                        darkMode ? "text-white" : "text-slate-900"
                    }`}
                >
                    Everything you need to dominate DSA
                </h2>
                <p
                    className={`mt-3 text-sm sm:text-base leading-7 ${
                        darkMode ? "text-slate-400" : "text-slate-500"
                    }`}
                >
                    Five integrated tools in one platform. No tab-hopping, no scattered bookmarks.
                </p>
            </div>

            {/* Right to Left Marquee Slider with Rainbow Animated Glow Borders */}
            <div className="relative mt-12 overflow-hidden py-4">
                <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-slate-950/80 to-transparent" />
                <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-slate-950/80 to-transparent" />

                <div className="animate-marquee-left flex gap-6">
                    {marqueeFeatures.map((feature, index) => (
                        <NavLink
                            key={`${feature.key}-${index}`}
                            to={feature.route}
                            className="group relative shrink-0 w-[320px] sm:w-[360px] rounded-3xl rainbow-border p-[2px] shadow-2xl transition-transform duration-300 hover:scale-[1.03]"
                        >
                            <div
                                className={`flex h-full flex-col rounded-[22px] p-6 sm:p-7 ${
                                    darkMode ? "bg-slate-950/95" : "bg-white/95"
                                }`}
                            >
                                <div className="flex items-start justify-between">
                                    <span className="text-3xl">{featureIcons[feature.key]}</span>
                                    <span
                                        className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] ${
                                            darkMode
                                                ? "bg-slate-800 text-indigo-300"
                                                : "bg-indigo-50 text-indigo-700"
                                        }`}
                                    >
                                        {feature.eyebrow}
                                    </span>
                                </div>
                                <h3
                                    className={`mt-4 text-xl font-black ${
                                        darkMode ? "text-white" : "text-slate-900"
                                    }`}
                                >
                                    {feature.title}
                                </h3>
                                <p
                                    className={`mt-2 text-sm leading-6 ${
                                        darkMode ? "text-slate-400" : "text-slate-600"
                                    }`}
                                >
                                    {feature.description}
                                </p>
                                <div className="mt-auto pt-5 flex items-center justify-between">
                                    <span
                                        className={`text-sm font-black transition-colors ${
                                            darkMode
                                                ? "text-indigo-400 group-hover:text-cyan-300"
                                                : "text-indigo-600 group-hover:text-indigo-800"
                                        }`}
                                    >
                                        Explore Feature →
                                    </span>
                                </div>
                            </div>
                        </NavLink>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FeatureShowcase;
