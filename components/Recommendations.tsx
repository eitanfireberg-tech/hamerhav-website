"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { RECOMMENDATIONS } from "@/lib/content";
import SectionQuotes from "./SectionQuotes";

export default function Recommendations() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);

  const items = RECOMMENDATIONS.items;

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    // RTL: scrollLeft is negative in most browsers
    const scrollLeft = Math.abs(el.scrollLeft);
    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < maxScroll - 10);

    // Determine active dot based on scroll position
    const cardWidth = el.querySelector<HTMLElement>("[data-card]")?.offsetWidth ?? 300;
    const idx = Math.round(scrollLeft / (cardWidth + 16));
    setActiveIndex(Math.min(idx, items.length - 1));
  }, [items.length]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const CARD_GAP_PX = 16; // must match gap-4 in the className

  const scrollTo = (direction: "next" | "prev") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector<HTMLElement>("[data-card]")?.offsetWidth ?? 300;
    const amount = cardWidth + CARD_GAP_PX;
    // RTL: next = negative scrollLeft
    el.scrollBy({
      left: direction === "next" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const scrollToIndex = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelectorAll<HTMLElement>("[data-card]")[index];
    if (card) {
      card.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  };

  return (
    <section
      id="recommendations"
      aria-labelledby="recommendations-title"
      className="section-padding bg-[#F5F2EB]"
      ref={sectionRef}
    >
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2
            id="recommendations-title"
            className="font-serif text-2xl md:text-4xl font-bold text-[#2C2C2A] mb-3"
          >
            {RECOMMENDATIONS.title}
          </h2>
          <p className="text-[#7A9E6A] font-medium text-base md:text-lg">
            {RECOMMENDATIONS.subtitle}
          </p>
        </motion.div>
      </div>

      {/* Scrollable cards — full-bleed on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative"
      >
        {/* Desktop nav arrows */}
        <button
          onClick={() => scrollTo("next")}
          disabled={!canScrollRight}
          aria-label="הבא"
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center rounded-full bg-white/90 shadow-md text-[#7A9E6A] hover:bg-[#7A9E6A] hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <button
          onClick={() => scrollTo("prev")}
          disabled={!canScrollLeft}
          aria-label="הקודם"
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center rounded-full bg-white/90 shadow-md text-[#7A9E6A] hover:bg-[#7A9E6A] hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory px-6 md:px-[max(1.5rem,calc((100vw-1200px)/2+1.5rem))] pb-4 scrollbar-hide"
          role="list"
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              data-card
              role="listitem"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
              className="snap-center shrink-0 w-[82vw] sm:w-[70vw] md:w-[380px] bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              {/* Quote mark */}
              <span
                className="text-5xl text-[#7A9E6A]/25 leading-none font-serif select-none mb-2"
                aria-hidden="true"
              >
                &#x201E;
              </span>

              {/* Quote text */}
              <p className="text-[#2C2C2A]/80 text-base leading-relaxed flex-1 mb-5">
                {item.quote}
              </p>

              {/* Divider + title */}
              <div className="border-t border-[#E8EDDF] pt-4">
                <p className="font-serif text-sm font-semibold text-[#7A9E6A]">
                  {item.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-0 mt-6" role="tablist" aria-label="ניווט בין המלצות">
          {items.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={`המלצה ${i + 1}`}
              onClick={() => scrollToIndex(i)}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              <span
                className={`block rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "w-6 h-2.5 bg-[#7A9E6A]"
                    : "w-2.5 h-2.5 bg-[#7A9E6A]/25 hover:bg-[#7A9E6A]/50"
                }`}
              />
            </button>
          ))}
        </div>
      </motion.div>

      <div className="section-container">
        <SectionQuotes />
      </div>
    </section>
  );
}
