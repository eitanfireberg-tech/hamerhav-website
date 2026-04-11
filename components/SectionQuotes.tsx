/**
 * Decorative Hebrew quotation marks (גרשיים) shown at the bottom of sections.
 * Use variant="light" on dark-background sections (green).
 */
export default function SectionQuotes({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const color = variant === "light" ? "text-white/20" : "text-[#7A9E6A]/20";

  return (
    <div className="flex justify-center mt-10" aria-hidden="true">
      <span
        className={`font-serif text-5xl md:text-6xl leading-none select-none ${color}`}
      >
        ״
      </span>
    </div>
  );
}
