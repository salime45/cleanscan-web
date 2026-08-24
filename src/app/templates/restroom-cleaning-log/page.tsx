import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "Restroom Cleaning Log Template for Restaurants",
  description:
    "Free restroom cleaning log template with a downloadable cleaning log PDF for time-block restroom checks, notes, signatures, and manager verification.",
  alternates: { canonical: "/templates/restroom-cleaning-log/" },
};

const logRows = [
  ["11:00 AM", "Guest restroom A", "Fixtures, floor, trash, supplies", "Paper towels", "Soap dispenser low", "Refilled and noted for supply order", "Shift lead"],
  ["1:00 PM", "Guest restroom B", "Toilet, sink, mirror, odor", "None", "No", "No action needed", "Manager"],
  ["3:00 PM", "Guest restroom A", "Floor, trash, toilet paper", "Toilet paper", "Floor spill", "Cleaned floor and replaced roll", "Shift lead"],
];

const taskExamples = [
  "Check toilet and sink cleanliness",
  "Refill soap",
  "Refill paper towels",
  "Empty trash",
  "Check floor condition",
  "Check odor",
  "Clean mirrors",
  "Report maintenance issues",
  "Manager verification",
];

const digitalBenefits = [
  "Program checks by hour or service block",
  "Assign each check to a responsible role",
  "Record incidents and corrective actions",
  "Keep a completion history",
  "See pending restroom checks before they are missed",
];

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <article className="article-wrap">
        <p className="article-kicker">Template</p>
        <h1>Restroom Cleaning Log Template for Restaurants</h1>
        <p className="article-lead">
          Use this restroom cleaning log template to track checks by time block, supplies, incidents,
          corrective actions, signatures, and manager verification. Download the printable PDF when
          you need a paper log at the restroom or service station.
        </p>
        <div className="hero-actions article-actions">
          <a className="hero-cta" href="/downloads/cleaning-log.pdf" download>
            Download Restroom Cleaning Log
          </a>
          <Link className="outline-cta" href="/contact/">
            Run Restroom Log
          </Link>
          <a className="outline-cta" href="#restroom-cleaning-log-template">
            View Template
          </a>
        </div>

        <section id="restroom-cleaning-log-template">
          <h2>Restroom cleaning log template</h2>
          <p>
            Use this structure as a starting point, then adjust it to your restaurant layout, service
            volume, staffing model, and local requirements.
          </p>
          <p>
            The printable cleaning log works well for hourly restroom checks because it includes date,
            time, cleaned area, notes, completed-by, signature, and verification fields.
          </p>
          <div className="template-table-wrap">
            <table className="template-table">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Restroom</th>
                  <th>Tasks checked</th>
                  <th>Supplies needed</th>
                  <th>Issue found</th>
                  <th>Corrective action</th>
                  <th>Verified by</th>
                </tr>
              </thead>
              <tbody>
                {logRows.map(([time, restroom, tasks, supplies, issue, action, verifiedBy]) => (
                  <tr key={`${time}-${restroom}`}>
                    <td>{time}</td>
                    <td>{restroom}</td>
                    <td>{tasks}</td>
                    <td>{supplies}</td>
                    <td>{issue}</td>
                    <td>{action}</td>
                    <td>{verifiedBy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>Example restroom cleaning tasks</h2>
          <div className="commercial-list-grid">
            {taskExamples.map((task) => (
              <div className="commercial-list-item" key={task}>
                {task}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>How often should restaurant restrooms be checked?</h2>
          <p>
            Most restaurants should define restroom check frequency based on traffic, service hours,
            staff capacity, and local requirements. Busy restaurants may need checks during each
            service block, while lower-traffic periods may use a different schedule.
          </p>
        </section>

        <section className="article-cta-box">
          <h2>From paper restroom logs to digital checks</h2>
          <p>
            CleanScan turns this restroom log into a recurring digital workflow so managers can see
            what is complete, what is pending, and where issues need follow-up.
          </p>
          <ul>
            {digitalBenefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
          <Link className="hero-cta" href="/contact/">
            Run Restroom Log
          </Link>
        </section>
      </article>
    </main>
  );
}
