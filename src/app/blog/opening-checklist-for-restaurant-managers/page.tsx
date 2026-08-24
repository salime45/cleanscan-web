import type { Metadata } from "next";
import BlogHeroImage from "@/components/blog-hero-image";
import SiteHeader from "@/components/site-header";

const image = "/wp-content/uploads/2024/02/cropped-hand-person-holding-paper-clipboard-home-300x200.jpg";
const title = "Opening Checklist for Restaurant Managers";
const description =
  "Use an opening checklist for restaurant managers to verify kitchen readiness, restrooms, dining areas, supplies, assignments, and pre-service cleaning.";
const canonical = "/blog/opening-checklist-for-restaurant-managers/";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: {
    title,
    description,
    url: canonical,
    type: "article",
    images: [image],
  },
};

const faqItems = [
  {
    question: "What should a restaurant opening checklist include?",
    answer:
      "It should include dining room readiness, kitchen station checks, restroom checks, cleaning carryover, supplies, equipment issues, task assignments, and manager verification.",
  },
  {
    question: "Who should complete the opening checklist?",
    answer:
      "FOH and BOH staff should complete their assigned areas, while the shift lead or manager verifies critical readiness items before service.",
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

export default function Page() {
  return (
    <main className="article-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq).replace(/</g, "\\u003c") }} />
      <SiteHeader />
      <article className="article-wrap">
        <p className="article-kicker">Opening, Closing & Shift Checklists</p>
        <h1>{title}</h1>
        <p className="article-lead">
          A manager opening checklist turns pre-service readiness into a repeatable routine instead
          of a rushed visual scan before doors open.
        </p>
        <BlogHeroImage src={image} alt="Restaurant manager opening checklist on a clipboard" width={300} height={200} />

        <section>
          <h2>Why managers need an opening checklist</h2>
          <p>
            Opening is where missed cleaning from the prior shift, low supplies, restroom issues,
            and kitchen setup problems become service problems. A clear opening checklist gives managers
            a structured way to verify readiness before staff are fully occupied with guests and
            production.
          </p>
          <p>
            If you want a printable starting point, use the <a href="/templates/restaurant-opening-checklist/">restaurant opening checklist template</a>.
          </p>
        </section>

        <section>
          <h2>What to check before service</h2>
          <p>An opening checklist should cover both guest-facing areas and back-of-house readiness.</p>
          <ul>
            <li>Dining room tables, floors, chairs, menus, and service stations are reset.</li>
            <li>Kitchen prep surfaces, cookline stations, sinks, and floors are ready for production.</li>
            <li>Restrooms are clean, stocked, odor-free, and checked for maintenance issues.</li>
            <li>Cleaning tasks carried over from closing have been reviewed and assigned.</li>
            <li>Paper goods, liners, gloves, sanitizer, towels, and cleaning supplies are available.</li>
            <li>Critical equipment issues are recorded before they disrupt the shift.</li>
            <li>Managers have verified the highest-risk areas before opening.</li>
          </ul>
        </section>

        <section>
          <h2>Opening checklist by role</h2>
          <div className="template-table-wrap">
            <table className="template-table">
              <thead>
                <tr>
                  <th>Role</th>
                  <th>Opening responsibility</th>
                  <th>Manager check</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>FOH staff</td>
                  <td>Dining room reset, guest surfaces, service stations, floors, and visible issues</td>
                  <td>Guest area readiness</td>
                </tr>
                <tr>
                  <td>BOH staff</td>
                  <td>Prep surfaces, cookline reset, sinks, dish area, floors, and station supplies</td>
                  <td>Kitchen readiness</td>
                </tr>
                <tr>
                  <td>Assigned restroom staff</td>
                  <td>Fixtures, supplies, trash, odor, floors, and incidents</td>
                  <td>Restroom readiness</td>
                </tr>
                <tr>
                  <td>Manager</td>
                  <td>Carryover issues, staffing assignments, critical checks, and final sign-off</td>
                  <td>Service readiness</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>How opening connects to cleaning management</h2>
          <p>
            Opening tasks should not live separately from the rest of the restaurant cleaning
            routine. They should connect to the <a href="/templates/restaurant-cleaning-checklist/">restaurant cleaning checklist</a>, daily kitchen checks, restroom logs, and closing handoff.
          </p>
          <p>
            If managers find the same carryover issues every morning, review the <a href="/blog/opening-closing-shift-checklists/restaurant-closing-cleaning-checklist-by-role/">restaurant closing cleaning checklist by role</a> and decide whether ownership or verification needs to change.
          </p>
        </section>

        <section>
          <h2>Paper opening checklist vs digital workflow</h2>
          <p>
            A paper opening checklist can help teams standardize the routine. A digital workflow is
            stronger when managers need assignments, recurring schedules, completion status, and a
            record of what was missed or corrected before service.
          </p>
          <p>
            CleanScan helps managers schedule opening routines in the same <a href="/solutions/restaurant-cleaning-management/">restaurant cleaning management</a> workflow used for daily, closing, and inspection-readiness tasks.
          </p>
        </section>

        <section>
          <h2>Frequently asked questions</h2>
          <div className="faq-list">
            {faqItems.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="article-cta-box">
          <h2>Run opening checks without chasing paper</h2>
          <p>
            CleanScan can help your team assign opening tasks, verify service readiness, and keep a
            record of the issues managers fix before service.
          </p>
          <a className="hero-cta" href="/contact/">Request a Demo</a>
        </section>
      </article>
    </main>
  );
}
