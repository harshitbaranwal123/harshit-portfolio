import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { timeline } from '../data';

const typeColors = {
  design: '#C9A84C',
  education: '#7A9E7E',
  pivot: '#E8C878',
  growth: '#9DB89F',
  current: '#C9A84C',
};

const typeLabels = {
  design: '🎨 Design',
  education: '🎓 Education',
  pivot: '⚡ Pivot',
  growth: '📈 Growth',
  current: '🚀 Current',
};

export default function Timeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ['0%', '100%']);

  return (
    <section id="timeline" ref={ref} className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-4"
        >
          <div className="h-px w-12 bg-gold" />
          <span className="font-mono text-gold text-sm tracking-widest uppercase">Journey</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl text-cream mb-16"
        >
          The story so far.
        </motion.h2>

        <div className="relative">
          {/* Animated line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-cream/5 overflow-hidden">
            <motion.div
              className="w-full bg-gold origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Timeline items */}
          <div className="space-y-12 pl-16">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                className="relative group"
              >
                {/* Dot */}
                <div
                  className="absolute -left-[46px] top-1 w-3 h-3 rounded-full border-2 border-current transition-all duration-300 group-hover:scale-150"
                  style={{ color: typeColors[item.type], backgroundColor: item.type === 'current' ? typeColors[item.type] : 'transparent', borderColor: typeColors[item.type] }}
                />

                <div className="p-6 bg-ink-soft border border-cream/5 rounded-2xl hover:border-gold/15 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <span
                        className="font-mono text-2xl font-medium"
                        style={{ color: typeColors[item.type] }}
                      >
                        {item.year}
                      </span>
                      <h3 className="font-display text-xl text-cream mt-0.5">{item.title}</h3>
                    </div>
                    <span
                      className="px-3 py-1 rounded-full text-xs font-mono border"
                      style={{ color: typeColors[item.type], borderColor: `${typeColors[item.type]}40` }}
                    >
                      {typeLabels[item.type]}
                    </span>
                  </div>
                  <p className="font-sans text-cream/50 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
