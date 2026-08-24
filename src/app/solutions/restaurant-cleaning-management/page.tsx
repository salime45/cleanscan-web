import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "Restaurant Cleaning Management Software",
  description:
    "Restaurant cleaning management software for digital checklists, recurring schedules, task assignments, and real-time completion tracking.",
  alternates: { canonical: "/solutions/restaurant-cleaning-management/" },
};

const managerControls = [
  "Kitchen cleaning tasks",
  "Dining room cleaning",
  "Restroom checks",
  "Opening checklists",
  "Closing checklists",
  "Weekly and monthly deep cleaning",
  "Manager verification",
];

const features = [
  {
    title: "Role-based task assignment",
    description:
      "Assign cleaning work to the right team members based on role, station, or responsibility. Staff see what they need to complete without relying on a clipboard or verbal handoff.",
  },
  {
    title: "Shift-based recurring schedules",
    description:
      "Create daily, opening, closing, weekly, and monthly routines that repeat automatically. Managers can standardize execution across busy service periods and slower prep windows.",
  },
  {
    title: "Real-time task status",
    description:
      "See which tasks are pending, completed, or still waiting for action during the shift. This gives managers live visibility instead of discovering missed work after service.",
  },
  {
    title: "Overdue task visibility",
    description:
      "Spot delayed cleaning tasks before they become operational or compliance problems. CleanScan helps managers intervene while there is still time to correct the routine.",
  },
  {
    title: "Digital completion records",
    description:
      "Keep a clear history of completed cleaning work by date, shift, and area. Records are easier to review than paper folders and support manager follow-up when standards slip.",
  },
  {
    title: "Custom templates",
    description:
      "Turn your restaurant cleaning routines into reusable digital templates. Update tasks once and roll them out without printing new sheets.",
  },
  {
    title: "Manager review",
    description:
      "Add manager verification to critical tasks, closing routines, and inspection-sensitive areas. Supervisors can review execution and keep accountability consistent across shifts.",
  },
];

const workflowSteps = [
  {
    title: "Build your restaurant cleaning checklist",
    description:
      "Start from a template or create your own cleaning routine by area, role, and frequency.",
  },
  {
    title: "Schedule cleaning by shift",
    description:
      "Set tasks for opening, service blocks, closing, weekly cleaning, or monthly manager reviews.",
  },
  {
    title: "Staff complete tasks from mobile",
    description:
      "Each team member sees what needs to be done and marks tasks as completed during the shift.",
  },
  {
    title: "Managers track completion in real time",
    description:
      "See pending, completed, and overdue tasks without checking paper sheets manually.",
  },
];

const comparisonRows = [
  ["Assign tasks", "Manual", "Manual", "By role, area, and shift"],
  ["Track completion", "After checking sheets", "Manual updates", "In real time"],
  ["Remind staff", "Manual follow-up", "Not built in", "Scheduled reminders"],
  ["Audit history", "Paper folders", "File history", "Digital records"],
  ["Update routines", "Reprint sheets", "Edit files", "Edit templates digitally"],
];

const whoThisIsFor = [
  "Reduce missed cleaning tasks",
  "Standardize routines across shifts",
  "Track closing duties",
  "Verify restroom checks",
  "Keep cleaning records organized",
  "Prepare for internal reviews and inspections",
];

const templates = [
  {
    title: "Restaurant Cleaning Checklist Template",
    href: "/templates/restaurant-cleaning-checklist/",
  },
  {
    title: "Restaurant Cleaning Schedule Template",
    href: "/templates/restaurant-cleaning-schedule-template/",
  },
  {
    title: "Restroom Cleaning Log Template",
    href: "/templates/restroom-cleaning-log/",
  },
  {
    title: "Kitchen Cleaning Checklist",
    href: "/templates/kitchen-cleaning-checklist/",
  },
  {
    title: "Opening Checklist",
    href: "/templates/restaurant-opening-checklist/",
  },
  {
    title: "Closing Checklist",
    href: "/templates/restaurant-closing-cleaning-checklist/",
  },
  {
    title: "Health Inspection Checklist",
    href: "/templates/restaurant-health-inspection-checklist/",
  },
];

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <article className="article-wrap">
        <p className="article-kicker">Solution</p>
        <h1>Restaurant Cleaning Management Software</h1>
        <p className="article-lead">
          Replace paper cleaning sheets with digital checklists, recurring schedules, task
          assignments, and real-time completion tracking for your restaurant team.
        </p>
        <div className="hero-actions article-actions">
          <Link className="hero-cta" href="/contact/">
            Request a Demo
          </Link>
          <Link className="outline-cta" href="/templates/">
            Browse Templates
          </Link>
          <Link className="outline-cta" href="/blog/restaurant-cleaning-checklist-app/">
            See Checklist App Guide
          </Link>
        </div>

        <section>
          <h2>The problem with paper cleaning sheets</h2>
          <p>
            Paper cleaning logs are easy to ignore, lose, or complete after the fact. Managers
            often have to chase staff, check clipboards manually, and guess whether cleaning
            routines were completed on time.
          </p>
        </section>

        <section>
          <h2>How CleanScan helps</h2>
          <div className="commercial-flow">
            {workflowSteps.map((step) => (
              <section key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </section>
            ))}
          </div>
        </section>

        <section>
          <h2>What restaurant managers can control</h2>
          <div className="commercial-list-grid">
            {managerControls.map((item) => (
              <div className="commercial-list-item" key={item}>
                {item}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>Key features</h2>
          <div className="cards two commercial-card-grid">
            {features.map((feature) => (
              <section className="card-v1 commercial-feature-card" key={feature.title}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </section>
            ))}
          </div>
        </section>

        <section>
          <h2>Paper checklist vs CleanScan</h2>
          <div className="comparison-table-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Need</th>
                  <th>Paper sheets</th>
                  <th>Spreadsheets</th>
                  <th>CleanScan</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map(([need, paper, spreadsheet, cleanscan]) => (
                  <tr key={need}>
                    <th scope="row">{need}</th>
                    <td>{paper}</td>
                    <td>{spreadsheet}</td>
                    <td>{cleanscan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>Who this is for</h2>
          <p>Built for restaurant managers who need to:</p>
          <div className="commercial-list-grid">
            {whoThisIsFor.map((item) => (
              <div className="commercial-list-item" key={item}>
                {item}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>Templates included</h2>
          <p>
            Start from proven restaurant cleaning routines, then adapt each template to your team,
            areas, and shift structure. Use the master checklist to define the work and the cleaning
            schedule template to define timing and ownership.
          </p>
          <div className="commercial-template-list">
            {templates.map((template) => (
              <Link href={template.href} key={template.href}>
                {template.title}
              </Link>
            ))}
          </div>
        </section>

        <section className="article-cta-box commercial-final-cta">
          <h2>Ready to replace paper cleaning sheets?</h2>
          <p>
            See how CleanScan can help your restaurant standardize cleaning tasks, track execution,
            and keep a clear digital record across shifts.
          </p>
          <div className="hero-actions">
            <Link className="hero-cta" href="/contact/">
              Request a Demo
            </Link>
            <Link className="outline-cta" href="/templates/restaurant-cleaning-schedule-template/">
              View Cleaning Schedule Template
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
