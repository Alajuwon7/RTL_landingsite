"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/shared/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#overview", label: "About" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#features", label: "Features" },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(() =>
    typeof window !== "undefined" ? window.scrollY > 16 : false,
  );
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const updateScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section[data-section]");
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visibleEntry) {
          const id = visibleEntry.target.getAttribute("data-section");
          if (id) setActiveSection(`#${id}`);
        }
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: [0.25, 0.6, 0.9],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled ? "bg-[rgba(39,40,48,0.85)] backdrop-blur-lg border-b border-white/10" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between px-[clamp(1rem,5vw,2rem)]">
        <Link href="#hero" className="flex items-center gap-2" onClick={closeMobile}>
          <div className="relative h-9 w-9 overflow-hidden rounded-2xl bg-[var(--gradient-primary)]">
            <div className="absolute inset-1 flex flex-col justify-between p-1">
              {[0, 1, 2].map((line) => (
                <span
                  key={line}
                  className="h-[3px] rounded-full bg-white/80"
                  style={{ width: `${100 - line * 25}%` }}
                />
              ))}
            </div>
          </div>
          <span className="font-display text-lg font-semibold tracking-tight text-white">
            Rush The Line
          </span>
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          <ul className="flex items-center gap-8 text-sm font-medium text-[var(--color-text-secondary)]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "relative inline-flex flex-col items-center gap-1 transition-colors hover:text-white",
                    activeSection === link.href ? "text-white" : undefined,
                  )}
                >
                  <span>{link.label}</span>
                  <span
                    className={cn(
                      "inline-block h-[3px] w-full rounded-full bg-[rgba(255,255,255,0.12)] transition-all duration-300",
                      activeSection === link.href
                        ? "bg-[var(--color-brand-magenta)] shadow-[0_0_12px_rgba(166,20,112,0.6)]"
                        : "opacity-40",
                    )}
                  />
                </a>
              </li>
            ))}
          </ul>
          <Button asChild>
            <Link href="#cta">Get Early Access</Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-white/10 p-2 text-white transition-colors hover:bg-white/10 md:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden"
          >
            <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-4 px-[clamp(1rem,5vw,2rem)] pb-6">
              <ul className="flex flex-col gap-2 text-base text-[var(--color-text-secondary)]">
                {navLinks.map((link) => (
                  <li key={`mobile-${link.href}`}>
                    <a
                      href={link.href}
                      onClick={closeMobile}
                      className={cn(
                        "flex items-center justify-between rounded-lg px-3 py-3 transition-colors",
                        activeSection === link.href ? "bg-white/10 text-white" : "hover:bg-white/5",
                      )}
                    >
                      {link.label}
                      <span className="text-xs uppercase tracking-wide text-white/50">Go</span>
                    </a>
                  </li>
                ))}
              </ul>
              <Button onClick={closeMobile} className="w-full">
                <Link href="#cta">Get Early Access</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
