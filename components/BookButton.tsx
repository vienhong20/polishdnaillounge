"use client";

import { openBooking } from "@/lib/booking";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

/** Opens the in-page booking popup (BookingModal) via the BOOKING_EVENT. */
export default function BookButton({
  className = "",
  children = "Book Now",
}: Props) {
  return (
    <button
      type="button"
      aria-label="Book an appointment"
      onClick={openBooking}
      className={`inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-rose px-7 py-3 font-medium text-white shadow-sm shadow-rose/30 transition hover:bg-rose/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
}
