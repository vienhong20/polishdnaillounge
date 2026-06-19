import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
};

// Editorial section heading: minimal tracked eyebrow with a dot marker,
// a large refined serif title, and an optional subtitle. Used across every section.
export default function SectionHeading({ eyebrow, title, subtitle, className = "" }: Props) {
  return (
    <Reveal className={`mx-auto max-w-2xl text-center ${className}`}>
      <span className="inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-rose">
        <span className="h-1.5 w-1.5 rounded-full bg-rose" />
        {eyebrow}
      </span>
      <h2 className="mt-5 text-balance font-display text-4xl font-medium leading-[1.08] tracking-[-0.02em] text-ink md:text-[3.25rem]">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-5 max-w-md text-pretty leading-relaxed text-muted">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
