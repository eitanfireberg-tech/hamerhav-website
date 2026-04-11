"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";
import { PSYCHODRAMA } from "@/lib/content";

export default function Psychodrama() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="psychodrama"
      aria-labelledby="psychodrama-title"
      className="bg-[#E8EDDF] section-padding"
      ref={ref}
    >
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Photo — left */}
          <motion.div
            className="w-full md:w-[45%] flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full max-w-sm h-64 md:h-[400px] rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/psychodrama.jpg"
                alt={PSYCHODRAMA.photoAlt}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Text — right */}
          <motion.div
            className="w-full md:w-[55%] text-right"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h2
              id="psychodrama-title"
              className="font-serif text-3xl md:text-4xl font-bold text-[#2C2C2A] mb-1"
            >
              {PSYCHODRAMA.title}
            </h2>
            <p
              className="font-playfair text-[#8B7340] text-xl mb-6"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              {PSYCHODRAMA.titleLatin}
            </p>

            {PSYCHODRAMA.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-[#2C2C2A]/80 text-base leading-loose mb-4">
                {paragraph}
              </p>
            ))}

            <p className="text-[#2C2C2A]/80 text-base font-semibold mt-4 mb-3">
              {PSYCHODRAMA.benefitsIntro}
            </p>

            <ul className="space-y-3 list-none p-0 m-0" role="list">
              {PSYCHODRAMA.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3 justify-start">
                  <CheckCircle className="text-[#7A9E6A] shrink-0 mt-1" size={18} aria-hidden="true" />
                  <span className="text-[#2C2C2A]/80 text-base">
                    <strong>{benefit.title}:</strong> {benefit.description}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
