'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

type GitHubRepo = {
  html_url: string;
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
};

const featuredProjects = [
  {
    title: 'Phishing Analysis Pipeline',
    subtitle: 'Rodman project / phishing investigation workflow',
    description:
      'Built a phishing-analysis pipeline that checks suspicious URLs across an AI-based typosquat classifier, Google Safe Browsing, VirusTotal, and a disposable VM sandbox.',
    details: [
      'Provisioned a fresh Multipass VM per run and deployed a lightweight analyzer inside the sandbox.',
      'Inspected redirects, content patterns, and TLS metadata before producing a risk verdict.',
      'Aggregated all signals into a unified JSON report with parallel execution and strong sandbox-flow test coverage.',
    ],
    tech: ['Python', 'Multipass', 'Google Safe Browsing', 'VirusTotal', 'TLS metadata'],
    link: 'https://github.com/jaydaVis04?tab=repositories',
  },
  {
    title: 'SecPipe',
    subtitle: 'Security telemetry pipeline / detection engineering',
    description:
      'Built a Python-based security telemetry pipeline that ingests multi-source logs, normalizes events into a common schema, and runs rule-based detections mapped to MITRE ATT&CK.',
    details: [
      'Implemented detections for brute force, password spraying, persistence, privilege escalation, and defense evasion.',
      'Exported findings to JSONL, SQLite, Markdown, and webhook outputs through a CLI workflow.',
      'Designed a plugin-style parser / detection / output registry architecture with type hints, pytest coverage, and GitHub Actions CI.',
    ],
    tech: ['Python', 'MITRE ATT&CK', 'SQLite', 'Pytest', 'GitHub Actions', 'JSONL'],
    link: 'https://github.com/jaydaVis04?tab=repositories',
  },
  {
    title: 'jLedger',
    subtitle: 'Secure backend / financial data integrity',
    description:
      'Built a secure personal finance ledger with a TypeScript Node.js Express API, PostgreSQL, Prisma, JWT auth, refresh token rotation, and RBAC.',
    details: [
      'Used HttpOnly cookies for refresh token rotation and enforced an append-only ledger model at the database level.',
      'Derived balances from transaction line items instead of mutating state directly, improving traceability.',
      'Backed core flows with Jest and Supertest integration tests to catch auth and ledger regressions.',
    ],
    tech: ['TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Jest'],
    link: 'https://github.com/jaydaVis04?tab=repositories',
  },
];

const supportingProjects = [
  {
    title: 'Student Management System',
    lane: 'C++ / Data systems',
    summary:
      'C++ application for teacher-managed student records with planned frontend support, authentication, secure file handling, MySQL storage, and unique student ID generation.',
  },
  {
    title: 'My Todo App',
    lane: 'Frontend / UX',
    summary:
      'Responsive task manager built with Svelte, Ionic-Svelte, HTML, and CSS, including task creation, toggling, keyboard shortcuts, dark mode, gradients, and animation polish.',
  },
  {
    title: 'Web Data Extractor',
    lane: 'Backend / Automation',
    summary:
      'Python crawler that traverses user-supplied URLs, extracts names, emails, courses, and other targets, and reports both the data and where it was found.',
  },
  {
    title: 'Word Transformation and Analysis Tool',
    lane: 'C++ / Data structures',
    summary:
      'C++ word transformation tool built with stacks, queues, vectors, hashmaps, and robust file error handling.',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [repos, setRepos] = useState<GitHubRepo[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/jaydaVis04/repos?sort=updated&per_page=6')
      .then((res) => res.json())
      .then((data) => setRepos(data))
      .catch(() => {});
  }, []);

  return (
    <section id="projects" ref={ref} className="relative px-4 py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-4">Case Studies / Build Log</p>
          <h2 className="mb-4 text-5xl font-display font-black neon-text md:text-7xl">
            PROJECTS
          </h2>
          <div className="mb-6 h-1 w-32" style={{ backgroundColor: 'var(--cyber-primary)' }} />
          <p className="max-w-3xl font-mono text-sm leading-8" style={{ color: 'var(--cyber-primary)', opacity: 0.78 }}>
            These are the projects that best represent how I think: collect signals, structure systems cleanly, test the right failure cases, and ship outputs that are useful to other people.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-6">
            {featuredProjects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.08 }}
                className="terminal-window overflow-hidden transition-transform hover:-translate-y-1"
              >
                <div className="terminal-bar">
                  <div className="terminal-dots">
                    <span />
                    <span />
                    <span />
                  </div>
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em]" style={{ color: 'var(--cyber-primary)', opacity: 0.62 }}>
                    case-study-{index + 1}
                  </p>
                </div>
                <div className="space-y-6 p-6">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em]" style={{ color: 'var(--cyber-primary)', opacity: 0.56 }}>
                        {project.subtitle}
                      </p>
                      <h3 className="mt-2 font-display text-3xl font-bold uppercase tracking-[0.06em]" style={{ color: 'var(--cyber-primary-light)' }}>
                        {project.title}
                      </h3>
                    </div>
                    <span className="cyber-chip px-3 py-2 text-xs font-mono uppercase tracking-[0.16em]">
                      View Repo
                    </span>
                  </div>

                  <p className="font-mono text-sm leading-8" style={{ color: 'var(--cyber-primary)', opacity: 0.82 }}>
                    {project.description}
                  </p>

                  <div className="grid gap-3">
                    {project.details.map((detail) => (
                      <div key={detail} className="terminal-line">
                        <span className="terminal-prompt">&gt;</span>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span key={item} className="cyber-chip px-3 py-2 text-xs font-mono uppercase tracking-[0.14em]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="grid gap-6">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.25 }}
              className="cyber-panel p-6"
            >
              <h3 className="font-display text-2xl font-bold uppercase tracking-[0.08em]" style={{ color: 'var(--cyber-primary-light)' }}>
                Supporting Work
              </h3>
              <div className="mt-5 space-y-5">
                {supportingProjects.map((project) => (
                  <div key={project.title} className="border-l pl-4" style={{ borderColor: 'rgba(0,255,65,0.16)' }}>
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em]" style={{ color: 'var(--cyber-primary)', opacity: 0.56 }}>
                      {project.lane}
                    </p>
                    <p className="mt-2 font-display text-xl font-bold" style={{ color: 'var(--cyber-primary-light)' }}>
                      {project.title}
                    </p>
                    <p className="mt-2 font-mono text-sm leading-7" style={{ color: 'var(--cyber-primary)', opacity: 0.78 }}>
                      {project.summary}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.35 }}
              className="cyber-panel p-6"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-display text-2xl font-bold uppercase tracking-[0.08em]" style={{ color: 'var(--cyber-primary-light)' }}>
                  GitHub Activity
                </h3>
                <a
                  href="https://github.com/jaydaVis04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs uppercase tracking-[0.18em]"
                  style={{ color: 'var(--cyber-primary)' }}
                >
                  View all ↗
                </a>
              </div>
              <div className="mt-5 grid gap-4">
                {repos.slice(0, 6).map((repo) => (
                  <a
                    key={repo.name}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border p-4 transition-colors hover:bg-white/[0.02]"
                    style={{ borderColor: 'rgba(0,255,65,0.16)' }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-display text-lg font-bold" style={{ color: 'var(--cyber-primary-light)' }}>
                          {repo.name}
                        </p>
                        <p className="mt-2 font-mono text-sm leading-7" style={{ color: 'var(--cyber-primary)', opacity: 0.74 }}>
                          {repo.description || 'No description available.'}
                        </p>
                      </div>
                      <span className="font-mono text-xs uppercase tracking-[0.16em]" style={{ color: 'var(--cyber-primary)', opacity: 0.54 }}>
                        {repo.language || 'Code'}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
