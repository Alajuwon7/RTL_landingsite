import Link from "next/link";
import { Section } from "@/components/shared/Section";
import { Mail, Linkedin, Twitter } from "lucide-react";

const footerLinks = [
  { label: "Features", href: "#features" },
  { label: "Tech Growth", href: "#tech-growth" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "About", href: "#overview" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/rushtheline", icon: Linkedin },
  { label: "Twitter", href: "https://twitter.com/rushtheline", icon: Twitter },
  { label: "Email", href: "mailto:hello@rushtheline.com", icon: Mail },
];

export const Footer = () => {
  return (
    <footer className="bg-[var(--color-bg-secondary)]">
      <Section container={false} className="border-t border-white/10 py-[clamp(3rem,8vh,6rem)]">
        <div className="mx-auto grid w-full max-w-[1280px] gap-12 px-[clamp(1rem,5vw,2rem)] md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="space-y-4">
            <Link href="#hero" className="flex items-center gap-3 text-white">
              <div className="relative h-10 w-10 overflow-hidden rounded-2xl bg-[var(--gradient-primary)] shadow-[var(--shadow-glow-magenta)]">
                <div className="absolute inset-1 flex flex-col justify-between p-1">
                  {[0, 1, 2].map((line) => (
                    <span key={line} className="h-[3px] rounded-full bg-white/80" style={{ width: `${100 - line * 25}%` }} />
                  ))}
                </div>
              </div>
              <span className="font-display text-xl font-semibold">Rush The Line</span>
            </Link>
            <p className="text-sm text-[var(--color-text-tertiary)]">
              Revolutionizing airport navigation with a human + AI movement platform that keeps travelers ahead of every moment.
            </p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-all hover:bg-white/10"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-text-tertiary)]">
              Navigate
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-[var(--color-text-secondary)]">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-text-tertiary)]">
              Stay Connected
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Join the waitlist to get pilot program updates and early access opportunities.
            </p>
            <Link
              href="#cta"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[var(--color-brand-magenta)]"
            >
              Get Early Access →
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-12 flex w-full max-w-[1280px] flex-col gap-4 border-t border-white/10 pt-6 px-[clamp(1rem,5vw,2rem)] md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-[var(--color-text-tertiary)]">
            © {new Date().getFullYear()} Rush The Line. All rights reserved. Built for movement.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--color-text-tertiary)]">
            {legalLinks.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
            <span className="hidden text-[var(--color-text-tertiary)] md:inline">rushtheline.com</span>
          </div>
        </div>
      </Section>
    </footer>
  );
};
