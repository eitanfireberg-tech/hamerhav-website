"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { SPECIALTIES } from "@/lib/content";
import SectionQuotes from "./SectionQuotes";

export default function Specialties() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="specialties"
      aria-labelledby="specialties-title"
      className="bg-[#F5F2EB] section-padding"
      ref={ref}
    >
      <div className="section-container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2
            id="specialties-title"
            className="font-serif text-3xl md:text-4xl font-bold text-[#2C2C2A] mb-3"
          >
            {SPECIALTIES.title}
          </h2>
        </motion.div>

        <motion.ul
          className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto list-none p-0 m-0"
          role="list"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {SPECIALTIES.items.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
              className="bg-white rounded-xl px-5 py-4 flex flex-col items-end border border-[#E8EDDF] hover:border-[#7A9E6A] transition-colors"
            >
              <span className="text-[#2C2C2A] font-medium text-base w-full text-right">{item.he}</span>
              <span
                className="text-[#8B7340] text-sm mt-0.5 w-full text-right"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                {item.en}
              </span>
            </motion.li>
          ))}
        </motion.ul>

        <SectionQuotes />
      </div>
    </section>
  );
}
