import { Clock, MapPin, Phone } from "lucide-react";
import { Instagram, Facebook } from "./SocialIcons";
import Reveal from "./Reveal";
import { site } from "@/data/site";

const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
  site.address
)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <Reveal className="text-center">
        <p className="font-script text-3xl text-rose">Come say hi</p>
        <h2 className="mt-2 font-display text-4xl text-ink md:text-5xl">
          Visit Polishd Nail Lounge
        </h2>
      </Reveal>

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
          <iframe
            title="Polishd Nail Lounge location map"
            src={mapSrc}
            loading="lazy"
            className="h-72 w-full rounded-3xl border border-blush/40 md:h-full md:min-h-[22rem]"
          />
        </Reveal>
      </div>
    </section>
  );
}
