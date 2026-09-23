import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "Cleaning Schedule App for Recurring Cleaning Tasks",
  description:
    "Cleaning schedule app for recurring tasks by space, shift, day, week, or month. Assign responsibilities, track completion, and manage overdue cleaning.",
  alternates: { canonical: "/cleaning-schedule-app/" },
};

const scheduleExamples = [
  ["Restroom", "Check fixtures, supplies, floor, and trash", "Every service block"],
  ["Kitchen", "Clean and sanitize prep surfaces", "Every shift"],
  ["Dining area", "Clean tables and high-touch surfaces", "Daily / every shift"],
  ["Storage", "Wipe shelves and inspect spills", "Weekly"],
  ["Manager review", "Review missed or overdue tasks", "Weekly"],
];

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <article className="article-wrap">
        <p className="article-kicker">Recurring Cleaning Schedules</p>
        <h1>Cleaning Schedule App for Recurring Cleaning Tasks</h1>
        <p className="article-lead">
          Use CleanScan to schedule cleaning by shift, service block, day, week, or month. Assign
          responsibility once, repeat tasks automatically, and give managers visibility into
          completed and overdue work.
        </p>

        <div className="hero-actions article-actions">
          <Link className="hero-cta" href="/contact/">Request a Demo</Link>
          <Link className="outline-cta" href="/templates/restaurant-cleaning-schedule-template/">View Free Schedule Template</Link>
          <Link className="outline-cta" href="/cleaning-checklist-app/">See Cleaning Checklist App</Link>
        </div>

        <section>
          <h2>What is a cleaning schedule app?</h2>
          <p>
            A cleaning schedule app lets managers define when cleaning work should happen, how often
            it repeats, and who is responsible. Instead of recreating paper schedules every week,
            recurring tasks are generated automatically.
          </p>
        </section>

        <section>
          <h2>Example recurring cleaning schedule</h2>
          <div className="template-table-wrap">
            <table className="template-table">
              <thead><tr><th>Space</th><th>Example task</th><th>Frequency</th></tr></thead>
              <tbody>
                {scheduleExamples.map(([space, task, frequency]) => (
                  <tr key={`${space}-${task}`}><td>{space}</td><td>{task}</td><td>{frequency}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>Schedule cleaning by space and frequency</h2>
          <p>
            Different spaces need different cleaning frequencies. Restrooms may need multiple checks
            per day, kitchens may need shift-based routines, and lower-traffic areas may only need
            weekly tasks. CleanScan keeps those schedules separate while giving managers one dashboard.
          </p>
        </section>

        <section>
          <h2>Cleaning schedule vs cleaning checklist</h2>
          <p>
            A checklist defines what needs to be cleaned. A schedule defines when it happens and how
            often it repeats. CleanScan combines both: each scheduled task contains a clear action,
            owner, frequency, and completion record.
          </p>
        </section>

        <section>
          <h2>Manage missed and overdue cleaning</h2>
          <p>
            A schedule is useful only if managers can see when work does not happen. CleanScan keeps
            pending and overdue tasks visible so missed cleaning can be corrected before the next
            shift or service block.
          </p>
        </section>

        <section className="article-cta-box">
          <h2>Turn your cleaning schedule into recurring digital tasks</h2>
          <p>
            Build schedules once, assign responsibilities, and track execution across every monitored space.
          </p>
          <Link className="hero-cta" href="/contact/">Request a Demo</Link>
        </section>

        <section>
          <h2>Related cleaning tools</h2>
          <ul>
            <li><Link href="/cleaning-management-software/">Cleaning management software</Link></li>
            <li><Link href="/cleaning-checklist-app/">Cleaning checklist app</Link></li>
            <li><Link href="/templates/restaurant-cleaning-schedule-template/">Restaurant cleaning schedule template</Link></li>
          </ul>
        </section>
      </article>
    </main>
  );
}
