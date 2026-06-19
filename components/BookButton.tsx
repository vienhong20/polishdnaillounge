import { site } from "@/data/site";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

/**
 * Booking trigger for the Rewanow widget. Per Rewanow's integration steps, the
 * element only needs the `rewanow-scheduler-container` class + a `busid`
 * attribute — widget.js (loaded in layout) binds the click and opens the
 * in-page popup. No custom onClick: that would fight the widget's own handler.
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
    >
      {children}
    </button>
  );
}
