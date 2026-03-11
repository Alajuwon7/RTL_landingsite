import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/shared/Section";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — Rush The Line",
  description:
    "Learn how Rush The Line collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="relative min-h-screen bg-[var(--color-bg-primary)]">
      <main id="main-content" className="pt-4">
        <Section background="hero" className="pb-8">
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)] transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              Privacy Policy
            </h1>
            <p className="text-lg text-white font-medium">Rush The Line, Inc.</p>
            <p className="text-[var(--color-text-secondary)]">
              Effective Date: March 11, 2026 | Last Updated: March 11, 2026
            </p>
          </div>
        </Section>

        <Section className="py-12">
          <article className="mx-auto max-w-3xl space-y-10">
            <div className="space-y-4">
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Rush The Line, Inc. (&quot;Rush The Line,&quot; &quot;RTL,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy 
                and is committed to protecting the information you share with us. This Privacy Policy 
                explains how we collect, use, disclose, and safeguard your information when you use 
                the Rush The Line mobile application, website, and related services (collectively, the &quot;Platform&quot;).
              </p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                By accessing or using the Platform, you agree to the practices described in this Privacy Policy.
              </p>
            </div>

            {/* Section 1 */}
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold text-white">
                1. Information We Collect
              </h2>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">Information You Provide</h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  We may collect information you voluntarily provide, including:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-[var(--color-text-secondary)]">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Account login credentials</li>
                  <li>Customer support communications</li>
                  <li>Optional profile information</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">Location Information</h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  Rush The Line provides routing and travel efficiency features. To deliver these services, 
                  the Platform may collect <strong className="text-white">precise location information</strong> from your device.
                </p>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  Location data may include:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-[var(--color-text-secondary)]">
                  <li>Real-time GPS location</li>
                  <li>Device movement while using navigation features</li>
                  <li>Session-based routing data</li>
                  <li>Location data while the app is in use or, if enabled, in the background</li>
                </ul>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  You may disable location permissions at any time through your device settings, although 
                  some features of the Platform may not function properly without location access.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">Device &amp; Technical Information</h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  We automatically collect certain technical information when you use the Platform, including:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-[var(--color-text-secondary)]">
                  <li>Device type</li>
                  <li>Operating system version</li>
                  <li>IP address</li>
                  <li>Unique device identifiers</li>
                  <li>Network connectivity information</li>
                  <li>App crash and diagnostic reports</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">Usage Data</h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  We may collect information about how you interact with the Platform, including:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-[var(--color-text-secondary)]">
                  <li>Features used within the app</li>
                  <li>Navigation sessions started</li>
                  <li>Session duration</li>
                  <li>Interaction patterns</li>
                  <li>Performance metrics</li>
                </ul>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  This information helps improve our services and optimize the platform experience.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">Transaction Information (If Applicable)</h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  If the Platform allows purchases or vendor ordering, we may collect:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-[var(--color-text-secondary)]">
                  <li>Order details</li>
                  <li>Vendor information</li>
                  <li>Transaction timestamps</li>
                  <li>Payment confirmations</li>
                </ul>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  Payment card information is processed by secure third-party payment processors and is 
                  not stored by Rush The Line.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                2. How We Use Your Information
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-[var(--color-text-secondary)]">
                <li>Provide navigation and routing assistance</li>
                <li>Estimate travel times and congestion levels</li>
                <li>Deliver location-based alerts and recommendations</li>
                <li>Improve app performance and reliability</li>
                <li>Analyze crowd flow patterns and venue congestion</li>
                <li>Facilitate vendor orders or services (if applicable)</li>
                <li>Respond to customer service inquiries</li>
                <li>Detect and prevent fraud or abuse</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                We may also use aggregated and anonymized data to improve transportation systems, 
                venue operations, and user experience.
              </p>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                3. How Location Data Is Used
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Location data enables the Platform to:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-[var(--color-text-secondary)]">
                <li>Provide real-time navigation guidance</li>
                <li>Estimate gate arrival times</li>
                <li>Detect congestion and crowd flow</li>
                <li>Recommend efficient routes through airports or venues</li>
                <li>Improve routing algorithms</li>
              </ul>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Rush The Line may use aggregated, anonymized location data to improve congestion 
                insights and venue planning.
              </p>
              <p className="mt-4 rounded-lg border border-[var(--color-brand-magenta)]/30 bg-[var(--color-brand-magenta)]/10 p-4 text-white font-medium">
                Rush The Line does not sell personally identifiable location data.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold text-white">
                4. Sharing of Information
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                We may share information in limited circumstances.
              </p>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">Service Providers</h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  We may share information with trusted vendors who help operate the Platform, including:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-[var(--color-text-secondary)]">
                  <li>Cloud infrastructure providers</li>
                  <li>Analytics services</li>
                  <li>Payment processors</li>
                  <li>Customer support tools</li>
                </ul>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  These partners are required to protect your information.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">Vendor &amp; Partner Integrations</h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  If you use services from participating vendors (such as food ordering or venue services), 
                  we may share necessary information with those vendors to complete your request.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">Aggregated Operational Insights</h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  We may share anonymized and aggregated data with airports, venues, or infrastructure 
                  partners to improve crowd management and operational efficiency.
                </p>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  This data does not identify individual users.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">Legal Requirements</h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  We may disclose information if required to:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-[var(--color-text-secondary)]">
                  <li>Comply with legal obligations</li>
                  <li>Protect the safety of users</li>
                  <li>Investigate fraud or misuse</li>
                  <li>Enforce our Terms of Service</li>
                </ul>
              </div>
            </section>

            {/* Section 5 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                5. Data Retention
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                We retain personal information only for as long as necessary to:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-[var(--color-text-secondary)]">
                <li>Provide our services</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes</li>
                <li>Improve platform performance</li>
              </ul>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Aggregated and anonymized data may be retained longer for analytics and system improvement.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                6. Data Security
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Rush The Line uses administrative, technical, and physical safeguards designed to 
                protect user information.
              </p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                However, no system is completely secure, and we cannot guarantee absolute protection 
                of data transmitted through the Platform.
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                7. Your Privacy Choices
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                You have control over your information. You may:
              </p>
              <ul className="list-disc space-y-2 pl-6 text-[var(--color-text-secondary)]">
                <li>Disable location permissions in device settings</li>
                <li>Stop using the Platform at any time</li>
                <li>Request deletion of your account or personal data</li>
              </ul>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Requests may be submitted using the contact information below.
              </p>
            </section>

            {/* Section 8 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                8. Children&apos;s Privacy
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Rush The Line is not intended for individuals under the age of 13. We do not knowingly 
                collect personal information from children.
              </p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                If we become aware that information has been collected from a child, we will delete it promptly.
              </p>
            </section>

            {/* Section 9 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                9. Third-Party Services
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                The Platform may integrate with or link to third-party services.
              </p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Rush The Line is not responsible for the privacy practices of these services. Users should 
                review the privacy policies of any third-party platforms they interact with.
              </p>
            </section>

            {/* Section 10 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                10. Changes to This Privacy Policy
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                We may update this Privacy Policy from time to time. Updates will be posted within the 
                Platform or on our website.
              </p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Continued use of the Platform after changes become effective constitutes acceptance of 
                the updated policy.
              </p>
            </section>

            {/* Section 11 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                11. Contact Information
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                If you have questions about this Privacy Policy or your data, please contact us:
              </p>
              <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-6 space-y-2">
                <p className="text-white font-semibold text-lg">Rush The Line</p>
                <p className="text-[var(--color-text-secondary)]">
                  3423 Piedmont Rd. NE<br />
                  Atlanta, GA 30305
                </p>
                <p className="text-[var(--color-text-secondary)]">
                  Email:{" "}
                  <a 
                    href="mailto:info@rushtheline.com" 
                    className="text-[var(--color-brand-magenta)] hover:underline"
                  >
                    info@rushtheline.com
                  </a>
                </p>
                <p className="text-[var(--color-text-secondary)]">
                  Website:{" "}
                  <a 
                    href="https://rushtheline.com" 
                    className="text-[var(--color-brand-magenta)] hover:underline"
                  >
                    rushtheline.com
                  </a>
                </p>
              </div>
            </section>
          </article>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
