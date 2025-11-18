"use client";

import Image from "next/image";
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (typeof window === "undefined") return;
    console.log("Mobile menu state changed:", mobileOpen);
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 transition-all duration-300 z-50",
          isScrolled ? "bg-[rgba(39,40,48,0.85)] backdrop-blur-lg border-b border-white/10" : "bg-transparent",
        )}
      >
        <nav className="relative mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between px-[clamp(1rem,5vw,2rem)]">
          <Link href="#hero" className="flex items-center" onClick={closeMobile}>
            <Image
              src="https://res.cloudinary.com/kingaat7/image/upload/v1731592214/Rush_Logo.png"
              alt="Rush The Line logo"
              width={152}
              height={48}
              className="h-10 w-auto object-contain"
              priority
            />
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
            className="relative z-10 inline-flex items-center justify-center rounded-full border border-white/10 p-2 text-white transition-colors hover:bg-white/10 md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => {
              const newState = !mobileOpen;
              console.log("Mobile menu toggle clicked. New state:", newState);
              setMobileOpen(newState);
            }}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu - Moved outside header to avoid stacking context issues */}
      <AnimatePresence mode="wait">
        {mobileOpen && (
          <>
            {/* Backdrop overlay - Using very high z-index for testing */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-16 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={closeMobile}
              aria-hidden="true"
              style={{ position: "fixed", zIndex: 9998, top: "64px" }}
            />
            {/* Mobile menu - Using very high z-index for testing */}
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-labelledby="mobile-menu-title"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed inset-x-0 top-16 bg-[rgba(39,40,48,0.98)] backdrop-blur-lg border-b border-white/10 shadow-xl md:hidden"
              style={{ position: "fixed", zIndex: 9999, top: "64px" }}
            >
              <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-4 px-[clamp(1rem,5vw,2rem)] py-6">
                <h2 id="mobile-menu-title" className="sr-only">
                  Navigation Menu
                </h2>
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
          </>
        )}
      </AnimatePresence>
    </>
  );
};
