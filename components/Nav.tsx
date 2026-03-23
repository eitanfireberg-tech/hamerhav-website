"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { NAV, SITE } from "@/lib/content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#F5F2EB]/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="section-container">
          <nav
            role="navigation"
            aria-label="ניווט ראשי"
            className="flex items-center justify-between h-16 md:h-20"
          >
            {/* Logo */}
            <a
              href="#hero"
              className="font-serif text-base md:text-lg font-semibold text-[#2C2C2A] hover:text-[#7A9E6A] transition-colors leading-tight"
              aria-label={`${NAV.logo} — חזרה לדף הבית`}
            >
              {NAV.logo}
            </a>

            {/* Desktop nav links */}
            <ul className="hidden md:flex items-center gap-6 list-none m-0 p-0" role="list">
              {NAV.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#2C2C2A] hover:text-[#7A9E6A] transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={SITE.phoneHref}
                className="flex items-center gap-1.5 text-sm text-[#2C2C2A] hover:text-[#7A9E6A] transition-colors"
                aria-label={`התקשר אלינו: ${SITE.phone}`}
              >
                <Phone size={15} aria-hidden="true" />
                <span>{SITE.phone}</span>
              </a>
              <a
                href={NAV.ctaHref}
                className="bg-[#B5C4A0] hover:bg-[#7A9E6A] text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors duration-200"
                aria-label="לחצו לקביעת שיחת היכרות"
              >
                {NAV.cta}
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-[#2C2C2A] hover:text-[#7A9E6A] transition-colors"
              aria-label={menuOpen ? "סגור תפריט" : "פתח תפריט"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-label="תפריט ניווט"
          aria-modal="true"
          className="fixed inset-0 z-40 bg-[#F5F2EB] flex flex-col items-center justify-center"
        >
          <nav aria-label="ניווט מובייל">
            <ul className="flex flex-col items-center gap-8 list-none m-0 p-0" role="list">
              {NAV.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="text-2xl font-serif text-[#2C2C2A] hover:text-[#7A9E6A] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={NAV.ctaHref}
                  onClick={closeMenu}
                  className="mt-4 inline-block bg-[#B5C4A0] hover:bg-[#7A9E6A] text-white text-lg font-medium px-8 py-3 rounded-full transition-colors"
                  aria-label="לחצו לקביעת שיחת היכרות"
                >
                  {NAV.cta}
                </a>
              </li>
              <li>
                <a
                  href={SITE.phoneHref}
                  className="flex items-center gap-2 text-base text-[#2C2C2A] hover:text-[#7A9E6A] transition-colors"
                  aria-label={`התקשר: ${SITE.phone}`}
                >
                  <Phone size={16} aria-hidden="true" />
                  <span>{SITE.phone}</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
