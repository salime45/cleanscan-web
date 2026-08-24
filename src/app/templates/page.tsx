import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "Restaurant Cleaning Checklist Templates",
  description:
    "Free printable restaurant cleaning templates and a downloadable cleaning log PDF for restrooms, kitchens, opening, closing, and inspection readiness. Use them digitally in CleanScan.",
  alternates: { canonical: "/templates/" },
};

const templates = [
  {
    title: "Restaurant Cleaning Checklist Template",
    tableTitle: "Restaurant Cleaning Checklist",
    href: "/templates/restaurant-cleaning-checklist/",
    bestFor: "managers who need one master cleaning routine for the whole restaurant.",
    tableBestFor: "Whole restaurant routines",
    frequency: "Daily / weekly / monthly",
    includes:
      "daily, weekly, and monthly tasks for FOH, BOH, restrooms, kitchen, and shared spaces.",
  },
  {
    title: "Restroom Cleaning Log Template for Restaurants",
    tableTitle: "Restroom Cleaning Log",
    href: "/templates/restroom-cleaning-log/",
    bestFor: "teams that need time-block restroom checks, supply notes, incidents, corrective actions, and manager verification.",
    tableBestFor: "Guest restroom checks",
    frequency: "Every service block",
    includes:
      "time, restroom ID, checked tasks, supplies needed, issue found, corrective action, and verification fields.",
  },
  {
    title: "Restaurant Opening Checklist Template",
    tableTitle: "Opening Checklist",
    href: "/templates/restaurant-opening-checklist/",
    bestFor: "shift leads preparing dining room, kitchen, restrooms, supplies, cleaning tasks, and manager checks before service.",
    tableBestFor: "Start-of-day readiness",
    frequency: "Every opening shift",
    includes:
      "FOH readiness, kitchen setup, restroom opening checks, cleaning review, supplies, equipment, and manager verification.",
  },
  {
    title: "Restaurant Closing Cleaning Checklist Template",
    tableTitle: "Closing Checklist",
    href: "/templates/restaurant-closing-cleaning-checklist/",
    bestFor: "teams that need standardized end-of-day cleaning, waste handling, restroom checks, manager sign-off, and shift handoff.",
    tableBestFor: "End-of-day handoff",
    frequency: "Every closing shift",
    includes:
      "dining room, kitchen, bar or service counter, restroom, waste, storage, manager sign-off, and next-shift issue reporting.",
  },
  {
    title: "Kitchen Cleaning Checklist for Restaurants",
    tableTitle: "Kitchen Cleaning Checklist",
    href: "/templates/kitchen-cleaning-checklist/",
    bestFor: "back-of-house teams organizing daily and weekly cleaning tasks by station, frequency, role, and verification.",
    tableBestFor: "BOH and sanitation tasks",
    frequency: "Daily / weekly",
    includes:
      "prep areas, cook line, food-contact surfaces, sinks, dish areas, storage, floors, drains, deep cleaning, and manager verification.",
  },
  {
    title: "Restaurant Health Inspection Checklist Template",
    tableTitle: "Health Inspection Checklist",
    href: "/templates/restaurant-health-inspection-checklist/",
    bestFor: "managers reviewing cleaning records, sanitation routines, corrective actions, and follow-up before inspections.",
    tableBestFor: "Manager review",
    frequency: "Weekly / monthly",
    includes:
      "cleaning records, kitchen routines, restroom checks, storage and waste areas, corrective actions, self-inspections, and documentation review.",
  },
];

const faqs = [
  {
    question: "What is a restaurant cleaning checklist template?",
    answer:
      "A restaurant cleaning checklist template is a reusable task list that defines what needs to be cleaned, when it should happen, and which areas or roles are responsible.",
  },
  {
    question: "Which restaurant cleaning template should I start with?",
    answer:
      "Most teams should start with the restaurant cleaning checklist template because it covers daily, weekly, and monthly routines across the whole restaurant.",
  },
  {
    question: "Can I download a printable cleaning log PDF?",
    answer:
      "Yes. You can download the printable cleaning log PDF and use it to record the date, time, cleaned area, notes, completed-by name, signature, and verification status.",
  },
  {
    question: "Can I customize these templates?",
    answer:
      "Yes. Each template can be adapted to your restaurant layout, cleaning standards, shift structure, and manager review process.",
  },
  {
    question: "Can I use these templates digitally?",
    answer:
      "Yes. CleanScan turns restaurant cleaning templates into assigned digital checklists with recurring schedules, completion tracking, and records.",
  },
  {
    question: "Are these templates for health inspection preparation?",
    answer:
      "These templates can support inspection readiness by helping restaurants organize cleaning routines, restroom checks, kitchen sanitation tasks, and records. They should still be adapted to your local health code, equipment requirements, and internal SOPs.",
  },
];

const exampleTasks = [
  {
    area: "Kitchen",
    task: "Clean and sanitize prep surfaces",
    frequency: "Daily",
  },
  {
    area: "Restroom",
    task: "Check supplies and clean fixtures",
    frequency: "Every service block",
  },
  {
    area: "Dining room",
    task: "Wipe tables and high-touch points",
    frequency: "Every shift",
  },
  {
    area: "Closing",
    task: "Empty waste and verify floors",
    frequency: "Every closing shift",
  },
];

export default function TemplatesIndexPage() {
  return (
    <main>
      <SiteHeader />
      <section className="solutions-hero wrap">
        <p className="article-kicker">Templates</p>
        <h1>Restaurant Cleaning Checklist Templates</h1>
        <p className="article-lead">
          Free printable cleaning checklist and log templates for restaurant managers, including daily
          cleaning, restroom checks, kitchen sanitation, opening routines, closing routines, and
          inspection readiness.
        </p>
        <div className="hero-actions">
          <a className="hero-cta" href="/downloads/cleaning-log.pdf" download>
            Download Free Cleaning Log PDF
          </a>
          <Link className="outline-cta" href="#choose-template">
            Choose a Template
          </Link>
          <Link className="outline-cta" href="/solutions/restaurant-cleaning-management/">
            Use Templates in CleanScan
          </Link>
        </div>
      </section>

      <section className="section wrap" id="choose-template">
        <div className="section-heading">
          <p className="article-kicker">Template Library</p>
          <h2>Choose a restaurant cleaning template</h2>
        </div>

        <div className="cards two template-grid">
          {templates.map((item) => (
            <article className="card-v1 template-card" key={item.href}>
              <h2>{item.title}</h2>
              <p>
                <strong>Best for:</strong> {item.bestFor}
              </p>
              <p>
                <strong>Frequency:</strong> {item.frequency}
              </p>
              <p>
                <strong>Includes:</strong> {item.includes}
              </p>
              <Link className="hero-cta" href={item.href}>
                Open Template
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section wrap">
        <div className="section-heading">
          <p className="article-kicker">Preview</p>
          <h2>Example tasks included in these templates</h2>
          <p>
            Use the printable cleaning log PDF to record when these tasks are completed, who completed
            them, and whether a manager verified the work.
          </p>
        </div>

        <div className="templates-hub-table-wrap">
          <table className="templates-hub-table">
            <thead>
              <tr>
                <th>Area</th>
                <th>Example task</th>
                <th>Frequency</th>
              </tr>
            </thead>
            <tbody>
              {exampleTasks.map((item) => (
                <tr key={`${item.area}-${item.task}`}>
                  <td>{item.area}</td>
                  <td>{item.task}</td>
                  <td>{item.frequency}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section light">
        <div className="wrap">
          <div className="section-heading">
            <p className="article-kicker">Comparison</p>
            <h2>Restaurant cleaning template comparison</h2>
          </div>

          <div className="templates-hub-table-wrap">
            <table className="templates-hub-table">
              <thead>
                <tr>
                  <th>Template</th>
                  <th>Best for</th>
                  <th>Frequency</th>
                  <th>Use in CleanScan</th>
                </tr>
              </thead>
              <tbody>
                {templates.map((item) => (
                  <tr key={item.href}>
                    <td>
                      <Link href={item.href}>{item.tableTitle}</Link>
                    </td>
                    <td>{item.tableBestFor}</td>
                    <td>{item.frequency}</td>
                    <td>
                      <Link href="/solutions/restaurant-cleaning-management/">Use in CleanScan</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section cta">
        <div className="wrap cta-inner">
          <p className="article-kicker">From Printable to Digital</p>
          <h2>Printable templates are useful. Digital checklists are easier to control.</h2>
          <p>
            A printable template helps you define the routine. CleanScan helps you run it every day
            with assigned tasks, recurring schedules, completion tracking, and digital records.
          </p>
          <div className="hero-actions cta-actions">
            <Link className="hero-cta" href="/solutions/restaurant-cleaning-management/">
              Use Templates in CleanScan
            </Link>
            <Link className="outline-cta" href="/contact/">
              Request a Demo
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
