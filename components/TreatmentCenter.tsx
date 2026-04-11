"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";
import { TREATMENT_CENTER } from "@/lib/content";
import { QuoteOpen, QuoteClose } from "./SectionQuotes";

export default function TreatmentCenter() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="treatment"
      aria-labelledby="treatment-title"
      className="bg-[#7A9E6A] section-padding relative overflow-hidden"
      ref={ref}
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-5"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="section-container relative">
        <QuoteOpen variant="light" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            id="treatment-title"
            className="font-serif text-3xl md:text-5xl font-bold text-white mb-4"
          >
            {TREATMENT_CENTER.title}
          </h2>
          <p className="text-white/85 text-xl max-w-xl mx-auto">{TREATMENT_CENTER.subtitle}</p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0 m-0 mb-8" role="list">
            {TREATMENT_CENTER.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-right">
                <CheckCircle
                  className="text-white/70 mt-1 shrink-0"
                  size={18}
                  aria-hidden="true"
                />
                <span className="text-white text-base leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-center text-white/85 text-base leading-relaxed max-w-xl mx-auto mt-6">
            {TREATMENT_CENTER.closingText}
          </p>
        </motion.div>

        <QuoteClose variant="light" />
      </div>

      {/* Wave separator */}
      <div className="absolute bottom-0 inset-x-0" aria-hidden="true">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-[40px] md:h-[60px]"
        >
          <path d="M0,40 C360,0 1080,80 1440,40 L1440,60 L0,60 Z" fill="#F5F2EB" />
        </svg>
      </div>
    </section>
  );
}
