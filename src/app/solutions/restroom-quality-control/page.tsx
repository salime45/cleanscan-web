import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "Restaurant Restroom Quality Control Software",
  description:
    "Restaurant restroom quality control software for time-block checks, role assignments, incident notes, corrective actions, and manager visibility.",
  alternates: { canonical: "/solutions/restroom-quality-control/" },
};

const workflowSteps = [
  "Create restroom check routines.",
  "Schedule checks by service block.",
  "Assign each check to a role or shift.",
  "Record issues, supplies, and corrective actions.",
  "Let managers review completion in real time.",
];

const trackingItems = [
  "Cleanliness check",
  "Toilet and sink condition",
  "Floor condition",
  "Odor issues",
  "Soap, paper, and supplies",
  "Trash level",
  "Incident notes",
  "Manager verification",
];

const comparisonRows = [
  ["Timely checks", "Easy to backfill after the fact", "Requires manual updates", "Scheduled by service block with visible completion"],
  ["Responsibilities", "Often unclear during busy periods", "Listed, but not enforced", "Assigned by role, area, or shift"],
  ["Incident notes", "Limited space and hard to review", "Can be captured manually", "Stored with the restroom check record"],
  ["Manager visibility", "Requires checking the clipboard", "Requires opening and reviewing files", "Shows pending, completed, and overdue checks"],
  ["History", "Paper sheets can be lost or incomplete", "Version history is fragmented", "Digital records are easier to review"],
];

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <article className="article-wrap">
        <p className="article-kicker">Solution</p>
        <h1>Restaurant Restroom Quality Control Software</h1>
        <p className="article-lead">
          Track restroom checks by time block, assign responsibilities, record incidents, and give
          managers real-time visibility across every shift.
        </p>
        <div className="hero-actions article-actions">
          <Link className="hero-cta" href="/contact/">
            Digitize Restroom Log
          </Link>
          <Link className="outline-cta" href="/templates/restroom-cleaning-log/">
            View Restroom Log Template
          </Link>
        </div>

        <section>
          <h2>The problem with paper restroom logs</h2>
          <p>
            Restrooms are visible to guests, checked repeatedly, and easy to neglect during rush
            periods. Paper restroom logs are often filled out late, missed for hours, or completed
            without enough detail for managers to understand what happened.
          </p>
          <p>
            A clipboard can show that a box was checked, but it does not clearly show unresolved
            issues, supply shortages, corrective actions, or whether checks are being completed on
            time across every shift.
          </p>
        </section>

        <section>
          <h2>How CleanScan helps restaurants control restroom checks</h2>
          <ol>
            {workflowSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section>
          <h2>What to track in a restroom quality workflow</h2>
          <div className="commercial-list-grid">
            {trackingItems.map((item) => (
              <div className="commercial-list-item" key={item}>
                {item}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>Paper restroom log vs CleanScan</h2>
          <div className="template-table-wrap">
            <table className="template-table">
              <thead>
                <tr>
                  <th>Need</th>
                  <th>Paper log</th>
                  <th>Spreadsheet</th>
                  <th>CleanScan</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map(([need, paper, spreadsheet, cleanscan]) => (
                  <tr key={need}>
                    <td>{need}</td>
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
          <h2>Related template</h2>
          <p>
            Start with the <Link href="/templates/restroom-cleaning-log/">Restroom Cleaning Log Template</Link>,
            then run the routine digitally in CleanScan when your team is ready to track checks by
            shift and time block.
          </p>
        </section>

        <section className="article-cta-box commercial-final-cta">
          <h2>Digitize your restroom cleaning log</h2>
          <p>
            CleanScan helps restaurants replace paper restroom logs with assigned checks, incident
            notes, completion history, and manager visibility during service.
          </p>
          <Link className="hero-cta" href="/contact/">
            Request a Demo
          </Link>
        </section>
      </article>
    </main>
  );
}
