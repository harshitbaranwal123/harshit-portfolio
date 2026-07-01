import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';
import { SiWhatsapp } from 'react-icons/si';
import profileImage from '../assets/Hero.png';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6">
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gold/4 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-sage/4 blur-[100px]" />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(201,168,76,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.5) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <motion.div style={{ y, opacity }} className="max-w-7xl mx-auto w-full pt-32 pb-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 border border-gold/30 rounded-full mb-8 bg-gold/5"
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-cream/70 font-sans text-sm">Open to Internship Opportunities</span>
        </motion.div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column: Text content */}
          <div className="order-2 lg:order-1">
            {/* Main headline */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
              {["From Graphic", "Design to Software", "Development."].map((line, li) => (
                <motion.span
                  key={li}
                  className="block overflow-hidden"
                >
                  <motion.span
                    className={`block ${li === 1 ? 'italic text-gold' : 'text-cream'}`}
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.3 + li * 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {line}
                  </motion.span>
                </motion.span>
              ))}
            </h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className="font-sans text-cream/50 text-lg md:text-xl max-w-xl mb-12 leading-relaxed"
            >
              Building products where creativity meets code.
              <br />
              <span className="text-sm text-cream/30">MCA Student · Developer · Designer · Patna, India</span>
            </motion.p>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.7 }}
              className="flex flex-wrap items-center gap-4 mb-16"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3.5 bg-gold text-ink font-sans font-semibold rounded-xl text-sm hover:bg-gold-light transition-colors shadow-lg shadow-gold/20"
              >
                View My Work
              </motion.a>
              <motion.a
                href="./Harshit_Kumar_Baranwal_ATS_Resume.pdf"
                download
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3.5 border border-cream/20 text-cream/70 font-sans font-medium rounded-xl text-sm hover:border-gold/40 hover:text-gold transition-all"
              >
                Download Resume ↓
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.7 }}
              className="flex items-center gap-6"
            >
              {[
                { icon: FiGithub, href: "https://github.com/harshitbaranwal123", label: "GitHub" },
                { icon: FiLinkedin, href: "https://www.linkedin.com/in/harshit-kumar-baranwal-8087b9329/", label: "LinkedIn" },
                { icon: FiMail, href: "mailto:harshitbaranwal116@gmail.com", label: "Email" },
                { icon: SiWhatsapp, href: "https://wa.me/8409805043", label: "WhatsApp" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/30 hover:text-gold transition-colors duration-300"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
              <div className="h-px flex-1 max-w-24 bg-cream/10" />
              <span className="text-cream/20 font-mono text-xs">Harshit Kumar Baranwal</span>
            </motion.div>
          </div>

          {/* Right column: Profile photo */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            {/* Profile frame container */}
            <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md group">
              {/* Glassmorphic background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-gold/5 rounded-2xl lg:rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Soft golden glow layer */}
              <div className="absolute -inset-1 lg:-inset-1.5 bg-gradient-to-br from-gold/40 via-gold/20 to-transparent rounded-2xl lg:rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none" />

              {/* Main image container with glassmorphism border */}
              <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl border-2 border-gold/40 backdrop-blur-md bg-gradient-to-br from-gold/15 via-cream/5 to-gold/10 shadow-2xl shadow-gold/20 group-hover:shadow-gold/30 transition-all duration-500">
                {/* Image wrapper */}
                <div className="relative overflow-hidden rounded-xl lg:rounded-2xl aspect-[3/4] lg:aspect-auto">
                  <motion.img
                    src={profileImage}
                    alt="Harshit - Professional portrait"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  />

                  {/* Subtle overlay for additional premium feel */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/10 pointer-events-none" />

                  {/* Golden accent border effect on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-xl lg:rounded-2xl border border-gold/0 group-hover:border-gold/40 pointer-events-none transition-colors duration-500"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </div>

                {/* Premium shine effect */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 via-white/5 to-transparent pointer-events-none rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </div>

              {/* Bottom accent line */}
              <motion.div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-gold to-transparent rounded-full"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 0.5, scaleX: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <FiArrowDown className="text-cream/20" size={16} />
        </motion.div>
      </motion.div>

      {/* Right side decoration */}
      <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-col gap-4 items-center"
        >
          {["01", "02", "03", "04", "05"].map((n, i) => (
            <motion.div
              key={n}
              className="w-px bg-cream/10"
              style={{ height: i === 2 ? '48px' : '16px' }}
              animate={{ scaleY: i === 2 ? [1, 1.5, 1] : 1 }}
              transition={{ repeat: Infinity, duration: 2, delay: i * 0.2 }}
            />
          ))}
          <span className="font-mono text-xs text-cream/20 writing-mode-vertical" style={{ writingMode: 'vertical-rl' }}>
            SCROLL TO EXPLORE
          </span>
        </motion.div>
      </div>
    </section>
  );
}
