import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "CleanScan privacy policy and personal data rights information.",
  alternates: { canonical: "/privacy-policy/" },
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="legal-wrap">
      <h1>Privacy Policy</h1>
      <p>
        Data controller: <strong>CleanScan / Isvisoft</strong>.
      </p>
      <p>
        Purpose: manage contact and commercial requests, provide the service,
        and maintain communications related to the product.
      </p>
      <p>
        Legal basis: user consent and legitimate interest for proper service
        delivery.
      </p>
      <p>
        Data retention: personal data is stored for as long as necessary to
        fulfill the purpose it was collected for and to comply with legal
        obligations.
      </p>
      <p>
        Your rights: you may request access, rectification, deletion,
        objection, restriction, and portability by emailing
        {" "}
        <a href="mailto:somos@isvisoft.com">somos@isvisoft.com</a>.
      </p>
      <p>
        Recipients: data is not shared with third parties except when legally
        required or with essential providers under proper data processing
        agreements.
      </p>
      <p>
        If you have any privacy questions, contact us at
        {" "}
        <a href="mailto:somos@isvisoft.com">somos@isvisoft.com</a>.
      </p>
    </main>
  );
}
