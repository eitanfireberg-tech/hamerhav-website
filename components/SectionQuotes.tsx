/**
 * Decorative Hebrew quotation marks — opening „ top-right, closing " bottom-left.
 * Use variant="light" on dark-background sections (green).
 */

export function QuoteOpen({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const color = variant === "light" ? "text-white/20" : "text-[#7A9E6A]/20";

  return (
    <div className="flex justify-end" aria-hidden="true">
      <span className={`font-serif text-5xl md:text-6xl leading-none select-none ${color}`}>
        ״
      </span>
    </div>
  );
}

export function QuoteClose({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const color = variant === "light" ? "text-white/20" : "text-[#7A9E6A]/20";

  return (
    <div className="flex justify-start" aria-hidden="true">
      <span className={`font-serif text-5xl md:text-6xl leading-none select-none ${color}`}>
        ״
      </span>
    </div>
  );
}
