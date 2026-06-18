"use client";

import type { PayMode } from "@/lib/price";

type Props = {
  mode: PayMode;
  onChange: (mode: PayMode) => void;
};

const options: { value: PayMode; label: string }[] = [
  { value: "cash", label: "Cash" },
  { value: "card", label: "Card +2%" },
];

export default function PriceToggle({ mode, onChange }: Props) {
  return (
    <div
      role="group"
      aria-label="Payment method"
      className="inline-flex rounded-full border border-blush/60 bg-white p-1"
    >
      {options.map((o) => {
        const active = mode === o.value;
        return (
          <button
            key={o.value}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(o.value)}
            className={`cursor-pointer rounded-full px-5 py-2 text-sm font-medium transition ${
              active
                ? "bg-rose text-white shadow-sm"
                : "text-muted hover:text-rose"
            }`}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
