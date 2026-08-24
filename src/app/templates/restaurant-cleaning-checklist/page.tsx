import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "Restaurant Cleaning Checklist Template",
  description:
    "Free restaurant cleaning checklist template with daily, weekly, and monthly tasks plus a downloadable cleaning log PDF for printed completion records.",
  alternates: { canonical: "/templates/restaurant-cleaning-checklist/" },
};

const templateRows = [
  {
    area: "Kitchen",
    task: "Clean and sanitize prep surfaces",
    frequency: "Daily",
    role: "Kitchen staff",
    verification: "Manager review",
  },
  {
    area: "Kitchen",
    task: "Check sanitizer solution or approved cleaning supplies",
    frequency: "Every shift",
    role: "Kitchen staff",
    verification: "Shift lead check",
  },
  {
    area: "Kitchen",
    task: "Clean sink areas and splash zones",
    frequency: "Daily",
    role: "BOH staff",
    verification: "Manager review",
  },
  {
    area: "Kitchen",
    task: "Wipe cookline handles, controls, and equipment fronts",
    frequency: "Every shift",
    role: "Kitchen staff",
    verification: "Shift lead check",
  },
  {
    area: "Dining room",
    task: "Wipe tables, chairs, and high-touch surfaces",
    frequency: "Every shift",
    role: "FOH staff",
    verification: "Shift lead check",
  },
  {
    area: "Dining room",
    task: "Check floors for spills, debris, and trip hazards",
    frequency: "Every service block",
    role: "FOH staff",
    verification: "Timestamped check",
  },
  {
    area: "Bar",
    task: "Wipe taps, counters, trays, and POS devices",
    frequency: "Every shift",
    role: "Bar staff",
    verification: "Shift lead check",
  },
  {
    area: "Restrooms",
    task: "Clean fixtures and restock supplies",
    frequency: "Every service block",
    role: "Assigned staff",
    verification: "Timestamped check",
  },
  {
    area: "Restrooms",
    task: "Check odor, floor condition, and supplies",
    frequency: "Every service block",
    role: "Assigned staff",
    verification: "Timestamped check",
  },
  {
    area: "Waste area",
    task: "Empty trash and replace liners",
    frequency: "Daily",
    role: "Closing team",
    verification: "Completion record",
  },
  {
    area: "Closing",
    task: "Verify all trash has been removed",
    frequency: "Every closing shift",
    role: "Closing team",
    verification: "Manager sign-off",
  },
  {
    area: "Storage",
    task: "Wipe shelves and organize dry goods",
    frequency: "Weekly",
    role: "BOH staff",
    verification: "Manager sign-off",
  },
  {
    area: "Supplies",
    task: "Confirm paper goods, gloves, liners, and sanitizer stock",
    frequency: "Weekly",
    role: "Manager",
    verification: "Inventory review",
  },
  {
    area: "High-touch surfaces",
    task: "Clean and sanitize door handles, switches, kiosks, and payment devices where appropriate",
    frequency: "Every shift",
    role: "Assigned staff",
    verification: "Shift lead check",
  },
  {
    area: "Manager review",
    task: "Review missed or overdue cleaning tasks",
    frequency: "Weekly",
    role: "Manager",
    verification: "Completion report",
  },
];

const dailySections = [
  {
    title: "Kitchen",
    tasks: [
      "Clean and sanitize prep tables, cutting boards, and food-contact surfaces.",
      "Wipe cookline handles, equipment fronts, and station touchpoints.",
      "Sweep and mop kitchen floors after prep and close.",
    ],
  },
  {
    title: "Dining room",
    tasks: [
      "Wipe tables, chairs, booths, menus, and service stations between use.",
      "Check floors for spills, debris, and trip hazards during service.",
      "Reset guest areas before each service block and closing shift.",
    ],
  },
  {
    title: "Restrooms",
    tasks: [
      "Clean toilets, sinks, counters, mirrors, dispensers, and door handles.",
      "Restock soap, paper towels, toilet paper, and waste liners.",
      "Record restroom checks by time block so missed checks are visible.",
    ],
  },
  {
    title: "Bar / service counter",
    tasks: [
      "Sanitize counters, POS touchscreens, taps, trays, and shared tools.",
      "Clean spills quickly and remove clutter from guest-facing areas.",
      "Verify glassware, garnish, and service supply areas are clean.",
    ],
  },
  {
    title: "Waste areas",
    tasks: [
      "Empty trash, recycling, and food waste containers before overflow.",
      "Replace liners and wipe bin lids, carts, and surrounding floors.",
      "Check dumpster or exterior waste zones during closing routines.",
    ],
  },
  {
    title: "High-touch surfaces",
    tasks: [
      "Clean and sanitize door handles, railings, light switches, kiosks, and payment devices where appropriate.",
      "Prioritize surfaces touched by both guests and staff.",
      "Increase frequency during high-volume service periods.",
    ],
  },
];

const weeklySections = [
  {
    title: "Storage",
    tasks: [
      "Wipe dry storage shelves and remove expired, damaged, or misplaced items.",
      "Clean walk-in handles, shelf edges, and spill-prone areas.",
    ],
  },
  {
    title: "Equipment exteriors",
    tasks: [
      "Clean appliance fronts, sides, controls, wheels, and lower panels.",
      "Remove grease buildup from non-food-contact surfaces.",
    ],
  },
  {
    title: "Walls and corners",
    tasks: [
      "Wipe splash zones, wall edges, baseboards, and corner buildup.",
      "Check behind movable furniture or equipment where debris collects.",
    ],
  },
  {
    title: "Floor edges",
    tasks: [
      "Detail floor edges, drains, mat areas, and hard-to-reach zones.",
      "Inspect grout lines, thresholds, and transition areas for residue.",
    ],
  },
  {
    title: "Deep cleaning zones",
    tasks: [
      "Rotate deep cleaning tasks across kitchen, dining, bar, restroom, and storage areas.",
      "Document missed zones so they move into the next manager review.",
    ],
  },
];

const monthlySections = [
  {
    title: "Manager review",
    tasks: [
      "Review completion history, overdue tasks, and repeated exceptions.",
      "Confirm checklist ownership still matches staffing and shift structure.",
    ],
  },
  {
    title: "SOP updates",
    tasks: [
      "Update cleaning procedures when layouts, equipment, or service routines change.",
      "Remove vague tasks and replace them with clear completion standards.",
    ],
  },
  {
    title: "Recurring missed tasks",
    tasks: [
      "Identify tasks that are repeatedly skipped or completed late.",
      "Adjust frequency, staffing, or manager follow-up where needed.",
    ],
  },
  {
    title: "Supply review",
    tasks: [
      "Check cleaning chemicals, paper goods, gloves, liners, and sanitizer supplies.",
      "Confirm staff have the tools required to complete assigned tasks.",
    ],
  },
  {
    title: "Inspection-readiness check",
    tasks: [
      "Verify cleaning records are complete, current, and easy to retrieve.",
      "Review corrective actions for sanitation, storage, restroom, and waste issues.",
    ],
  },
];

const comparisonRows = [
  {
    method: "Paper checklist",
    strengths: "Simple to print and easy to start using.",
    limits: "Can be lost, backfilled, hard to audit, and slow for managers to review.",
  },
  {
    method: "Spreadsheet",
    strengths: "Useful for planning tasks, frequencies, and role assignments.",
    limits: "Still requires manual updates and does not guide staff during each shift.",
  },
  {
    method: "CleanScan",
    strengths: "Turns checklist items into recurring tasks with assignees, timestamps, and visibility.",
    limits: "Best for teams ready to manage cleaning execution digitally every day.",
  },
];

const relatedTemplates = [
  { title: "Restroom Cleaning Log Template", href: "/templates/restroom-cleaning-log/" },
  { title: "Kitchen Cleaning Checklist", href: "/templates/kitchen-cleaning-checklist/" },
  { title: "Opening Checklist", href: "/templates/restaurant-opening-checklist/" },
  { title: "Closing Checklist", href: "/templates/restaurant-closing-cleaning-checklist/" },
  { title: "Health Inspection Checklist", href: "/templates/restaurant-health-inspection-checklist/" },
];

const faqs = [
  {
    question: "What should be included in a restaurant cleaning checklist?",
    answer:
      "A restaurant cleaning checklist should include the area, task, frequency, responsible role, and verification method. It should cover kitchen stations, dining areas, restrooms, storage, waste areas, high-touch surfaces, and manager review tasks.",
  },
  {
    question: "How often should restaurant cleaning tasks be completed?",
    answer:
      "Some tasks should be completed every shift or every service block, such as tables, restrooms, and high-touch surfaces. Others should be daily, weekly, or monthly depending on risk, traffic, equipment use, and inspection requirements.",
  },
  {
    question: "Who should complete the restaurant cleaning checklist?",
    answer:
      "Tasks should be assigned by role, such as kitchen staff, FOH staff, closing teams, assigned restroom staff, and managers. Managers or shift leads should verify completion for critical tasks.",
  },
  {
    question: "Can this checklist be used for health inspection readiness?",
    answer:
      "Yes. This checklist supports inspection readiness by organizing recurring cleaning tasks and verification records. Restaurants should also adapt it to local health code requirements and internal SOPs.",
  },
  {
    question: "Should restaurants use paper or digital cleaning checklists?",
    answer:
      "Paper can work for a simple starting point, but digital checklists are easier to manage at scale. CleanScan helps restaurants track completion, overdue tasks, assignees, timestamps, and manager visibility without chasing paper sheets.",
  },
];

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
      <SiteHeader />
      <article className="article-wrap">
        <p className="article-kicker">Template</p>
        <h1>Restaurant Cleaning Checklist Template</h1>
        <p className="article-lead">
          Use this restaurant cleaning checklist to organize daily, weekly, and monthly tasks, then
          download the printable cleaning log to record completion by date, area, staff member,
          signature, and manager verification.
        </p>
        <div className="article-actions">
          <a className="hero-cta" href="/downloads/cleaning-log.pdf" download>
            Download Printable Cleaning Log
          </a>
          <Link className="outline-cta" href="/solutions/restaurant-cleaning-management/">
            Use in CleanScan
          </Link>
          <a className="outline-cta" href="#free-restaurant-cleaning-checklist-template">
            View Free Checklist
          </a>
        </div>

        <section id="free-restaurant-cleaning-checklist-template">
          <h2>Free restaurant cleaning checklist template</h2>
          <p>
            Use this table as the starting structure for a restaurant cleaning checklist. Add or remove
            rows based on your layout, service volume, staff roles, and local requirements.
          </p>
          <p>
            For printed records, use the downloadable cleaning log to document what was completed,
            who completed it, and whether it was verified.
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
                {templateRows.map((row) => (
                  <tr key={`${row.area}-${row.task}`}>
                    <td>{row.area}</td>
                    <td>{row.task}</td>
                    <td>{row.frequency}</td>
                    <td>{row.role}</td>
                    <td>{row.verification}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>Daily restaurant cleaning checklist</h2>
          <p>
            Daily tasks keep guest-facing areas presentable, reduce sanitation risk, and make closing
            routines easier to complete consistently.
          </p>
          <TaskSection sections={dailySections} />
        </section>

        <section className="article-cta-box">
          <h2>Want to run this checklist every shift?</h2>
          <p>
            CleanScan turns these daily tasks into recurring digital checklists with assignees,
            timestamps, and manager visibility.
          </p>
          <Link className="hero-cta" href="/solutions/restaurant-cleaning-management/">
            See How It Works
          </Link>
        </section>

        <section>
          <h2>Weekly restaurant cleaning checklist</h2>
          <p>
            Weekly cleaning tasks target areas that do not need constant attention but can quickly
            create problems if they are ignored.
          </p>
          <TaskSection sections={weeklySections} />
        </section>

        <section>
          <h2>Monthly restaurant cleaning checklist</h2>
          <p>
            Monthly reviews help managers improve the checklist itself, spot recurring missed tasks,
            and keep the operation ready for inspections.
          </p>
          <TaskSection sections={monthlySections} />
        </section>

        <section>
          <h2>How to use this checklist</h2>
          <ol>
            <li>Adapt the checklist to your restaurant layout, including every kitchen, dining, restroom, storage, and waste zone.</li>
            <li>Assign each task to a responsible role so staff know who owns completion during each shift.</li>
            <li>Define frequencies clearly, such as every shift, every service block, daily, weekly, or monthly.</li>
            <li>Review incomplete tasks and decide whether the issue is staffing, timing, training, or unclear instructions.</li>
            <li>Update the checklist every month so it reflects new equipment, layout changes, inspection feedback, and recurring misses.</li>
          </ol>
        </section>

        <section>
          <h2>Paper checklist vs digital checklist</h2>
          <p>
            Paper and spreadsheets can help document what should happen. Digital execution makes it
            easier to see what actually happened during each shift.
          </p>
          <div className="template-table-wrap">
            <table className="template-table">
              <thead>
                <tr>
                  <th>Format</th>
                  <th>Best use</th>
                  <th>Limitations</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.method}>
                    <td>{row.method}</td>
                    <td>{row.strengths}</td>
                    <td>{row.limits}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="article-cta-box">
          <h2>Use this checklist digitally in CleanScan</h2>
          <p>
            CleanScan turns this restaurant cleaning checklist into recurring digital tasks with
            assignees, timestamps, completion tracking, and manager visibility. Instead of checking
            paper sheets manually, managers can see what is done, what is overdue, and where follow-up
            is needed.
          </p>
          <Link className="hero-cta" href="/contact/">
            Request a Demo
          </Link>
        </section>

        <section>
          <h2>Related templates</h2>
          <ul>
            {relatedTemplates.map((template) => (
              <li key={template.href}>
                <a href={template.href}>{template.title}</a>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>FAQ</h2>
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
