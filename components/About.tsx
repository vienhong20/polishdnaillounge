import { Sparkles, HeartHandshake, Gem } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const highlights = [
  {
    icon: Sparkles,
    title: "Clean & Sanitized",
    text: "Fresh tools and hospital-grade sanitation for every single guest.",
  },
  {
    icon: HeartHandshake,
    title: "Friendly Staff",
    text: "A warm, welcoming team that treats you like family every visit.",
  },
  {
    icon: Gem,
    title: "Skilled Techs",
    text: "Detail-obsessed nail artists who make every set picture-perfect.",
  },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <SectionHeading
        eyebrow="About Us"
        title="A little lounge full of love"
        subtitle="At Polishd Nail Lounge we blend cozy comfort with flawless nail care. Sink into our pastel space, sip something sweet, and let our artists pamper your hands and feet — from classic mani-pedis to the trendiest dip and gel-x sets."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-3">
        {highlights.map((h, i) => (
          <Reveal key={h.title} delay={i * 0.1}>
            <div className="h-full rounded-3xl border border-blush/40 bg-white p-7 text-center shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-soft-lg">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-peach text-rose">
                <h.icon size={26} />
              </div>
              <h3 className="mt-4 font-display text-xl text-ink">{h.title}</h3>
              <p className="mt-2 text-sm text-muted">{h.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
