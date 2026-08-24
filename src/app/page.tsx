import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import { DEFAULT_OG_IMAGE } from "@/lib/site";

const title = "Restaurant Cleaning Checklist App for Restaurants | CleanScan";
const description =
  "CleanScan helps restaurants replace paper cleaning logs with digital checklists, recurring tasks, real-time tracking, and cleaning records across shifts.";

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    images: [DEFAULT_OG_IMAGE],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [DEFAULT_OG_IMAGE],
  },
};

const operationCards = [
  {
    title: "Daily restaurant cleaning checklist",
    href: "/templates/restaurant-cleaning-checklist/",
    description:
      "Build a repeatable daily routine for dining areas, kitchen stations, restrooms, storage, and closing shifts.",
  },
  {
    title: "Restroom cleaning log",
    href: "/templates/restroom-cleaning-log/",
    description:
      "Track restroom checks by time block, replenishment needs, incidents, and manager review points.",
  },
  {
    title: "Kitchen sanitation tasks",
    href: "/templates/kitchen-cleaning-checklist/",
    description:
      "Control food-contact surfaces, equipment cleaning, storage checks, floors, sinks, and deep-clean tasks.",
  },
  {
    title: "Opening and closing checklists",
    href: "/templates/restaurant-closing-cleaning-checklist/",
    description:
      "Standardize shift handoffs with role-based routines for opening readiness and end-of-day cleaning.",
  },
  {
    title: "Health inspection readiness",
    href: "/templates/restaurant-health-inspection-checklist/",
    description:
      "Keep cleaning records, sanitation routines, storage areas, and review checks organized before inspections.",
  },
];

const testimonials = [
  {
    quote: "Since implementing CleanScan, cleaning management has become much easier and more efficient.",
    name: "La Sastreria",
    context: "Restaurant team",
    logo: "/wp-content/uploads/2023/11/OHR8zYbDOq3.png",
    width: 4000,
    height: 2800,
  },
  {
    quote: "CleanScan helps us control scheduled cleaning across our restaurants and keep a clear record of what has been completed.",
    name: "Gastroadictos",
    context: "Restaurant group",
    logo: "/wp-content/uploads/2023/11/Logotipo_Gastroadictos-1.png",
    width: 480,
    height: 480,
  },
  {
    quote: "The team can see what needs to be cleaned and managers can verify the work without relying on paper sheets.",
    name: "Bar Mistela",
    context: "Bar and restaurant",
    logo: "/wp-content/uploads/2023/11/descarga-1-3.png",
    width: 551,
    height: 91,
  },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero-v1">
        <div className="wrap hero-inner">
          <div className="hero-copy">
            <h1>Restaurant Cleaning Checklists, Logs, and Task Tracking in One App</h1>
            <p>
              CleanScan helps restaurant managers replace paper cleaning sheets with digital checklists,
              recurring tasks, shift accountability, and real-time completion records.
            </p>
            <div className="hero-actions">
              <a className="hero-cta" href="/contact/">Request a Demo</a>
              <a className="hero-cta-secondary" href="/templates/">Browse Free Templates</a>
            </div>
          </div>

          <div className="hero-visual">
            <Image src="/wp-content/uploads/2023/11/Mockup.png" alt="CleanScan app for restaurant cleaning operations" width={5000} height={3750} priority />
          </div>
        </div>
        <div className="hero-wave" />
      </section>

      <section className="section wrap" id="features">
        <h2>Paper cleaning sheets are hard to control</h2>
        <div className="cards two">
          <article className="card-v1"><p>Staff forget to complete tasks.</p></article>
          <article className="card-v1"><p>Managers cannot see what is overdue.</p></article>
          <article className="card-v1"><p>Paper logs are hard to audit.</p></article>
          <article className="card-v1"><p>Cleaning routines change across shifts.</p></article>
        </div>
      </section>

      <section className="section light">
        <div className="wrap two-col">
          <div>
            <h2>How CleanScan works</h2>
            <ul>
              <li>Create or choose a cleaning checklist.</li>
              <li>Assign tasks by area, role, and shift.</li>
              <li>Staff complete tasks from mobile.</li>
              <li>Managers track completion in real time.</li>
              <li>Keep a digital record of every cleaning action.</li>
            </ul>
          </div>
          <div className="image-card">
            <Image src="/wp-content/uploads/2023/11/Diseno-sin-titulo-1.png" alt="Restaurant cleaning checklist workflow" width={1920} height={1080} />
          </div>
        </div>
      </section>

      <section className="section wrap">
        <h2>Built for daily restaurant operations</h2>
        <div className="cards two operation-grid">
          {operationCards.map((card) => (
            <Link className="card-v1 operation-card" href={card.href} key={card.href}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <span>View template</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section wrap">
        <h2>Used by restaurants to simplify cleaning management</h2>
        <div className="cards three testimonial-grid">
          {testimonials.map((testimonial) => (
            <article className="card-v1 testimonial-card" key={testimonial.name}>
              <div className="testimonial-logo-wrap">
                <Image src={testimonial.logo} alt={`${testimonial.name} logo`} width={testimonial.width} height={testimonial.height} />
              </div>
              <p>“{testimonial.quote}”</p>
              <footer>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.context}</span>
              </footer>
            </article>
          ))}
        </div>
      </section>

      <section className="section cta">
        <div className="wrap cta-inner">
          <h2>Ready to transform your cleaning operations?</h2>
          <p>
            Tell us how your team works and we’ll show you the fastest setup for
            your business.
          </p>
          <div className="hero-actions cta-actions">
            <a className="hero-cta" href="/contact/">Request a Demo</a>
            <a className="outline-cta" href="mailto:somos@isvisoft.com">Contact us</a>
          </div>

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
