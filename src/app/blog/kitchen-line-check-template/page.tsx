import type { Metadata } from "next";
import BlogHeroImage from "@/components/blog-hero-image";
import SiteHeader from "@/components/site-header";

const image = "/wp-content/uploads/2024/02/cropped-hand-person-holding-paper-clipboard-home-300x200.jpg";
const title = "Kitchen Line Check Template: What Restaurants Should Track";
const description =
  "Use a kitchen line check template to track cookline readiness, prep surfaces, sanitizer, spills, trash, floors, and manager verification before service.";
const canonical = "/blog/kitchen-line-check-template/";

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
    question: "What is a kitchen line check template?",
    answer:
      "A kitchen line check template is a short shift checklist used to confirm cookline readiness, prep surfaces, equipment touchpoints, sanitizer, spills, trash, floors, and reset status.",
  },
  {
    question: "When should restaurants complete a line check?",
    answer:
      "Restaurants should run a line check before service, during service blocks, and after rush periods when stations need to be reset.",
  },
  {
    question: "Who should verify kitchen line checks?",
    answer:
      "Line cooks or assigned BOH staff can complete checks, while a shift lead or manager should verify critical items and repeated issues.",
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
          A kitchen line check is a fast operational review that helps managers keep the cookline
          clean, reset, and ready before service problems turn into missed cleaning records.
        </p>
        <BlogHeroImage src={image} alt="Restaurant checklist used for kitchen line readiness checks" width={300} height={200} />

        <section>
          <h2>What is a kitchen line check template?</h2>
          <p>
            A kitchen line check template is a short checklist for cookline readiness. It does not
            replace a full <a href="/templates/kitchen-cleaning-checklist/">kitchen cleaning checklist template</a>.
            It gives staff a focused way to verify the line before service, during busy service
            blocks, and after a rush.
          </p>
          <p>
            The best line checks are specific enough for staff to act quickly and simple enough to
            repeat under shift pressure.
          </p>
        </section>

        <section>
          <h2>What to track on the cookline</h2>
          <p>Use the template to track the areas that affect readiness during service:</p>
          <ul>
            <li>Prep surfaces are clean, clear, and ready for the next production block.</li>
            <li>Cookline handles, controls, equipment fronts, and station touchpoints have been wiped.</li>
            <li>Visible spills, crumbs, wrappers, and loose debris have been removed.</li>
            <li>Sanitizer setup, towels, gloves, and station supplies are available.</li>
            <li>Trash is not overflowing and waste containers are not blocking movement.</li>
            <li>Floors and mats around the line are clear enough for safe work.</li>
            <li>Issues that need follow-up are recorded for the shift lead or manager.</li>
          </ul>
        </section>

        <section>
          <h2>Before-service, during-service, and after-service checks</h2>
          <p>
            Before service, the line check should confirm station setup, clean prep surfaces, clear
            floors, available supplies, and no obvious sanitation issues. During service, it should
            focus on spills, trash, touchpoints, and station reset. After service, it should capture
            what needs to move into the closing routine or the next daily kitchen cleaning task list.
          </p>
          <p>
            For a broader daily routine, use this with the <a href="/blog/daily-restaurant-kitchen-cleaning-checklist/">daily restaurant kitchen cleaning checklist</a>.
          </p>
        </section>

        <section>
          <h2>Example kitchen line check template</h2>
          <div className="template-table-wrap">
            <table className="template-table">
              <thead>
                <tr>
                  <th>Check</th>
                  <th>What to verify</th>
                  <th>When</th>
                  <th>Owner</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Prep surfaces</td>
                  <td>Clean, clear, and ready for service</td>
                  <td>Before service</td>
                  <td>Line cook</td>
                </tr>
                <tr>
                  <td>Cookline touchpoints</td>
                  <td>Handles, controls, fronts, and splash zones wiped</td>
                  <td>Every service block</td>
                  <td>BOH staff</td>
                </tr>
                <tr>
                  <td>Spills and floors</td>
                  <td>No visible spills, debris, or unsafe floor conditions</td>
                  <td>During service</td>
                  <td>Shift lead</td>
                </tr>
                <tr>
                  <td>Trash and supplies</td>
                  <td>Trash controlled and sanitizer supplies available</td>
                  <td>Before and during service</td>
                  <td>Assigned staff</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>How managers should verify line checks</h2>
          <p>
            Manager verification should focus on gaps that repeat across shifts. A single missed
            towel setup may be a quick correction. Repeated missed spills, trash overflow, or
            poorly reset stations usually means the checklist needs clearer ownership, timing, or
            follow-up.
          </p>
          <p>
            For inspection readiness, line checks should support the larger cleaning record. Pair
            them with a <a href="/templates/restaurant-cleaning-checklist/">restaurant cleaning checklist template</a> and review what <a href="/blog/health-inspection-compliance/what-health-inspectors-look-for-in-cleaning-logs/">health inspectors look for in cleaning logs</a>.
          </p>
        </section>

        <section>
          <h2>Paper vs digital kitchen line checks</h2>
          <p>
            Paper line checks are useful when managers need a quick printable record. Digital line
            checks are better when teams need recurring schedules, shift ownership, timestamps,
            issue notes, and visibility before the shift ends.
          </p>
          <p>
            CleanScan helps restaurant managers assign kitchen line checks, track completion, and
            review follow-up from the same <a href="/solutions/restaurant-cleaning-management/">restaurant cleaning management software</a> used for daily and weekly tasks.
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
          <h2>Turn kitchen line checks into assigned shift tasks</h2>
          <p>
            CleanScan can help managers run kitchen line checks alongside opening, daily, weekly,
            and inspection-readiness cleaning routines.
          </p>
          <a className="hero-cta" href="/contact/">Request a Demo</a>
        </section>
      </article>
    </main>
  );
}
