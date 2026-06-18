import { Instagram } from "./SocialIcons";
import Reveal from "./Reveal";
import { site } from "@/data/site";

// Placeholder pastel tiles — swap each for a real <Image> once photos are ready.
const tiles = [
  { from: "from-blush", to: "to-peach", label: "Gel Art" },
  { from: "from-peach", to: "to-rose/40", label: "Ombré" },
  { from: "from-rose/30", to: "to-blush", label: "French" },
  { from: "from-blush/70", to: "to-cream", label: "Spa Pedi" },
  { from: "from-peach/80", to: "to-blush", label: "Dip Set" },
  { from: "from-rose/40", to: "to-peach", label: "Chrome" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <Reveal className="text-center">
        <p className="font-script text-3xl text-rose">Our work</p>
        <h2 className="mt-2 font-display text-4xl text-ink md:text-5xl">
          Pretty in every shade
        </h2>
      </Reveal>

      <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {tiles.map((t, i) => (
          <Reveal key={t.label} delay={(i % 3) * 0.08}>
            <div
              className={`flex aspect-square items-end rounded-3xl bg-gradient-to-br ${t.from} ${t.to} p-4`}
            >
              <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-ink backdrop-blur">
                {t.label}
              </span>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href={site.socials.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-rose/40 bg-white px-6 py-3 font-medium text-rose transition hover:bg-rose hover:text-white"
        >
          <Instagram size={18} /> Follow us on Instagram
        </a>
      </div>
    </section>
  );
}
