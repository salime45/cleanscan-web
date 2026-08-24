import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "Restaurant Closing Cleaning Checklist Template",
  description:
    "Free restaurant closing cleaning checklist template with a downloadable cleaning log PDF for end-of-day cleaning, signatures, and manager sign-off.",
  alternates: { canonical: "/templates/restaurant-closing-cleaning-checklist/" },
};

const previewRows = [
  ["Dining room", "Clean tables, chairs, floors, and service stations", "FOH closing team", "Every close", "Shift lead"],
  ["Kitchen", "Clean prep surfaces, cook line touchpoints, and sink areas", "BOH closing team", "Every close", "Manager"],
  ["Restrooms", "Check fixtures, floors, trash, odor, and supplies", "Assigned staff", "Every close", "Shift lead"],
  ["Waste", "Remove trash, replace liners, and check waste areas", "Closing team", "Every close", "Manager"],
];

const sections = [
  {
    title: "Dining room closing tasks",
    tasks: ["Clean tables, chairs, booths, menus, and service stations.", "Sweep and mop guest-facing floors.", "Reset FOH areas for the next opening shift."],
  },
  {
    title: "Kitchen closing cleaning tasks",
    tasks: ["Clean prep surfaces and cook line touchpoints.", "Review equipment areas that need end-of-day attention.", "Confirm sink and dish areas are clean."],
  },
  {
    title: "Bar/service counter closing tasks",
    tasks: ["Wipe counters, taps, trays, POS devices, and shared tools.", "Remove clutter and spills.", "Restock service supplies for the next shift."],
  },
  {
    title: "Restroom closing tasks",
    tasks: ["Check toilets, sinks, mirrors, floors, trash, and odor.", "Restock paper goods and soap.", "Record unresolved maintenance issues."],
  },
  {
    title: "Waste and storage checks",
    tasks: ["Remove trash before staff leave.", "Replace liners and clean around bins.", "Check storage and waste areas for spills or missed cleanup."],
  },
  {
    title: "Manager sign-off",
    tasks: ["Review incomplete closing tasks.", "Confirm issues are reported for the next shift.", "Sign off before the team leaves."],
  },
];

const managerChecks = [
  "All cleaning tasks completed",
  "Trash removed",
  "Floors cleaned",
  "Restrooms checked",
  "Equipment areas reviewed",
  "Issues reported for next shift",
];

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <article className="article-wrap">
        <p className="article-kicker">Template</p>
        <h1>Restaurant Closing Cleaning Checklist Template</h1>
        <p className="article-lead">
          Use this closing cleaning checklist to standardize end-of-day cleaning tasks, manager
          sign-off, waste handling, kitchen checks, restrooms, and handoff for the next shift.
          Download the printable log to keep a signed closing record.
        </p>
        <div className="hero-actions article-actions">
          <a className="hero-cta" href="/downloads/cleaning-log.pdf" download>
            Download Closing Cleaning Log
          </a>
          <Link className="outline-cta" href="/contact/">
            Run Closing Checklist
          </Link>
          <a className="outline-cta" href="#closing-checklist-preview">
            View Checklist Preview
          </a>
        </div>

        <section id="closing-checklist-preview">
          <h2>Closing checklist preview</h2>
          <p>
            Use the PDF as a printed closing log when staff need to record completed cleaning areas,
            notes, signatures, and manager verification before leaving.
          </p>
          <div className="template-table-wrap">
            <table className="template-table">
              <thead>
                <tr>
                  <th>Area</th>
                  <th>Closing task</th>
                  <th>Responsible role</th>
                  <th>Frequency</th>
                  <th>Verification</th>
                </tr>
              </thead>
              <tbody>
                {previewRows.map(([area, task, role, frequency, verification]) => (
                  <tr key={`${area}-${task}`}>
                    <td>{area}</td>
                    <td>{task}</td>
                    <td>{role}</td>
                    <td>{frequency}</td>
                    <td>{verification}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>Closing checklist task blocks</h2>
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

        <section>
          <h2>What managers should verify before closing</h2>
          <div className="commercial-list-grid">
            {managerChecks.map((item) => (
              <div className="commercial-list-item" key={item}>
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="article-cta-box commercial-final-cta">
          <h2>Reduce closing variance across shifts</h2>
          <p>
            CleanScan helps managers assign closing tasks, track completion before staff leave, and
            keep a digital record of who completed each task.
          </p>
          <Link className="hero-cta" href="/contact/">
            Run Closing Checklist
          </Link>
        </section>
      </article>
    </main>
  );
}
