"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import BookButton from "./BookButton";
import { site } from "@/data/site";

const POSTER = "/images/nail-5.jpg";
const SLIDES = ["/images/nail-5.jpg", "/images/nail-3.jpg", "/images/nail-2.jpg", "/images/nail-4.jpg"];

// Crossfading nail-photo slideshow — fallback for mobile and when the video fails.
function Slideshow() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % SLIDES.length), 4500);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="absolute inset-0">
      {SLIDES.map((src, idx) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          priority={idx === 0}
          sizes="100vw"
          className={`object-cover transition-opacity duration-1000 ${idx === i ? "opacity-100" : "opacity-0"}`}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const [videoFailed, setVideoFailed] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Video only mounts on desktop, so phones never download the clip.
  const showVideo = isDesktop && !reduceMotion && !videoFailed;

  return (
    <section
      id="top"
      className="relative flex min-h-[88vh] items-center overflow-hidden bg-cream md:min-h-screen"
    >
      {/* Background media */}
      <div className="absolute inset-0">
        {reduceMotion ? (
          <Image src={POSTER} alt="" fill priority sizes="100vw" className="object-cover" />
        ) : showVideo ? (
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={POSTER}
            onError={() => setVideoFailed(true)}
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
        ) : (
          // Mobile, reduced data, or video failure → nail-photo slideshow.
          <Slideshow />
        )}

        {/* Readability wash — keeps the pastel feel and dark text legible over media */}
        {/* Readability wash — warm neutral veil keeps espresso text legible over media */}
        <div className="absolute inset-0 bg-gradient-to-b from-cream/85 via-cream/70 to-cream/93" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/55 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold backdrop-blur-sm">
          <Sparkles size={13} /> Nail Studio · Miami, FL
        </span>

        <h1 className="mt-7 font-display text-[3.4rem] font-medium leading-[0.98] tracking-[-0.03em] text-ink sm:text-7xl md:text-[5.5rem]">
          Polishd
          <span className="mt-1 block font-normal italic text-rose">Nail Lounge</span>
        </h1>

        <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-muted">
          {site.tagline}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <BookButton className="w-full sm:w-auto" />
          <a
            href="#services"
            className="inline-flex w-full items-center justify-center rounded-full border border-ink/15 bg-white/50 px-7 py-3 font-medium text-ink backdrop-blur-sm transition hover:border-ink/40 hover:bg-white/80 sm:w-auto"
          >
            View Menu
          </a>
        </div>
      </motion.div>
    </section>
  );
}
