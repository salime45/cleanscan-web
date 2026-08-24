"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/solutions/", label: "Solutions" },
  { href: "/templates/", label: "Templates" },
  { href: "/blog/", label: "Blog" },
  { href: "/contact/", label: "Contact" },
];

export default function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="topbar">
      <div className="wrap topbar-inner">
        <Link href="/" className="brand" aria-label="CleanScan home">
          <Image src="/wp-content/uploads/2023/10/logo-clean-scan-04.png" alt="CleanScan" width={193} height={72} />
        </Link>

        <nav className="main-nav" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link href={link.href} key={link.href}>{link.label}</Link>
          ))}
        </nav>

        <Link className="demo-btn desktop-demo" href="/contact/">DEMO</Link>

        <div className="mobile-menu">
          <button
            className="menu-toggle"
            type="button"
            aria-label="Toggle menu"
            aria-controls="mobile-navigation"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
          >
            <span />
            <span />
            <span />
          </button>
          {isMobileMenuOpen ? (
            <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link href={link.href} key={link.href}>{link.label}</Link>
              ))}
              <Link className="demo-btn mobile-demo" href="/contact/">DEMO</Link>
            </nav>
          ) : null}
        </div>
      </div>
    </header>
  );
}
