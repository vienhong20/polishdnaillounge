// Booking popup wiring. Rewanow's hosted widget.js only does window.open (its
// in-page dialog is commented out), so we open the scheduler ourselves in a
// modal iframe. Any trigger calls openBooking(); BookingModal listens.
export const BOOKING_EVENT = "rwn:open-booking";

export function openBooking() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(BOOKING_EVENT));
  }
}
