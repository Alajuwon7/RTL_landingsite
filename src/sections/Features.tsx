"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/shared/Section";
import { Card } from "@/components/shared/Card";
import {
  MapPin,
  Users,
  Bell,
  Utensils,
  Brain,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Real-Time Navigation",
    description: "Know exactly where to go with live, location-based guidance across terminals, TSA, and gates.",
  },
  {
    icon: Users,
    title: "Crowdsourced Insights",
    description: "Make smarter decisions with crowd-powered wait times, congestion alerts, and sentiment updates.",
  },
  {
    icon: Bell,
    title: "Personalized Alerts",
    description: "Receive timely notifications about gate changes, boarding milestones, and route optimizations.",
  },
  {
    icon: Utensils,
    title: "Food & Amenities",
    description: "Discover restaurants, shops, and lounges with real-time wait estimates and preorder options.",
  },
  {
    icon: Brain,
    title: "AI Recommendations",
    description: "Our AI blends flight status, preferences, and live data to curate helpful next-step prompts.",
  },
  {
    icon: ShieldCheck,
    title: "Stress-Free Experience",
    description: "Move through each phase of travel with confidence, supported by proactive human + AI planning.",
  },
];

export const Features = () => {
  return (
    <Section id="features" data-section="features" background="primary">
      <div className="flex flex-col gap-12">
        <div className="mx-auto max-w-3xl text-center">
          <span className="badge badge-gradient">KEY CAPABILITIES</span>
          <h2 className="mt-4 font-display text-[clamp(2rem,5vw,3.25rem)] leading-[1.15] font-semibold text-white">
            Built for the Modern Traveler
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
            Every feature strengthens the traveler journey—from the moment you arrive at the curb to the instant you board.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
        >
          {features.map(({ icon: Icon, title, description }) => (
            <motion.div key={title} variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}>
              <Card variant="base" className="h-full bg-white/5 hover:shadow-[0_20px_30px_rgba(0,0,0,0.35)]">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black shadow-[0_12px_24px_rgba(0,0,0,0.35)]">
                  <Icon className="h-6 w-6 text-[var(--color-brand-magenta)]" />
                </div>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm text-[var(--color-text-tertiary)]">{description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};
