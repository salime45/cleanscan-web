import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "Restaurant Health Inspection Checklist Template",
  description:
    "Free restaurant health inspection checklist template with a downloadable cleaning log PDF for cleaning records, corrective actions, and manager review.",
  alternates: { canonical: "/templates/restaurant-health-inspection-checklist/" },
};

const previewRows = [
  ["Cleaning records", "Recent cleaning logs", "Dates, shifts, missed tasks, and manager reviews", "Weekly", "Follow up on gaps"],
  ["Kitchen", "Sanitation routines", "Prep areas, cook line, sinks, storage, floors, and drains", "Weekly", "Review repeated issues"],
  ["Restrooms", "Restroom checks", "Supplies, odor, trash, fixture condition, and incidents", "Every service block", "Confirm verification"],
  ["Corrective actions", "Issue follow-up", "Open issues, completed actions, and unresolved problems", "Weekly", "Assign owner"],
];

const sections = [
  {
    title: "Cleaning records",
    tasks: ["Review cleaning logs by date and shift.", "Check for missed or overdue tasks.", "Keep cleaning records organized and easier to review."],
  },
  {
    title: "Kitchen sanitation routines",
    tasks: ["Review prep areas, cook line, sinks, equipment areas, floors, and drains.", "Confirm recurring kitchen tasks have owners.", "Note repeated issues for manager follow-up."],
  },
  {
    title: "Restroom checks",
    tasks: ["Review time-block restroom checks.", "Check supply, odor, trash, fixture, and incident records.", "Confirm manager verification for critical issues."],
  },
  {
    title: "Storage and waste areas",
    tasks: ["Review dry storage and spill-prone areas.", "Check waste handling routines.", "Document storage or waste issues that need correction."],
  },
  {
    title: "Corrective actions",
    tasks: ["Track what issue was found.", "Record what action was taken.", "Confirm unresolved problems are assigned for follow-up."],
  },
  {
    title: "Manager self-inspection",
    tasks: ["Run recurring internal checks.", "Review weak areas before they become repeated problems.", "Update routines when layouts, staffing, or procedures change."],
  },
  {
    title: "Documentation review",
    tasks: ["Keep logs easy to retrieve.", "Review completion history.", "Adapt the checklist to local requirements and official guidance."],
  },
];

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <article className="article-wrap">
        <p className="article-kicker">Template</p>
        <h1>Restaurant Health Inspection Checklist Template</h1>
        <p className="article-lead">
          Use this checklist to review cleaning records, sanitation routines, restroom checks,
          kitchen areas, storage conditions, corrective actions, and manager follow-up before
          inspections. Download the printable log to keep written cleaning records easier to review.
        </p>
        <div className="hero-actions article-actions">
          <a className="hero-cta" href="/downloads/cleaning-log.pdf" download>
            Download Inspection Log
          </a>
          <Link className="outline-cta" href="/contact/">
            Organize Inspection Readiness
          </Link>
          <a className="outline-cta" href="#health-inspection-checklist-preview">
            View Checklist Preview
          </a>
        </div>

        <section id="health-inspection-checklist-preview">
          <h2>Health inspection readiness checklist preview</h2>
          <p>
            The PDF provides a simple paper record for date, time, area, notes, completed-by name,
            signature, and verification when managers review cleaning documentation.
          </p>
          <div className="template-table-wrap">
            <table className="template-table">
              <thead>
                <tr>
                  <th>Area</th>
                  <th>Review item</th>
                  <th>What to check</th>
                  <th>Frequency</th>
                  <th>Manager notes</th>
                </tr>
              </thead>
              <tbody>
                {previewRows.map(([area, item, whatToCheck, frequency, notes]) => (
                  <tr key={`${area}-${item}`}>
                    <td>{area}</td>
                    <td>{item}</td>
                    <td>{whatToCheck}</td>
                    <td>{frequency}</td>
                    <td>{notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>Inspection readiness checklist blocks</h2>
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

        <section className="article-cta-box">
          <h2>Important note</h2>
          <p>
            This checklist supports internal preparation. Restaurants should adapt it to their local
            health code, food safety procedures, equipment requirements, and official guidance.
          </p>
        </section>

        <section className="article-cta-box commercial-final-cta">
          <h2>Keep cleaning records easier to review</h2>
          <p>
            CleanScan helps restaurants organize cleaning routines, corrective actions, manager
            reviews, and completion records without relying on paper folders.
          </p>
          <Link className="hero-cta" href="/contact/">
            Organize Inspection Readiness
          </Link>
        </section>
      </article>
    </main>
  );
}
