"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, Sparkles } from "lucide-react";
import React, { createContext, useCallback, useContext, useState } from "react";

type WaitlistModalContextValue = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const WaitlistModalContext = createContext<WaitlistModalContextValue | undefined>(undefined);

export const WaitlistModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  return (
    <WaitlistModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      <WaitlistModal isOpen={isOpen} onClose={closeModal} />
    </WaitlistModalContext.Provider>
  );
};

export const useWaitlistModal = () => {
  const context = useContext(WaitlistModalContext);
  if (!context) {
    throw new Error("useWaitlistModal must be used within WaitlistModalProvider");
  }
  return context;
};

type WaitlistModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const WaitlistModal = ({ isOpen, onClose }: WaitlistModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          aria-modal="true"
          role="dialog"
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-3xl rounded-3xl border border-white/10 bg-[rgba(13,14,20,0.95)] p-8 text-white shadow-[0_40px_120px_rgba(0,0,0,0.6)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top,rgba(166,20,112,0.25),transparent_65%)] opacity-70" />
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onClose();
              }}
              className="absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/15"
              aria-label="Close waitlist form"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative z-10 flex flex-col gap-6">
              <div className="flex flex-col gap-3 text-center">
                <span className="badge badge-gradient mx-auto inline-flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  Waitlist Access
                </span>
                <h3 className="font-display text-[clamp(2rem,4vw,2.75rem)] font-semibold leading-tight text-white">
                  Join the Travelers Feed Pilot
                </h3>
                <p className="text-base text-[var(--color-text-secondary)]">
                  You&apos;ll get early invites, product drops, and behind-the-scenes updates as we open Rush The
                  Line&apos;s next-gen experience.
                </p>
              </div>

              <form
                action="https://rushtheline.us19.list-manage.com/subscribe/post?u=17006b36997a9efd38703b1f1&id=7e9cdb5ce0&v_id=4992&f_id=00a8a9e7f0"
                method="post"
                target="_blank"
                noValidate
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="relative z-10 grid gap-4"
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <InputField
                    id="mce-FNAME"
                    name="FNAME"
                    placeholder="First name"
                    label="First name"
                    required
                  />
                  <InputField
                    id="mce-LNAME"
                    name="LNAME"
                    placeholder="Last name"
                    label="Last name"
                    required
                  />
                </div>
                <InputField
                  id="mce-EMAIL"
                  name="EMAIL"
                  type="email"
                  placeholder="Email"
                  label="Email"
                  required
                />
                <InputField id="mce-MMERGE5" name="MMERGE5" placeholder="City" label="City" />

                <div className="space-y-2">
                  <label htmlFor="mce-MMERGE4" className="text-sm font-semibold text-white">
                    Do you plan to travel from Atlanta this year?
                  </label>
                  <div className="relative">
                    <select
                      id="mce-MMERGE4"
                      name="MMERGE4"
                      required
                      className="input-base w-full appearance-none pr-10 text-white"
                    >
                      <option value="">Select an option</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                    <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-white/60">
                      ▾
                    </span>
                  </div>
                </div>

                <div id="mce-responses" className="hidden">
                  <div id="mce-error-response" className="response" />
                  <div id="mce-success-response" className="response" />
                </div>

                <input type="hidden" name="tags" value="Waitlist,TravelersFeed,BetaNov-Feb" />
                <div aria-hidden="true" className="absolute -left-[9999px] opacity-0">
                  <input type="text" name="b_17006b36997a9efd38703b1f1_7e9cdb5ce0" tabIndex={-1} defaultValue="" />
                </div>

                <button
                  type="submit"
                  className="mt-4 inline-flex items-center justify-center rounded-full bg-[var(--gradient-primary)] px-8 py-3 text-base font-semibold text-white shadow-[0_10px_30px_rgba(166,20,112,0.4)] transition duration-300 hover:bg-[#23FF95] hover:text-[#050506] hover:shadow-[0_12px_32px_rgba(35,255,149,0.45)]"
                >
                  Join the Waitlist
                </button>

                <p className="text-center text-sm text-[var(--color-text-tertiary)]">
                  Powered by Mailchimp • You can unsubscribe anytime
                </p>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

const InputField = ({ label, className, id, ...props }: InputFieldProps) => (
  <div className="space-y-2">
    {label ? (
      <label className="text-sm font-semibold text-white" htmlFor={id}>
        {label}
      </label>
    ) : null}
    <input
      id={id}
      {...props}
      className={
        "input-base w-full border border-white/15 bg-white/5 text-white placeholder:text-white/40 focus:border-[var(--color-brand-magenta)] focus:ring-2 focus:ring-[rgba(166,20,112,0.35)] " +
        (className ?? "")
      }
    />
  </div>
);

