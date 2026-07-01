import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Journey', href: '#timeline' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className={`mx-auto max-w-6xl px-6 flex items-center justify-between rounded-2xl transition-all duration-500 ${
        scrolled ? 'bg-glass py-3 mx-4 shadow-2xl shadow-black/50' : 'py-0'
      }`}>
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gold flex items-center justify-center">
            <span className="font-display font-bold text-ink text-sm">H</span>
          </div>
          <span className="font-display text-cream/80 group-hover:text-gold transition-colors text-sm tracking-wide">
            Harshit
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-cream/50 hover:text-gold font-sans text-sm tracking-wide transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <motion.a
            href="/Harshit_Kumar_Baranwal_ATS_Resume.pdf"
            download
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-4 py-2 bg-gold text-ink font-sans font-medium text-sm rounded-lg hover:bg-gold-light transition-colors"
          >
            Resume ↓
          </motion.a>
        </div>

        {/* Mobile menu */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-cream/70 hover:text-gold transition-colors"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span className={`h-px bg-current transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-px bg-current transition-all ${open ? 'opacity-0' : ''}`} />
            <span className={`h-px bg-current transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mx-4 mt-2 bg-ink-soft border border-gold/10 rounded-2xl p-6 flex flex-col gap-4"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-cream/60 hover:text-gold font-sans text-base transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
               href="/Harshit_Kumar_Baranwal_ATS_Resume.pdf"
              download
              className="mt-2 px-4 py-2.5 bg-gold text-ink font-sans font-medium text-sm rounded-lg text-center"
            >
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
