import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "Restaurant Cleaning Schedule Template (Free & Printable)",
  description:
    "Free restaurant cleaning schedule template for daily, weekly, monthly, opening, and closing tasks. Build a printable schedule or run it digitally in CleanScan.",
  alternates: { canonical: "/templates/restaurant-cleaning-schedule-template/" },
};

const scheduleRows = [
  ["Opening", "Check dining room, restrooms, entry, and service stations", "Every opening shift", "Opening team"],
  ["Kitchen", "Clean and sanitize prep surfaces and food-contact areas", "Daily / after use", "BOH staff"],
  ["Restrooms", "Clean fixtures, restock supplies, and record condition", "Every service block", "Assigned staff"],
  ["Dining room", "Wipe tables, chairs, menus, and high-touch surfaces", "Every shift", "FOH staff"],
  ["Cookline", "Clean equipment fronts, handles, and surrounding surfaces", "Every closing shift", "Kitchen staff"],
  ["Floors", "Sweep and mop kitchen, dining, and service areas", "Daily", "Closing team"],
  ["Waste", "Empty bins, replace liners, and clean surrounding areas", "Daily / closing", "Closing team"],
  ["Storage", "Wipe shelves and check spill-prone areas", "Weekly", "BOH staff"],
  ["Deep cleaning", "Rotate drains, edges, walls, and hard-to-reach zones", "Weekly", "Assigned team"],
  ["Manager review", "Review missed tasks, issues, and corrective actions", "Weekly", "Manager"],
  ["Checklist review", "Update frequencies, ownership, and recurring tasks", "Monthly", "Manager"],
];

const faq = [
  {
    question: "What should a restaurant cleaning schedule include?",
    answer:
      "It should include each cleaning task, area, frequency, responsible role, and a way to verify completion. Opening, service, closing, daily, weekly, and monthly tasks should be separated clearly.",
  },
  {
    question: "How often should a restaurant cleaning schedule be updated?",
    answer:
      "Review it at least monthly and whenever staffing, equipment, layout, service volume, or inspection requirements change.",
  },
  {
    question: "Can I use this as a printable restaurant cleaning schedule?",
    answer:
      "Yes. Use the schedule below as a printable starting point, then adapt the tasks and frequencies to your restaurant.",
  },
  {
    question: "Can I manage the cleaning schedule digitally?",
    answer:
      "Yes. CleanScan can turn recurring schedule items into digital tasks with assignees, due times, completion tracking, and manager visibility.",
  },
];

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <article className="article-wrap">
        <p className="article-kicker">Free Template</p>
        <h1>Restaurant Cleaning Schedule Template</h1>
        <p className="article-lead">
          Build a restaurant cleaning schedule that separates opening, service, closing, daily,
          weekly, and monthly cleaning tasks. Use the free printable structure below or run the same
          schedule digitally in CleanScan.
        </p>

        <div className="article-actions">
          <a className="hero-cta" href="/downloads/cleaning-log.pdf" download>
            Download Free Cleaning Log PDF
          </a>
          <Link className="outline-cta" href="/solutions/restaurant-cleaning-management/">
            Run the Schedule Digitally
          </Link>
          <Link className="outline-cta" href="/templates/restaurant-cleaning-checklist/">
            View Master Cleaning Checklist
          </Link>
        </div>

        <section>
          <h2>Free printable restaurant cleaning schedule</h2>
          <p>
            A cleaning schedule answers four practical questions: what needs to be cleaned, how often,
            who owns the task, and when a manager should verify it. Start with this structure and adapt
            the frequencies to your layout, service volume, staffing, and local requirements.
          </p>
          <div className="template-table-wrap">
            <table className="template-table">
              <thead>
                <tr>
                  <th>Area / moment</th>
                  <th>Example task</th>
                  <th>Frequency</th>
                  <th>Responsible role</th>
                </tr>
              </thead>
              <tbody>
                {scheduleRows.map(([area, task, frequency, role]) => (
                  <tr key={`${area}-${task}`}>
                    <td>{area}</td>
                    <td>{task}</td>
                    <td>{frequency}</td>
                    <td>{role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>How to organize a restaurant cleaning schedule</h2>
          <h3>Opening tasks</h3>
          <p>
            Schedule readiness checks before service: guest areas, restrooms, service stations,
            supplies, floors, and any kitchen surfaces that must be ready before prep begins.
          </p>
          <h3>During-service tasks</h3>
          <p>
            Use service blocks for tasks that cannot wait until closing, especially restroom checks,
            spill response, high-touch surfaces, waste, and guest-facing areas.
          </p>
          <h3>Closing tasks</h3>
          <p>
            Assign end-of-day cleaning by area and role. Closing tasks should include waste removal,
            floors, cookline surfaces, service areas, restrooms, and manager sign-off where needed.
          </p>
          <h3>Weekly and monthly tasks</h3>
          <p>
            Use weekly rotations for deep-cleaning zones and monthly reviews for recurring misses,
            task ownership, supplies, and updates to the schedule itself.
          </p>
        </section>

        <section>
          <h2>Cleaning schedule vs cleaning checklist</h2>
          <p>
            A checklist defines the tasks that need to be completed. A schedule adds timing and
            frequency so the team knows when those tasks should happen. Most restaurants need both.
          </p>
          <p>
            If you are starting from scratch, use the <Link href="/templates/restaurant-cleaning-checklist/">restaurant cleaning checklist template</Link> to define the work, then use this schedule to assign frequencies and ownership.
          </p>
        </section>

        <section className="article-cta-box">
          <h2>Turn the schedule into recurring digital tasks</h2>
          <p>
            CleanScan helps restaurant managers move from a static schedule to recurring tasks with
            assignees, due times, completion history, overdue visibility, and manager follow-up.
          </p>
          <Link className="hero-cta" href="/solutions/restaurant-cleaning-management/">
            See Restaurant Cleaning Management
          </Link>
        </section>

        <section>
          <h2>Related restaurant cleaning templates</h2>
          <ul>
            <li><Link href="/templates/restaurant-cleaning-checklist/">Restaurant cleaning checklist template</Link></li>
            <li><Link href="/templates/kitchen-cleaning-checklist/">Kitchen cleaning checklist</Link></li>
            <li><Link href="/templates/restaurant-opening-checklist/">Restaurant opening checklist</Link></li>
            <li><Link href="/templates/restaurant-closing-cleaning-checklist/">Restaurant closing cleaning checklist</Link></li>
            <li><Link href="/templates/restroom-cleaning-log/">Restroom cleaning log template</Link></li>
          </ul>
        </section>

        <section>
          <h2>Restaurant cleaning schedule FAQs</h2>
          <div className="faq-list">
            {faq.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
