"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/shared/Button";
import { GradientText } from "@/components/shared/GradientText";
import { cn } from "@/lib/utils";
import { useWaitlistModal } from "@/components/waitlist/WaitlistModalProvider";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export const Hero = () => {
  const { openModal } = useWaitlistModal();

  return (
    <section
      id="hero"
      data-section="hero"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#000000_0%,rgba(33,34,42,0.95)_45%,rgba(26,27,35,1)_100%)]"
    >
      <div className="mx-auto max-w-[1280px] px-[clamp(1rem,5vw,2rem)] py-[clamp(4rem,12vh,8rem)]">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            className="relative z-10 flex flex-col gap-8 text-left"
          >
            <motion.span
              variants={fadeUp}
              className="badge badge-gradient w-fit text-xs tracking-[0.3em]"
            >
              HUMAN + AI POWERED
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="font-display text-[clamp(3rem,7vw,5.25rem)] font-semibold leading-[1.02] text-white"
            >
              The Future of Airport Navigation is <GradientText>Human + AI</GradientText>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="max-w-2xl text-lg text-[var(--color-text-secondary)] md:text-xl"
            >
              AI-powered guidance from curb to gate. Real-time insights, personalized alerts, and community-driven data keep you moving—without the stress.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-6 flex flex-wrap items-center gap-4"
            >
              <Button size="lg" onClick={openModal}>
                Join the Waitlist
              </Button>
              <Button asChild variant="ghost" size="lg">
                <a href="#cta">Send Message</a>
              </Button>
              <span className="text-sm text-[var(--color-text-tertiary)]">
                Early access limited to select airports.
              </span>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { title: "Live Crowd Data", body: "Powered by real travelers" },
                { title: "Predictive Routing", body: "AI optimizes every step" },
                { title: "Unified Alerts", body: "Gate, TSA, and amenities" },
              ].map((item) => (
                <div key={item.title} className="glass-card p-4">
                  <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-[var(--color-text-tertiary)]">{item.body}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[480px]">
              <div className="absolute -top-24 -right-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(166,20,112,0.3),transparent)] blur-3xl" />
              <div className="absolute bottom-[-90px] -left-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(226,2,26,0.25),transparent)] blur-3xl" />

              <motion.div
                variants={fadeUp}
                className="glass-card relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/5 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.35)]"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(166,20,112,0.5),transparent)]" />
                <div className="grid gap-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-[var(--color-text-tertiary)]">Next Up</p>
                      <p className="mt-1 text-xl font-semibold text-white">ATL → LAX</p>
                    </div>
                    <span className="badge badge-gradient text-[0.65rem]">Boarding in 18m</span>
                  </div>
                  <div className="grid gap-3">
                    {[
                      { label: "TSA South", value: "12 min wait", accent: "bg-[var(--color-brand-magenta)]" },
                      { label: "Gate B19", value: "7 min walk", accent: "bg-[var(--color-brand-red)]" },
                      { label: "Grab & Go", value: "Ready at Gate B12", accent: "bg-[var(--color-brand-magenta)]" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                        <div className="flex items-center gap-3">
                          <span className={cn("h-2 w-8 rounded-full", item.accent)} />
                          <div>
                            <p className="text-sm font-semibold text-white">{item.label}</p>
                            <p className="text-xs text-[var(--color-text-tertiary)]">{item.value}</p>
                          </div>
                        </div>
                        <span className="text-xs uppercase tracking-[0.25em] text-[var(--color-text-tertiary)]">Live</span>
                      </div>
                    ))}
                  </div>
                  <div className="grid gap-2 text-xs text-[var(--color-text-tertiary)]">
                    <p className="font-medium uppercase tracking-[0.3em] text-white/70">Movement Summary</p>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                        <p className="text-[0.65rem] uppercase tracking-[0.25em] text-white/40">Security</p>
                        <p className="text-sm font-semibold text-white">Green • 12m</p>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                        <p className="text-[0.65rem] uppercase tracking-[0.25em] text-white/40">Route</p>
                        <p className="text-sm font-semibold text-white">Fast Track</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="glass-card absolute -top-14 right-0 w-[260px] border border-white/15 bg-white/10 p-5 text-left shadow-[0_16px_40px_rgba(0,0,0,0.35)] lg:translate-x-[25%]"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-text-tertiary)]">Traveler Journey</p>
                <p className="mt-2 text-base font-semibold text-white">Smart Path Guidance</p>
                <div className="relative mt-4 space-y-4 pl-6">
                  {[
                    "Arrival",
                    "Check In",
                    "TSA",
                    "Terminal",
                    "Boarding Gate",
                  ].map((step, index, array) => (
                    <div key={step} className="relative">
                      <span className="pulse-dot absolute left-[-22px] top-1" />
                      {index < array.length - 1 && (
                        <span
                          className="animated-line"
                          style={{ left: "-15px", top: "1.75rem", height: "calc(100% - 1.3rem)" }}
                        />
                      )}
                      <p className="text-sm font-medium text-white">{step}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[linear-gradient(90deg,transparent,rgba(166,20,112,0.4),transparent)]" />
        <div className="absolute left-1/3 top-0 h-full w-px bg-[linear-gradient(180deg,transparent,rgba(166,20,112,0.25),transparent)]" />
        <div className="absolute right-1/4 top-0 h-full w-px bg-[linear-gradient(180deg,transparent,rgba(226,2,26,0.35),transparent)]" />
      </div>
    </section>
  );
};
