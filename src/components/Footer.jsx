export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-cream/5">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded bg-gold flex items-center justify-center">
            <span className="font-display font-bold text-ink text-xs">H</span>
          </div>
          <span className="font-display text-cream/40 text-sm">Harshit Kumar Baranwal</span>
        </div>

        <p className="font-sans text-cream/20 text-xs text-center">
         ⭐ Designed & built with intentionality · HKB · India · {new Date().getFullYear()}
        </p>

        <div className="flex items-center gap-1 font-mono text-cream/20 text-xs">
          <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
          <span>Open to opportunities</span>
        </div>
      </div>
    </footer>
  );
}
