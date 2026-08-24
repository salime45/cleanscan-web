import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";

const canonical = "/templates/kitchen-cleaning-checklist/";
const description =
  "Free printable kitchen cleaning checklist template for restaurants with daily, weekly, and shift-based tasks. Download the cleaning log PDF or run it digitally in CleanScan.";

export const metadata: Metadata = {
  title: "Free Kitchen Cleaning Checklist Template for Restaurants",
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

const monthlyTasks = [
  {
    title: "Manager review",
    tasks: [
      "Review missed kitchen tasks, late completions, and repeated exceptions.",
      "Update task ownership when staffing, stations, or menus change.",
      "Compare kitchen cleaning records with inspection-readiness expectations.",
    ],
  },
  {
    title: "SOP and checklist updates",
    tasks: [
      "Remove vague checklist items and replace them with specific completion standards.",
      "Adjust frequencies for tasks that are always missed or completed too often.",
      "Confirm the checklist still matches the kitchen layout and equipment.",
    ],
  },
];

const faqItems = [
  {
    question: "Is this kitchen cleaning checklist template free?",
    answer:
      "Yes. You can use the checklist on this page for free and download the cleaning log PDF without creating an account.",
  },
  {
    question: "What is a kitchen cleaning checklist?",
    answer:
      "A kitchen cleaning checklist is a structured task list for prep areas, cooklines, sinks, storage, floors, drains, equipment, and manager verification.",
  },
  {
    question: "What should be included in a restaurant kitchen cleaning checklist?",
    answer:
      "It should include the area, task, frequency, responsible role, and verification step for daily, weekly, monthly, and shift-based kitchen cleaning work.",
  },
  {
    question: "What is a kitchen line check template?",
    answer:
      "A kitchen line check template helps staff review cookline readiness before and during service, including prep surfaces, equipment handles, spills, sanitizer, trash, floors, and station reset.",
  },
  {
    question: "Should kitchen cleaning logs be paper or digital?",
    answer:
      "Paper logs are useful for simple records, but digital kitchen cleaning logs make recurring schedules, assignments, completion history, metrics, and manager review easier to control.",
  },
];

const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq).replace(/</g, "\\u003c") }} />
      <SiteHeader />
      <article className="article-wrap">
        <p className="article-kicker">Free Printable Template</p>
        <h1>Kitchen Cleaning Checklist Template for Restaurants</h1>
        <p className="article-lead">
          Use this free restaurant kitchen cleaning checklist template to organize daily, weekly,
          monthly, and shift-based cleaning tasks across prep areas, cooklines, sinks, floors,
          drains, equipment, and storage.
        </p>
        <div className="hero-actions article-actions">
          <a className="hero-cta" href="/downloads/cleaning-log.pdf" download>Download Free Cleaning Log PDF</a>
          <Link className="outline-cta" href="/solutions/restaurant-cleaning-management/">Use It Digitally</Link>
          <a className="outline-cta" href="#kitchen-cleaning-checklist-preview">View Checklist Template</a>
        </div>
        <p>Free to use. No signup required for the PDF.</p>

        <section id="kitchen-cleaning-checklist-preview">
          <h2>Free kitchen checklist template</h2>
          <p>
            A useful kitchen checklist should include area, task, frequency, responsible role, and
            verification. Use the table below as a printable starting point and adapt it to your
            stations, equipment, staff roles, and local requirements.
          </p>
          <div className="template-table-wrap">
            <table className="template-table">
              <thead><tr><th>Area/station</th><th>Task</th><th>Frequency</th><th>Responsible role</th><th>Verification</th></tr></thead>
              <tbody>
                {previewRows.map(([area, task, frequency, role, verification]) => (
                  <tr key={`${area}-${task}`}><td>{area}</td><td>{task}</td><td>{frequency}</td><td>{role}</td><td>{verification}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>Daily kitchen cleaning checklist</h2>
          <p>
            Daily kitchen cleaning tasks should focus on service readiness and shift handoff. For a
            deeper shift-by-shift structure, use the <Link href="/blog/daily-restaurant-kitchen-cleaning-checklist/">daily restaurant kitchen cleaning checklist</Link>.
          </p>
          <TaskSection sections={dailyTasks} />
        </section>

        <section><h2>Weekly kitchen cleaning checklist</h2><TaskSection sections={weeklyTasks} /></section>
        <section><h2>Monthly kitchen cleaning checklist</h2><TaskSection sections={monthlyTasks} /></section>

        <section>
          <h2>Kitchen line check template</h2>
          <p>
            A kitchen line check is a short shift checklist for cookline readiness before and during
            service. See the full <Link href="/blog/kitchen-line-check-template/">kitchen line check template guide</Link>.
          </p>
        </section>

        <section>
          <h2>Printable kitchen checklist vs digital cleaning log</h2>
          <p>
            A printable kitchen checklist is useful for a simple paper record. A digital log is more
            useful when managers need recurring schedules, assignees, timestamps, overdue visibility,
            completion history, and cleaning metrics by space.
          </p>
          <p>
            Pair this template with the <Link href="/templates/restaurant-cleaning-checklist/">restaurant cleaning checklist</Link>, the <Link href="/templates/restaurant-cleaning-schedule-template/">restaurant cleaning schedule template</Link>, and the <Link href="/solutions/food-and-beverage-cleaning-dashboard/">cleaning dashboard</Link>.
          </p>
        </section>

        <section className="article-cta-box commercial-final-cta">
          <h2>Run your kitchen checklist digitally</h2>
          <p>
            CleanScan digitizes the cleaning sheet into recurring tasks and gives managers completion
            tracking plus metrics by space and across the whole operation.
          </p>
          <Link className="hero-cta" href="/solutions/restaurant-cleaning-management/">See CleanScan for Restaurants</Link>
        </section>

        <section>
          <h2>Frequently asked questions</h2>
          <div className="faq-list">
            {faqItems.map((faqItem) => <details key={faqItem.question}><summary>{faqItem.question}</summary><p>{faqItem.answer}</p></details>)}
          </div>
        </section>
      </article>
    </main>
  );
}
