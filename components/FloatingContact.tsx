"use client";

import { Phone, CalendarHeart } from "lucide-react";
import { Instagram, Facebook } from "./SocialIcons";
import { site } from "@/data/site";
import { openBooking } from "@/lib/booking";

// Mobile: ghost icons sitting inside the pill card (like navbar links).
// Desktop (md+): standalone floating white circles on the right edge.
const baseBtn =
  "group relative flex h-11 w-11 items-center justify-center rounded-full text-rose transition hover:bg-rose/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose md:h-12 md:w-12 md:bg-white md:shadow-md md:shadow-rose/20 md:ring-1 md:ring-blush/40 md:hover:bg-rose md:hover:text-white";

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="pointer-events-none absolute right-[120%] hidden whitespace-nowrap rounded-full bg-ink/85 px-3 py-1 text-xs font-medium text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 md:block">
      {children}
    </span>
  );
}

export default function FloatingContact() {
  return (
    <div className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 flex-row items-center gap-1.5 rounded-full border border-blush/40 bg-white/80 px-2.5 py-2 shadow-lg shadow-rose/10 backdrop-blur-md md:bottom-8 md:left-auto md:right-6 md:translate-x-0 md:flex-col md:gap-3 md:rounded-none md:border-transparent md:bg-transparent md:p-0 md:shadow-none md:backdrop-blur-none">
      <a
        href={site.socials.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className={baseBtn}
      >
        <Label>Facebook</Label>
        <Facebook size={20} />
      </a>

      <a
        href={site.socials.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className={baseBtn}
      >
        <Label>Instagram</Label>
        <Instagram size={20} />
      </a>

      <a href={`tel:${site.phoneHref}`} aria-label="Call us" className={baseBtn}>
        <Label>Call {site.phone}</Label>
        <Phone size={20} />
      </a>

      {/* Online booking — opens the in-page BookingModal popup. */}
      <button
        type="button"
        aria-label="Book an appointment"
        onClick={openBooking}
        className="group relative flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-rose text-white shadow-md shadow-rose/30 transition hover:bg-rose/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose active:scale-95 md:h-14 md:w-14 md:shadow-lg md:shadow-rose/40"
      >
        <Label>Book Now</Label>
        <CalendarHeart size={24} />
      </button>
    </div>
  );
}
