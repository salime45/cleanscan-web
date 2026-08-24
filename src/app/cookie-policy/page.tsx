import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "CleanScan cookie policy and consent management information.",
  alternates: { canonical: "/cookie-policy/" },
  robots: { index: false, follow: true },
};

export default function CookiesPolicyPage() {
  return (
    <main className="legal-wrap">
      <h1>Cookie Policy</h1>
      <p>
        This website uses technical cookies required for basic functionality
        and, with consent, analytics cookies to measure usage and improve
        content.
      </p>

      <h2>Types of cookies</h2>
      <ul>
        <li>
          <strong>Technical cookies:</strong> required for navigation and core
          website features.
        </li>
        <li>
          <strong>Analytics cookies:</strong> help us understand website usage
          and improve the service.
        </li>
      </ul>

      <h2>Consent management</h2>
      <p>
        You can accept or reject optional cookies from the cookie banner. You
        can also delete cookies from your browser settings at any time.
      </p>

      <h2>Contact</h2>
      <p>
        For any questions regarding cookies, contact
        {" "}
        <a href="mailto:somos@isvisoft.com">somos@isvisoft.com</a>.
      </p>
    </main>
  );
}
