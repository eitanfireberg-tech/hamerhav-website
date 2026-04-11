"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, Heart, Layers, Star, RefreshCw, Check } from "lucide-react";
import { DEEP_PROCESS } from "@/lib/content";

const iconMap: Record<string, React.ReactNode> = {
  search: <Search size={20} aria-hidden="true" />,
  heart: <Heart size={20} aria-hidden="true" />,
  layers: <Layers size={20} aria-hidden="true" />,
  star: <Star size={20} aria-hidden="true" />,
  refresh: <RefreshCw size={20} aria-hidden="true" />,
  check: <Check size={20} aria-hidden="true" />,
};

export default function DeepProcess() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="deep-process"
      aria-labelledby="deep-process-title"
      className="bg-[#E8EDDF] section-padding"
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
            id="deep-process-title"
            className="font-serif text-3xl md:text-4xl font-bold text-[#2C2C2A] mb-2"
          >
            {DEEP_PROCESS.title}
          </h2>
          <p className="font-serif text-xl text-[#7A9E6A] font-medium mb-1">
            {DEEP_PROCESS.subtitle}
          </p>
          <p className="text-[#2C2C2A]/60 text-base mb-6">{DEEP_PROCESS.subtitleSub}</p>
          <p className="text-[#2C2C2A]/75 text-base leading-loose max-w-2xl mx-auto">
            {DEEP_PROCESS.description}
          </p>
        </motion.div>

        <div className="w-12 h-px bg-[#7A9E6A]/40 mx-auto mb-10" />

        <motion.div
          className="text-center mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="font-serif text-2xl font-bold text-[#7A9E6A] mb-2">
            {DEEP_PROCESS.sectionTitle}
          </h3>
          <p className="text-[#2C2C2A]/75 text-base">
            {DEEP_PROCESS.sectionIntro}
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-3">
          {DEEP_PROCESS.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.25 + 0.05 * i }}
              className="bg-white rounded-xl px-5 py-4 flex items-start gap-3"
            >
              <span className="text-[#7A9E6A] shrink-0 mt-1">{iconMap[item.icon]}</span>
              <div>
                <p className="font-serif font-semibold text-[#2C2C2A] text-base mb-1">
                  {item.title}
                </p>
                <p className="text-[#2C2C2A]/75 text-base leading-loose">{item.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
