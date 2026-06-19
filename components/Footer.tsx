import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-cream px-5 pt-8 pb-28 md:pb-8">
      <p className="text-center text-xs text-muted">
        © 2026 {site.name} · North Miami, FL · Powered by EezyMarketing.
      </p>
    </footer>
  );
}
