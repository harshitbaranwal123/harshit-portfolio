import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiStar, FiGitBranch, FiExternalLink } from 'react-icons/fi';
import axios from 'axios';

const USERNAME = 'harshitbaranwal123';

function LangDot({ lang }) {
  const colors = {
    JavaScript: '#F7DF1E', Java: '#B07219', Python: '#3572A5',
    HTML: '#E34C26', CSS: '#563D7C', TypeScript: '#3178C6',
    Jupyter: '#DA5B0B', Shell: '#89E051', default: '#8B949E',
  };
  return (
    <span className="flex items-center gap-1.5 text-xs text-cream/40">
      <span className="w-2.5 h-2.5 rounded-full" style={{ background: colors[lang] || colors.default }} />
      {lang}
    </span>
  );
}

export default function GitHub() {
  const [repos, setRepos] = useState([]);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [profileRes, reposRes] = await Promise.all([
          axios.get(`https://api.github.com/users/${USERNAME}`),
          axios.get(`https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=6`),
        ]);
        setProfile(profileRes.data);
        setRepos(reposRes.data.filter(r => !r.fork).slice(0, 6));
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <section id="github" ref={ref} className="py-32 px-6 bg-ink-soft/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-4 mb-4"
        >
          <div className="h-px w-12 bg-gold" />
          <span className="font-mono text-gold text-sm tracking-widest uppercase">GitHub</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl md:text-5xl text-cream mb-14"
        >
          Code speaks for itself.
        </motion.h2>

        {loading && (
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 border-2 border-gold/20 border-t-gold rounded-full animate-spin" />
          </div>
        )}

        {!loading && !error && (
          <>
            {/* Profile summary */}
            {profile && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-6 mb-10 p-6 bg-ink-soft border border-cream/5 rounded-2xl"
              >
                <div className="flex items-center gap-4">
                  <img src={profile.avatar_url} alt="GitHub avatar" className="w-12 h-12 rounded-full border-2 border-gold/30" />
                  <div>
                    <div className="font-sans font-medium text-cream/80">{profile.name || USERNAME}</div>
                    <div className="font-mono text-cream/30 text-xs">@{USERNAME}</div>
                  </div>
                </div>
                <div className="flex gap-6 items-center flex-wrap">
                  {[
                    { label: 'Repositories', value: profile.public_repos },
                    { label: 'Followers', value: profile.followers },
                    { label: 'Following', value: profile.following },
                  ].map(s => (
                    <div key={s.label}>
                      <div className="font-display text-2xl text-gold">{s.value}</div>
                      <div className="font-sans text-cream/30 text-xs">{s.label}</div>
                    </div>
                  ))}
                </div>
                <a
                  href={`https://github.com/${USERNAME}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto flex items-center gap-2 text-cream/30 hover:text-gold text-sm font-sans transition-colors"
                >
                  <FiGithub size={16} /> View Profile <FiExternalLink size={12} />
                </a>
              </motion.div>
            )}

            {/* Repos grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {repos.map((repo, i) => (
                <motion.a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.07 }}
                  whileHover={{ y: -3 }}
                  className="block p-5 bg-ink-soft border border-cream/5 rounded-2xl hover:border-gold/20 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <FiGitBranch className="text-cream/20 group-hover:text-gold/50 transition-colors" size={16} />
                    <FiExternalLink className="text-cream/10 group-hover:text-cream/40 transition-colors" size={13} />
                  </div>
                  <h4 className="font-sans font-medium text-cream/70 text-sm mb-2 group-hover:text-gold transition-colors truncate">
                    {repo.name}
                  </h4>
                  <p className="font-sans text-cream/30 text-xs leading-relaxed mb-4 clamp-lines-2">
                    {repo.description || 'No description provided.'}
                  </p>
                  <div className="flex items-center gap-4">
                    {repo.language && <LangDot lang={repo.language} />}
                    <span className="flex items-center gap-1 text-xs text-cream/30">
                      <FiStar size={11} /> {repo.stargazers_count}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </>
        )}

        {error && (
          <div className="text-center py-16 text-cream/30 font-sans text-sm">
            Unable to load GitHub data. <a href={`https://github.com/${USERNAME}`} className="text-gold hover:underline">Visit profile directly →</a>
          </div>
        )}
      </div>
    </section>
  );
}
