import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "Free Restaurant Cleaning Templates & Logs",
  description:
    "Browse free restaurant cleaning templates by use case: master checklist, cleaning schedule, kitchen, restroom, opening, closing, and inspection readiness.",
  alternates: { canonical: "/templates/" },
};

const templates = [
  {
    title: "Restaurant Cleaning Checklist",
    href: "/templates/restaurant-cleaning-checklist/",
    bestFor: "A complete restaurant-wide cleaning routine.",
    frequency: "Daily / weekly / monthly",
    description: "Master checklist covering kitchen, dining, restrooms, storage, waste, and manager review.",
  },
  {
    title: "Restaurant Cleaning Schedule",
    href: "/templates/restaurant-cleaning-schedule-template/",
    bestFor: "Organizing when cleaning happens and who owns it.",
    frequency: "Opening / shift / daily / weekly / monthly",
    description: "Schedule tasks by frequency, area, responsible role, and manager verification.",
  },
  {
    title: "Kitchen Cleaning Checklist",
    href: "/templates/kitchen-cleaning-checklist/",
    bestFor: "Commercial and restaurant kitchen cleaning.",
    frequency: "Shift / daily / weekly",
    description: "Prep areas, cookline, sinks, storage, floors, drains, equipment, and kitchen verification.",
  },
  {
    title: "Restroom Cleaning Log",
    href: "/templates/restroom-cleaning-log/",
    bestFor: "Guest restroom checks and cleaning records.",
    frequency: "Every service block",
    description: "Track condition, supplies, issues, corrective action, timestamps, and verification.",
  },
  {
    title: "Restaurant Opening Checklist",
    href: "/templates/restaurant-opening-checklist/",
    bestFor: "Start-of-day readiness.",
    frequency: "Every opening shift",
    description: "FOH, kitchen, restroom, supplies, cleaning, and manager readiness checks.",
  },
  {
    title: "Restaurant Closing Cleaning Checklist",
    href: "/templates/restaurant-closing-cleaning-checklist/",
    bestFor: "End-of-day cleaning and handoff.",
    frequency: "Every closing shift",
    description: "Dining room, kitchen, service areas, restrooms, waste, storage, and manager sign-off.",
  },
  {
    title: "Restaurant Health Inspection Checklist",
    href: "/templates/restaurant-health-inspection-checklist/",
    bestFor: "Inspection preparation and manager review.",
    frequency: "Weekly / monthly",
    description: "Review cleaning records, sanitation routines, corrective actions, and documentation readiness.",
  },
];

const faqs = [
  {
    question: "Which cleaning template should I use?",
    answer:
      "Choose the template that matches the job you are trying to control. Use the master checklist for the full restaurant, the schedule for timing and ownership, the kitchen checklist for BOH cleaning, and the restroom log for recurring restroom checks.",
  },
  {
    question: "Are the templates free?",
    answer:
      "Yes. The templates can be used as free starting points, and the printable cleaning log PDF can be downloaded without creating an account.",
  },
  {
    question: "Can these templates be used digitally?",
    answer:
      "Yes. CleanScan can turn the same routines into recurring digital tasks with assignments, schedules, completion history, and manager visibility.",
  },
  {
    question: "Can I customize the templates?",
    answer:
      "Yes. Adapt each template to your layout, equipment, staffing model, cleaning standards, and local requirements.",
  },
];

export default function TemplatesIndexPage() {
  return (
    <main>
      <SiteHeader />

      <section className="solutions-hero wrap">
        <p className="article-kicker">Template Library</p>
        <h1>Free Restaurant Cleaning Templates & Logs</h1>
        <p className="article-lead">
          Choose the cleaning template that matches the job you need to control. Each page below is
          focused on a specific workflow so you can use the right checklist, schedule, or log without
          mixing different routines together.
        </p>
        <div className="hero-actions">
          <a className="hero-cta" href="/downloads/cleaning-log.pdf" download>
            Download Printable Cleaning Log
          </a>
          <Link className="outline-cta" href="/solutions/restaurant-cleaning-management/">
            Use Templates Digitally
          </Link>
        </div>
      </section>

      <section className="section wrap" id="choose-template">
        <div className="section-heading">
          <p className="article-kicker">Choose by Use Case</p>
          <h2>Pick the right template for each cleaning workflow</h2>
          <p>
            The library is organized by intent: use the master checklist for the whole restaurant,
            the schedule for timing and ownership, and the area-specific templates for kitchen,
            restroom, opening, closing, or inspection workflows.
          </p>
        </div>

        <div className="cards two template-grid">
          {templates.map((item) => (
            <article className="card-v1 template-card" key={item.href}>
              <h2>{item.title}</h2>
              <p><strong>Best for:</strong> {item.bestFor}</p>
              <p><strong>Frequency:</strong> {item.frequency}</p>
              <p>{item.description}</p>
              <Link className="hero-cta" href={item.href}>
                View {item.title}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section light">
        <div className="wrap">
          <div className="section-heading">
            <p className="article-kicker">How to Choose</p>
            <h2>Checklist, schedule, or log?</h2>
          </div>

          <div className="templates-hub-table-wrap">
            <table className="templates-hub-table">
              <thead>
                <tr>
                  <th>Need</th>
                  <th>Use</th>
                  <th>Best page</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Define what must be cleaned across the restaurant</td>
                  <td>Master checklist</td>
                  <td><Link href="/templates/restaurant-cleaning-checklist/">Restaurant Cleaning Checklist</Link></td>
                </tr>
                <tr>
                  <td>Define when tasks happen and who owns them</td>
                  <td>Cleaning schedule</td>
                  <td><Link href="/templates/restaurant-cleaning-schedule-template/">Restaurant Cleaning Schedule</Link></td>
                </tr>
                <tr>
                  <td>Control BOH and commercial kitchen cleaning</td>
                  <td>Kitchen checklist</td>
                  <td><Link href="/templates/kitchen-cleaning-checklist/">Kitchen Cleaning Checklist</Link></td>
                </tr>
                <tr>
                  <td>Record repeated restroom checks</td>
                  <td>Cleaning log</td>
                  <td><Link href="/templates/restroom-cleaning-log/">Restroom Cleaning Log</Link></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section cta">
        <div className="wrap cta-inner">
          <p className="article-kicker">From Paper to Digital</p>
          <h2>Use the template first. Digitize the routine when you need control.</h2>
          <p>
            CleanScan turns cleaning routines into recurring tasks with assignees, schedules,
            completion tracking, digital records, and manager visibility.
          </p>
          <div className="hero-actions cta-actions">
            <Link className="hero-cta" href="/solutions/restaurant-cleaning-management/">
              See CleanScan for Restaurants
            </Link>
            <Link className="outline-cta" href="/pricing/">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="section wrap">
        <div className="section-heading">
          <p className="article-kicker">FAQ</p>
          <h2>Restaurant cleaning template FAQs</h2>
        </div>

        <div className="templates-hub-faq-list">
          {faqs.map((item) => (
            <details className="templates-hub-faq-item" key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
