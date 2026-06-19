"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { site } from "@/data/site";
import { BOOKING_EVENT } from "@/lib/booking";

// Same scheduler URL Rewanow's own (commented-out) popup iframes.
const bookingUrl = `https://www.rewanow.com/scheduler/s;busid=${site.booking.busid}`;

/**
 * In-page booking popup: an overlay with the Rewanow scheduler in an iframe.
 * Opened from any "Book Now" trigger via the BOOKING_EVENT. Closes on the
 * close button, backdrop click, or Escape; locks body scroll while open.
 */
export default function BookingModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener(BOOKING_EVENT, onOpen);
    return () => window.removeEventListener(BOOKING_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Book an appointment"
      onClick={() => setOpen(false)}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-ink/40 p-3 backdrop-blur-sm sm:p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative h-[min(800px,92dvh)] w-[min(460px,100%)] overflow-hidden rounded-2xl bg-white shadow-2xl"
      >
        <button
          type="button"
          aria-label="Close booking"
          onClick={() => setOpen(false)}
          className="absolute right-2 top-2 z-10 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/90 text-ink shadow-md ring-1 ring-ink/10 transition hover:bg-white"
        >
          <X size={18} />
        </button>
        <iframe
          src={bookingUrl}
          title="Book an appointment at Polishd Nail Lounge"
          className="h-full w-full border-0"
        />
      </div>
    </div>
  );
}
