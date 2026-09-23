import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "Restaurant Opening Checklist Template (Free Printable)",
  description:
    "Free restaurant opening checklist for managers and staff covering dining room, kitchen, restrooms, supplies, cleaning, equipment, and pre-service verification.",
  alternates: { canonical: "/templates/restaurant-opening-checklist/" },
};

const previewRows = [
  ["Dining room", "Check tables, chairs, floors, and service stations", "FOH staff", "Yes", "Shift lead"],
  ["Kitchen", "Confirm prep surfaces and stations are clean", "BOH staff", "Yes", "Manager"],
  ["Restrooms", "Verify cleanliness, odor, trash, and supplies", "Assigned staff", "Yes", "Shift lead"],
  ["Supplies", "Check paper goods, liners, gloves, and sanitizer stock", "Manager", "Yes", "Manager"],
  ["Entry", "Check doors, handles, glass, mats, and guest-facing touchpoints", "FOH staff", "Yes", "Shift lead"],
  ["Manager review", "Confirm unresolved closing issues have been corrected", "Manager", "Yes", "Manager"],
];

const sections = [
  { title: "Front-of-house opening tasks", tasks: ["Check dining room cleanliness.", "Reset tables, chairs, menus, and service stations.", "Confirm guest-facing floors are clean and safe.", "Check entry doors, glass, handles, and mats."] },
  { title: "Kitchen opening tasks", tasks: ["Confirm prep surfaces are clean.", "Check station setup before production starts.", "Verify cookline and prep areas are ready.", "Confirm staff know assigned duties for the shift."] },
  { title: "Restroom opening checks", tasks: ["Verify restroom supplies.", "Check toilets, sinks, mirrors, odor, floors, and trash.", "Report maintenance issues before service starts."] },
  { title: "Cleaning and sanitation checks", tasks: ["Confirm cleaning tasks from the previous closing shift.", "Check high-touch surfaces.", "Review any missed tasks that carried over.", "Verify sanitizer and cleaning supplies are ready."] },
  { title: "Supplies and equipment checks", tasks: ["Confirm paper goods, liners, gloves, and cleaning supplies.", "Check that key equipment areas are ready.", "Record supply shortages before service."] },
  { title: "Manager opening verification", tasks: ["Review critical areas before doors open.", "Confirm assigned responsibilities.", "Verify unresolved closing issues.", "Sign off on readiness for service."] },
];

const faqItems = [
  {
    question: "What should be on a restaurant opening checklist?",
    answer: "Include dining room readiness, kitchen setup, restroom checks, cleaning and sanitation, supplies, equipment, staff assignments, unresolved closing issues, and manager verification.",
  },
  {
    question: "Who should complete a restaurant opening checklist?",
    answer: "Tasks should be assigned by role. FOH, BOH, assigned cleaning staff, shift leads, and managers can each own the checks relevant to their area.",
  },
  {
    question: "Should a restaurant opening checklist include cleaning?",
    answer: "Yes. Opening should verify that closing cleaning was completed and that guest-facing, kitchen, restroom, and high-touch areas are ready before service.",
  },
  {
    question: "Can the opening checklist be digital?",
    answer: "Yes. CleanScan can make the opening routine recurring, assign responsibilities, track completion before service, and keep a record for each shift.",
  },
];

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <article className="article-wrap">
        <p className="article-kicker">Free Printable Template</p>
        <h1>Restaurant Opening Checklist Template</h1>
        <p className="article-lead">
          Use this restaurant opening checklist to verify dining room readiness, kitchen setup,
          restrooms, supplies, cleaning, equipment, and manager checks before service starts.
        </p>

        <div className="hero-actions article-actions">
          <a className="hero-cta" href="/downloads/cleaning-log.pdf" download>Download Opening Shift Log</a>
          <Link className="outline-cta" href="/solutions/restaurant-cleaning-management/">Run Opening Checklist Digitally</Link>
          <a className="outline-cta" href="#opening-checklist-preview">View Checklist</a>
        </div>

        <section id="opening-checklist-preview">
          <h2>Restaurant opening checklist preview</h2>
          <p>
            Use this structure as a printable pre-opening checklist and adapt responsibilities to your
            restaurant layout, staffing model, and service routine.
          </p>
          <div className="template-table-wrap">
            <table className="template-table">
              <thead><tr><th>Area</th><th>Task</th><th>Responsible role</th><th>Before opening?</th><th>Manager verification</th></tr></thead>
              <tbody>
                {previewRows.map(([area, task, role, beforeOpening, verification]) => (
                  <tr key={`${area}-${task}`}><td>{area}</td><td>{task}</td><td>{role}</td><td>{beforeOpening}</td><td>{verification}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>Restaurant opening checklist by area</h2>
          <div className="checklist-groups">
            {sections.map((section) => (
              <section className="checklist-group" key={section.title}>
                <h3>{section.title}</h3>
                <ul>{section.tasks.map((task) => <li key={task}>{task}</li>)}</ul>
              </section>
            ))}
          </div>
        </section>

        <section>
          <h2>Opening checklist for restaurant managers</h2>
          <p>
            The manager should not repeat every staff task. The manager layer should verify critical
            areas, confirm ownership, resolve carry-over issues from closing, and decide whether the
            restaurant is ready to open.
          </p>
          <p>
            For a deeper manager workflow, see the <Link href="/blog/opening-checklist-for-restaurant-managers/">opening checklist for restaurant managers</Link>.
          </p>
        </section>

        <section>
          <h2>Opening checklist vs closing checklist</h2>
          <p>
            The closing checklist resets the operation at the end of service. The opening checklist
            verifies that the restaurant is ready to operate again. Use both together so missed
            closing work is visible before the next shift starts.
          </p>
          <Link href="/templates/restaurant-closing-cleaning-checklist/">View restaurant closing checklist</Link>
        </section>

        <section className="article-cta-box commercial-final-cta">
          <h2>Turn the opening checklist into a recurring shift workflow</h2>
          <p>
            CleanScan helps managers schedule opening routines, assign responsibilities, track
            completion before service, and keep a digital record of each shift.
          </p>
          <Link className="hero-cta" href="/solutions/restaurant-cleaning-management/">Run Opening Checklist Digitally</Link>
        </section>

        <section>
          <h2>Restaurant opening checklist FAQs</h2>
          <div className="faq-list">
            {faqItems.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}
          </div>
        </section>
      </article>
    </main>
  );
}
