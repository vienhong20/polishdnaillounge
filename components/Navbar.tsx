"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import BookButton from "./BookButton";

const links = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const floating = scrolled || open;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 md:pt-4">
      <nav
        className={`mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-full px-5 py-3 transition-all duration-300 ${
          floating
            ? "border border-blush/40 bg-white/80 shadow-lg shadow-rose/10 backdrop-blur-md"
            : "border border-transparent"
        }`}
      >
        <a href="#top" className="flex items-baseline gap-1.5 leading-none">
          <span className="font-script text-2xl text-rose">Polishd</span>
          <span className="font-display text-base font-medium tracking-tight text-ink">
            Nail Lounge
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink/75 transition-colors duration-200 hover:text-rose"
            >
              {l.label}
            </a>
          ))}
          <BookButton className="px-5 py-2 text-sm" />
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="cursor-pointer rounded-full p-2 text-ink transition-colors duration-200 hover:bg-blush/30 md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-5xl rounded-3xl border border-blush/40 bg-white/90 p-2 shadow-lg shadow-rose/10 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 font-medium text-ink/80 transition-colors duration-200 hover:bg-blush/30 hover:text-rose"
              >
                {l.label}
              </a>
            ))}
            <div className="px-2 pb-1 pt-2">
              <BookButton className="w-full" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
