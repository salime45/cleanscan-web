import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";

const canonical = "/templates/kitchen-cleaning-checklist/";
const description =
  "Download or use a restaurant kitchen cleaning checklist template to track daily, weekly, and shift-based cleaning tasks across prep areas, cooklines, sinks, floors, and storage.";

export const metadata: Metadata = {
  title: "Kitchen Cleaning Checklist Template for Restaurants",
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
      "Paper logs are useful for simple records, but digital kitchen cleaning logs make recurring schedules, assignments, completion history, and manager review easier to control.",
  },
];

const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

function TaskSection({
  sections,
}: {
  sections: { title: string; tasks: string[] }[];
}) {
  return (
    <div className="checklist-groups">
      {sections.map((section) => (
        <section className="checklist-group" key={section.title}>
          <h3>{section.title}</h3>
          <ul>
            {section.tasks.map((task) => (
              <li key={task}>{task}</li>
            ))}
          </ul>
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
        <p className="article-kicker">Template</p>
        <h1>Kitchen Cleaning Checklist Template for Restaurants</h1>
        <p className="article-lead">
          Use this restaurant kitchen cleaning checklist template to organize daily, weekly, monthly,
          and shift-based cleaning tasks across prep areas, cooklines, sinks, floors, drains,
          equipment, storage, and manager verification.
        </p>
        <div className="hero-actions article-actions">
          <a className="hero-cta" href="/downloads/cleaning-log.pdf" download>
            Download Kitchen Cleaning Log
          </a>
          <Link className="outline-cta" href="/solutions/restaurant-cleaning-management/">
            Use in CleanScan
          </Link>
          <a className="outline-cta" href="#kitchen-cleaning-checklist-preview">
            View Checklist Preview
          </a>
        </div>

        <section>
          <h2>What is a kitchen cleaning checklist?</h2>
          <p>
            A kitchen cleaning checklist is a repeatable task list that tells back-of-house staff
            what needs to be cleaned, how often it should happen, who owns the work, and how a
            manager or shift lead should verify completion.
          </p>
          <p>
            Restaurants use kitchen checklists to reduce missed station work, keep cleaning records
            consistent, and prepare stronger <a href="/blog/health-inspection-compliance/what-health-inspectors-look-for-in-cleaning-logs/">cleaning logs for health inspection review</a>.
          </p>
        </section>

        <section id="kitchen-cleaning-checklist-preview">
          <h2>What should be included in a restaurant kitchen cleaning checklist?</h2>
          <p>
            A useful kitchen checklist should include area, task, frequency, responsible role, and
            verification. The table below is a starting structure that can be adapted to your layout,
            staff roles, equipment, and local requirements.
          </p>
          <div className="template-table-wrap">
            <table className="template-table">
              <thead>
                <tr>
                  <th>Area/station</th>
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
          <h2>Daily kitchen cleaning tasks</h2>
          <p>
            Daily kitchen cleaning tasks should focus on the areas that affect service readiness and
            shift handoff: prep surfaces, cookline touchpoints, floors, sinks, dish stations, and
            visible debris. For a deeper shift-by-shift structure, use the <a href="/blog/daily-restaurant-kitchen-cleaning-checklist/">daily restaurant kitchen cleaning checklist</a>.
          </p>
          <TaskSection sections={dailyTasks} />
        </section>

        <section>
          <h2>Weekly kitchen cleaning tasks</h2>
          <p>
            Weekly work should catch buildup and organization issues that daily tasks may not fully
            cover. These tasks are useful for storage areas, equipment exteriors, floor edges, and
            repeated problem spots.
          </p>
          <TaskSection sections={weeklyTasks} />
        </section>

        <section>
          <h2>Monthly kitchen cleaning tasks</h2>
          <p>
            Monthly reviews help managers improve the checklist itself. Use them to update
            responsibilities, review missed work, and align kitchen records with inspection
            readiness and internal SOPs.
          </p>
          <TaskSection sections={monthlyTasks} />
        </section>

        <section>
          <h2>Kitchen line check template</h2>
          <p>
            A kitchen line check template is a short shift checklist for cookline readiness before,
            during, and after service. It should help staff review the cookline, prep surfaces,
            equipment handles, visible spills, sanitizer setup, trash, floors, and station readiness
            while the shift is still active.
          </p>
          <p>
            Keep the line check focused on action. The goal is not to duplicate the full kitchen
            checklist. It is to confirm the line is clean, reset, stocked, and safe enough for the
            next service block. See the full <a href="/blog/kitchen-line-check-template/">kitchen line check template guide</a> for a manager-ready structure.
          </p>
        </section>

        <section>
          <h2>Printable checklist vs digital kitchen cleaning log</h2>
          <p>
            A printable kitchen cleaning checklist is useful when the team needs a simple paper
            record with date, time, area, completed-by name, signature, notes, and verification.
            Paper works best when the routine is small and managers review sheets consistently.
          </p>
          <p>
            A digital kitchen cleaning log is stronger when managers need recurring schedules,
            role-based assignments, timestamps, overdue visibility, issue notes, and easier review
            across shifts. If your team is still building the full routine, pair this kitchen
            checklist with the <a href="/templates/restaurant-cleaning-checklist/">restaurant cleaning checklist template</a> and the <a href="/blog/opening-checklist-for-restaurant-managers/">opening checklist for restaurant managers</a>.
          </p>
        </section>

        <section className="article-cta-box commercial-final-cta">
          <h2>Use CleanScan to manage kitchen cleaning tasks digitally</h2>
          <p>
            CleanScan turns kitchen cleaning templates into recurring digital tasks with assignees,
            shift schedules, completion tracking, overdue visibility, and manager review. Managers
            can control kitchen cleaning without chasing paper sheets after service.
          </p>
          <Link className="hero-cta" href="/contact/">
            Run Kitchen Checklist
          </Link>
        </section>

        <section>
          <h2>Frequently asked questions</h2>
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
