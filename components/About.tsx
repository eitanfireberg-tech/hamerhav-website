"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ABOUT } from "@/lib/content";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="bg-white section-padding"
      ref={ref}
    >
      <div className="section-container">
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-16">
          {/* Text — right (RTL = first in flow) */}
          <motion.div
            className="w-full md:w-[55%] text-right"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2
              id="about-title"
              className="font-serif text-3xl md:text-4xl font-bold text-[#2C2C2A] mb-2"
            >
              {ABOUT.sectionTitle}
            </h2>
            <p className="text-[#7A9E6A] font-medium mb-6">{ABOUT.subtitle}</p>

            <div className="space-y-4">
              {ABOUT.bio.map((paragraph, i) => (
                <p key={i} className="text-[#2C2C2A]/80 leading-loose text-base">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Credential badges */}
            <div className="flex flex-wrap gap-3 mt-8 justify-center sm:justify-end">
              {ABOUT.credentials.map((cred) => (
                <div
                  key={cred.label}
                  className="bg-[#E8EDDF] rounded-xl px-5 py-3 text-center min-w-[110px] min-h-[72px] flex flex-col justify-center items-center"
                  role="img"
                  aria-label={cred.label.replace(/\n/g, ' ')}
                >
                  <p className="font-serif font-bold text-[#7A9E6A] text-base whitespace-pre-line leading-tight">{cred.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Photo — left */}
          <motion.div
            className="w-full md:w-[45%] flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          >
            <div className="relative w-64 h-80 md:w-[360px] md:h-[460px] rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/about-photo.jpg"
                alt={ABOUT.photoAlt}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 256px, 360px"
                className="object-cover object-top"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
