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

      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-3">
        {highlights.map((h, i) => (
          <Reveal key={h.title} delay={i * 0.1} className="h-full">
            <div className="h-full bg-cream p-8 transition-colors duration-300 hover:bg-peach/60">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-peach text-rose">
                  <h.icon size={24} strokeWidth={1.75} />
                </div>
                <span className="font-display text-sm text-muted/60">0{i + 1}</span>
              </div>
              <h3 className="mt-6 font-display text-xl font-medium text-ink">{h.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{h.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
