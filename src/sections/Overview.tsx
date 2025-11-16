"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/shared/Section";
import { GradientText } from "@/components/shared/GradientText";
import { Card } from "@/components/shared/Card";
import { Compass, HeartPulse, Timer } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const highlights = [
  {
    icon: Timer,
    title: "Save Valuable Time",
    description: "Beat the rush with predictive wait times and proactive routing suggestions tailored to your itinerary.",
  },
  {
    icon: HeartPulse,
    title: "Reduce Travel Stress",
    description: "Stay calm with contextual alerts that anticipate disruptions before they become problems.",
  },
  {
    icon: Compass,
    title: "Move Smarter",
    description: "From TSA to amenities, we guide every step with insights sourced from humans and AI.",
  },
];

export const Overview = () => {
  return (
    <Section id="overview" data-section="overview" background="secondary">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        viewport={{ once: true, amount: 0.4 }}
        className="grid gap-16 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-center"
      >
        <motion.div variants={fadeInUp} className="space-y-6">
          <span className="badge badge-gradient">Smarter Movement</span>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.15] font-semibold text-white">
            Moving You Smarter Through Every Step
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] md:text-xl">
            Rush The Line helps travelers navigate busy airports with less stress and more confidence.
            We blend real-time location data, crowdsourced insights, and personalized alerts to guide you through TSA lines, gate changes, food pickup, and more.
          </p>
          <Card variant="base" padding="lg" className="bg-white/5">
            <p className="text-lg font-medium text-white">
              <GradientText>No more wandering. No more waiting.</GradientText> Just smarter movement from curb to gate.
            </p>
            <p className="mt-4 text-sm text-[var(--color-text-tertiary)]">
              Our latest prototype highlights the human + AI experience we’re bringing to life. We are actively onboarding pilot partners and preparing for user testing.
            </p>
          </Card>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-text-tertiary)]">
            💡 Save time. Reduce stress. Move smarter.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="grid gap-6"
        >
          {highlights.map((item) => (
            <Card key={item.title} variant="base" className="bg-white/5">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl border border-white/20 bg-black p-3 text-[var(--color-brand-magenta)] shadow-[0_10px_25px_rgba(0,0,0,0.25)]">
                  <item.icon className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-[var(--color-text-tertiary)]">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
};
