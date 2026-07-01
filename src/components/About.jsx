import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: "5+", label: "Projects Built" },
  { value: "5+", label: "Years in Design" },
  { value: "5+", label: "Technologies" },
  { value: "∞", label: "Curiosity" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="h-px w-12 bg-gold" />
          <span className="font-mono text-gold text-sm tracking-widest uppercase">About</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Story */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl text-cream mb-8 leading-tight"
            >
              I started with{' '}
              <span className="italic text-gold">pixels</span>,
              <br />ended up with{' '}
              <span className="italic text-sage">products.</span>
            </motion.h2>

            {[
              "My journey began with graphic design — late nights with Photoshop, learning how every pixel carries meaning. Design taught me that visual communication is emotional, not just aesthetic.",
              "Then came Economics. That degree taught me something more valuable than design tools: systems thinking. How parts connect to form wholes. How decisions cascade. How context shapes everything.",
              "When I discovered code, something clicked. Here was a medium that combined both: the creativity of design and the logical architecture of systems. I wasn't switching careers — I was completing one.",
              "Today I build software that I believe should feel like art — purposeful, refined, and human. I'm seeking an internship where I can bring this unusual combination of skills to real problems.",
            ].map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.1 }}
                className="font-sans text-cream/60 text-base leading-relaxed mb-4"
              >
                {para}
              </motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {["Creative Thinking", "Systems Design", "Full-Stack Dev", "Data Analytics", "AI"].map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1.5 border border-gold/20 text-gold/70 font-mono text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: Stats + Visual */}
          <div className="space-y-6">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="p-6 bg-ink-soft border border-cream/5 rounded-2xl hover:border-gold/20 transition-colors group"
                >
                  <div className="font-display text-4xl text-gold mb-1 group-hover:scale-110 transition-transform inline-block">
                    {s.value}
                  </div>
                  <div className="font-sans text-cream/40 text-sm">{s.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Quote card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="p-6 bg-gold/5 border border-gold/15 rounded-2xl"
            >
              <div className="font-display text-gold/40 text-6xl leading-none mb-2">"</div>
              <p className="font-display italic text-cream/70 text-lg leading-relaxed">
                Design is not just what it looks like and feels like. Design is how it works.
              </p>
              <p className="font-sans text-cream/30 text-sm mt-3">— Steve Jobs</p>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="p-6 bg-ink-soft border border-cream/5 rounded-2xl space-y-4"
            >
              <h4 className="font-sans text-cream/40 text-xs uppercase tracking-widest">Education</h4>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gold rounded-full mt-1.5 flex-shrink-0" />
                <div>
                  <div className="font-sans text-cream/80 text-sm font-medium">MCA — Master of Computer Applications</div>
                  <div className="font-sans text-cream/40 text-xs">Completed · 2024–2026</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-sage rounded-full mt-1.5 flex-shrink-0" />
                <div>
                  <div className="font-sans text-cream/80 text-sm font-medium">B.A. Economics</div>
                  <div className="font-sans text-cream/40 text-xs">Completed · 2021–2024</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
