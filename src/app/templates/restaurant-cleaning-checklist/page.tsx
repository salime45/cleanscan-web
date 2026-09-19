import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "Restaurant Cleaning Checklist: Free Printable PDF Template",
  description:
    "Free restaurant cleaning checklist with daily, weekly, and monthly tasks. Use the printable template and download the free cleaning log PDF.",
  alternates: { canonical: "/templates/restaurant-cleaning-checklist/" },
};

const templateRows = [
  ["Kitchen", "Clean and sanitize prep surfaces", "Daily", "Kitchen staff", "Manager review"],
  ["Kitchen", "Check sanitizer solution and cleaning supplies", "Every shift", "Kitchen staff", "Shift lead check"],
  ["Kitchen", "Clean sink areas and splash zones", "Daily", "BOH staff", "Manager review"],
  ["Cookline", "Wipe handles, controls, and equipment fronts", "Every shift", "Kitchen staff", "Shift lead check"],
  ["Dining room", "Wipe tables, chairs, and high-touch surfaces", "Every shift", "FOH staff", "Shift lead check"],
  ["Dining room", "Check floors for spills and debris", "Every service block", "FOH staff", "Timestamped check"],
  ["Bar", "Wipe taps, counters, trays, and POS devices", "Every shift", "Bar staff", "Shift lead check"],
  ["Restrooms", "Clean fixtures and restock supplies", "Every service block", "Assigned staff", "Timestamped check"],
  ["Restrooms", "Check odor, floor condition, and supplies", "Every service block", "Assigned staff", "Timestamped check"],
  ["Waste area", "Empty trash and replace liners", "Daily", "Closing team", "Completion record"],
  ["Storage", "Wipe shelves and organize dry goods", "Weekly", "BOH staff", "Manager sign-off"],
  ["High-touch surfaces", "Clean handles, switches, kiosks, and payment devices", "Every shift", "Assigned staff", "Shift lead check"],
  ["Manager review", "Review missed or overdue cleaning tasks", "Weekly", "Manager", "Completion report"],
];

const dailyTasks = [
  "Clean and sanitize prep tables, cutting boards, and food-contact surfaces.",
  "Wipe cookline handles, equipment fronts, and station touchpoints.",
  "Sweep and mop kitchen floors after prep and close.",
  "Wipe dining tables, chairs, booths, menus, and service stations.",
  "Check dining room floors for spills, debris, and trip hazards.",
  "Clean toilets, sinks, counters, mirrors, dispensers, and door handles.",
  "Restock soap, paper towels, toilet paper, and waste liners.",
  "Sanitize bar counters, POS touchscreens, taps, trays, and shared tools.",
  "Empty trash, recycling, and food waste containers before overflow.",
  "Clean high-touch surfaces such as handles, switches, kiosks, and payment devices.",
];

const weeklyTasks = [
  "Wipe dry storage shelves and remove damaged or misplaced items.",
  "Clean walk-in handles, shelf edges, and spill-prone areas.",
  "Clean appliance fronts, sides, controls, wheels, and lower panels.",
  "Remove grease buildup from non-food-contact surfaces.",
  "Detail floor edges, drains, mat areas, and hard-to-reach zones.",
  "Rotate deep-cleaning tasks across kitchen, dining, bar, restroom, and storage areas.",
];

const monthlyTasks = [
  "Review completion history, overdue tasks, and repeated exceptions.",
  "Update cleaning procedures when layouts, equipment, or service routines change.",
  "Identify tasks that are repeatedly skipped or completed late.",
  "Review cleaning chemicals, paper goods, gloves, liners, and sanitizer supplies.",
  "Verify cleaning records are complete, current, and easy to retrieve.",
];

const relatedTemplates = [
  { title: "Restaurant Cleaning Schedule Template", href: "/templates/restaurant-cleaning-schedule-template/" },
  { title: "Restroom Cleaning Log Template", href: "/templates/restroom-cleaning-log/" },
  { title: "Kitchen Cleaning Checklist", href: "/templates/kitchen-cleaning-checklist/" },
  { title: "Restaurant Opening Checklist", href: "/templates/restaurant-opening-checklist/" },
  { title: "Restaurant Closing Cleaning Checklist", href: "/templates/restaurant-closing-cleaning-checklist/" },
  { title: "Health Inspection Checklist", href: "/templates/restaurant-health-inspection-checklist/" },
];

const faqs = [
  {
    question: "Can I download this restaurant cleaning checklist as a free PDF?",
    answer:
      "Yes. Download the free printable cleaning log PDF and use it with the restaurant cleaning checklist on this page to record completion, staff names, notes, and manager verification.",
  },
  {
    question: "Is this restaurant cleaning checklist printable?",
    answer:
      "Yes. The checklist is designed as a printable reference, and the free PDF cleaning log can be used as the completion record.",
  },
  {
    question: "What should be included in a restaurant cleaning checklist?",
    answer:
      "Include the area, task, frequency, responsible role, and verification method. Cover kitchens, dining areas, restrooms, storage, waste areas, high-touch surfaces, and manager review.",
  },
  {
    question: "How often should restaurant cleaning tasks be completed?",
    answer:
      "Some tasks should be completed every shift or service block, while others are daily, weekly, or monthly depending on risk, traffic, equipment use, and local requirements.",
  },
  {
    question: "Can I use this checklist digitally?",
    answer:
      "Yes. CleanScan turns the same checklist into recurring digital tasks with assignees, timestamps, completion tracking, and manager visibility.",
  },
];

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <article className="article-wrap">
        <p className="article-kicker">Free Printable Template</p>
        <h1>Restaurant Cleaning Checklist (Free Printable Template)</h1>
        <p className="article-lead">
          Use this free restaurant cleaning checklist to organize daily, weekly, and monthly cleaning
          across the whole operation. The template covers kitchen, dining, bar, restrooms, storage,
          waste, high-touch surfaces, and manager verification.
        </p>
        <div className="article-actions">
          <a className="hero-cta" href="/downloads/cleaning-log.pdf" download>
            Download Free PDF Cleaning Log
          </a>
          <a className="outline-cta" href="#restaurant-cleaning-checklist-template">
            View Printable Checklist
          </a>
          <Link className="outline-cta" href="/templates/restaurant-cleaning-schedule-template/">
            Build a Cleaning Schedule
          </Link>
          <Link className="outline-cta" href="/solutions/restaurant-cleaning-management/">
            Use This Checklist Digitally
          </Link>
        </div>

        <section id="restaurant-cleaning-checklist-template">
          <h2>Free printable restaurant cleaning checklist</h2>
          <p>
            This is the master restaurant-wide checklist. Use it when you need one structured list of
            what must be cleaned, how often it should happen, who is responsible, and how completion
            is verified.
          </p>
          <div className="template-table-wrap">
            <table className="template-table">
              <thead>
                <tr>
                  <th>Area</th>
                  <th>Task</th>
                  <th>Frequency</th>
                  <th>Responsible role</th>
                  <th>Verification</th>
                </tr>
              </thead>
              <tbody>
                {templateRows.map(([area, task, frequency, role, verification]) => (
                  <tr key={`${area}-${task}`}>
                    <td>{area}</td>
                    <td>{task}</td>
                    <td>{frequency}</td>
                    <td>{role}</td>
                    <td>{verification}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>Restaurant cleaning checklist PDF</h2>
          <p>
            Use the checklist above to define the routine, then download the free cleaning log PDF to
            record the date, time, cleaned area, notes, staff member, signature, and verification.
            This keeps the printable record separate from the schedule itself.
          </p>
          <a className="hero-cta" href="/downloads/cleaning-log.pdf" download>
            Download Restaurant Cleaning Log PDF
          </a>
        </section>

        <section>
          <h2>Daily restaurant cleaning checklist</h2>
          <p>
            Daily cleaning should focus on food-contact surfaces, guest-facing areas, restrooms,
            waste, floors, and high-touch points that affect every service.
          </p>
          <ul>{dailyTasks.map((task) => <li key={task}>{task}</li>)}</ul>
        </section>

        <section>
          <h2>Weekly restaurant cleaning checklist</h2>
          <p>
            Weekly tasks cover deeper cleaning and areas that do not need constant attention but can
            quickly accumulate grease, residue, or clutter.
          </p>
          <ul>{weeklyTasks.map((task) => <li key={task}>{task}</li>)}</ul>
        </section>

        <section>
          <h2>Monthly restaurant cleaning checklist</h2>
          <p>
            Monthly reviews help managers improve the routine, identify repeated misses, and keep
            records ready for internal reviews or inspections.
          </p>
          <ul>{monthlyTasks.map((task) => <li key={task}>{task}</li>)}</ul>
        </section>

        <section>
          <h2>Checklist vs cleaning schedule</h2>
          <p>
            This page defines what needs to be cleaned. If you need to organize when each task happens
            and who owns it, use the <Link href="/templates/restaurant-cleaning-schedule-template/">restaurant cleaning schedule template</Link>.
          </p>
        </section>

        <section className="article-cta-box">
          <h2>Prefer a digital restaurant cleaning checklist?</h2>
          <p>
            CleanScan turns this checklist into recurring digital tasks with assignees, timestamps,
            completion tracking, and manager visibility.
          </p>
          <div className="hero-actions">
            <Link className="hero-cta" href="/solutions/restaurant-cleaning-management/">
              See Restaurant Cleaning Management
            </Link>
            <Link className="outline-cta" href="/blog/restaurant-cleaning-checklist-app/">
              Compare Paper vs App
            </Link>
          </div>
        </section>

        <section>
          <h2>Related restaurant cleaning templates</h2>
          <ul>
            {relatedTemplates.map((template) => (
              <li key={template.href}>
                <Link href={template.href}>{template.title}</Link>
              </li>
            ))}
          </ul>
          <p><Link href="/templates/">Browse the full cleaning template library</Link>.</p>
        </section>

        <section>
          <h2>Restaurant cleaning checklist FAQ</h2>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
