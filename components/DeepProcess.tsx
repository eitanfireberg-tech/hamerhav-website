"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import {
  Search,
  Map,
  Heart,
  Layers,
  Star,
  RefreshCw,
  Check,
  Compass,
  ChevronDown,
} from "lucide-react";
import { DEEP_PROCESS } from "@/lib/content";

const iconMap: Record<string, React.ReactNode> = {
  search: <Search size={20} aria-hidden="true" />,
  map: <Map size={20} aria-hidden="true" />,
  heart: <Heart size={20} aria-hidden="true" />,
  layers: <Layers size={20} aria-hidden="true" />,
  star: <Star size={20} aria-hidden="true" />,
  refresh: <RefreshCw size={20} aria-hidden="true" />,
  check: <Check size={20} aria-hidden="true" />,
  compass: <Compass size={20} aria-hidden="true" />,
};

export default function DeepProcess() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

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

        <div className="max-w-2xl mx-auto space-y-3">
          {DEEP_PROCESS.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.05 * i }}
                className="bg-white rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={`dp-panel-${i}`}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-right hover:bg-[#F5F2EB] transition-colors"
                >
                  <ChevronDown
                    size={18}
                    aria-hidden="true"
                    className={`text-[#7A9E6A] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  />
                  <div className="flex items-center gap-3 flex-1 justify-end">
                    <span className="font-serif font-semibold text-[#2C2C2A] text-base">
                      {item.title}
                    </span>
                    <span className="text-[#7A9E6A] shrink-0">{iconMap[item.icon]}</span>
                  </div>
                </button>
                {isOpen && (
                  <div
                    id={`dp-panel-${i}`}
                    role="region"
                    aria-label={item.title}
                    className="px-5 pb-5 text-right"
                  >
                    <p className="text-[#2C2C2A]/75 text-sm leading-loose">{item.body}</p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
