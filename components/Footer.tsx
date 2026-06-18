import { Instagram, Facebook } from "./SocialIcons";
import BookButton from "./BookButton";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-blush/40 bg-cream px-5 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <a href="#top" className="flex items-baseline gap-1.5 leading-none">
          <span className="font-script text-3xl text-rose">Polishd</span>
          <span className="font-display text-lg tracking-wide text-ink">
            Nail Lounge
          </span>
        </a>

        <BookButton />

        <div className="flex gap-3">
          <a
            href={site.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Polishd Nail Lounge on Instagram"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-peach text-rose transition hover:bg-rose hover:text-white"
          >
            <Instagram size={18} />
          </a>
          <a
            href={site.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Polishd Nail Lounge on Facebook"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-peach text-rose transition hover:bg-rose hover:text-white"
          >
            <Facebook size={18} />
          </a>
        </div>

        <p className="text-xs text-muted">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
