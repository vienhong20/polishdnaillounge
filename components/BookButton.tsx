"use client";

import { useEffect, useRef } from "react";
import { site } from "@/data/site";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

/**
 * Rewanow widget.js attaches a click handler to any element carrying the
 * `rewanow-scheduler-container` class + a `busid` attribute. We set `busid`
 * imperatively (React would otherwise drop the unknown attribute). If the
 * widget script never loaded, the onClick fallback opens the booking page.
 */
export default function BookButton({
  className = "",
  children = "Book Now",
}: Props) {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    ref.current?.setAttribute("busid", site.booking.busid);
  }, []);

  return (
    <button
      ref={ref}
      type="button"
      aria-label="Book an appointment"
      className={`rewanow-scheduler-container inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-rose px-7 py-3 font-medium text-white shadow-sm shadow-rose/30 transition hover:bg-rose/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose active:scale-95 ${className}`}
      onClick={() => {
        const w = window as unknown as Record<string, unknown>;
        if (!w.rewanow && !w.Rewanow) {
          window.open(site.booking.url, "_blank", "noopener");
        }
      }}
    >
      {children}
    </button>
  );
}
