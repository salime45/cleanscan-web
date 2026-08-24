import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "Free Restaurant Cleaning Checklist (Printable PDF Template)",
  description:
    "Free printable restaurant cleaning checklist with daily, weekly, and monthly tasks. View the template online and download the cleaning log PDF free.",
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
      "Yes. The printable cleaning log PDF is a free download and does not require an account. Use it with the checklist on this page to record completion, staff names, notes, and manager verification.",
  },
  {
    question: "What should be included in a restaurant cleaning checklist?",
    answer:
      "A restaurant cleaning checklist should include the area, task, frequency, responsible role, and verification method. It should cover kitchens, dining areas, restrooms, storage, waste areas, high-touch surfaces, and manager review tasks.",
  },
  {
    question: "How often should restaurant cleaning tasks be completed?",
    answer:
      "Some tasks should be completed every shift or service block, while others are daily, weekly, or monthly depending on risk, traffic, equipment use, and local requirements.",
  },
  {
    question: "Is this restaurant cleaning checklist printable?",
    answer:
      "Yes. You can use the checklist on this page as a printable reference and download the free cleaning log PDF for completion records.",
  },
  {
    question: "Can I use this checklist digitally?",
    answer:
      "Yes. CleanScan turns the same routine into recurring digital tasks with assignees, timestamps, completion tracking, and manager visibility.",
  },
];

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <article className="article-wrap">
        <p className="article-kicker">Free Printable Template</p>
        <h1>Free Restaurant Cleaning Checklist</h1>
        <p className="article-lead">
          Use this printable restaurant cleaning checklist to organize daily, weekly, and monthly
          cleaning tasks. View the full template below or download the free PDF cleaning log for
          staff completion records.
        </p>
        <div className="article-actions">
          <a className="hero-cta" href="/downloads/cleaning-log.pdf" download>
            Download Free PDF
          </a>
          <a className="outline-cta" href="#restaurant-cleaning-checklist-template">
            View Printable Checklist
          </a>
          <Link className="outline-cta" href="/solutions/restaurant-cleaning-management/">
            Use This Checklist Digitally
          </Link>
        </div>
        <p>
          Free download. No signup required for the PDF. Adapt the checklist to your restaurant,
          staffing model, equipment, and local health requirements.
        </p>

        <section id="restaurant-cleaning-checklist-template">
          <h2>Restaurant cleaning checklist template</h2>
          <p>
            This master template covers the areas most restaurants need to control. Customize the
            rows, frequencies, and responsible roles to match the way your team actually works.
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
          <h2>Daily restaurant cleaning checklist</h2>
          <p>
            Daily cleaning should focus on food-contact surfaces, guest-facing areas, restrooms,
            waste, floors, and high-touch points that affect every service.
          </p>
          <ul>
            {dailyTasks.map((task) => <li key={task}>{task}</li>)}
          </ul>
        </section>

        <section>
          <h2>Weekly restaurant cleaning checklist</h2>
          <p>
            Weekly tasks cover deeper cleaning and areas that do not need constant attention but can
            quickly accumulate grease, residue, or clutter.
          </p>
          <ul>
            {weeklyTasks.map((task) => <li key={task}>{task}</li>)}
          </ul>
        </section>

        <section>
          <h2>Monthly restaurant cleaning checklist</h2>
          <p>
            Monthly reviews help managers improve the cleaning schedule, identify repeated misses,
            and keep records ready for internal reviews or inspections.
          </p>
          <ul>
            {monthlyTasks.map((task) => <li key={task}>{task}</li>)}
          </ul>
        </section>

        <section>
          <h2>How to use the printable restaurant cleaning checklist</h2>
          <ol>
            <li>List every kitchen, dining, restroom, storage, service, and waste area.</li>
            <li>Assign each task to a role instead of leaving ownership with the whole team.</li>
            <li>Set a clear frequency: every service block, every shift, daily, weekly, or monthly.</li>
            <li>Use the printable PDF log to record when tasks are completed and who completed them.</li>
            <li>Review missed tasks and update the checklist when staffing, equipment, or routines change.</li>
          </ol>
        </section>

        <section className="article-cta-box">
          <h2>Prefer a digital restaurant cleaning checklist?</h2>
          <p>
            CleanScan turns this printable checklist into recurring digital tasks with assignees,
            timestamps, completion tracking, and manager visibility. Staff follow the routine and
            managers can see what is done or overdue without checking paper logs.
          </p>
          <Link className="hero-cta" href="/solutions/restaurant-cleaning-management/">
            See Restaurant Cleaning Management
          </Link>
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
          <p>
            <Link href="/templates/">Browse all free restaurant cleaning templates</Link>.
          </p>
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
