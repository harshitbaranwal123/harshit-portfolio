import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowRight, FiX } from 'react-icons/fi';
import { projects } from '../data';

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-ink/90 backdrop-blur-md" />
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ type: 'spring', damping: 25 }}
        className="relative max-w-3xl w-full bg-ink-soft border border-cream/10 rounded-3xl p-8 md:p-10 overflow-y-auto max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-cream/30 hover:text-cream transition-colors"
        >
          <FiX size={20} />
        </button>

        {/* Header */}
        <div className="mb-8">
          <span className="font-mono text-xs text-gold/60 uppercase tracking-widest">{project.category} · {project.year}</span>
          <h3 className="font-display text-3xl md:text-4xl text-cream mt-2 mb-2">{project.title}</h3>
          <p className="font-sans text-cream/50 italic text-lg">{project.tagline}</p>
          <div className="mt-3 flex items-center gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-mono border ${
              project.status === 'In Progress'
                ? 'border-sage/30 text-sage bg-sage/5'
                : 'border-gold/30 text-gold bg-gold/5'
            }`}>
              {project.status}
            </span>
          </div>
        </div>

        {/* Sections */}
        {[
          { title: '🔍 The Problem', content: project.problem },
          { title: '💡 The Solution', content: project.solution },
          { title: '📚 Lessons Learned', content: project.lessons },
        ].map(sec => (
          <div key={sec.title} className="mb-6 p-5 bg-ink/60 rounded-2xl border border-cream/5">
            <h4 className="font-sans font-semibold text-cream/70 text-sm mb-2">{sec.title}</h4>
            <p className="font-sans text-cream/50 text-sm leading-relaxed">{sec.content}</p>
          </div>
        ))}

        {/* Architecture */}
        <div className="mb-6">
          <h4 className="font-sans font-semibold text-cream/50 text-xs uppercase tracking-widest mb-3">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {project.architecture.map(tech => (
              <span key={tech} className="px-3 py-1.5 bg-gold/10 text-gold font-mono text-xs rounded-lg border border-gold/20">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="mb-8">
          <h4 className="font-sans font-semibold text-cream/50 text-xs uppercase tracking-widest mb-3">Key Results</h4>
          <div className="grid grid-cols-2 gap-2">
            {project.results.map(r => (
              <div key={r} className="flex items-start gap-2 text-sm text-cream/50">
                <span className="text-gold mt-0.5">→</span>
                {r}
              </div>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-gold text-ink font-sans font-semibold text-sm rounded-xl hover:bg-gold-light transition-colors"
          >
            <FiGithub size={15} /> View Code
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 border border-cream/20 text-cream/60 font-sans text-sm rounded-xl hover:border-gold/30 hover:text-gold transition-all"
            >
              <FiExternalLink size={15} /> Live Demo
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ project, index, onClick }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      onClick={() => onClick(project)}
      className="group cursor-pointer p-7 bg-ink-soft border border-cream/5 rounded-3xl hover:border-gold/20 transition-all duration-500 hover:shadow-2xl hover:shadow-gold/5 hover:-translate-y-1 relative overflow-hidden"
    >
      {/* Gradient accent */}
      <div
        className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"
        style={{ background: project.color }}
      />

      <div className="flex items-start justify-between mb-5">
        <div>
          <span className="font-mono text-xs text-cream/30 uppercase tracking-widest">{project.category}</span>
          <h3 className="font-display text-xl md:text-2xl text-cream mt-1 group-hover:text-gold transition-colors">
            {project.title}
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono border ${
            project.status === 'In Progress'
              ? 'border-sage/30 text-sage'
              : 'border-cream/10 text-cream/30'
          }`}>
            {project.status}
          </span>
          <span className="text-cream/20 font-mono text-xs">{project.year}</span>
        </div>
      </div>

      <p className="font-sans text-cream/50 text-sm italic mb-5 leading-relaxed">{project.tagline}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.architecture.slice(0, 4).map(tech => (
          <span key={tech} className="px-2.5 py-1 bg-ink border border-cream/8 text-cream/40 font-mono text-xs rounded-lg">
            {tech}
          </span>
        ))}
        {project.architecture.length > 4 && (
          <span className="px-2.5 py-1 bg-ink border border-cream/8 text-cream/30 font-mono text-xs rounded-lg">
            +{project.architecture.length - 4} more
          </span>
        )}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-gold/60 group-hover:text-gold transition-colors text-sm font-sans font-medium">
          View Case Study
          <motion.span
            className="inline-block"
            animate={{ x: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <FiArrowRight size={14} />
          </motion.span>
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={e => e.stopPropagation()}
          className="text-cream/20 hover:text-cream/60 transition-colors"
        >
          <FiGithub size={16} />
        </a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="projects" ref={ref} className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-4"
        >
          <div className="h-px w-12 bg-gold" />
          <span className="font-mono text-gold text-sm tracking-widest uppercase">Selected Work</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl text-cream mb-4"
        >
          Projects that{' '}
          <span className="italic text-gold">matter.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-sans text-cream/40 text-base mb-14 max-w-xl"
        >
          Each project is a case study — a problem, a solution, and what I learned.
          Click any card to explore the full story.
        </motion.p>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onClick={setSelected} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/harshitbaranwal123"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cream/40 hover:text-gold font-sans text-sm transition-colors"
          >
            <FiGithub size={16} />
            See all projects on GitHub
            <FiArrowRight size={14} />
          </a>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
