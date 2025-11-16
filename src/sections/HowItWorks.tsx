"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Ticket, Route, MessagesSquare, Trophy } from "lucide-react";
import { Section } from "@/components/shared/Section";

type HowItWorksStep = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const steps: HowItWorksStep[] = [
  {
    title: "Connect Your Trip",
    description:
      "Add your flight number or confirmation and we instantly sync your itinerary. This unlocks destination-aware screens and routes tailored to your airline, gate, and boarding time.",
    icon: Ticket,
  },
  {
    title: "Get Live-AI-Guidance",
    description:
      "Receive step-by-step guidance—best checkpoint, when to leave, and smart nudges if conditions change. Notifications adapt to your profile, time remaining, and real-time signals.",
    icon: Route,
  },
  {
    title: "Share & Receive Updates",
    description:
      "Post a quick update or photo from your location. Your verified inputs improve accuracy for everyone and boost your traveler score, powering better recommendations trip after trip.",
    icon: MessagesSquare,
  },
  {
    title: "Earn Rewards - Get Stats",
    description:
      "Collect points for completing key milestones (arrival → TSA → terminal → gate), on-time gate streaks, and verified contributions. Track weekly, monthly, and yearly stats, with badges, leaderboards, and redeemable perks as you progress.",
    icon: Trophy,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const HowItWorks = () => {
  return (
    <Section id="how-it-works" data-section="how-it-works" background="secondary">
      <div className="flex flex-col gap-12">
        <div className="mx-auto max-w-3xl text-center">
          <span className="badge badge-gradient">HOW IT WORKS</span>
          <h2 className="mt-4 font-display text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.15] text-white">
            A Fluid, Human Airport Flow
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
            Rush The Line keeps every traveler in sync with one connected flow—from the moment you add your
            flight to the rewards you earn after takeoff.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="how-cards-grid grid gap-5 lg:grid-cols-4"
        >
          {steps.map((step) => (
            <motion.article key={step.title} variants={cardVariants} className="how-card">
              <div className="how-card-head">
                <div className="how-card-icon" aria-hidden="true">
                  <step.icon className="icon-glow text-[var(--color-brand-magenta)]" strokeWidth={1.2} />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-white">{step.title}</h3>
              <p className="text-sm text-[var(--color-text-tertiary)]">{step.description}</p>
              <div className="mt-auto h-[2px] w-20 rounded-full bg-[var(--gradient-primary)] opacity-70" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};
