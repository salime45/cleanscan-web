import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "CleanScan Pricing | Cleaning Management by Space",
  description:
    "CleanScan pricing starts at $29/month for 3 spaces. Every space includes cleaning schedules, digital records, metrics, and a public QR cleaning status page.",
  alternates: { canonical: "/pricing/" },
};

const plans = [
  {
    name: "Starter",
    price: "$29",
    spaces: "Up to 3 spaces",
    description: "For small restaurants and teams digitizing their first cleaning areas.",
    featured: false,
  },
  {
    name: "Standard",
    price: "$59",
    spaces: "Up to 10 spaces",
    description: "For restaurants that want to manage cleaning across their main operational areas.",
    featured: true,
  },
  {
    name: "Pro",
    price: "$99",
    spaces: "Up to 25 spaces",
    description: "For larger venues and operations managing many cleaning spaces from one place.",
    featured: false,
  },
];

const included = [
  "Unlimited team members",
  "Cleaning schedules and frequencies",
  "Digital cleaning checklists",
  "Completion history and records",
  "Metrics for each space",
  "Global cleaning dashboard",
  "Public QR status page for every space",
  "Printable QR PDF for display in public areas",
];

const examples = [
  ["Restroom", "Track scheduled checks and show visitors when it was last cleaned."],
  ["Kitchen", "Plan recurring sanitation work and keep a digital completion history."],
  ["Dining area", "Assign cleaning frequencies and review execution by space."],
  ["Locker room", "Replace the paper cleaning sheet with a live QR cleaning status."],
];

const faqs = [
  {
    question: "What counts as a space?",
    answer:
      "A space is an independently managed cleaning area, such as a restroom, kitchen, dining room, locker room, bar, storage area, or other operational zone with its own cleaning routine.",
  },
  {
    question: "Do you charge per user?",
    answer:
      "No. CleanScan pricing is based on the number of spaces you manage, not the number of employees using the system. Team members are unlimited.",
  },
  {
    question: "Does every space get its own QR code?",
    answer:
      "Yes. Each space can have a public QR status page showing when it was last cleaned. CleanScan also lets you generate a printable PDF so the QR can be displayed in the physical space instead of a paper cleaning log.",
  },
  {
    question: "Are schedules and cleaning frequencies included?",
    answer:
      "Yes. You can define when and how often each space should be cleaned so employees know what needs to be done and managers can track execution.",
  },
  {
    question: "What if I need more than 25 spaces?",
    answer:
      "Contact us for a custom plan. We can adapt CleanScan for operations with more spaces or more complex rollouts.",
  },
];

export default function PricingPage() {
  return (
    <main>
      <SiteHeader />

      <section className="solutions-hero wrap pricing-hero">
        <p className="article-kicker">Simple, space-based pricing</p>
        <h1>Pay for the spaces you manage, not the people who clean them</h1>
        <p className="article-lead">
          Every CleanScan plan includes the core cleaning workflow: schedules, digital records,
          metrics, and a public QR status page for each space. Choose the plan based on how many
          areas you want to manage.
        </p>
        <div className="hero-actions">
          <Link className="hero-cta" href="/contact/">Request a Demo</Link>
          <a className="outline-cta" href="#plans">See Plans</a>
        </div>
        <p className="pricing-currency-note">Prices shown in USD, billed monthly.</p>
      </section>

      <section className="section wrap" id="plans">
        <div className="section-heading pricing-heading">
          <p className="article-kicker">Plans</p>
          <h2>Start with the spaces that matter most</h2>
          <p>Same core product in every plan. Upgrade when you need to manage more spaces.</p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <article className={`pricing-card ${plan.featured ? "featured" : ""}`} key={plan.name}>
              {plan.featured ? <span className="pricing-badge">Most popular</span> : null}
              <p className="pricing-plan-name">{plan.name}</p>
              <div className="pricing-price">
                <strong>{plan.price}</strong>
                <span>/month</span>
              </div>
              <h2>{plan.spaces}</h2>
              <p>{plan.description}</p>
              <ul>
                {included.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
              <Link className={plan.featured ? "hero-cta" : "outline-cta"} href="/contact/">
                Request a Demo
              </Link>
            </article>
          ))}
        </div>

        <article className="pricing-custom-card">
          <div>
            <p className="article-kicker">Custom</p>
            <h2>More than 25 spaces?</h2>
            <p>Tell us how many areas you need to manage and we will prepare a plan for your operation.</p>
          </div>
          <Link className="outline-cta" href="/contact/">Contact Us</Link>
        </article>
      </section>

      <section className="section light">
        <div className="wrap">
          <div className="section-heading pricing-heading">
            <p className="article-kicker">One space, one cleaning workflow</p>
            <h2>A space is any area with its own cleaning routine</h2>
            <p>
              Pricing by space follows the way cleaning actually works. Each area can have its own
              schedule, history, metrics, and public QR cleaning status.
            </p>
          </div>
          <div className="cards two pricing-example-grid">
            {examples.map(([title, description]) => (
              <article className="card-v1 pricing-example" key={title}>
                <span className="pricing-space-dot" />
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section wrap pricing-qr-section">
        <div className="pricing-qr-copy">
          <p className="article-kicker">Replace the paper sheet</p>
          <h2>Let customers see when a space was last cleaned</h2>
          <p>
            Every managed space can have a public QR page showing its latest cleaning status. Print
            the QR as a clean PDF, place it in the restroom or other public area, and replace the
            traditional handwritten cleaning sheet with live information.
          </p>
          <div className="hero-actions">
            <Link className="hero-cta" href="/contact/">See CleanScan in Action</Link>
            <Link className="outline-cta" href="/blog/qr-code-cleaning-checklist-7-days/">Learn About QR Cleaning Logs</Link>
          </div>
        </div>
        <div className="pricing-qr-demo" aria-label="Example public cleaning status">
          <span className="pricing-live">PUBLIC STATUS</span>
          <p>Restroom · Main floor</p>
          <strong>Last cleaned</strong>
          <b>10:42 AM</b>
          <div className="pricing-status-row"><span /> Cleaning up to date</div>
          <div className="pricing-fake-qr" aria-hidden="true">QR</div>
          <small>Scan to view the latest cleaning status</small>
        </div>
      </section>

      <section className="section wrap">
        <div className="section-heading pricing-heading">
          <p className="article-kicker">FAQ</p>
          <h2>CleanScan pricing questions</h2>
        </div>
        <div className="templates-hub-faq-list">
          {faqs.map((faq) => (
            <details className="templates-hub-faq-item" key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section cta">
        <div className="wrap cta-inner">
          <p className="article-kicker">Get started</p>
          <h2>Digitize your first cleaning spaces</h2>
          <p>
            Start with the areas where paper logs create the most friction and expand as your team
            adopts the workflow.
          </p>
          <div className="hero-actions cta-actions">
            <Link className="hero-cta" href="/contact/">Request a Demo</Link>
            <Link className="outline-cta" href="/solutions/restaurant-cleaning-management/">See How CleanScan Works</Link>
          </div>
        </div>
      </section>

      <style>{`
        .pricing-hero { background:linear-gradient(135deg,#0b2139 0%,#143c67 62%,#2d246c 100%); border:0; padding:clamp(38px,6vw,72px); color:#dbe7f1; }
        .pricing-hero h1 { color:#fff; max-width:900px; }
        .pricing-hero .article-kicker { color:#57e0d4; }
        .pricing-hero .article-lead { color:#cfdeea; }
        .pricing-currency-note { margin:20px 0 0; color:#9eb5c8; font-size:.9rem; }
        .pricing-heading p:last-child { max-width:760px; color:var(--muted); line-height:1.7; }
        .pricing-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:18px; align-items:stretch; }
        .pricing-card { position:relative; display:flex; flex-direction:column; padding:30px; border:1px solid var(--line); border-radius:22px; background:#fff; box-shadow:0 16px 40px rgba(20,52,93,.07); }
        .pricing-card.featured { border:2px solid var(--primary); box-shadow:0 24px 55px rgba(27,191,179,.16); transform:translateY(-8px); }
        .pricing-badge { position:absolute; top:18px; right:18px; padding:7px 10px; border-radius:999px; background:#e8faf7; color:#087d73; font-size:.72rem; font-weight:900; text-transform:uppercase; letter-spacing:.06em; }
        .pricing-plan-name { margin:0 0 18px; color:var(--secondary-dark); font-weight:900; text-transform:uppercase; letter-spacing:.08em; font-size:.8rem; }
        .pricing-price { display:flex; align-items:flex-end; gap:6px; margin-bottom:16px; }
        .pricing-price strong { color:var(--heading); font-size:3.3rem; letter-spacing:-.05em; line-height:1; }
        .pricing-price span { color:var(--muted); padding-bottom:6px; }
        .pricing-card h2 { margin:0 0 10px; font-size:1.35rem; }
        .pricing-card>p:not(.pricing-plan-name) { min-height:76px; color:var(--muted); line-height:1.6; }
        .pricing-card ul { margin:22px 0 28px; padding:20px 0 0; border-top:1px solid var(--line); list-style:none; display:grid; gap:11px; }
        .pricing-card li { position:relative; padding-left:25px; color:var(--text); line-height:1.45; }
        .pricing-card li:before { content:"✓"; position:absolute; left:0; color:var(--primary-dark); font-weight:900; }
        .pricing-card>a { width:100%; margin-top:auto; }
        .pricing-custom-card { margin-top:20px; display:flex; justify-content:space-between; gap:30px; align-items:center; padding:28px 32px; border-radius:18px; background:#eef5f8; border:1px solid var(--line); }
        .pricing-custom-card h2 { margin:3px 0 7px; }
        .pricing-custom-card p { margin:0; color:var(--muted); }
        .pricing-example { display:flex; gap:16px; align-items:flex-start; }
        .pricing-space-dot { flex:0 0 auto; width:14px; height:14px; margin-top:5px; border-radius:50%; background:var(--primary); box-shadow:0 0 0 7px rgba(27,191,179,.12); }
        .pricing-example h3 { margin:0 0 7px; }
        .pricing-qr-section { display:grid; grid-template-columns:1.15fr .85fr; gap:70px; align-items:center; padding-top:72px; padding-bottom:72px; }
        .pricing-qr-copy h2 { font-size:clamp(2rem,3.6vw,3.3rem); line-height:1.06; letter-spacing:-.035em; }
        .pricing-qr-copy>p:not(.article-kicker) { color:var(--muted); line-height:1.75; font-size:1.04rem; }
        .pricing-qr-demo { position:relative; padding:34px; border-radius:24px; color:#dbe7f1; background:linear-gradient(145deg,#0c253f,#173f6c); box-shadow:0 26px 65px rgba(14,44,76,.2); }
        .pricing-live { display:inline-block; padding:6px 9px; border-radius:999px; color:#72eadf; background:rgba(39,200,185,.12); font-size:.68rem; font-weight:900; letter-spacing:.08em; }
        .pricing-qr-demo>p { margin:28px 0 5px; color:#9fb7ca; }
        .pricing-qr-demo>strong { display:block; color:#fff; font-size:1rem; }
        .pricing-qr-demo>b { display:block; margin:4px 0 17px; color:#fff; font-size:2.4rem; letter-spacing:-.04em; }
        .pricing-status-row { display:flex; gap:9px; align-items:center; color:#c9d9e7; }
        .pricing-status-row span { width:9px; height:9px; border-radius:50%; background:#49d5a8; }
        .pricing-fake-qr { width:128px; height:128px; margin:30px auto 12px; display:flex; align-items:center; justify-content:center; border-radius:12px; background:repeating-conic-gradient(#102235 0 25%,#fff 0 50%) 50% / 20px 20px; color:transparent; border:10px solid #fff; }
        .pricing-qr-demo small { display:block; text-align:center; color:#9fb7ca; }
        @media (max-width:900px) { .pricing-grid { grid-template-columns:1fr; } .pricing-card.featured { transform:none; } .pricing-qr-section { grid-template-columns:1fr; gap:36px; } }
        @media (max-width:600px) { .pricing-custom-card { align-items:flex-start; flex-direction:column; } .pricing-card { padding:24px; } }
      `}</style>
    </main>
  );
}
