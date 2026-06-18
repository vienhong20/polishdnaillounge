import BookButton from "./BookButton";

export default function FloatingBook() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-blush/40 bg-cream/95 p-3 backdrop-blur md:hidden">
      <BookButton className="w-full">Book Your Appointment</BookButton>
    </div>
  );
}
