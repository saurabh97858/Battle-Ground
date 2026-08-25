import { NavLink } from "react-router";
import { SignUp } from "@clerk/clerk-react";
import BrandWordmark from "../../components/brand/BrandWordmark";
import InteractiveHeroBackdrop from "../../components/brand/InteractiveHeroBackdrop";

function Signup() {
    const signupHighlights = [
        { title: "Problem arena", body: "A proper workspace for focused solving." },
        { title: "Revision AI", body: "Turn weak topics into repeatable wins." },
        { title: "DSA visualizer", body: "Watch core ideas move step by step." },
        { title: "Arena mode", body: "Bring ranked urgency into practice." },
    ];

    return (
        <div className="min-h-screen bg-[linear-gradient(180deg,_#f8f9fc_0%,_#ffffff_42%,_#eef2ff_100%)]">
            <div className="mx-auto grid min-h-screen max-w-[1440px] gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[0.96fr_1.04fr] lg:px-8">
                <section className="flex items-center justify-center">
                    <SignUp path="/signup" routing="path" signInUrl="/login" fallbackRedirectUrl="/" />
                </section>

                <InteractiveHeroBackdrop darkMode className="hidden rounded-[38px] border border-white/10 shadow-[0_40px_140px_-60px_rgba(99,102,241,0.45)] lg:block">
                    <section className="relative flex h-full flex-col justify-between p-8 text-white xl:p-12">
                        <div>
                            <NavLink to="/" className="inline-flex items-center gap-3">
                                <img src="/coderax_logo.png" alt="BattleGround Logo" className="h-10 w-10 rounded-2xl object-cover" />
                                <BrandWordmark darkMode compact />
                            </NavLink>
                            <p className="mt-10 text-xs font-bold uppercase tracking-[0.28em] text-indigo-300">
                                What unlocks after signup
                            </p>
                            <h1 className="mt-4 max-w-xl text-4xl font-black leading-[0.95] lg:text-5xl">
                                A sharper way to practice than jumping between disconnected tools.
                            </h1>
                            <p className="mt-5 max-w-lg text-base leading-8 text-slate-300">
                                BattleGround keeps your streaks, recent solves, daily challenge, and feature shortcuts in one home base built for repeat use.
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            {signupHighlights.map((item) => (
                                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                    <p className="text-sm font-black">{item.title}</p>
                                    <p className="mt-2 text-sm leading-6 text-slate-400">{item.body}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </InteractiveHeroBackdrop>
            </div>
        </div>
    );
}

export default Signup;
