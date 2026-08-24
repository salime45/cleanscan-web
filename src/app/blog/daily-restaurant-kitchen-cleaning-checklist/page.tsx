import type { Metadata } from "next";
import BlogHeroImage from "@/components/blog-hero-image";
import SiteHeader from "@/components/site-header";

const image = "/wp-content/uploads/2024/11/Smart-cleaning-technology-providing-eco-friendly-solutions-for-pristine-workplaces.png";
const title = "Daily Restaurant Kitchen Cleaning Checklist: What to Check Every Shift";
const description =
  "Build a daily restaurant kitchen cleaning checklist for prep areas, cooklines, sinks, floors, storage touchpoints, shift checks, and manager review.";
const canonical = "/blog/daily-restaurant-kitchen-cleaning-checklist/";

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
    question: "What kitchen cleaning tasks should be done daily?",
    answer:
      "Daily kitchen cleaning should include prep surfaces, cookline touchpoints, sinks, dish areas, floors, visible spills, trash, and station reset.",
  },
  {
    question: "Should daily kitchen cleaning happen once per day or every shift?",
    answer:
      "High-use areas should be checked every shift or every service block. Some deeper tasks may happen once per day or move into weekly cleaning.",
  },
  {
    question: "How should managers verify daily kitchen cleaning?",
    answer:
      "Managers should review completion records, missed tasks, repeated issues, and critical stations before the next shift or service block.",
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
        <p className="article-kicker">Kitchen Sanitation & Food Safety</p>
        <h1>{title}</h1>
        <p className="article-lead">
          Daily kitchen cleaning works best when it is organized by shift, station, and manager
          verification instead of written as one broad end-of-day task.
        </p>
        <BlogHeroImage src={image} alt="Restaurant kitchen cleaning tasks organized by shift" width={612} height={408} />

        <section>
          <h2>Why daily kitchen cleaning should be shift-based</h2>
          <p>
            A restaurant kitchen changes quickly during prep, service, and closing. If the checklist
            only says clean kitchen once per day, managers may not know which station fell behind or
            whether the line was reset before the next service block.
          </p>
          <p>
            A better daily checklist separates work by area, frequency, owner, and verification. The
            full <a href="/templates/kitchen-cleaning-checklist/">kitchen cleaning checklist template</a> gives managers a printable and digital starting point.
          </p>
        </section>

        <section>
          <h2>Prep area checks</h2>
          <ul>
            <li>Clean prep tables, cutting boards, and food-contact surfaces between production blocks.</li>
            <li>Remove visible residue, labels, boxes, and debris from work areas.</li>
            <li>Reset station tools, towels, gloves, and sanitizer supplies before the next task block.</li>
            <li>Record issues that need manager follow-up, such as damaged surfaces or missing supplies.</li>
          </ul>
        </section>

        <section>
          <h2>Cookline checks</h2>
          <p>
            Cookline tasks should happen before service, during service blocks, and after rush
            periods. Use a <a href="/blog/kitchen-line-check-template/">kitchen line check template</a> to keep this review focused.
          </p>
          <ul>
            <li>Wipe handles, controls, equipment fronts, splash zones, and station touchpoints.</li>
            <li>Check spills, crumbs, trash, and floor conditions around the line.</li>
            <li>Confirm sanitizer setup and station supplies are ready for the next service period.</li>
            <li>Move unresolved cleaning issues into the manager review or closing checklist.</li>
          </ul>
        </section>

        <section>
          <h2>Sinks, dish areas, and floors</h2>
          <p>
            Sink and dish areas create visible cleaning problems quickly when ownership is unclear.
            Daily checks should include sinks, drainboards, faucets, splash areas, floor condition,
            mats, and nearby trash.
          </p>
          <p>
            Floors should be checked during service for spills and debris, then reviewed again
            during closing. Repeated floor or drain issues should be recorded for corrective action.
          </p>
        </section>

        <section>
          <h2>Storage and handoff checks</h2>
          <p>
            Not every storage task is daily, but shift teams should still check obvious spills,
            misplaced items, blocked paths, and dry-goods organization. Larger shelf and walk-in
            reviews can move to weekly cleaning.
          </p>
          <p>
            The daily handoff should show what was completed, what was missed, and what the next
            shift needs to handle. This is where a <a href="/templates/restaurant-cleaning-checklist/">restaurant cleaning checklist template</a> helps keep kitchen tasks aligned with the rest of the operation.
          </p>
        </section>

        <section>
          <h2>Manager review for daily kitchen cleaning</h2>
          <p>
            Manager review should focus on critical stations, repeated misses, and unresolved issues.
            The record should show the date, shift, area, person responsible, notes, and verification.
            This makes the checklist more useful for internal follow-up and <a href="/blog/health-inspection-compliance/what-health-inspectors-look-for-in-cleaning-logs/">cleaning log review</a>.
          </p>
        </section>

        <section>
          <h2>Daily kitchen checklist example</h2>
          <div className="template-table-wrap">
            <table className="template-table">
              <thead>
                <tr>
                  <th>Area</th>
                  <th>Daily check</th>
                  <th>When</th>
                  <th>Verification</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Prep area</td>
                  <td>Clean food-contact surfaces and remove visible residue</td>
                  <td>Every shift</td>
                  <td>Shift lead</td>
                </tr>
                <tr>
                  <td>Cookline</td>
                  <td>Wipe touchpoints, check spills, and reset station supplies</td>
                  <td>Before and during service</td>
                  <td>Manager review</td>
                </tr>
                <tr>
                  <td>Sink area</td>
                  <td>Clean sinks, drainboards, splash zones, and surrounding floors</td>
                  <td>Daily</td>
                  <td>Shift lead</td>
                </tr>
                <tr>
                  <td>Floors</td>
                  <td>Remove spills, debris, mat buildup, and unsafe floor conditions</td>
                  <td>Every service block</td>
                  <td>Timestamped check</td>
                </tr>
              </tbody>
            </table>
          </div>
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
          <h2>Run daily kitchen cleaning as a digital shift workflow</h2>
          <p>
            CleanScan helps restaurant managers assign daily kitchen tasks, schedule recurring
            checks, track completion, and review missed work before it carries into the next shift.
          </p>
          <a className="hero-cta" href="/solutions/restaurant-cleaning-management/">See Restaurant Cleaning Management</a>
        </section>
      </article>
    </main>
  );
}
