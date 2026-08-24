import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "Free Restaurant Closing Checklist Template (Printable)",
  description:
    "Free printable restaurant closing checklist template for end-of-day cleaning, kitchen, dining room, restrooms, waste, signatures, and manager sign-off.",
  alternates: { canonical: "/templates/restaurant-closing-cleaning-checklist/" },
};

const previewRows = [
  ["Dining room", "Clean tables, chairs, floors, and service stations", "FOH closing team", "Every close", "Shift lead"],
  ["Kitchen", "Clean prep surfaces, cook line touchpoints, and sink areas", "BOH closing team", "Every close", "Manager"],
  ["Restrooms", "Check fixtures, floors, trash, odor, and supplies", "Assigned staff", "Every close", "Shift lead"],
  ["Waste", "Remove trash, replace liners, and check waste areas", "Closing team", "Every close", "Manager"],
];

const sections = [
  { title: "Dining room closing tasks", tasks: ["Clean tables, chairs, booths, menus, and service stations.", "Sweep and mop guest-facing floors.", "Reset FOH areas for the next opening shift."] },
  { title: "Kitchen closing tasks", tasks: ["Clean prep surfaces and cook line touchpoints.", "Review equipment areas that need end-of-day attention.", "Confirm sink and dish areas are clean."] },
  { title: "Bar and service counter closing tasks", tasks: ["Wipe counters, taps, trays, POS devices, and shared tools.", "Remove clutter and spills.", "Restock service supplies for the next shift."] },
  { title: "Restroom closing tasks", tasks: ["Check toilets, sinks, mirrors, floors, trash, and odor.", "Restock paper goods and soap.", "Record unresolved maintenance issues."] },
  { title: "Waste and storage checks", tasks: ["Remove trash before staff leave.", "Replace liners and clean around bins.", "Check storage and waste areas for spills or missed cleanup."] },
  { title: "Manager sign-off", tasks: ["Review incomplete closing tasks.", "Confirm issues are reported for the next shift.", "Sign off before the team leaves."] },
];

const managerChecks = ["All cleaning tasks completed", "Trash removed", "Floors cleaned", "Restrooms checked", "Equipment areas reviewed", "Issues reported for next shift"];

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <article className="article-wrap">
        <p className="article-kicker">Free Printable Template</p>
        <h1>Restaurant Closing Checklist Template</h1>
        <p className="article-lead">
          Use this free restaurant closing checklist template to standardize end-of-day cleaning,
          kitchen and dining room tasks, restrooms, waste handling, manager sign-off, and handoff to
          the next shift.
        </p>
        <div className="hero-actions article-actions">
          <a className="hero-cta" href="/downloads/cleaning-log.pdf" download>Download Free Closing Log PDF</a>
          <Link className="outline-cta" href="/solutions/restaurant-cleaning-management/">Run Closing Digitally</Link>
          <a className="outline-cta" href="#closing-checklist-preview">View Printable Checklist</a>
        </div>
        <p>Free to use. No signup required for the PDF.</p>

        <section id="closing-checklist-preview">
          <h2>Free restaurant closing checklist</h2>
          <p>
            Use this structure as a printable restaurant closing checklist. Assign every closing task
            to a role and make manager verification explicit before staff leave.
          </p>
          <div className="template-table-wrap">
            <table className="template-table">
              <thead><tr><th>Area</th><th>Closing task</th><th>Responsible role</th><th>Frequency</th><th>Verification</th></tr></thead>
              <tbody>
                {previewRows.map(([area, task, role, frequency, verification]) => (
                  <tr key={`${area}-${task}`}><td>{area}</td><td>{task}</td><td>{role}</td><td>{frequency}</td><td>{verification}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>Restaurant closing cleaning checklist by area</h2>
          <div className="checklist-groups">
            {sections.map((section) => (
              <section className="checklist-group" key={section.title}>
                <h3>{section.title}</h3>
                <ul>{section.tasks.map((task) => <li key={task}>{task}</li>)}</ul>
              </section>
            ))}
          </div>
        </section>

        <section>
          <h2>What managers should verify before closing</h2>
          <div className="commercial-list-grid">
            {managerChecks.map((item) => <div className="commercial-list-item" key={item}>{item}</div>)}
          </div>
        </section>

        <section>
          <h2>Closing checklist vs restaurant cleaning schedule</h2>
          <p>
            The closing checklist defines what must happen before the team leaves. The <Link href="/templates/restaurant-cleaning-schedule-template/">restaurant cleaning schedule template</Link> organizes opening, service, closing, daily, weekly, and monthly work across the full operation.
          </p>
          <p>
            For the complete task library, see the <Link href="/templates/restaurant-cleaning-checklist/">restaurant cleaning checklist template</Link>.
          </p>
        </section>

        <section className="article-cta-box commercial-final-cta">
          <h2>Track closing completion instead of checking paper sheets</h2>
          <p>
            CleanScan digitizes closing tasks, records who completed them, and gives managers metrics
            by space and global visibility across the operation.
          </p>
          <div className="hero-actions">
            <Link className="hero-cta" href="/solutions/restaurant-cleaning-management/">See CleanScan for Restaurants</Link>
            <Link className="outline-cta" href="/solutions/food-and-beverage-cleaning-dashboard/">See Cleaning Dashboard</Link>
          </div>
        </section>
      </article>
    </main>
  );
}
