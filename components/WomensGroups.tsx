"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";
import { WOMENS_GROUPS } from "@/lib/content";

// Simple SVG illustration of a circle of women
function WomenCircleSVG() {
  return (
    <svg
      viewBox="0 0 320 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-full h-full"
    >
      {/* Outer circle */}
      <circle cx="160" cy="160" r="140" stroke="#B5C4A0" strokeWidth="2" strokeDasharray="8 6" />
      {/* Center circle */}
      <circle cx="160" cy="160" r="40" fill="#E8EDDF" />
      <circle cx="160" cy="160" r="30" fill="#B5C4A0" opacity="0.6" />
      {/* Women figures around the circle */}
      {[0, 60, 120, 180, 240, 300].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const cx = 160 + 100 * Math.cos(rad);
        const cy = 160 + 100 * Math.sin(rad);
        return (
          <g key={i} transform={`translate(${cx}, ${cy})`}>
            <circle r="14" fill="#7A9E6A" opacity="0.8" />
            <circle r="7" cy="-20" fill="#8B7340" opacity="0.7" />
          </g>
        );
      })}
      {/* Connecting lines */}
      {[0, 60, 120, 180, 240, 300].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const x = 160 + 100 * Math.cos(rad);
        const y = 160 + 100 * Math.sin(rad);
        return <line key={i} x1="160" y1="160" x2={x} y2={y} stroke="#B5C4A0" strokeWidth="1.5" opacity="0.5" />;
      })}
    </svg>
  );
}

export default function WomensGroups() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="womens-groups"
      aria-labelledby="womens-title"
      className="bg-[#F0EDE6] section-padding"
      ref={ref}
    >
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* SVG illustration — left */}
          <motion.div
            className="w-full md:w-[40%] flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            aria-hidden="true"
          >
            <div className="w-60 h-60 md:w-80 md:h-80">
              <WomenCircleSVG />
            </div>
          </motion.div>

          {/* Text — right */}
          <motion.div
            className="w-full md:w-[60%] text-right"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h2
              id="womens-title"
              className="font-serif text-3xl md:text-4xl font-bold text-[#2C2C2A] mb-1"
            >
              {WOMENS_GROUPS.title}
            </h2>
            <p className="text-[#7A9E6A] font-medium text-lg mb-4">{WOMENS_GROUPS.titleSub}</p>
            <p className="text-[#2C2C2A]/60 text-sm mb-6">{WOMENS_GROUPS.subtitle}</p>
            <p className="text-[#2C2C2A]/75 leading-loose mb-8">{WOMENS_GROUPS.description}</p>

            <ul className="space-y-4 list-none p-0 m-0 mb-8" role="list">
              {WOMENS_GROUPS.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-[#7A9E6A] mt-0.5 shrink-0" size={18} aria-hidden="true" />
                  <span className="text-[#2C2C2A]/80 text-base text-right flex-1">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href={WOMENS_GROUPS.ctaLink}
              className="inline-block bg-[#7A9E6A] hover:bg-[#5d8354] text-white font-medium px-7 py-3 rounded-full transition-colors"
              aria-label={WOMENS_GROUPS.cta}
            >
              {WOMENS_GROUPS.cta}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
