"use client";

import { useEffect, useRef } from "react";
import { Phone, CalendarHeart } from "lucide-react";
import { Instagram, Facebook } from "./SocialIcons";
import { site } from "@/data/site";

const baseBtn =
  "group relative flex h-12 w-12 items-center justify-center rounded-full bg-white text-rose shadow-md shadow-rose/20 ring-1 ring-blush/40 transition hover:bg-rose hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose";

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="pointer-events-none absolute right-[120%] hidden whitespace-nowrap rounded-full bg-ink/85 px-3 py-1 text-xs font-medium text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 md:block">
      {children}
    </span>
  );
}

export default function FloatingContact() {
  const bookRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    bookRef.current?.setAttribute("busid", site.booking.busid);
  }, []);

  return (
    <div className="fixed inset-x-0 bottom-4 z-50 flex flex-row items-center justify-center gap-3 md:inset-x-auto md:bottom-8 md:right-6 md:flex-col">
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

      {/* Online booking — opens the Rewanow widget (fallback: new tab) */}
      <button
        ref={bookRef}
        type="button"
        aria-label="Book an appointment"
        onClick={() => {
          const w = window as unknown as Record<string, unknown>;
          if (!w.rewanow && !w.Rewanow) {
            window.open(site.booking.url, "_blank", "noopener");
          }
        }}
        className="rewanow-scheduler-container group relative flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-rose text-white shadow-lg shadow-rose/40 transition hover:bg-rose/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose active:scale-95"
      >
        <Label>Book Now</Label>
        <CalendarHeart size={24} />
      </button>
    </div>
  );
}
