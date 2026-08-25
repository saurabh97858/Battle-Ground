import { NavLink } from "react-router";
import { SignIn } from "@clerk/clerk-react";
import BrandWordmark from "../../components/brand/BrandWordmark";
import InteractiveHeroBackdrop from "../../components/brand/InteractiveHeroBackdrop";

function Login() {
    return (
        <div className="min-h-screen w-full bg-[linear-gradient(180deg,_#f8f9fc_0%,_#ffffff_42%,_#eef2ff_100%)] px-4 py-8 sm:px-6 lg:px-8 flex items-center justify-center">
            <div className="mx-auto grid w-full max-w-[1440px] gap-6 lg:grid-cols-[1fr_1fr] lg:items-center">
                <InteractiveHeroBackdrop darkMode className="hidden min-h-[580px] rounded-[38px] border border-white/10 shadow-[0_40px_140px_-60px_rgba(99,102,241,0.4)] lg:block">
                    <section className="relative flex h-full flex-col justify-between p-8 text-white xl:p-12">
                        <div>
                            <NavLink to="/" className="inline-flex items-center gap-3">
                                <img src="/battleground_logo.png" alt="BattleGround Logo" className="h-10 w-10 rounded-2xl object-cover shadow-lg shadow-cyan-500/20" />
                                <BrandWordmark darkMode compact />
                            </NavLink>
                            <p className="mt-8 text-xs font-bold uppercase tracking-[0.28em] text-indigo-300">
                                Back to the arena
                            </p>
                            <h1 className="mt-3 max-w-xl text-3xl font-black leading-[1.05] lg:text-4xl xl:text-5xl">
                                Return to your streak with a workspace built for coders.
                            </h1>
                            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-300 xl:text-base">
                                Continue the problem you left open, hit the daily challenge, or jump straight into your next ranked battle.
                            </p>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-3">
                            {[
                                { title: "Continue solving", body: "Pick up exactly where you stopped." },
                                { title: "Track rhythm", body: "See streaks and progress instantly." },
                                { title: "Compete hard", body: "Carry momentum into the arena." },
                            ].map((item) => (
                                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-3.5">
                                    <p className="text-xs font-black">{item.title}</p>
                                    <p className="mt-1 text-xs leading-5 text-slate-400">{item.body}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </InteractiveHeroBackdrop>

                <section className="flex items-center justify-center py-4">
                    <SignIn path="/login" routing="path" signUpUrl="/signup" fallbackRedirectUrl="/" />
                </section>
            </div>
        </div>
    );
}
export default Login;
