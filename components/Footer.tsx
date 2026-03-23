import { FOOTER, SITE } from "@/lib/content";

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="bg-[#2C2C2A] text-white py-8"
    >
      <div className="section-container">
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="font-serif text-base font-medium">{FOOTER.siteName}</p>
          <p className="text-white/60 text-sm">{FOOTER.copyright}</p>
          <p className="text-white/50 text-xs">{FOOTER.privacy}</p>
          <a
            href={SITE.phoneHref}
            className="text-white/70 hover:text-white text-sm transition-colors"
            aria-label={`להתקשר: ${SITE.phone}`}
          >
            {SITE.phone}
          </a>
        </div>
      </div>
    </footer>
  );
}
