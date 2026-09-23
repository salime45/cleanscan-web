import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "Restroom Cleaning Log & Checklist Template (Free Printable)",
  description:
    "Free printable restroom cleaning log and checklist for hourly or service-block checks, supplies, issues, corrective actions, signatures, and manager verification.",
  alternates: { canonical: "/templates/restroom-cleaning-log/" },
};

const logRows = [
  ["11:00 AM", "Guest restroom A", "Fixtures, floor, trash, supplies", "Paper towels", "Soap dispenser low", "Refilled and noted for supply order", "Shift lead"],
  ["1:00 PM", "Guest restroom B", "Toilet, sink, mirror, odor", "None", "No", "No action needed", "Manager"],
  ["3:00 PM", "Guest restroom A", "Floor, trash, toilet paper", "Toilet paper", "Floor spill", "Cleaned floor and replaced roll", "Shift lead"],
];

const taskExamples = [
  "Check toilets and urinals",
  "Clean sinks and counters",
  "Clean mirrors",
  "Refill soap",
  "Refill paper towels or hand-drying supplies",
  "Refill toilet paper",
  "Empty trash",
  "Check floor condition",
  "Check odor",
  "Report maintenance issues",
  "Record corrective action",
  "Manager verification",
];

const faqItems = [
  {
    question: "What should a restroom cleaning log include?",
    answer: "Include date, time, restroom or space ID, tasks checked, supplies needed, issues found, corrective action, completed-by name, and manager verification.",
  },
  {
    question: "How often should a restroom cleaning checklist be completed?",
    answer: "Frequency depends on traffic and local requirements. Busy public restrooms often need checks by service block or multiple times per day.",
  },
  {
    question: "Can I use this as a free printable restroom cleaning log?",
    answer: "Yes. The downloadable cleaning log can be printed and used as a restroom sign-off sheet without creating an account.",
  },
  {
    question: "Can a restroom cleaning log be digital?",
    answer: "Yes. CleanScan can schedule recurring restroom checks, track completion, store issues and corrective actions, and show the latest cleaning status with a public QR code.",
  },
];

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <article className="article-wrap">
        <p className="article-kicker">Free Printable Template</p>
        <h1>Restroom Cleaning Log & Checklist Template</h1>
        <p className="article-lead">
          Use this free restroom cleaning log and checklist to record recurring checks, supplies,
          incidents, corrective actions, signatures, and manager verification. It works for
          restaurant restrooms and other public or customer-facing facilities.
        </p>

        <div className="hero-actions article-actions">
          <a className="hero-cta" href="/downloads/cleaning-log.pdf" download>
            Download Free Printable Restroom Log
          </a>
          <Link className="outline-cta" href="/solutions/restroom-quality-control/">
            Run Restroom Checks Digitally
          </Link>
          <a className="outline-cta" href="#restroom-cleaning-log-template">View Template</a>
        </div>

        <section id="restroom-cleaning-log-template">
          <h2>Free printable restroom cleaning log</h2>
          <p>
            Use this structure for hourly, scheduled, or service-block restroom checks. Keep the
            record simple enough for staff to complete during service while still capturing issues
            and manager verification.
          </p>
          <div className="template-table-wrap">
            <table className="template-table">
              <thead>
                <tr><th>Time</th><th>Restroom</th><th>Tasks checked</th><th>Supplies needed</th><th>Issue found</th><th>Corrective action</th><th>Verified by</th></tr>
              </thead>
              <tbody>
                {logRows.map(([time, restroom, tasks, supplies, issue, action, verifiedBy]) => (
                  <tr key={`${time}-${restroom}`}><td>{time}</td><td>{restroom}</td><td>{tasks}</td><td>{supplies}</td><td>{issue}</td><td>{action}</td><td>{verifiedBy}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>Restroom cleaning checklist</h2>
          <div className="commercial-list-grid">
            {taskExamples.map((task) => <div className="commercial-list-item" key={task}>{task}</div>)}
          </div>
        </section>

        <section>
          <h2>Bathroom cleaning log vs restroom cleaning log</h2>
          <p>
            The same format can be used for guest bathrooms, workplace restrooms, public facilities,
            or customer-facing washrooms. The important part is recording frequency, condition,
            supplies, issues, corrective action, and verification consistently.
          </p>
        </section>

        <section>
          <h2>How often should public restrooms be checked?</h2>
          <p>
            Set the frequency based on traffic, service hours, staff capacity, and local requirements.
            High-traffic locations may need multiple checks per day or checks during every service block.
          </p>
        </section>

        <section className="article-cta-box">
          <h2>Replace the paper restroom log with a QR-enabled workflow</h2>
          <p>
            CleanScan schedules recurring checks, keeps the completion history, and can publish a
            public QR page showing when the restroom was last cleaned.
          </p>
          <Link className="hero-cta" href="/solutions/restroom-quality-control/">See Restroom Quality Control</Link>
        </section>

        <section>
          <h2>Restroom cleaning log FAQs</h2>
          <div className="faq-list">
            {faqItems.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}
          </div>
        </section>
      </article>
    </main>
  );
}
