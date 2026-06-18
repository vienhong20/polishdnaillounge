import { Star } from "lucide-react";
import Reveal from "./Reveal";
import { reviews } from "@/data/reviews";

export default function Reviews() {
  return (
    <section className="bg-blush/20 px-5 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <p className="font-script text-3xl text-rose">Sweet words</p>
          <h2 className="mt-2 font-display text-4xl text-ink md:text-5xl">
            Loved by our guests
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={(i % 2) * 0.1}>
              <figure className="h-full rounded-3xl border border-blush/40 bg-white p-7 shadow-sm shadow-blush/20">
                <div className="flex gap-0.5 text-gold">
                  {Array.from({ length: r.stars }).map((_, s) => (
                    <Star key={s} size={18} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <blockquote className="mt-4 text-ink">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 font-display text-lg text-rose">
                  {r.name}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
