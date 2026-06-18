"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Reveal from "./Reveal";
import { site } from "@/data/site";
import { testimonials } from "@/data/testimonials";

const AUTOPLAY_MS = 6000;

function Stars({ count }: { count: number }) {
  return (
    <div className="flex justify-center gap-1 text-gold" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={18} strokeWidth={0} fill={i < count ? "currentColor" : "#e9dcd0"} />
      ))}
    </div>
  );
}

export default function Reviews() {
  const { rating, count, googleUrl, yelpUrl } = site.reviews;
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);
  const total = testimonials.length;

  const go = useCallback(
    (next: number) => {
      setDir(next > index || (index === total - 1 && next === 0) ? 1 : -1);
      setIndex((next + total) % total);
    },
    [index, total],
  );

  const prev = () => go(index - 1);
  const next = () => go(index + 1);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setDir(1);
      setIndex((i) => (i + 1) % total);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, total]);

  const t = testimonials[index];

  return (
    <section className="bg-blush/20 px-5 py-20 md:py-28">
      <div className="mx-auto max-w-2xl">
        <Reveal className="text-center">
          <p className="font-script text-3xl text-rose">Sweet words</p>
          <h2 className="mt-2 font-display text-4xl text-ink md:text-5xl">
            Loved by our guests
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted">
            <span className="font-display text-xl text-ink">{rating.toFixed(1)}</span>
            <Stars count={Math.round(rating)} />
            <span>· {count}+ reviews</span>
          </div>
        </Reveal>

        <Reveal className="mt-10">
          <div
            className="relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Carousel viewport */}
            <div className="relative min-h-[16rem] overflow-hidden md:min-h-[14rem]">
              <AnimatePresence custom={dir} mode="wait">
                <motion.figure
                  key={index}
                  custom={dir}
                  initial={{ opacity: 0, x: dir * 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: dir * -60 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -60) next();
                    else if (info.offset.x > 60) prev();
                  }}
                  className="absolute inset-0 flex cursor-grab flex-col items-center rounded-3xl border border-blush/40 bg-white p-8 text-center shadow-sm shadow-blush/20 active:cursor-grabbing md:p-10"
                >
                  <Quote className="text-blush" size={32} fill="currentColor" strokeWidth={0} />
                  <blockquote className="mt-4 flex-grow text-lg leading-relaxed text-ink">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <Stars count={t.stars} />
                  <figcaption className="mt-3 font-display text-lg text-rose">
                    {t.name}
                    {t.source && (
                      <span className="ml-2 align-middle text-xs font-normal uppercase tracking-wide text-muted">
                        via {t.source}
                      </span>
                    )}
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            {/* Arrows */}
            <button
              type="button"
              onClick={prev}
              aria-label="Previous review"
              className="absolute -left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-blush/50 bg-white text-rose shadow-sm transition hover:bg-rose hover:text-white md:-left-5"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next review"
              className="absolute -right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-blush/50 bg-white text-rose shadow-sm transition hover:bg-rose hover:text-white md:-right-5"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to review ${i + 1}`}
                aria-current={i === index}
                onClick={() => go(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === index ? "w-6 bg-rose" : "w-2.5 bg-blush hover:bg-rose/60"
                }`}
              />
            ))}
          </div>

          {/* Real social proof links */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={googleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-rose underline-offset-4 hover:underline"
            >
              Read all reviews on Google
            </a>
            <span className="hidden text-muted sm:inline">·</span>
            <a
              href={yelpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-rose underline-offset-4 hover:underline"
            >
              See us on Yelp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
