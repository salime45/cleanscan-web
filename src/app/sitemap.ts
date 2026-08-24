import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

const routes = [
  "/",
  "/contact/",
  "/solutions/",
  "/solutions/restaurant-cleaning-management/",
  "/solutions/restroom-quality-control/",
  "/solutions/health-inspection-readiness/",
  "/templates/",
  "/templates/restaurant-cleaning-checklist/",
  "/templates/restaurant-opening-checklist/",
  "/templates/restaurant-closing-cleaning-checklist/",
  "/templates/restroom-cleaning-log/",
  "/templates/kitchen-cleaning-checklist/",
  "/templates/restaurant-health-inspection-checklist/",
  "/blog/",
  "/blog/workplace-smart-cleaning-software/",
  "/blog/paper-vs-digital-cleaning-logs/",
  "/blog/qr-code-cleaning-checklist-7-days/",
  "/blog/restaurant-cleaning-checklist-app/",
  "/blog/restroom-cleaning-log-template-vs-app/",
  "/blog/kitchen-line-check-template/",
  "/blog/opening-checklist-for-restaurant-managers/",
  "/blog/daily-restaurant-kitchen-cleaning-checklist/",
  "/blog/restaurant-cleaning-systems/how-to-build-master-cleaning-schedule-for-a-restaurant/",
  "/blog/restaurant-cleaning-systems/daily-vs-weekly-vs-monthly-restaurant-cleaning-tasks/",
  "/blog/restaurant-cleaning-systems/paper-vs-digital-cleaning-logs-for-restaurants/",
  "/blog/opening-closing-shift-checklists/restaurant-closing-cleaning-checklist-by-role/",
  "/blog/health-inspection-compliance/what-health-inspectors-look-for-in-cleaning-logs/",
  "/blog/kitchen-sanitation-food-safety/how-to-create-a-restaurant-cleaning-sop/",
  "/cleanscan-smart-cleaning-management-for-modern-businesses/",
  "/enhancing-employee-productivity-with-cleaning-control-apps/",
  "/simplify-cleaning-management-with-cleanscan/",
  "/top-10-benefits-of-using-a-cleaning-registration-app/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    changeFrequency: route.startsWith("/blog") ? "monthly" : "weekly",
    priority: route === "/" ? 1 : route.startsWith("/solutions") || route.startsWith("/templates") ? 0.9 : 0.7,
  }));
}
