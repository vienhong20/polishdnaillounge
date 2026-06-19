import Image from "next/image";
import { Instagram } from "./SocialIcons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { site } from "@/data/site";

// Real nail photography (public/images). Swap for the salon's own shots anytime.
const photos = [
  { src: "/images/nail-3.jpg", label: "Nail Art" },
  { src: "/images/nail-5.jpg", label: "Soft & Nude" },
  { src: "/images/nail-2.jpg", label: "Clean Mani" },
  { src: "/images/nail-4.jpg", label: "Glam Set" },
  { src: "/images/nail-1.jpg", label: "Salon Care" },
  { src: "/images/nail-6.jpg", label: "Gentle Touch" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <SectionHeading eyebrow="Gallery" title="Pretty in every shade" />

      <div className="mt-12 grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3">
        {photos.map((p, i) => (
          <Reveal key={p.src} delay={(i % 3) * 0.08}>
            <div className="group relative aspect-square overflow-hidden rounded-xl">
              <Image
                src={p.src}
                alt={`${p.label} nails at Polishd Nail Lounge`}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/5 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
              <span className="absolute bottom-3 left-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/95">
                {p.label}
              </span>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href={site.socials.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 font-medium text-ink transition hover:border-rose hover:bg-rose hover:text-white"
        >
          <Instagram size={18} /> Follow us on Instagram
        </a>
      </div>
    </section>
  );
}
