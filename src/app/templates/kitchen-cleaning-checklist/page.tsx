import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";

const canonical = "/templates/kitchen-cleaning-checklist/";
const description =
  "Free kitchen cleaning checklist for restaurants and commercial kitchens. Includes shift, daily, and weekly tasks for prep areas, cooklines, sinks, storage, floors, and equipment.";

export const metadata: Metadata = {
  title: "Kitchen Cleaning Checklist for Restaurants & Commercial Kitchens",
  description,
  alternates: { canonical },
};

const previewRows = [
  ["Prep area", "Clean prep tables and food-contact surfaces", "Every shift", "BOH staff", "Shift lead"],
  ["Cookline", "Wipe handles, controls, equipment fronts, and splash zones", "Every shift", "Kitchen staff", "Manager"],
  ["Line check", "Check spills, sanitizer, trash, floors, and station readiness", "Before and during service", "Line cook", "Shift lead"],
  ["Sink and dish area", "Clean sinks, drains, splash zones, and surrounding floors", "Daily", "Dish team", "Shift lead"],
  ["Storage", "Check shelves, spills, expired items, and dry goods organization", "Weekly", "BOH staff", "Manager"],
];

const dailyTasks = [
  {
    title: "Prep areas",
    tasks: [
      "Clean prep tables, cutting boards, and food-contact surfaces before and after production blocks.",
      "Remove visible residue, crumbs, labels, and packaging waste from stations.",
      "Reset towels, gloves, sanitizer buckets, and small tools before the next shift period.",
    ],
  },
  {
    title: "Cookline",
    tasks: [
      "Wipe equipment handles, controls, knobs, fronts, and nearby splash zones.",
      "Check spills, loose debris, floor mats, and trip hazards around the line.",
      "Record equipment or cleaning issues that need manager follow-up.",
    ],
  },
  {
    title: "Sinks, dish area, and drains",
    tasks: [
      "Clean sinks, faucets, drainboards, and splash areas.",
      "Check the floor condition around dish stations and remove standing debris.",
      "Flag odors, drain issues, or repeated buildup for manager review.",
    ],
  },
];

const weeklyTasks = [
  {
    title: "Storage and shelving",
    tasks: [
      "Wipe dry storage shelves and spill-prone zones.",
      "Check damaged, expired, misplaced, or poorly organized items.",
      "Review walk-in handles, shelf edges, and door contact points.",
    ],
  },
  {
    title: "Equipment exteriors",
    tasks: [
      "Detail appliance fronts, sides, wheels, lower panels, and non-food-contact surfaces.",
      "Remove buildup from hard-to-reach areas that daily cleaning may miss.",
      "Rotate deep-clean zones so no station falls out of the routine.",
    ],
  },
];

const faqItems = [
  {
    question: "Is this kitchen cleaning checklist free?",
    answer: "Yes. You can use the checklist on this page for free and download the printable cleaning log without creating an account.",
  },
  {
    question: "What should a commercial kitchen cleaning checklist include?",
    answer: "Include prep areas, cooklines, sinks, dish areas, storage, floors, drains, equipment, frequencies, ownership, and manager verification.",
  },
  {
    question: "What should be included in a restaurant kitchen cleaning checklist?",
    answer: "Include area, task, frequency, responsible role, and verification for shift-based, daily, and weekly kitchen cleaning work.",
  },
  {
    question: "What is a kitchen line check template?",
    answer: "A kitchen line check is a short operational check for cookline readiness before and during service. It is narrower than a full kitchen cleaning checklist.",
  },
];

function TaskSection({ sections }: { sections: { title: string; tasks: string[] }[] }) {
  return (
    <div className="checklist-groups">
      {sections.map((section) => (
        <section className="checklist-group" key={section.title}>
          <h3>{section.title}</h3>
          <ul>{section.tasks.map((task) => <li key={task}>{task}</li>)}</ul>
        </section>
      ))}
    </div>
  );
}

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <article className="article-wrap">
        <p className="article-kicker">Free Kitchen Template</p>
        <h1>Kitchen Cleaning Checklist for Restaurants & Commercial Kitchens</h1>
        <p className="article-lead">
          Use this free kitchen cleaning checklist to organize shift-based, daily, and weekly cleaning
          across prep areas, cooklines, sinks, dish areas, floors, drains, equipment, and storage.
        </p>

        <div className="hero-actions article-actions">
          <a className="hero-cta" href="/downloads/cleaning-log.pdf" download>Download Printable Cleaning Log</a>
          <Link className="outline-cta" href="/solutions/restaurant-cleaning-management/">Use It Digitally</Link>
          <a className="outline-cta" href="#commercial-kitchen-cleaning-checklist">View Kitchen Checklist</a>
        </div>

        <section id="commercial-kitchen-cleaning-checklist">
          <h2>Commercial kitchen cleaning checklist template</h2>
          <p>
            This page is focused specifically on BOH and commercial kitchen cleaning. Use the table
            below as the kitchen-specific checklist, rather than the broader restaurant-wide master
            checklist.
          </p>
          <div className="template-table-wrap">
            <table className="template-table">
              <thead>
                <tr>
                  <th>Area / station</th>
                  <th>Task</th>
                  <th>Frequency</th>
                  <th>Responsible role</th>
                  <th>Verification</th>
                </tr>
              </thead>
              <tbody>
                {previewRows.map(([area, task, frequency, role, verification]) => (
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
          <h2>Daily kitchen cleaning checklist</h2>
          <TaskSection sections={dailyTasks} />
        </section>

        <section>
          <h2>Weekly commercial kitchen cleaning checklist</h2>
          <TaskSection sections={weeklyTasks} />
        </section>

        <section>
          <h2>Kitchen line checks</h2>
          <p>
            A kitchen line check is narrower than this page: it focuses on cookline readiness before
            and during service. Use the <Link href="/blog/kitchen-line-check-template/">kitchen line check template</Link> for that specific workflow.
          </p>
        </section>

        <section>
          <h2>Kitchen checklist vs restaurant-wide checklist</h2>
          <p>
            Use this page for kitchen and BOH cleaning only. For dining areas, restrooms, bar, waste,
            storage, and the full operation, use the <Link href="/templates/restaurant-cleaning-checklist/">restaurant cleaning checklist</Link>.
            For timing and ownership, use the <Link href="/templates/restaurant-cleaning-schedule-template/">restaurant cleaning schedule template</Link>.
          </p>
        </section>

        <section className="article-cta-box commercial-final-cta">
          <h2>Run your kitchen checklist digitally</h2>
          <p>
            CleanScan digitizes the kitchen cleaning sheet into recurring tasks and gives managers
            completion tracking plus metrics by space and across the operation.
          </p>
          <Link className="hero-cta" href="/solutions/restaurant-cleaning-management/">See CleanScan for Restaurants</Link>
        </section>

        <section>
          <h2>Kitchen cleaning checklist FAQs</h2>
          <div className="faq-list">
            {faqItems.map((faqItem) => (
              <details key={faqItem.question}>
                <summary>{faqItem.question}</summary>
                <p>{faqItem.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
