import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Request a CleanScan Demo | Contact",
  description:
    "Contact CleanScan to request a demo of restaurant cleaning checklists, logs, and task tracking.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <section className="section cta contact-page-hero">
        <div className="wrap cta-inner">
          <p className="article-kicker">Contact</p>
          <h1>Request a CleanScan demo</h1>
          <p>
            Tell us how your team handles cleaning routines today and we will show you the fastest
            way to set up digital checklists, recurring tasks, and completion records.
          </p>

          <ContactForm />

          <p className="contact-fallback">
            Prefer email? <a href="mailto:somos@isvisoft.com">somos@isvisoft.com</a>
          </p>

          <p className="legal-links">
            <a href="/privacy-policy/">Privacy Policy</a>
            <span> · </span>
            <a href="/cookie-policy/">Cookie Policy</a>
          </p>
        </div>
      </section>
    </main>
  );
}
