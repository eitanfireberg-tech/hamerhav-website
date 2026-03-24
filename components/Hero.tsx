"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { HERO, NAV } from "@/lib/content";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="כותרת ראשית"
      className="min-h-screen bg-[#F5F2EB] flex items-center pt-16 md:pt-20"
    >
      <div className="section-container w-full py-16 md:py-0">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
          {/* Image — left on desktop, top on mobile */}
          <motion.div
            className="w-full md:w-[45%] flex justify-center"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="relative w-72 h-72 md:w-[420px] md:h-[520px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/hero-photo.jpg"
                alt={HERO.photoAlt}
                fill
                priority
                sizes="(max-width: 768px) 288px, 420px"
                className="object-cover object-top"
              />
            </div>
          </motion.div>

          {/* Text — right on desktop */}
          <div className="w-full md:w-[55%] text-right">
            <motion.p
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-[#7A9E6A] font-medium text-sm md:text-base mb-3 tracking-wide"
            >
              {HERO.subtitle}
            </motion.p>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-serif text-3xl md:text-5xl font-bold text-[#2C2C2A] leading-tight mb-5"
            >
              {HERO.h1}
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-lg md:text-xl text-[#2C2C2A]/80 leading-relaxed mb-8 max-w-lg"
            >
              {HERO.tagline}
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-4 justify-end"
            >
              <a
                href={NAV.ctaHref}
                className="inline-block bg-[#B5C4A0] hover:bg-[#7A9E6A] text-white font-medium text-base px-8 py-3.5 rounded-full transition-colors duration-200 text-center"
                aria-label="לחצו לקביעת שיחת היכרות ללא עלות"
              >
                {HERO.cta}
              </a>
              <a
                href="#about"
                className="inline-block border border-[#7A9E6A] text-[#7A9E6A] hover:bg-[#7A9E6A] hover:text-white font-medium text-base px-8 py-3.5 rounded-full transition-colors duration-200 text-center"
                aria-label="קראו עוד על קרן"
              >
                קראו עוד עלי
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
