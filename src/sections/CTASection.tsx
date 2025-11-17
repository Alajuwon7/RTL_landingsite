"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/shared/Section";
import { Button } from "@/components/shared/Button";
import { useWaitlistModal } from "@/components/waitlist/WaitlistModalProvider";

export const CTASection = () => {
  const { openModal } = useWaitlistModal();

  return (
    <Section
      id="cta"
      data-section="cta"
      background="hero"
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(166,20,112,0.35),transparent_70%)] opacity-60" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(39,40,48,0.3),rgba(26,27,35,0.8))]" />
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.25),transparent)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 text-center"
      >
        <span className="badge badge-gradient">Pilot Program</span>
        <h2 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-[1.12] text-white">
          Ready to Transform Your Airport Experience?
        </h2>
        <p className="max-w-2xl text-lg text-[var(--color-text-secondary)]">
          Join our early access program and be among the first to experience stress-free airport navigation powered by community data and AI.
        </p>
        <Button size="lg" onClick={openModal}>
          Join the Waitlist
        </Button>
        <p className="text-sm text-[var(--color-text-tertiary)]">
          Limited spots available for pilot testing at select airports. Apply now to secure your access.
        </p>
      </motion.div>
    </Section>
  );
};
