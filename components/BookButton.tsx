"use client";

import { site } from "@/data/site";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

/**
 * Rewanow widget.js binds a click handler to any element with the
 * `rewanow-scheduler-container` class + a `busid` attribute. We render `busid`
 * directly (React 19 passes custom attributes through), so it is present in the
 * server HTML the widget scans on load. The onClick is a fallback that opens the
 * booking page in a new tab if the widget script never attached.
 */
export default function BookButton({
  className = "",
  children = "Book Now",
}: Props) {
  return (
    <button
      type="button"
      aria-label="Book an appointment"
      // `busid` is a non-standard attribute; spread to satisfy TS.
      {...{ busid: site.booking.busid }}
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
