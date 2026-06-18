"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import BookButton from "./BookButton";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[88vh] items-center overflow-hidden bg-gradient-to-b from-peach via-cream to-cream pb-16 pt-28 md:min-h-screen md:pb-24 md:pt-24"
    >
      {/* floating pastel blobs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-16 top-24 h-56 w-56 rounded-full bg-blush opacity-40 blur-3xl"
        animate={{ y: [0, 24, 0], x: [0, 12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-10 top-40 h-64 w-64 rounded-full bg-rose opacity-30 blur-3xl"
        animate={{ y: [0, -28, 0], x: [0, -14, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative mx-auto max-w-3xl px-6 text-center"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/70 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold shadow-sm">
          <Sparkles size={14} /> Miami&apos;s cozy nail spot
        </span>

        <h1 className="mt-6 font-display text-5xl leading-tight text-ink sm:text-6xl md:text-7xl">
          <span className="font-script text-rose">Polishd</span>
          <br />
          Nail Lounge
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-lg text-muted">{site.tagline}</p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <BookButton className="w-full sm:w-auto" />
          <a
            href="#services"
            className="inline-flex w-full items-center justify-center rounded-full border border-rose/40 bg-white/60 px-7 py-3 font-medium text-ink transition hover:border-rose hover:text-rose sm:w-auto"
          >
            View Menu
          </a>
        </div>

        <motion.div
          className="relative mx-auto mt-12 w-full max-w-md"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
        >
          <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] border border-white/70 shadow-xl shadow-rose/20 ring-1 ring-blush/40">
            <Image
              src="/images/nail-5.jpg"
              alt="Beautiful soft pink manicure at Polishd Nail Lounge"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 448px"
              className="object-cover"
            />
          </div>
          <span className="absolute -bottom-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-white px-4 py-2 text-xs font-medium text-rose shadow-md">
            <Sparkles size={13} /> Walk-ins welcome
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
