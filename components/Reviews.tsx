import Script from "next/script";
import { Star } from "lucide-react";
import Reveal from "./Reveal";
import { site } from "@/data/site";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex justify-center gap-1 text-gold" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={26}
          strokeWidth={0}
          fill={i < Math.round(rating) ? "currentColor" : "#e9dcd0"}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  const { rating, count, googleUrl, yelpUrl, elfsightAppId } = site.reviews;

  return (
    <section className="bg-blush/20 px-5 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <p className="font-script text-3xl text-rose">Sweet words</p>
          <h2 className="mt-2 font-display text-4xl text-ink md:text-5xl">
            Loved by our guests
          </h2>
        </Reveal>

        {elfsightAppId ? (
          // Live Google reviews via Elfsight widget.
          <Reveal className="mt-10">
            <Script
              src="https://static.elfsight.com/platform/platform.js"
              strategy="afterInteractive"
            />
            <div className={`elfsight-app-${elfsightAppId}`} data-elfsight-app-lazy />
          </Reveal>
        ) : (
          // Fallback until the Google reviews widget is connected: real rating + links.
          <Reveal className="mx-auto mt-10 max-w-md text-center">
            <div className="rounded-3xl border border-blush/40 bg-white p-8 shadow-sm shadow-blush/20">
              <p className="font-display text-5xl text-ink">{rating.toFixed(1)}</p>
              <div className="mt-3">
                <Stars rating={rating} />
              </div>
              <p className="mt-3 text-sm text-muted">
                Based on {count}+ reviews from our guests
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <a
                  href={googleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-rose px-6 py-3 font-medium text-white transition hover:bg-rose/90"
                >
                  Read our Google reviews
                </a>
                <a
                  href={yelpUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-rose/40 bg-white px-6 py-3 font-medium text-rose transition hover:bg-rose hover:text-white"
                >
                  See us on Yelp
                </a>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
