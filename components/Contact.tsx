"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Phone, MessageCircle } from "lucide-react";
import { CONTACT, SITE } from "@/lib/content";

type FormData = {
  name: string;
  phone: string;
  message: string;
};

// Facebook SVG icon
function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

// Instagram SVG icon
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      // mailto fallback — open mail client
      const subject = encodeURIComponent(`פנייה מהאתר — ${data.name}`);
      const body = encodeURIComponent(
        `שם: ${data.name}\nטלפון: ${data.phone}\n\nהודעה:\n${data.message}`
      );
      window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
      setSubmitStatus("success");
      reset();
    } catch {
      setSubmitStatus("error");
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="bg-[#7A9E6A] section-padding"
      ref={ref}
    >
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-start gap-12 md:gap-16">
          {/* Photo — left */}
          <motion.div
            className="w-full md:w-[40%] flex flex-col items-center gap-6"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border-4 border-white/30">
              <Image
                src="/images/contact-photo.jpg"
                alt={CONTACT.photoAlt}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 224px, 320px"
                className="object-cover object-top"
              />
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              <a
                href={SITE.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-colors"
                aria-label="עמוד פייסבוק"
              >
                <FacebookIcon />
              </a>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-colors"
                aria-label="עמוד אינסטגרם"
              >
                <InstagramIcon />
              </a>
            </div>
          </motion.div>

          {/* Contact info + form — right */}
          <motion.div
            className="w-full md:w-[60%] text-right"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h2
              id="contact-title"
              className="font-serif text-3xl md:text-4xl font-bold text-white mb-2"
            >
              {CONTACT.title}
            </h2>
            <p className="text-white/85 text-lg mb-2">{CONTACT.subtitle}</p>
            <p className="text-white/70 text-sm mb-8">{CONTACT.description}</p>

            {/* Direct contact links */}
            <div className="flex flex-wrap gap-3 justify-end mb-10">
              <a
                href={CONTACT.phoneHref}
                className="flex items-center gap-2 bg-white text-[#7A9E6A] hover:bg-[#F5F2EB] font-medium px-5 py-2.5 rounded-full transition-colors"
                aria-label={`חייג אלינו: ${CONTACT.phone}`}
              >
                <span>{CONTACT.phone}</span>
                <Phone size={16} aria-hidden="true" />
              </a>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5e] text-white font-medium px-5 py-2.5 rounded-full transition-colors"
                aria-label={CONTACT.whatsappLabel}
              >
                <span>{CONTACT.whatsappLabel}</span>
                <MessageCircle size={16} aria-hidden="true" />
              </a>
            </div>

            {/* Contact form */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              aria-label="טופס יצירת קשר"
              className="space-y-4"
            >
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-white text-sm font-medium mb-1"
                >
                  {CONTACT.form.name}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  autoComplete="name"
                  placeholder={CONTACT.form.namePlaceholder}
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  {...register("name", { required: "נדרש שם" })}
                  className="w-full bg-white/90 rounded-xl px-4 py-3 text-[#2C2C2A] placeholder-[#2C2C2A]/40 text-right focus:outline-none focus:ring-2 focus:ring-white"
                />
                {errors.name && (
                  <p id="name-error" role="alert" className="text-white/80 text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-phone"
                  className="block text-white text-sm font-medium mb-1"
                >
                  {CONTACT.form.phone}
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder={CONTACT.form.phonePlaceholder}
                  aria-required="true"
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                  {...register("phone", { required: "נדרש טלפון" })}
                  className="w-full bg-white/90 rounded-xl px-4 py-3 text-[#2C2C2A] placeholder-[#2C2C2A]/40 text-right focus:outline-none focus:ring-2 focus:ring-white"
                />
                {errors.phone && (
                  <p id="phone-error" role="alert" className="text-white/80 text-xs mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-white text-sm font-medium mb-1"
                >
                  {CONTACT.form.message}
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder={CONTACT.form.messagePlaceholder}
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  {...register("message", { required: "נדרשת הודעה" })}
                  className="w-full bg-white/90 rounded-xl px-4 py-3 text-[#2C2C2A] placeholder-[#2C2C2A]/40 text-right focus:outline-none focus:ring-2 focus:ring-white resize-none"
                />
                {errors.message && (
                  <p id="message-error" role="alert" className="text-white/80 text-xs mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#2C2C2A] hover:bg-black text-white font-medium px-8 py-3 rounded-full transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  aria-label={isSubmitting ? CONTACT.form.submitting : CONTACT.form.submit}
                >
                  {isSubmitting ? CONTACT.form.submitting : CONTACT.form.submit}
                </button>
              </div>

              {submitStatus === "success" && (
                <p role="status" className="text-white text-sm font-medium text-center">
                  {CONTACT.form.success}
                </p>
              )}
              {submitStatus === "error" && (
                <p role="alert" className="text-white/80 text-sm text-center">
                  {CONTACT.form.error}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
