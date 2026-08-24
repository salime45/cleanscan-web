import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "Food and Beverage Cleaning Dashboard",
  description:
    "Food and beverage cleaning dashboard for digital cleaning logs, space-level metrics, global performance, recurring tasks, and completion tracking with CleanScan.",
  alternates: { canonical: "/solutions/food-and-beverage-cleaning-dashboard/" },
};

const metrics = [
  "Completion rate by space",
  "Global cleaning completion",
  "Pending and overdue tasks",
  "Cleaning activity by area",
  "Recurring task performance",
  "Manager visibility across spaces",
];

const spaces = [
  "Kitchen",
  "Dining room",
  "Restrooms",
  "Bar or service counter",
  "Storage",
  "Waste areas",
  "Other operational spaces",
];

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <article className="article-wrap">
        <p className="article-kicker">Cleaning Analytics</p>
        <h1>Food and Beverage Cleaning Dashboard</h1>
        <p className="article-lead">
          Digitalize cleaning sheets and turn daily cleaning activity into metrics. CleanScan gives
          food and beverage teams a dashboard with performance by space and a global view of cleaning
          execution across the operation.
        </p>

        <div className="hero-actions article-actions">
          <Link className="hero-cta" href="/contact/">Request a Demo</Link>
          <Link className="outline-cta" href="/solutions/restaurant-cleaning-management/">
            See Cleaning Management Software
          </Link>
          <Link className="outline-cta" href="/templates/">Browse Cleaning Templates</Link>
        </div>

        <section>
          <h2>From paper cleaning sheets to measurable cleaning operations</h2>
          <p>
            Paper cleaning logs can show whether someone signed a sheet, but they make it difficult
            to compare spaces, identify recurring misses, or understand overall cleaning performance.
          </p>
          <p>
            CleanScan digitalizes the cleaning sheet so every completed, pending, or overdue task
            becomes usable operational data. Managers can review individual spaces and also see a
            global view of cleaning execution.
          </p>
        </section>

        <section>
          <h2>Cleaning metrics by space</h2>
          <p>
            Each operational area can be tracked separately, so managers can identify which spaces
            are consistently on target and which need attention.
          </p>
          <div className="commercial-list-grid">
            {spaces.map((space) => <div className="commercial-list-item" key={space}>{space}</div>)}
          </div>
        </section>

        <section>
          <h2>Global cleaning dashboard</h2>
          <p>
            The global view combines activity from all spaces into one management layer. This makes
            it easier to understand overall completion, detect overdue work, and compare execution
            across the operation without reviewing individual paper logs.
          </p>
          <div className="commercial-list-grid">
            {metrics.map((metric) => <div className="commercial-list-item" key={metric}>{metric}</div>)}
          </div>
        </section>

        <section>
          <h2>What the dashboard helps managers answer</h2>
          <ul>
            <li>Which spaces are completing their cleaning routines consistently?</li>
            <li>Where are cleaning tasks being missed or completed late?</li>
            <li>What is the global cleaning completion level?</li>
            <li>Which areas need more manager follow-up?</li>
            <li>Are recurring cleaning schedules being executed as planned?</li>
          </ul>
        </section>

        <section>
          <h2>Built on digital cleaning logs</h2>
          <p>
            The dashboard is useful because it is connected to the underlying cleaning workflow.
            Teams complete recurring digital cleaning tasks, and managers can then review performance
            instead of manually consolidating paper sheets or spreadsheets.
          </p>
          <p>
            If you are still defining the routine, start with the <Link href="/templates/restaurant-cleaning-checklist/">restaurant cleaning checklist template</Link> or the <Link href="/templates/restaurant-cleaning-schedule-template/">restaurant cleaning schedule template</Link>.
          </p>
        </section>

        <section className="article-cta-box commercial-final-cta">
          <h2>Measure cleaning performance instead of collecting paper sheets</h2>
          <p>
            CleanScan combines digital cleaning checklists, recurring schedules, completion tracking,
            and metrics by space with a global cleaning dashboard.
          </p>
          <Link className="hero-cta" href="/contact/">Request a Demo</Link>
        </section>
      </article>
    </main>
  );
}
