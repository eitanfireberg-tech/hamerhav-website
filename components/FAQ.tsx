import { FAQ } from "@/lib/content";

// Server component using native <details> so answers are present in the static HTML
// (crawlers and AI agents read them without running JS). Mirrors FAQPage JSON-LD.
export default function FAQSection() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-white section-padding">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 id="faq-title" className="font-serif text-3xl md:text-4xl font-bold text-[#2C2C2A] mb-3">
            {FAQ.title}
          </h2>
          <p className="text-[#8B7340] text-lg">{FAQ.subtitle}</p>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {FAQ.items.map((item, i) => (
            <details
              key={i}
              className="group bg-[#F5F2EB] rounded-xl border border-[#E8EDDF] open:border-[#7A9E6A] transition-colors"
            >
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 px-5 py-4 text-right font-medium text-[#2C2C2A] text-base md:text-lg [&::-webkit-details-marker]:hidden">
                <h3 className="m-0 text-inherit">{item.q}</h3>
                <span
                  aria-hidden="true"
                  className="shrink-0 text-[#7A9E6A] text-xl transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="px-5 pb-5 text-[#2C2C2A]/80 leading-relaxed text-right">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
