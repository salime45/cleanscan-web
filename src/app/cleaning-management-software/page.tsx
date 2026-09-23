import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "Cleaning Management Software for Teams & Facilities",
  description:
    "Cleaning management software for teams that need recurring schedules, digital checklists, completion tracking, QR status pages, records, and cleaning metrics.",
  alternates: { canonical: "/cleaning-management-software/" },
};

const features = [
  ["Recurring cleaning schedules", "Set daily, weekly, monthly, shift-based, or custom cleaning frequencies."],
  ["Digital checklists", "Replace paper sheets with structured tasks staff can complete from a phone or tablet."],
  ["Task ownership", "Assign responsibilities by space, role, shift, or team."],
  ["Completion history", "Keep a record of completed, missed, and overdue cleaning tasks."],
  ["Public QR status", "Let customers or visitors scan a QR code to see when a space was last cleaned."],
  ["Cleaning metrics", "Review performance by space and across the whole operation."],
];

const useCases = [
  "Restaurants and hospitality",
  "Restrooms and public facilities",
  "Offices and workplaces",
  "Gyms and shared spaces",
  "Retail and customer-facing locations",
  "Multi-space facilities",
];

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <article className="article-wrap">
        <p className="article-kicker">Cleaning Operations Software</p>
        <h1>Cleaning Management Software for Teams & Facilities</h1>
        <p className="article-lead">
          CleanScan is cleaning management software for teams that need to plan recurring work,
          replace paper cleaning sheets, track completion, and keep managers visible across every
          monitored space.
        </p>

        <div className="hero-actions article-actions">
          <Link className="hero-cta" href="/contact/">Request a Demo</Link>
          <Link className="outline-cta" href="/pricing/">View Pricing</Link>
          <Link className="outline-cta" href="/cleaning-checklist-app/">See Cleaning Checklist App</Link>
        </div>

        <section>
          <h2>What is cleaning management software?</h2>
          <p>
            Cleaning management software organizes recurring cleaning tasks, schedules, ownership,
            completion records, and manager review in one system. Instead of collecting paper logs,
            managers can see what should happen, what has been completed, and what still needs action.
          </p>
        </section>

        <section>
          <h2>What CleanScan helps you manage</h2>
          <div className="cards two">
            {features.map(([title, description]) => (
              <article className="card-v1" key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2>Cleaning management by space</h2>
          <p>
            CleanScan is organized around monitored spaces rather than user seats. A space can be a
            restroom, kitchen, bar, dining room, storage area, office, gym zone, or any other area
            where cleaning must be scheduled and verified.
          </p>
          <p>
            This makes it easier to measure cleaning performance by area and show a public cleaning
            status with a printable QR code where appropriate.
          </p>
        </section>

        <section>
          <h2>Who uses cleaning management software?</h2>
          <div className="commercial-list-grid">
            {useCases.map((item) => <div className="commercial-list-item" key={item}>{item}</div>)}
          </div>
        </section>

        <section>
          <h2>Cleaning management software vs paper cleaning logs</h2>
          <p>
            Paper logs can record signatures, but they do not give managers live visibility into
            pending work, repeated misses, overdue tasks, or performance by space. Digital cleaning
            management turns the same routine into a trackable workflow.
          </p>
          <p>
            If you are defining your process first, start with the <Link href="/templates/">free cleaning template library</Link>.
          </p>
        </section>

        <section className="article-cta-box">
          <h2>Run cleaning operations without paper sheets</h2>
          <p>
            Use recurring schedules, digital checklists, completion history, QR status pages, and
            cleaning metrics in one system.
          </p>
          <div className="hero-actions">
            <Link className="hero-cta" href="/contact/">Request a Demo</Link>
            <Link className="outline-cta" href="/pricing/">See Pricing</Link>
          </div>
        </section>

        <section>
          <h2>Related cleaning software</h2>
          <ul>
            <li><Link href="/cleaning-checklist-app/">Cleaning checklist app</Link></li>
            <li><Link href="/cleaning-schedule-app/">Cleaning schedule app</Link></li>
            <li><Link href="/solutions/restaurant-cleaning-management/">Restaurant cleaning management software</Link></li>
            <li><Link href="/solutions/restroom-quality-control/">Restroom quality control software</Link></li>
          </ul>
        </section>
      </article>
    </main>
  );
}
