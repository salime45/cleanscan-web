import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "@/components/site-header";

const smartCleaningImage = "/wp-content/uploads/2024/11/Smart-cleaning-technology-providing-eco-friendly-solutions-for-pristine-workplaces.png";
const checklistImage = "/wp-content/uploads/2024/02/cropped-hand-person-holding-paper-clipboard-home-300x200.jpg";
const restroomImage = "/wp-content/uploads/2024/01/ama-llaves-limpiando-habitacion-hotel-300x257.jpg";
const appImage = "/og-image.png";
const restaurantChecklistAppImage = "/blog/restaurant-cleaning-checklist-app.svg";
const restroomLogVsAppImage = "/blog/restroom-cleaning-log-template-vs-app.svg";

export const metadata: Metadata = {
  title: "Blog | Restaurant Cleaning Operations",
  description:
    "Guides on restaurant cleaning systems, shift checklists, restroom quality, kitchen sanitation, and inspection compliance.",
  alternates: { canonical: "/blog/" },
};

const categories = [
  {
    name: "Restaurant Cleaning Systems",
    posts: [
      {
        title: "Restaurant Cleaning Checklist App: What to Track Each Shift",
        href: "/blog/restaurant-cleaning-checklist-app/",
        image: restaurantChecklistAppImage,
        imageAlt: "Digital restaurant cleaning checklist app organized by shift and area",
      },
      {
        title: "Restroom Cleaning Log Template vs App: Which Should Restaurants Use?",
        href: "/blog/restroom-cleaning-log-template-vs-app/",
        image: restroomLogVsAppImage,
        imageAlt: "Restroom cleaning log template compared with a digital app",
      },
      {
        title: "How to Build a Master Cleaning Schedule for a Restaurant",
        href: "/blog/restaurant-cleaning-systems/how-to-build-master-cleaning-schedule-for-a-restaurant/",
        image: checklistImage,
        imageAlt: "Cleaning checklist used to plan restaurant cleaning tasks",
      },
      {
        title: "Daily vs Weekly vs Monthly Restaurant Cleaning Tasks",
        href: "/blog/restaurant-cleaning-systems/daily-vs-weekly-vs-monthly-restaurant-cleaning-tasks/",
        image: smartCleaningImage,
        imageAlt: "Cleaning team maintaining a commercial workplace",
      },
      {
        title: "Paper vs Digital Cleaning Logs for Restaurants",
        href: "/blog/restaurant-cleaning-systems/paper-vs-digital-cleaning-logs-for-restaurants/",
        image: checklistImage,
        imageAlt: "Paper cleaning checklist beside cleaning supplies",
      },
    ],
  },
  {
    name: "Opening, Closing & Shift Checklists",
    posts: [
      {
        title: "Opening Checklist for Restaurant Managers",
        href: "/blog/opening-checklist-for-restaurant-managers/",
        image: checklistImage,
        imageAlt: "Restaurant manager opening checklist on a clipboard",
      },
      {
        title: "Restaurant Closing Cleaning Checklist by Role",
        href: "/blog/opening-closing-shift-checklists/restaurant-closing-cleaning-checklist-by-role/",
        image: restroomImage,
        imageAlt: "Cleaning a restroom during a closing checklist",
      },
    ],
  },
  {
    name: "Kitchen Sanitation & Food Safety",
    posts: [
      {
        title: "Kitchen Line Check Template: What Restaurants Should Track",
        href: "/blog/kitchen-line-check-template/",
        image: checklistImage,
        imageAlt: "Restaurant checklist used for kitchen line readiness checks",
      },
      {
        title: "Daily Restaurant Kitchen Cleaning Checklist: What to Check Every Shift",
        href: "/blog/daily-restaurant-kitchen-cleaning-checklist/",
        image: smartCleaningImage,
        imageAlt: "Restaurant kitchen cleaning tasks organized by shift",
      },
      {
        title: "How to Create a Restaurant Cleaning SOP",
        href: "/blog/kitchen-sanitation-food-safety/how-to-create-a-restaurant-cleaning-sop/",
        image: checklistImage,
        imageAlt: "Cleaning procedure checklist beside cleaning tools",
      },
    ],
  },
  {
    name: "Health Inspection & Compliance",
    posts: [
      {
        title: "What Health Inspectors Look for in Cleaning Logs",
        href: "/blog/health-inspection-compliance/what-health-inspectors-look-for-in-cleaning-logs/",
        image: restroomImage,
        imageAlt: "Restroom cleaning task used for inspection readiness",
      },
    ],
  },
  {
    name: "General",
    posts: [
      {
        title: "Smart Cleaning Tech for Modern Businesses",
        href: "/cleanscan-smart-cleaning-management-for-modern-businesses/",
        image: appImage,
        imageAlt: "CleanScan app dashboard for smart cleaning management",
      },
      {
        title: "Enhancing Employee Productivity with Cleaning Control Apps",
        href: "/enhancing-employee-productivity-with-cleaning-control-apps/",
        image: appImage,
        imageAlt: "CleanScan app dashboard for cleaning control",
      },
      {
        title: "Top 10 Benefits of Using a Cleaning Registration App",
        href: "/top-10-benefits-of-using-a-cleaning-registration-app/",
        image: appImage,
        imageAlt: "CleanScan app dashboard for cleaning registration",
      },
      {
        title: "Simplify Cleaning Management with CleanScan",
        href: "/simplify-cleaning-management-with-cleanscan/",
        image: appImage,
        imageAlt: "CleanScan app dashboard for cleaning management",
      },
    ],
  },
];

export default function BlogPage() {
  return (
    <main>
      <SiteHeader />
      <section className="section wrap">
        <p className="article-kicker">Blog</p>
        <h1>Restaurant Cleaning Knowledge Hub</h1>
        <p className="article-lead">
          Operational playbooks designed to support cleaning templates and software implementation.
        </p>

        <div className="cards two blog-grid">
          {categories.map((category) => (
            <article className="card-v1" key={category.name}>
              <h2>{category.name}</h2>
              <ul>
                {category.posts.map((post) => (
                  <li key={post.href}>
                    <a className="blog-post-link" href={post.href}>
                      <Image src={post.image} alt={post.imageAlt} width={300} height={200} sizes="(max-width: 760px) 76px, 92px" />
                      <span>{post.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
