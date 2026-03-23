"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Activity, Building2, Eye, Users, Home } from "lucide-react";
import { COURSES } from "@/lib/content";

const iconMap: Record<string, React.ReactNode> = {
  activity: <Activity size={26} aria-hidden="true" />,
  building: <Building2 size={26} aria-hidden="true" />,
  eye: <Eye size={26} aria-hidden="true" />,
  users: <Users size={26} aria-hidden="true" />,
  home: <Home size={26} aria-hidden="true" />,
};

export default function Courses() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="courses"
      aria-labelledby="courses-title"
      className="bg-[#7A9E6A] section-padding"
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
            id="courses-title"
            className="font-serif text-3xl md:text-4xl font-bold text-white mb-3"
          >
            {COURSES.title}
          </h2>
          <p className="text-white/80 text-base">{COURSES.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {COURSES.items.map((course, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="bg-white rounded-2xl p-6 text-right hover:shadow-lg transition-shadow"
              aria-label={course.title}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#E8EDDF] rounded-xl text-[#7A9E6A] mb-4">
                {iconMap[course.icon]}
              </div>
              <h3 className="font-serif font-bold text-[#2C2C2A] text-lg mb-2">{course.title}</h3>
              <p className="text-[#2C2C2A]/70 text-sm leading-relaxed">{course.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
