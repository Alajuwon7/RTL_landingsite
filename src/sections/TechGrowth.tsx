"use client";

import { useCallback, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, Megaphone, Award, Wrench } from "lucide-react";
import { Section } from "@/components/shared/Section";
import { Card } from "@/components/shared/Card";
import { cn } from "@/lib/utils";

const milestones = [
  {
    year: "2019",
    phase: "FOUNDING",
    title: "Founding",
    description:
      "The foundational idea for revolutionizing food delivery in chaotic spaces like airports and stadiums took shape.",
    icon: Lightbulb,
  },
  {
    year: "2021",
    phase: "LAUNCH",
    title: "Launch",
    description:
      "Our pilot delivery program launched at the first airport, serving lounges, terminals, and gates with human + AI operations.",
    icon: Megaphone,
  },
  {
    year: "2022",
    phase: "TRACTION",
    title: "Traction",
    description:
      "Earned ACDBE and DBE certifications, placed second in the Atlanta Tech Village cohort, won the Dell $10K prize, joined the ZHANE Access Cohort, and expanded airline employee delivery services.",
    icon: Award,
  },
  {
    year: "23/2024",
    phase: "APP REBUILD",
    title: "App Rebuild",
    description:
      "A complete redesign engineered to scale Rush The Line into a real-time, AI-powered experience for airports, stadiums, and education campuses.",
    icon: Wrench,
  },
] as const;

const tabVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

export const TechGrowth = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleKey = useCallback((event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      setActiveIndex((prev) => (prev + 1) % milestones.length);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setActiveIndex((prev) => (prev - 1 + milestones.length) % milestones.length);
    }
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setActiveIndex(index);
    }
  }, []);

  const activeMilestone = useMemo(() => milestones[activeIndex], [activeIndex]);

  return (
    <Section
      id="tech-growth"
      data-section="tech-growth"
      background="primary"
      className="relative"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(166,20,112,0.25),transparent_70%)] opacity-40" />
        <div className="absolute inset-x-0 top-1/2 h-px bg-[linear-gradient(90deg,transparent,rgba(166,20,112,0.5),transparent)]" />
      </div>

      <div className="flex flex-col gap-10">
        <div className="max-w-3xl space-y-4">
          <span className="badge badge-gradient">TECH GROWTH</span>
          <h2 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.15] font-semibold text-white">
            Milestones That Moved Us Forward
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)]">
            From concept to AI-powered navigation, each phase unlocked new capabilities. Explore how Rush The Line evolved into a movement platform for travelers.
          </p>
        </div>

        <div className="hidden items-center gap-4 overflow-x-auto rounded-full border border-white/10 bg-white/5 p-2 md:flex">
          {milestones.map((milestone, index) => (
            <button
              key={milestone.year}
              type="button"
              onClick={() => setActiveIndex(index)}
              onKeyDown={(e) => handleKey(e, index)}
              className={cn(
                "relative rounded-full px-4 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white/60 transition-all",
                index === activeIndex
                  ? "bg-white/15 text-white shadow-[0_0_20px_rgba(166,20,112,0.4)]"
                  : "hover:bg-white/10 hover:text-white",
              )}
              aria-pressed={index === activeIndex}
            >
              <div className="flex items-center gap-3">
                <span>{milestone.year}</span>
                <span className="hidden text-xs tracking-[0.35em] text-white/40 lg:inline">{milestone.phase}</span>
              </div>
              {index === activeIndex && (
                <motion.span
                  layoutId="tab-underline"
                  className="absolute inset-x-4 bottom-1 h-[3px] rounded-full bg-[var(--color-brand-magenta)]"
                  transition={{ type: "spring", stiffness: 320, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="md:hidden">
          <div className="relative ml-4 border-l border-white/10">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isActive = index === activeIndex;
              return (
                <motion.button
                  key={`mobile-${milestone.year}`}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="group relative flex w-full translate-x-[-1.75rem] items-start gap-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-left transition-all"
                  initial="initial"
                  animate="animate"
                  variants={tabVariants}
                >
                  <div className="relative mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                    <Icon className="h-5 w-5 text-[var(--color-brand-magenta)]" />
                    <span className="absolute -left-[46px] top-1/2 h-[1px] w-8 -translate-y-1/2 bg-[var(--gradient-primary)]" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold tracking-[0.3em] text-white/50">{milestone.phase}</p>
                    <h3 className="text-lg font-semibold text-white">{milestone.title}</h3>
                    <p className="text-sm text-[var(--color-text-tertiary)]">{milestone.description}</p>
                    <span className="text-xs uppercase tracking-[0.35em] text-[var(--color-text-tertiary)]">
                      {milestone.year}
                    </span>
                  </div>
                  <span
                    className={cn(
                      "absolute left-[-12px] top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-white/50 bg-[var(--color-bg-primary)] transition-transform",
                      isActive ? "scale-110 border-[var(--color-brand-magenta)]" : undefined,
                    )}
                  />
                </motion.button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeMilestone.year}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <Card variant="elevated" className="relative overflow-hidden bg-white/10">
              <div className="absolute -left-32 top-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(166,20,112,0.25),transparent)] blur-3xl" />
              <div className="absolute -right-24 bottom-0 h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(226,2,26,0.25),transparent)] blur-3xl" />
              <div className="relative grid gap-10 md:grid-cols-[220px_minmax(0,1fr)]">
                <div className="flex flex-col gap-6">
                  <div className="inline-flex h-20 w-20 items-center justify-center rounded-full border border-white/15 bg-white/10">
                    <activeMilestone.icon className="h-9 w-9 text-[var(--color-brand-magenta)]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold tracking-[0.3em] text-white/40">
                      {activeMilestone.phase}
                    </p>
                    <h3 className="mt-2 text-3xl font-semibold text-white">
                      {activeMilestone.title}
                    </h3>
                    <p className="mt-1 text-sm uppercase tracking-[0.4em] text-[var(--color-text-tertiary)]">
                      {activeMilestone.year}
                    </p>
                  </div>
                </div>
                <div className="space-y-6 text-lg text-[var(--color-text-secondary)]">
                  <p>{activeMilestone.description}</p>
                  <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-[var(--color-text-tertiary)]">
                    <span className="badge badge-gradient">Human + AI</span>
                    <span className="badge badge-outline">Momentum</span>
                    <span className="badge badge-subtle">Speedline</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  );
};
