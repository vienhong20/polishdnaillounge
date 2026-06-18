"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { pricing } from "@/data/pricing";
import { displayPrice, type PayMode } from "@/lib/price";
import PriceToggle from "./PriceToggle";

// Rotating pastel tints for category headers.
const tints = ["bg-blush/50", "bg-peach", "bg-blush/30", "bg-peach/70", "bg-blush/40"];

export default function Pricing() {
  const [mode, setMode] = useState<PayMode>("cash");
  const [open, setOpen] = useState<number>(0);

  return (
    <section id="services" className="bg-cream px-5 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="font-script text-3xl text-rose">The menu</p>
          <h2 className="mt-2 font-display text-4xl text-ink md:text-5xl">
            Our Services & Pricing
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-muted">
            Prices shown in cash. Card payments are subject to a 2% surcharge.
          </p>
          <div className="mt-6 flex justify-center">
            <PriceToggle mode={mode} onChange={setMode} />
          </div>
        </div>

        <div className="mt-12 space-y-5 md:columns-2 md:gap-5 md:space-y-0">
          {pricing.map((cat, i) => {
            const isOpen = open === i;
            return (
              <div
                key={cat.title}
                className="overflow-hidden rounded-3xl border border-blush/40 bg-white shadow-sm shadow-blush/20 md:mb-5 md:break-inside-avoid"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className={`flex w-full items-center justify-between gap-3 px-6 py-4 text-left md:cursor-default ${tints[i % tints.length]}`}
                >
                  <span className="font-display text-xl text-ink">{cat.title}</span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-rose transition-transform md:hidden ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out md:grid-rows-[1fr] ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 py-3">
                      {cat.groups.map((group, gi) => (
                        <div key={gi} className={gi > 0 ? "mt-5" : ""}>
                          {group.label && (
                            <p className="pb-1 pt-1 text-xs font-semibold uppercase tracking-wider text-gold">
                              {group.label}
                            </p>
                          )}
                          <ul className="divide-y divide-blush/20">
                            {group.services.map((s) => (
                              <li
                                key={`${s.name}-${s.note ?? ""}`}
                                className="flex items-center justify-between gap-4 py-3"
                              >
                                <span className="text-sm text-ink">
                                  {s.name}
                                  {s.note && (
                                    <span className="ml-1 italic text-muted">
                                      ({s.note})
                                    </span>
                                  )}
                                </span>
                                <span className="shrink-0 rounded-full bg-peach/60 px-3 py-1 text-sm font-semibold text-ink">
                                  {displayPrice(s.price, mode)}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
