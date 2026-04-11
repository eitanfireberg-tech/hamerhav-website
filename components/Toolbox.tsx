"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TOOLBOX } from "@/lib/content";
import { QuoteOpen, QuoteClose } from "./SectionQuotes";

export default function Toolbox() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="toolbox"
      aria-labelledby="toolbox-title"
      className="bg-[#F5F2EB] section-padding"
      ref={ref}
    >
      <div className="section-container">
        <QuoteOpen />
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            id="toolbox-title"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl md:text-4xl font-bold text-[#8B7340] mb-8"
          >
            {TOOLBOX.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-[#2C2C2A]/80 text-lg leading-loose mb-8"
          >
            {TOOLBOX.body}
          </motion.p>

          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="border-r-4 border-[#7A9E6A] pr-6 text-right"
          >
            <p className="text-[#7A9E6A] text-base font-medium italic leading-loose">
              {TOOLBOX.highlight}
            </p>
          </motion.blockquote>

          <QuoteClose />
        </div>
      </div>
    </section>
  );
}
