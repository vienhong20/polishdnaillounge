import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
};

// Editorial section heading: tracked uppercase eyebrow flanked by accent rules,
// a refined serif title, and an optional subtitle. Used across every section.
export default function SectionHeading({ eyebrow, title, subtitle, className = "" }: Props) {
  return (
    <Reveal className={`mx-auto max-w-2xl text-center ${className}`}>
      <div className="flex items-center justify-center gap-3">
        <span className="h-px w-8 bg-gradient-to-r from-transparent to-rose/70" />
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-rose">
          {eyebrow}
        </span>
        <span className="h-px w-8 bg-gradient-to-l from-transparent to-rose/70" />
      </div>
      <h2 className="mt-4 text-balance font-display text-4xl tracking-tight text-ink md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-md text-pretty text-muted">{subtitle}</p>
      )}
    </Reveal>
  );
}
