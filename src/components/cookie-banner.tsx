"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const KEY = "cleanscan_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const v = localStorage.getItem(KEY);
    if (!v) {
      const id = window.setTimeout(() => setVisible(true), 0);
      return () => window.clearTimeout(id);
    }
  }, []);

  const save = (value: "accepted" | "rejected") => {
    localStorage.setItem(KEY, value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Cookies notice">
      <p>
        We use technical cookies and, with your permission, analytics cookies to improve your experience.
        You can accept or reject optional cookies.
      </p>
      <div className="cookie-actions">
        <button onClick={() => save("rejected")} className="cookie-btn ghost">Reject</button>
        <button onClick={() => save("accepted")} className="cookie-btn">Accept</button>
      </div>
      <p className="cookie-links">
        <Link href="/privacy-policy/">Privacy Policy</Link>
        <span> · </span>
        <Link href="/cookie-policy/">Cookie Policy</Link>
      </p>
    </div>
  );
}
