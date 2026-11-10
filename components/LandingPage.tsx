import Image from "next/image";
import { CheckCircle, Phone, MessageCircle, ArrowLeft } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import { LANDING_PAGES, LANDING_UI, SITE, type LandingPage as Page } from "@/lib/content";
import { buildLandingJsonLd, landingTestimonials } from "@/lib/seo";

// Server component: all text is in the static HTML so crawlers and AI agents read it without JS.
export default function LandingPage({ page }: { page: Page }) {
  const jsonLd = buildLandingJsonLd(page);
  const testimonials = landingTestimonials(page);
  const related = LANDING_PAGES.filter((p) => p.slug !== page.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main id="main-content">
        {/* Intro */}
        <section aria-labelledby="page-title" className="bg-[#E8EDDF] pt-28 md:pt-36 pb-12 md:pb-16">
          <div className="section-container">
            <nav aria-label="פירורי לחם" className="text-sm text-[#2C2C2A]/70 mb-6">
              <ol className="flex flex-wrap items-center gap-2 list-none p-0 m-0">
                <li>
                  <a href="/" className="hover:text-[#7A9E6A] underline-offset-4 hover:underline">
                    {LANDING_UI.breadcrumbHome}
                  </a>
                </li>
                <li aria-hidden="true">‹</li>
                <li aria-current="page">{page.linkLabel}</li>
              </ol>
            </nav>

            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
              <div className="w-full md:w-[60%] text-right">
                <p className="text-[#8B7340] font-medium mb-2">{page.eyebrow}</p>
                <h1
                  id="page-title"
                  className="font-serif text-3xl md:text-5xl font-bold text-[#2C2C2A] leading-tight mb-6"
                >
                  {page.h1}
                </h1>
                {page.intro.map((p, i) => (
                  <p key={i} className="text-[#2C2C2A]/80 text-base md:text-lg leading-loose mb-4">
                    {p}
                  </p>
                ))}
                <div className="flex flex-wrap gap-3 mt-6">
                  <a
                    href={SITE.phoneHref}
                    className="inline-flex items-center gap-2 bg-[#7A9E6A] hover:bg-[#5f8250] text-white font-medium px-6 py-3 rounded-full transition-colors"
                  >
                    <Phone size={18} aria-hidden="true" />
                    {LANDING_UI.ctaPhone} {SITE.phone}
                  </a>
                  <a
                    href={SITE.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white hover:bg-[#F5F2EB] text-[#2C2C2A] font-medium px-6 py-3 rounded-full border border-[#B5C4A0] transition-colors"
                  >
                    <MessageCircle size={18} aria-hidden="true" />
                    {LANDING_UI.ctaWhatsapp}
                  </a>
                </div>
              </div>
              <div className="w-full md:w-[40%] flex justify-center">
                <div className="relative w-full max-w-sm h-72 md:h-[420px] rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src={page.image}
                    alt={page.imageAlt}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="bg-[#F5F2EB] section-padding">
          <div className="section-container">
            <div className="max-w-3xl mx-auto flex flex-col gap-10 text-right">
              {page.sections.map((s, i) => (
                <article key={i} aria-labelledby={`s-${i}`}>
                  <h2 id={`s-${i}`} className="font-serif text-2xl md:text-3xl font-bold text-[#2C2C2A] mb-4">
                    {s.h2}
                  </h2>
                  {s.paragraphs?.map((p, j) => (
                    <p key={j} className="text-[#2C2C2A]/80 text-base leading-loose mb-4">
                      {p}
                    </p>
                  ))}
                  {s.bullets && (
                    <ul className="space-y-3 list-none p-0 m-0">
                      {s.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <CheckCircle className="text-[#7A9E6A] shrink-0 mt-1.5" size={18} aria-hidden="true" />
                          <span className="text-[#2C2C2A]/80 text-base leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        {testimonials.length > 0 && (
          <section aria-labelledby="testimonials-title" className="bg-[#E8EDDF] section-padding">
            <div className="section-container">
              <h2
                id="testimonials-title"
                className="font-serif text-2xl md:text-3xl font-bold text-[#2C2C2A] mb-8 text-center"
              >
                {LANDING_UI.testimonialsTitle}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
                {testimonials.map((t, i) => (
                  <figure key={i} className="bg-white rounded-2xl p-6 m-0 text-right border border-[#B5C4A0]/40">
                    <figcaption className="font-serif font-semibold text-[#2C2C2A] mb-2">{t.title}</figcaption>
                    <blockquote className="m-0 text-[#2C2C2A]/80 leading-relaxed">“{t.quote}”</blockquote>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ — visible, mirrors the FAQPage JSON-LD */}
        <section id="faq" aria-labelledby="faq-title" className="bg-white section-padding">
          <div className="section-container">
            <h2 id="faq-title" className="font-serif text-2xl md:text-3xl font-bold text-[#2C2C2A] mb-8 text-center">
              {LANDING_UI.faqTitle}
            </h2>
            <div className="max-w-3xl mx-auto flex flex-col gap-3">
              {page.faq.map((item, i) => (
                <details
                  key={i}
                  className="group bg-[#F5F2EB] rounded-xl border border-[#E8EDDF] open:border-[#7A9E6A] transition-colors"
                >
                  <summary className="cursor-pointer list-none flex items-center justify-between gap-4 px-5 py-4 text-right font-medium text-[#2C2C2A] text-base md:text-lg [&::-webkit-details-marker]:hidden">
                    <h3 className="m-0 text-inherit">{item.q}</h3>
                    <span aria-hidden="true" className="shrink-0 text-[#7A9E6A] text-xl transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="px-5 pb-5 text-[#2C2C2A]/80 leading-relaxed text-right">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section aria-labelledby="cta-title" className="bg-[#7A9E6A] section-padding text-white">
          <div className="section-container text-center">
            <h2 id="cta-title" className="font-serif text-2xl md:text-3xl font-bold mb-3">
              {LANDING_UI.ctaTitle}
            </h2>
            <p className="text-white/90 mb-6">{LANDING_UI.ctaBody}</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-2 bg-white text-[#2C2C2A] hover:bg-[#F5F2EB] font-medium px-6 py-3 rounded-full transition-colors"
              >
                <Phone size={18} aria-hidden="true" />
                {SITE.phone}
              </a>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/70 hover:bg-white/10 font-medium px-6 py-3 rounded-full transition-colors"
              >
                <MessageCircle size={18} aria-hidden="true" />
                {LANDING_UI.ctaWhatsapp}
              </a>
            </div>
          </div>
        </section>

        {/* Related topics — internal links */}
        <section aria-labelledby="related-title" className="bg-[#F5F2EB] section-padding">
          <div className="section-container">
            <h2 id="related-title" className="font-serif text-2xl font-bold text-[#2C2C2A] mb-6 text-center">
              {LANDING_UI.relatedTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {related.map((p) => (
                <a
                  key={p.slug}
                  href={`/${p.slug}/`}
                  className="block bg-white rounded-xl px-5 py-4 text-right border border-[#E8EDDF] hover:border-[#7A9E6A] transition-colors"
                >
                  <span className="block font-medium text-[#2C2C2A]">{p.linkLabel}</span>
                  <span className="block text-sm text-[#2C2C2A]/70 mt-1">{p.linkBlurb}</span>
                </a>
              ))}
            </div>
            <p className="text-center mt-8">
              <a href="/" className="inline-flex items-center gap-2 text-[#7A9E6A] hover:underline underline-offset-4 font-medium">
                {LANDING_UI.backHome}
                <ArrowLeft size={16} aria-hidden="true" />
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
