import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight } from 'react-icons/fi';
import { SiWhatsapp } from 'react-icons/si';

const contactLinks = [
  { icon: FiMail, label: 'Email', value: 'harshitbaranwal116@gmail.com', href: 'mailto:harshitbaranwal116@gmail.com', color: '#C9A84C' },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/harshit-kumar-baranwal-8087b9329', href: 'https://www.linkedin.com/in/harshit-kumar-baranwal-8087b9329/', color: '#0A66C2' },
  { icon: FiGithub, label: 'GitHub', value: 'github.com/harshitbaranwal123', href: 'https://github.com/harshitbaranwal123', color: '#7A9E7E' },
  { icon: SiWhatsapp, label: 'WhatsApp', value: 'Quick Chat', href: 'https://wa.me/918409805043', color: '#25D366' },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" ref={ref} className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-4 mb-4"
        >
          <div className="h-px w-12 bg-gold" />
          <span className="font-mono text-gold text-sm tracking-widest uppercase">Contact</span>
        </motion.div>

        {/* Big headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.1 }}
          className="font-display text-5xl md:text-6xl lg:text-7xl text-cream leading-tight mb-6"
        >
          Let's Build
          <br />
          <span className="italic text-gold">Something</span>
          <br />
          Meaningful.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="font-sans text-cream/40 text-lg max-w-lg mb-16 leading-relaxed"
        >
          I'm actively seeking internship opportunities where I can contribute, learn, and grow.
          Whether you have a role, a project, or just want to talk tech — I'd love to hear from you.
        </motion.p>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 gap-4 mb-16">
          {contactLinks.map((link, i) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="group flex items-center gap-4 p-5 bg-ink-soft border border-cream/5 rounded-2xl hover:border-cream/15 transition-all duration-300 relative overflow-hidden"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity"
                  style={{ background: link.color }}
                />
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${link.color}15`, color: link.color }}
                >
                  <Icon size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-sans text-cream/30 text-xs uppercase tracking-widest mb-0.5">{link.label}</div>
                  <div className="font-sans text-cream/70 text-sm truncate group-hover:text-cream transition-colors">
                    {link.value}
                  </div>
                </div>
                <FiArrowUpRight
                  className="text-cream/10 group-hover:text-cream/50 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  size={16}
                />
              </motion.a>
            );
          })}
        </div>

        {/* Direct email CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center"
        >
          <p className="font-sans text-cream/20 text-sm mb-4">Or reach out directly</p>
          <motion.a
            href="mailto:harshitbaranwal116@gmail.com"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-ink font-sans font-semibold rounded-2xl text-base hover:bg-gold-light transition-colors shadow-xl shadow-gold/20"
          >
            <FiMail size={18} />
            harshitbaranwal116@gmail.com
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
