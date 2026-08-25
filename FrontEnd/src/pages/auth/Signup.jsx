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
        <div className="h-screen w-screen overflow-hidden bg-[linear-gradient(180deg,_#f8f9fc_0%,_#ffffff_42%,_#eef2ff_100%)] p-4 sm:p-6 lg:p-8">
            <div className="mx-auto grid h-full max-w-[1440px] gap-6 lg:grid-cols-[1fr_1fr] lg:items-center">
                <section className="flex h-full items-center justify-center">
                    <SignUp path="/signup" routing="path" signInUrl="/login" fallbackRedirectUrl="/" />
                </section>

                <InteractiveHeroBackdrop darkMode className="hidden h-full rounded-[38px] border border-white/10 shadow-[0_40px_140px_-60px_rgba(99,102,241,0.45)] lg:block">
                    <section className="relative flex h-full flex-col justify-between p-8 text-white xl:p-12">
                        <div>
                            <NavLink to="/" className="inline-flex items-center gap-3">
                                <img src="/battleground_logo.png" alt="BattleGround Logo" className="h-10 w-10 rounded-2xl object-cover shadow-lg shadow-cyan-500/20" />
                                <BrandWordmark darkMode compact />
                            </NavLink>
                            <p className="mt-8 text-xs font-bold uppercase tracking-[0.28em] text-indigo-300">
                                What unlocks after signup
                            </p>
                            <h1 className="mt-3 max-w-xl text-3xl font-black leading-[1.05] lg:text-4xl xl:text-5xl">
                                A sharper way to practice than jumping between disconnected tools.
                            </h1>
                            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-300 xl:text-base">
                                BattleGround keeps your streaks, recent solves, daily challenge, and feature shortcuts in one home base built for repeat use.
                            </p>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">
                            {signupHighlights.map((item) => (
                                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-3.5">
                                    <p className="text-xs font-black">{item.title}</p>
                                    <p className="mt-1 text-xs leading-5 text-slate-400">{item.body}</p>
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
