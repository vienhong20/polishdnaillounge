import { Clock, MapPin, Phone, Navigation } from "lucide-react";
import { Instagram, Facebook } from "./SocialIcons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { site } from "@/data/site";

// Keyless OpenStreetMap embed (Google's keyless embed is blocked in iframes).
const lat = 25.8871902;
const lon = -80.1650841;
const d = 0.006;
const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${lon - d}%2C${lat - d}%2C${lon + d}%2C${lat + d}&layer=mapnik&marker=${lat}%2C${lon}`;
const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(site.address)}`;

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <SectionHeading eyebrow="Visit Us" title="Visit Polishd Nail Lounge" />

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <Reveal className="space-y-6">
          <div className="flex gap-4">
            <MapPin className="mt-1 shrink-0 text-rose" size={22} />
            <div>
              <h3 className="font-display text-lg text-ink">Address</h3>
              <p className="text-muted">{site.address}</p>
            </div>
          </div>

          <div className="flex gap-4">
            <Phone className="mt-1 shrink-0 text-rose" size={22} />
            <div>
              <h3 className="font-display text-lg text-ink">Phone</h3>
              <a
                href={`tel:${site.phoneHref}`}
                className="text-muted transition hover:text-rose"
              >
                {site.phone}
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            <Clock className="mt-1 shrink-0 text-rose" size={22} />
            <div>
              <h3 className="font-display text-lg text-ink">Hours</h3>
              <ul className="mt-1 space-y-1 text-muted">
                {site.hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-6">
                    <span>{h.day}</span>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <a
              href={site.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Polishd Nail Lounge on Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-peach text-rose transition hover:bg-rose hover:text-white"
            >
              <Instagram size={20} />
            </a>
            <a
              href={site.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Polishd Nail Lounge on Facebook"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-peach text-rose transition hover:bg-rose hover:text-white"
            >
              <Facebook size={20} />
            </a>
          </div>
        </Reveal>

        <Reveal>
          <div className="relative h-72 overflow-hidden rounded-2xl border border-ink/10 md:h-full md:min-h-[22rem]">
            <iframe
              title="Polishd Nail Lounge location map"
              src={mapSrc}
              loading="lazy"
              className="h-full w-full"
            />
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 rounded-full bg-rose px-5 py-2.5 text-sm font-medium text-white shadow-md transition hover:bg-rose/90"
            >
              <Navigation size={16} /> Get Directions
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
