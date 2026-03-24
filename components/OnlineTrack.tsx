"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Heart, User, Activity } from "lucide-react";
import { ONLINE_TRACK } from "@/lib/content";

const iconMap: Record<string, React.ReactNode> = {
  briefcase: <Briefcase size={22} aria-hidden="true" />,
  heart: <Heart size={22} aria-hidden="true" />,
  user: <User size={22} aria-hidden="true" />,
  activity: <Activity size={22} aria-hidden="true" />,
};

export default function OnlineTrack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="online"
      aria-labelledby="online-title"
      className="bg-white section-padding"
      ref={ref}
    >
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Photo — left */}
          <motion.div
            className="w-full md:w-[40%] flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full max-w-sm h-64 md:h-[420px] rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/online-track.jpg"
                alt={ONLINE_TRACK.photoAlt}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
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
              id="online-title"
              className="font-serif text-3xl md:text-4xl font-bold text-[#2C2C2A] mb-1"
            >
              {ONLINE_TRACK.title}
            </h2>
            <p className="text-[#8B7340] font-medium mb-2"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              {ONLINE_TRACK.titleSuffix}
            </p>
            <p className="text-[#2C2C2A]/60 text-sm mb-4">{ONLINE_TRACK.subtitle}</p>
            <p className="text-[#2C2C2A]/75 leading-loose mb-8">{ONLINE_TRACK.description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ONLINE_TRACK.tracks.map((track, i) => (
                <motion.div
                  key={track.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="bg-[#F5F2EB] rounded-xl p-4 text-right border-r-4 border-[#7A9E6A]"
                >
                  <div className="flex items-center justify-start gap-2 mb-2">
                    <span className="text-[#7A9E6A]">{iconMap[track.icon]}</span>
                    <h3 className="font-serif font-semibold text-[#2C2C2A] text-base">
                      {track.title}
                    </h3>
                  </div>
                  <p className="text-[#2C2C2A]/65 text-sm leading-relaxed">{track.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
