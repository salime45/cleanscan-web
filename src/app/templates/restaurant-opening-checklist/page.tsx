import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "Restaurant Opening Checklist Template",
  description:
    "Free restaurant opening checklist template with a downloadable cleaning log PDF for pre-service cleaning checks, signatures, and manager verification.",
  alternates: { canonical: "/templates/restaurant-opening-checklist/" },
};

const previewRows = [
  ["Dining room", "Check tables, chairs, floors, and service stations", "FOH staff", "Yes", "Shift lead"],
  ["Kitchen", "Confirm prep surfaces and stations are clean", "BOH staff", "Yes", "Manager"],
  ["Restrooms", "Verify cleanliness, odor, trash, and supplies", "Assigned staff", "Yes", "Shift lead"],
  ["Supplies", "Check paper goods, liners, gloves, and sanitizer stock", "Manager", "Yes", "Manager"],
];

const sections = [
  {
    title: "Front-of-house opening tasks",
    tasks: ["Check dining room cleanliness.", "Reset tables, chairs, menus, and service stations.", "Confirm guest-facing floors are clean and safe."],
  },
  {
    title: "Kitchen opening tasks",
    tasks: ["Confirm prep surfaces are clean.", "Check station setup before production starts.", "Verify staff know assigned duties for the shift."],
  },
  {
    title: "Restroom opening checks",
    tasks: ["Verify restroom supplies.", "Check toilets, sinks, mirrors, odor, floors, and trash.", "Report maintenance issues before service starts."],
  },
  {
    title: "Cleaning and sanitation checks",
    tasks: ["Confirm cleaning tasks from the previous closing shift.", "Check high-touch surfaces.", "Review any missed tasks that carried over."],
  },
  {
    title: "Supplies and equipment checks",
    tasks: ["Confirm paper goods, liners, gloves, and cleaning supplies.", "Check that key equipment areas are ready.", "Record supply shortages before service."],
  },
  {
    title: "Manager opening verification",
    tasks: ["Review critical areas before doors open.", "Confirm assigned responsibilities.", "Sign off on readiness for service."],
  },
];

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <article className="article-wrap">
        <p className="article-kicker">Template</p>
        <h1>Restaurant Opening Checklist Template</h1>
        <p className="article-lead">
          Use this restaurant opening checklist to prepare the dining room, kitchen, restrooms,
          supplies, cleaning tasks, and manager checks before service starts. Download the printable
          log to record pre-opening cleaning checks before doors open.
        </p>
        <div className="hero-actions article-actions">
          <a className="hero-cta" href="/downloads/cleaning-log.pdf" download>
            Download Opening Shift Cleaning Log
          </a>
          <Link className="outline-cta" href="/contact/">
            Run Opening Checklist
          </Link>
          <a className="outline-cta" href="#opening-checklist-preview">
            View Checklist Preview
          </a>
        </div>

        <section id="opening-checklist-preview">
          <h2>Opening checklist preview</h2>
          <p>
            Pair this checklist with the printable cleaning log to document readiness checks by date,
            time, cleaned area, completed-by name, signature, and verification.
          </p>
          <div className="template-table-wrap">
            <table className="template-table">
              <thead>
                <tr>
                  <th>Area</th>
                  <th>Task</th>
                  <th>Responsible role</th>
                  <th>Before opening?</th>
                  <th>Manager verification</th>
                </tr>
              </thead>
              <tbody>
                {previewRows.map(([area, task, role, beforeOpening, verification]) => (
                  <tr key={`${area}-${task}`}>
                    <td>{area}</td>
                    <td>{task}</td>
                    <td>{role}</td>
                    <td>{beforeOpening}</td>
                    <td>{verification}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>Opening checklist task blocks</h2>
          <div className="checklist-groups">
            {sections.map((section) => (
              <section className="checklist-group" key={section.title}>
                <h3>{section.title}</h3>
                <ul>
                  {section.tasks.map((task) => (
                    <li key={task}>{task}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </section>

        <section className="article-cta-box commercial-final-cta">
          <h2>Turn your opening checklist into a recurring shift workflow</h2>
          <p>
            CleanScan helps managers schedule opening routines, assign responsibilities, track
            completion before service, and keep a digital record of each shift.
          </p>
          <Link className="hero-cta" href="/contact/">
            Run Opening Checklist
          </Link>
        </section>
      </article>
    </main>
  );
}
