import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import { DEFAULT_OG_IMAGE } from "@/lib/site";

const title = "Restaurant Cleaning Checklist App for Restaurants | CleanScan";
const description =
  "CleanScan helps restaurants replace paper cleaning logs with digital checklists, scheduled cleaning, public QR status pages, real-time tracking, and cleaning metrics.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/" },
  openGraph: { title, description, url: "/", images: [DEFAULT_OG_IMAGE], type: "website" },
  twitter: { card: "summary_large_image", title, description, images: [DEFAULT_OG_IMAGE] },
};

const operationCards = [
  {
    number: "01",
    title: "Daily restaurant cleaning checklist",
    href: "/templates/restaurant-cleaning-checklist/",
    description:
      "Build a repeatable daily routine for dining areas, kitchen stations, restrooms, storage, and closing shifts.",
  },
  {
    number: "02",
    title: "Restroom cleaning log",
    href: "/templates/restroom-cleaning-log/",
    description:
      "Track restroom checks by time block, replenishment needs, incidents, and manager review points.",
  },
  {
    number: "03",
    title: "Kitchen sanitation tasks",
    href: "/templates/kitchen-cleaning-checklist/",
    description:
      "Control food-contact surfaces, equipment cleaning, storage checks, floors, sinks, and deep-clean tasks.",
  },
  {
    number: "04",
    title: "Opening and closing checklists",
    href: "/templates/restaurant-closing-cleaning-checklist/",
    description:
      "Standardize shift handoffs with role-based routines for opening readiness and end-of-day cleaning.",
  },
];

const testimonials = [
  {
    quote: "Since implementing CleanScan, cleaning management has become much easier and more efficient.",
    name: "La Sastreria",
    context: "Restaurant team",
    logo: "/wp-content/uploads/2023/11/OHR8zYbDOq3.png",
    width: 4000,
    height: 2800,
  },
  {
    quote: "CleanScan helps us control scheduled cleaning across our restaurants and keep a clear record of what has been completed.",
    name: "Gastroadictos",
    context: "Restaurant group",
    logo: "/wp-content/uploads/2023/11/Logotipo_Gastroadictos-1.png",
    width: 480,
    height: 480,
  },
  {
    quote: "The team can see what needs to be cleaned and managers can verify the work without relying on paper sheets.",
    name: "Bar Mistela",
    context: "Bar and restaurant",
    logo: "/wp-content/uploads/2023/11/descarga-1-3.png",
    width: 551,
    height: 91,
  },
];

const steps = [
  ["01", "Create the routine", "Start from a template or build the cleaning checklist that matches each space."],
  ["02", "Assign and schedule", "Set how often each space should be cleaned by role, shift, day, or frequency."],
  ["03", "Execute from mobile", "Staff see what needs cleaning and record completion during the shift."],
  ["04", "Measure and prove it", "Managers see metrics while each space can show its latest cleaning through a public QR page."],
];

export default function Home() {
  return (
    <main className="home-refresh">
      <style>{`
        .home-refresh { --hr-navy:#0b1f35; --hr-blue:#143b66; --hr-teal:#27c8b9; --hr-violet:#5b3df5; --hr-ink:#102235; --hr-muted:#60758a; --hr-soft:#f4f8fb; background:#fff; }
        .home-refresh .hr-wrap { width:min(1180px,92vw); margin:0 auto; }
        .home-refresh .hr-hero { position:relative; overflow:hidden; background:linear-gradient(135deg,#091c31 0%,#12365f 58%,#241b5f 100%); color:#fff; }
        .home-refresh .hr-hero:before { content:""; position:absolute; width:560px; height:560px; border-radius:50%; right:-190px; top:-240px; background:radial-gradient(circle,rgba(39,200,185,.28),rgba(39,200,185,0) 70%); }
        .home-refresh .hr-hero:after { content:""; position:absolute; width:480px; height:480px; border-radius:50%; left:-220px; bottom:-310px; background:radial-gradient(circle,rgba(91,61,245,.36),rgba(91,61,245,0) 70%); }
        .home-refresh .hr-hero-grid { position:relative; z-index:1; min-height:680px; display:grid; grid-template-columns:1.02fr .98fr; gap:64px; align-items:center; padding:78px 0 82px; }
        .home-refresh .hr-eyebrow { display:inline-flex; align-items:center; gap:9px; margin:0 0 20px; font-size:.78rem; font-weight:800; letter-spacing:.1em; text-transform:uppercase; }
        .home-refresh .hr-eyebrow:before { content:""; width:28px; height:2px; background:var(--hr-teal); }
        .home-refresh .hr-hero h1 { color:#fff; max-width:720px; margin:0; font-size:clamp(2.6rem,5.1vw,4.9rem); line-height:.98; letter-spacing:-.045em; font-weight:760; }
        .home-refresh .hr-hero-copy>p:not(.hr-eyebrow) { max-width:650px; margin:25px 0 0; color:#d7e5f2; font-size:1.12rem; line-height:1.7; }
        .home-refresh .hr-actions { display:flex; flex-wrap:wrap; gap:12px; margin-top:30px; }
        .home-refresh .hr-primary,.home-refresh .hr-secondary { min-height:50px; padding:0 22px; display:inline-flex; align-items:center; justify-content:center; border-radius:12px; font-weight:800; transition:transform .15s ease,box-shadow .15s ease; }
        .home-refresh .hr-primary { background:var(--hr-teal); color:#08283a; box-shadow:0 14px 34px rgba(39,200,185,.25); }
        .home-refresh .hr-secondary { color:#fff; border:1px solid rgba(255,255,255,.28); background:rgba(255,255,255,.07); }
        .home-refresh .hr-primary:hover,.home-refresh .hr-secondary:hover { transform:translateY(-2px); }
        .home-refresh .hr-trust { display:flex; flex-wrap:wrap; gap:18px; margin-top:30px; color:#a9bfd3; font-size:.9rem; }
        .home-refresh .hr-trust span { display:flex; align-items:center; gap:7px; }
        .home-refresh .hr-trust span:before { content:"✓"; color:var(--hr-teal); font-weight:900; }
        .home-refresh .hr-product-frame { position:relative; border:1px solid rgba(255,255,255,.16); border-radius:24px; padding:14px; background:linear-gradient(145deg,rgba(255,255,255,.15),rgba(255,255,255,.05)); box-shadow:0 38px 90px rgba(0,0,0,.32); transform:rotate(1deg); }
        .home-refresh .hr-product-frame:before { content:"CleanScan · Live operations"; display:block; margin:2px 0 12px 8px; color:#aec2d4; font-size:.75rem; font-weight:700; letter-spacing:.06em; }
        .home-refresh .hr-product-frame img { display:block; width:100%; height:auto; border-radius:16px; background:#fff; }
        .home-refresh .hr-float-card { position:absolute; right:-28px; bottom:28px; width:220px; padding:17px; border-radius:16px; background:#fff; color:var(--hr-ink); box-shadow:0 24px 60px rgba(0,0,0,.3); }
        .home-refresh .hr-float-card small { color:var(--hr-muted); font-weight:700; }
        .home-refresh .hr-float-card strong { display:block; margin-top:4px; font-size:1.55rem; }
        .home-refresh .hr-float-bar { height:7px; overflow:hidden; margin-top:11px; border-radius:20px; background:#e8eff4; }
        .home-refresh .hr-float-bar span { display:block; width:84%; height:100%; background:linear-gradient(90deg,var(--hr-teal),var(--hr-violet)); }
        .home-refresh .hr-proof-strip { border-bottom:1px solid #e8eef3; background:#fff; }
        .home-refresh .hr-proof-grid { display:grid; grid-template-columns:1.4fr repeat(3,1fr); min-height:122px; align-items:center; }
        .home-refresh .hr-proof-intro { padding-right:40px; color:var(--hr-muted); line-height:1.55; }
        .home-refresh .hr-stat { padding:8px 30px; border-left:1px solid #e6edf2; }
        .home-refresh .hr-stat strong { display:block; color:var(--hr-ink); font-size:1.55rem; }
        .home-refresh .hr-stat span { display:block; margin-top:4px; color:var(--hr-muted); font-size:.9rem; }
        .home-refresh .hr-section { padding:92px 0; }
        .home-refresh .hr-section-soft { background:var(--hr-soft); }
        .home-refresh .hr-section-head { max-width:760px; margin-bottom:44px; }
        .home-refresh .hr-section-head .hr-eyebrow { color:var(--hr-violet); }
        .home-refresh .hr-section h2 { margin:0; color:var(--hr-ink); font-size:clamp(2rem,3.6vw,3.35rem); line-height:1.05; letter-spacing:-.035em; }
        .home-refresh .hr-section-head>p:last-child { margin:18px 0 0; color:var(--hr-muted); font-size:1.04rem; line-height:1.7; }
        .home-refresh .hr-process { display:grid; grid-template-columns:repeat(4,1fr); gap:14px; }
        .home-refresh .hr-step { min-height:250px; padding:26px; border:1px solid #dfe8ee; border-radius:18px; background:#fff; }
        .home-refresh .hr-step-num { display:inline-flex; align-items:center; justify-content:center; width:42px; height:42px; border-radius:12px; background:#eef0ff; color:var(--hr-violet); font-weight:900; }
        .home-refresh .hr-step h3 { margin:38px 0 10px; font-size:1.18rem; }
        .home-refresh .hr-step p { margin:0; color:var(--hr-muted); line-height:1.65; }
        .home-refresh .hr-split { display:grid; grid-template-columns:.9fr 1.1fr; gap:70px; align-items:center; }
        .home-refresh .hr-image-panel { position:relative; border-radius:24px; padding:18px; background:#0d2846; box-shadow:0 26px 65px rgba(14,44,76,.2); }
        .home-refresh .hr-image-panel img { width:100%; height:auto; display:block; border-radius:15px; }
        .home-refresh .hr-feature-list { display:grid; gap:12px; margin-top:28px; }
        .home-refresh .hr-feature { display:grid; grid-template-columns:36px 1fr; gap:12px; align-items:start; padding:16px 0; border-bottom:1px solid #e2eaf0; }
        .home-refresh .hr-feature:last-child { border-bottom:0; }
        .home-refresh .hr-feature-mark { width:32px; height:32px; border-radius:9px; display:flex; align-items:center; justify-content:center; background:#e8faf7; color:#108e84; font-weight:900; }
        .home-refresh .hr-feature strong { color:var(--hr-ink); }
        .home-refresh .hr-feature p { margin:4px 0 0; color:var(--hr-muted); line-height:1.55; }
        .home-refresh .hr-qr-section { background:#0b2138; color:#fff; }
        .home-refresh .hr-qr-grid { display:grid; grid-template-columns:1fr .9fr; gap:72px; align-items:center; }
        .home-refresh .hr-qr-copy .hr-eyebrow { color:#79e5dc; }
        .home-refresh .hr-qr-copy h2 { color:#fff; }
        .home-refresh .hr-qr-copy>p:last-of-type { max-width:650px; color:#c7d8e7; font-size:1.05rem; line-height:1.72; }
        .home-refresh .hr-qr-points { display:grid; gap:12px; margin-top:28px; }
        .home-refresh .hr-qr-point { display:grid; grid-template-columns:32px 1fr; gap:12px; align-items:start; color:#dbe8f2; }
        .home-refresh .hr-qr-point span { width:28px; height:28px; border-radius:8px; display:flex; align-items:center; justify-content:center; background:rgba(39,200,185,.16); color:#62ded4; font-weight:900; }
        .home-refresh .hr-public-card { max-width:430px; margin-left:auto; padding:18px; border-radius:26px; background:#eaf1f5; box-shadow:0 32px 80px rgba(0,0,0,.28); transform:rotate(1.5deg); }
        .home-refresh .hr-public-sheet { padding:30px; border-radius:18px; background:#fff; color:var(--hr-ink); }
        .home-refresh .hr-public-top { display:flex; justify-content:space-between; align-items:center; gap:16px; }
        .home-refresh .hr-public-brand { font-weight:900; letter-spacing:-.02em; }
        .home-refresh .hr-live-pill { padding:7px 10px; border-radius:999px; background:#e8faf7; color:#108e84; font-size:.73rem; font-weight:900; text-transform:uppercase; letter-spacing:.06em; }
        .home-refresh .hr-public-sheet h3 { margin:34px 0 8px; font-size:1.45rem; }
        .home-refresh .hr-public-label { margin:0; color:var(--hr-muted); font-size:.85rem; }
        .home-refresh .hr-public-time { margin:5px 0 0; font-size:1.9rem; font-weight:900; }
        .home-refresh .hr-public-meta { margin:6px 0 28px; color:var(--hr-muted); }
        .home-refresh .hr-qr-row { display:grid; grid-template-columns:104px 1fr; gap:18px; align-items:center; padding-top:24px; border-top:1px solid #e2e9ee; }
        .home-refresh .hr-qr-box { width:104px; height:104px; padding:10px; display:grid; grid-template-columns:repeat(4,1fr); gap:4px; border:1px solid #d8e2e8; border-radius:10px; background:#fff; }
        .home-refresh .hr-qr-box i { display:block; background:#102235; border-radius:2px; }
        .home-refresh .hr-qr-box i:nth-child(2),.home-refresh .hr-qr-box i:nth-child(5),.home-refresh .hr-qr-box i:nth-child(8),.home-refresh .hr-qr-box i:nth-child(11),.home-refresh .hr-qr-box i:nth-child(14) { background:transparent; }
        .home-refresh .hr-qr-note strong { display:block; margin-bottom:5px; }
        .home-refresh .hr-qr-note p { margin:0; color:var(--hr-muted); font-size:.9rem; line-height:1.5; }
        .home-refresh .hr-ops-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:16px; }
        .home-refresh .hr-op-card { position:relative; min-height:230px; padding:28px; overflow:hidden; border:1px solid #dee7ed; border-radius:18px; background:#fff; transition:transform .16s ease,border-color .16s ease,box-shadow .16s ease; }
        .home-refresh .hr-op-card:hover { transform:translateY(-3px); border-color:#b9d8d4; box-shadow:0 18px 44px rgba(16,51,76,.09); }
        .home-refresh .hr-op-num { color:#b4c1cc; font-size:.78rem; font-weight:900; letter-spacing:.08em; }
        .home-refresh .hr-op-card h3 { max-width:430px; margin:45px 0 10px; font-size:1.35rem; }
        .home-refresh .hr-op-card p { max-width:500px; margin:0; color:var(--hr-muted); line-height:1.65; }
        .home-refresh .hr-op-card b { position:absolute; right:24px; bottom:22px; color:var(--hr-violet); font-size:1.1rem; }
        .home-refresh .hr-testimonials { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; }
        .home-refresh .hr-quote { min-height:330px; padding:28px; display:flex; flex-direction:column; border:1px solid #dfe8ee; border-radius:18px; background:#fff; }
        .home-refresh .hr-quote-logo { height:58px; display:flex; align-items:center; }
        .home-refresh .hr-quote-logo img { max-width:160px; max-height:48px; object-fit:contain; }
        .home-refresh .hr-quote blockquote { margin:28px 0 24px; color:var(--hr-ink); font-size:1.04rem; line-height:1.7; }
        .home-refresh .hr-quote footer { margin-top:auto; display:grid; gap:3px; }
        .home-refresh .hr-quote footer span { color:var(--hr-muted); font-size:.9rem; }
        .home-refresh .hr-final { padding:36px 0 92px; background:#fff; }
        .home-refresh .hr-final-box { position:relative; overflow:hidden; padding:54px; border-radius:24px; background:linear-gradient(130deg,#0c253f,#173f6c); color:#fff; }
        .home-refresh .hr-final-box:after { content:""; position:absolute; right:-130px; top:-170px; width:400px; height:400px; border-radius:50%; background:rgba(39,200,185,.17); }
        .home-refresh .hr-final-box h2 { max-width:760px; margin:0; color:#fff; font-size:clamp(2rem,4vw,3.6rem); line-height:1.05; letter-spacing:-.035em; }
        .home-refresh .hr-final-box p { max-width:680px; margin:18px 0 0; color:#c9d9e7; line-height:1.7; }
        .home-refresh .hr-legal { margin-top:26px; color:#73899d; font-size:.86rem; }
        .home-refresh .hr-legal a { text-decoration:underline; }
        @media (max-width:900px) {
          .home-refresh .hr-hero-grid,.home-refresh .hr-split,.home-refresh .hr-qr-grid { grid-template-columns:1fr; }
          .home-refresh .hr-hero-grid { padding:64px 0 80px; }
          .home-refresh .hr-product-frame { max-width:650px; transform:none; }
          .home-refresh .hr-float-card { right:14px; }
          .home-refresh .hr-proof-grid { grid-template-columns:1fr 1fr; padding:18px 0; }
          .home-refresh .hr-proof-intro { grid-column:1/-1; padding:10px 18px 22px; }
          .home-refresh .hr-stat { border-left:0; padding:14px 18px; }
          .home-refresh .hr-process { grid-template-columns:repeat(2,1fr); }
          .home-refresh .hr-public-card { margin:0; }
        }
        @media (max-width:620px) {
          .home-refresh .hr-hero h1 { font-size:2.75rem; }
          .home-refresh .hr-product-frame { padding:9px; }
          .home-refresh .hr-float-card { position:relative; right:auto; bottom:auto; width:auto; margin-top:10px; }
          .home-refresh .hr-proof-grid,.home-refresh .hr-process,.home-refresh .hr-ops-grid,.home-refresh .hr-testimonials { grid-template-columns:1fr; }
          .home-refresh .hr-section { padding:68px 0; }
          .home-refresh .hr-final-box { padding:34px 25px; }
          .home-refresh .hr-step,.home-refresh .hr-op-card { min-height:auto; }
          .home-refresh .hr-public-sheet { padding:22px; }
          .home-refresh .hr-qr-row { grid-template-columns:1fr; }
        }
      `}</style>

      <SiteHeader />

      <section className="hr-hero">
        <div className="hr-wrap hr-hero-grid">
          <div className="hr-hero-copy">
            <p className="hr-eyebrow">Digital cleaning operations</p>
            <h1>Turn every cleaning sheet into a system you can actually control.</h1>
            <p>
              CleanScan helps restaurant managers replace paper cleaning sheets with digital checklists,
              scheduled cleaning, shift accountability, real-time records, metrics, and a public QR status for every space.
            </p>
            <div className="hr-actions">
              <Link className="hr-primary" href="/contact/">Request a Demo</Link>
              <Link className="hr-secondary" href="/pricing/">See Pricing</Link>
              <Link className="hr-secondary" href="/templates/">Browse Free Templates</Link>
            </div>
            <div className="hr-trust">
              <span>Scheduled cleaning</span>
              <span>Metrics by space</span>
              <span>Public QR status</span>
            </div>
          </div>

          <div className="hr-product-frame">
            <Image
              src="/wp-content/uploads/2023/11/Mockup.png"
              alt="CleanScan app for restaurant cleaning operations"
              width={5000}
              height={3750}
              priority
            />
            <div className="hr-float-card">
              <small>Cleaning completion</small>
              <strong>84%</strong>
              <div className="hr-float-bar"><span /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="hr-proof-strip">
        <div className="hr-wrap hr-proof-grid">
          <div className="hr-proof-intro">
            One operational view instead of paper sheets, manual reminders, and end-of-shift guesswork.
          </div>
          <div className="hr-stat"><strong>By space</strong><span>See how each area performs</span></div>
          <div className="hr-stat"><strong>On schedule</strong><span>Staff know when cleaning is due</span></div>
          <div className="hr-stat"><strong>Publicly</strong><span>Show the latest cleaning via QR</span></div>
        </div>
      </section>

      <section className="hr-section hr-section-soft">
        <div className="hr-wrap">
          <div className="hr-section-head">
            <p className="hr-eyebrow">How it works</p>
            <h2>From a cleaning checklist to measurable execution.</h2>
            <p>Keep the routine simple for staff while giving managers the control layer that paper cannot provide.</p>
          </div>
          <div className="hr-process">
            {steps.map(([number, stepTitle, text]) => (
              <article className="hr-step" key={number}>
                <span className="hr-step-num">{number}</span>
                <h3>{stepTitle}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="hr-section">
        <div className="hr-wrap hr-split">
          <div className="hr-image-panel">
            <Image
              src="/wp-content/uploads/2023/11/Diseno-sin-titulo-1.png"
              alt="Restaurant cleaning checklist workflow"
              width={1920}
              height={1080}
            />
          </div>
          <div>
            <div className="hr-section-head" style={{ marginBottom: 0 }}>
              <p className="hr-eyebrow">For managers</p>
              <h2>See the cleaning operation, not just the checklist.</h2>
              <p>CleanScan digitizes the sheet and turns every completion into useful operational data.</p>
            </div>
            <div className="hr-feature-list">
              <div className="hr-feature"><span className="hr-feature-mark">✓</span><div><strong>Metrics by space</strong><p>Compare kitchens, restrooms, dining areas, or any space you define.</p></div></div>
              <div className="hr-feature"><span className="hr-feature-mark">✓</span><div><strong>Global metrics</strong><p>Understand overall completion and recurring operational problems.</p></div></div>
              <div className="hr-feature"><span className="hr-feature-mark">✓</span><div><strong>Cleaning schedules</strong><p>Define how often each space should be cleaned so staff always know what is due.</p></div></div>
              <div className="hr-feature"><span className="hr-feature-mark">✓</span><div><strong>Digital records</strong><p>Keep a clear history instead of storing and reviewing paper sheets.</p></div></div>
            </div>
            <div className="hr-actions">
              <Link className="hr-primary" href="/solutions/food-and-beverage-cleaning-dashboard/">See the Dashboard</Link>
              <Link href="/solutions/restaurant-cleaning-management/" style={{ alignSelf: "center", fontWeight: 800, color: "#4027d7" }}>Explore the platform →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="hr-section hr-qr-section">
        <div className="hr-wrap hr-qr-grid">
          <div className="hr-qr-copy">
            <p className="hr-eyebrow">Public cleaning status</p>
            <h2>Replace the ugly paper sheet with a QR your customers can scan.</h2>
            <p>
              Every CleanScan space can have its own public status page. Scan the QR to see when the space was last cleaned, without exposing the internal management system.
            </p>
            <div className="hr-qr-points">
              <div className="hr-qr-point"><span>✓</span><div><strong>One QR per space</strong><br />Restroom, kitchen, changing room, dining area, or any other cleaning zone.</div></div>
              <div className="hr-qr-point"><span>✓</span><div><strong>Always up to date</strong><br />The public page reflects the latest cleaning record automatically.</div></div>
              <div className="hr-qr-point"><span>✓</span><div><strong>Print-ready PDF</strong><br />Generate the sign from CleanScan and place it directly in the public space.</div></div>
            </div>
            <div className="hr-actions">
              <Link className="hr-primary" href="/pricing/">See Plans by Space</Link>
            </div>
          </div>

          <div className="hr-public-card" aria-label="Example public cleaning status page">
            <div className="hr-public-sheet">
              <div className="hr-public-top">
                <span className="hr-public-brand">CleanScan</span>
                <span className="hr-live-pill">Updated</span>
              </div>
              <h3>Guest Restroom</h3>
              <p className="hr-public-label">Last cleaned</p>
              <p className="hr-public-time">12:42 PM</p>
              <p className="hr-public-meta">Today · Cleaning status recorded</p>
              <div className="hr-qr-row">
                <div className="hr-qr-box" aria-hidden="true">
                  {Array.from({ length: 16 }).map((_, index) => <i key={index} />)}
                </div>
                <div className="hr-qr-note">
                  <strong>Scan for cleaning status</strong>
                  <p>Customers see the latest cleaning information from this space.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hr-section hr-section-soft">
        <div className="hr-wrap">
          <div className="hr-section-head">
            <p className="hr-eyebrow">Daily operations</p>
            <h2>One system for the cleaning routines your restaurant already runs.</h2>
          </div>
          <div className="hr-ops-grid">
            {operationCards.map((card) => (
              <Link className="hr-op-card" href={card.href} key={card.href}>
                <span className="hr-op-num">{card.number}</span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <b>→</b>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="hr-section">
        <div className="hr-wrap">
          <div className="hr-section-head">
            <p className="hr-eyebrow">Used in restaurants</p>
            <h2>Less chasing. More visibility.</h2>
            <p>Teams use CleanScan to make cleaning routines easier to execute and easier to verify.</p>
          </div>
          <div className="hr-testimonials">
            {testimonials.map((testimonial) => (
              <article className="hr-quote" key={testimonial.name}>
                <div className="hr-quote-logo">
                  <Image src={testimonial.logo} alt={`${testimonial.name} logo`} width={testimonial.width} height={testimonial.height} />
                </div>
                <blockquote>“{testimonial.quote}”</blockquote>
                <footer><strong>{testimonial.name}</strong><span>{testimonial.context}</span></footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="hr-final">
        <div className="hr-wrap">
          <div className="hr-final-box">
            <h2>Manage, measure, and show cleaning in every space.</h2>
            <p>Set the schedule, let staff record the work, track the metrics, and give each public space a QR that shows its latest cleaning status.</p>
            <div className="hr-actions">
              <Link className="hr-primary" href="/contact/">Request a Demo</Link>
              <Link className="hr-secondary" href="/pricing/">See Pricing</Link>
            </div>
          </div>
          <p className="hr-legal">
            <a href="/privacy-policy/">Privacy Policy</a> · <a href="/cookie-policy/">Cookie Policy</a>
          </p>
        </div>
      </section>
    </main>
  );
}
