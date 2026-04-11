"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Crosshair, PersonStanding, Palette } from "lucide-react";
import { APPROACHES } from "@/lib/content";

const iconMap: Record<string, React.ReactNode> = {
  brain: <Brain size={28} aria-hidden="true" />,
  focus: <Crosshair size={28} aria-hidden="true" />,
  person: <PersonStanding size={28} aria-hidden="true" />,
  palette: <Palette size={28} aria-hidden="true" />,
};

export default function Approaches() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="approaches"
      aria-labelledby="approaches-title"
      className="bg-white section-padding"
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
            id="approaches-title"
            className="font-serif text-3xl md:text-4xl font-bold text-[#2C2C2A] mb-3"
          >
            {APPROACHES.title}
          </h2>
          <p className="text-[#2C2C2A]/60 text-base">{APPROACHES.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {APPROACHES.cards.map((card, i) => (
            <motion.article
              key={card.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, boxShadow: "0 8px 30px rgba(0,0,0,0.10)" }}
              className="bg-[#F5F2EB] rounded-2xl p-7 text-right transition-shadow duration-200 cursor-default"
              aria-label={`${card.title}: ${card.titleFull}`}
            >
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
                  card.color === "sage" ? "bg-[#E8EDDF] text-[#7A9E6A]" : "bg-[#F0EDE6] text-[#8B7340]"
                }`}
              >
                {iconMap[card.icon]}
              </div>
              <h3 className="font-serif text-xl font-bold text-[#2C2C2A] mb-1">{card.title}</h3>
              <p
                className="text-[#8B7340] text-sm mb-3"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                {card.titleFull}
              </p>
              <p className="text-[#2C2C2A]/75 text-sm leading-relaxed">{card.description}</p>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
