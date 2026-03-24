"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { PHILOSOPHY } from "@/lib/content";

export default function Philosophy() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="philosophy"
      aria-labelledby="philosophy-title"
      className="bg-[#E8EDDF] section-padding"
      ref={ref}
    >
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p
              id="philosophy-title"
              className="font-serif text-2xl md:text-3xl font-bold text-[#7A9E6A] mb-4"
            >
              {PHILOSOPHY.quote}
            </p>

            <p className="font-serif text-lg md:text-xl text-[#7A9E6A]/80 font-medium mb-6">
              {PHILOSOPHY.subtitle}
            </p>

            <blockquote
              className="font-serif text-lg md:text-xl text-[#2C2C2A]/80 leading-loose mb-10 relative"
              cite="#"
            >
              <span
                className="absolute top-0 right-0 text-7xl text-[#7A9E6A]/20 leading-none font-serif"
                aria-hidden="true"
              >
                &rdquo;
              </span>
              {PHILOSOPHY.body}
            </blockquote>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="space-y-4"
          >
            <p className="text-[#2C2C2A]/70 text-base">{PHILOSOPHY.cta}</p>
            <a
              href={PHILOSOPHY.ctaHref}
              className="inline-block bg-[#7A9E6A] hover:bg-[#5d8354] text-white font-medium text-lg px-10 py-4 rounded-full transition-colors duration-200"
              aria-label={`${PHILOSOPHY.ctaButton} — ${PHILOSOPHY.cta}`}
            >
              {PHILOSOPHY.ctaButton}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
