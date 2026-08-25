import { NavLink } from "react-router";
import { SignIn } from "@clerk/clerk-react";
import BrandWordmark from "../../components/brand/BrandWordmark";
import InteractiveHeroBackdrop from "../../components/brand/InteractiveHeroBackdrop";

function Login() {
    return (
        <div className="min-h-screen w-full bg-[linear-gradient(180deg,_#f8f9fc_0%,_#ffffff_42%,_#eef2ff_100%)] p-4 sm:p-6 flex items-center justify-center">
            <div className="mx-auto grid w-full max-w-[1280px] gap-6 lg:grid-cols-[1fr_1fr] lg:items-center">
                <InteractiveHeroBackdrop darkMode className="hidden rounded-[32px] border border-white/10 shadow-[0_40px_140px_-60px_rgba(99,102,241,0.4)] lg:block">
                    <section className="relative flex h-full flex-col justify-between p-6 text-white xl:p-8">
                        <div>
                            <NavLink to="/" className="inline-flex items-center gap-3">
                                <img src="/battleground_logo.png" alt="BattleGround Logo" className="h-9 w-9 rounded-2xl object-cover shadow-lg shadow-cyan-500/20" />
                                <BrandWordmark darkMode compact />
                            </NavLink>
                            <p className="mt-6 text-xs font-bold uppercase tracking-[0.28em] text-indigo-300">
                                Back to the arena
                            </p>
                            <h1 className="mt-2 max-w-xl text-2xl font-black leading-[1.05] lg:text-3xl xl:text-4xl">
                                Return to your streak with a workspace built for coders.
                            </h1>
                            <p className="mt-3 max-w-lg text-xs leading-6 text-slate-300 xl:text-sm">
                                Continue the problem you left open, hit the daily challenge, or jump straight into your next ranked battle.
                            </p>
                        </div>

                        <div className="grid gap-2.5 sm:grid-cols-3 mt-6">
                            {[
                                { title: "Continue solving", body: "Pick up exactly where you stopped." },
                                { title: "Track rhythm", body: "See streaks and progress instantly." },
                                { title: "Compete hard", body: "Carry momentum into the arena." },
                            ].map((item) => (
                                <div key={item.title} className="rounded-xl border border-white/10 bg-white/5 p-3">
                                    <p className="text-xs font-black">{item.title}</p>
                                    <p className="mt-0.5 text-[11px] leading-4 text-slate-400">{item.body}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </InteractiveHeroBackdrop>

                <section className="flex items-center justify-center">
                    <SignIn path="/login" routing="path" signUpUrl="/signup" fallbackRedirectUrl="/" />
                </section>
            </div>
        </div>
    );
}
export default Login;
