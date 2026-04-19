'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const matrixStreams = [
  '01010110\nroot@matrix\ntrace.exe\n0x7f4a\ncve-feed\nshellcode\nfork()\nptrace\nsyscall',
  'ACCESS\nGRANTED\nwatchlist\nsandbox\nwireshark\noffsets\npayload\nsegfault',
  'AUTH\nMITRE\nT1059\nT1110\nT1041\nYARA\nSigma\nIOC\nDNS',
  'secure()\nexploit()\naudit.log\nstack\nheap\nbind\nreverse\nshell',
  '101001\n101111\n001101\n010111\nmemory\nregister\nkernel\ngdb',
  'python3\nnode\nreact\nsqlite\nprisma\napi\ndocker\ngit',
];

const heroStats = [
  { label: 'Focus', value: 'Secure systems + threat analysis' },
  { label: 'Credential', value: 'CompTIA Security+' },
  { label: 'Availability', value: 'Internships + relocation' },
];

const terminalLines = [
  'init_profile --candidate jaydyn.davis',
  'load_modules soc_ops security_engineering offensive_security software_engineering',
  'scan_resume --signals leadership labs exploit_dev backend_builds',
  'status: ready for internships in security, cloud, or engineering',
];

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.15,
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 16,
        stiffness: 120,
      },
    },
  };

  return (
    <section className="relative min-h-screen overflow-hidden px-4 pb-16 pt-24 md:px-6 md:pt-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            'radial-gradient(circle at 15% 25%, rgba(0,255,65,0.18), transparent 28%), radial-gradient(circle at 85% 18%, rgba(57,255,20,0.1), transparent 18%), linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.28) 100%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-24 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,255,65,0.4), transparent)' }}
      />

      <motion.div
        className="hero-shell relative z-10 mx-auto grid max-w-7xl gap-10 px-6 py-8 md:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] md:px-10 md:py-10"
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? 'visible' : 'hidden'}
      >
        <div className="matrix-rain hidden md:grid" aria-hidden="true">
          {matrixStreams.map((stream, index) => (
            <div key={index} className="matrix-column">
              <span
                className="matrix-stream"
                style={{
                  animationDuration: `${10 + index * 1.7}s`,
                  animationDelay: `${index * -1.3}s`,
                }}
              >
                {stream.repeat(4)}
              </span>
            </div>
          ))}
        </div>

        <div className="relative z-10 flex flex-col justify-between gap-8">
          <motion.div variants={itemVariants} className="section-label">
            System Profile
          </motion.div>

          <div className="space-y-6">
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="font-mono text-sm uppercase tracking-[0.32em]" style={{ color: 'var(--cyber-primary)', opacity: 0.72 }}>
                Jaydyn Davis
              </p>
              <h1 className="max-w-4xl text-5xl font-display font-bold uppercase leading-[0.9] md:text-7xl lg:text-[6.25rem]">
                <span className="block glitch neon-text" data-text="Code. Defend.">
                  Code. Defend.
                </span>
                <span className="block" style={{ color: 'var(--cyber-primary-light)' }}>
                  Break Things Intentionally.
                </span>
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="max-w-2xl text-base leading-8 md:text-lg"
              style={{ color: 'var(--cyber-primary)', opacity: 0.86 }}
            >
              Security+ certified Computer Science and Cybersecurity student building software, studying how systems fail, and translating hands-on lab work into real detection, engineering, and offensive-security judgment.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              <span className="cyber-chip px-4 py-2 text-xs font-mono uppercase tracking-[0.24em]">Software Engineering</span>
              <span className="cyber-chip px-4 py-2 text-xs font-mono uppercase tracking-[0.24em]">Offensive Security</span>
              <span className="cyber-chip px-4 py-2 text-xs font-mono uppercase tracking-[0.24em]">Defensive Security</span>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-3 border px-6 py-4 font-mono text-sm font-bold uppercase tracking-[0.22em] transition-all duration-300 neon-border"
                style={{ borderColor: 'var(--cyber-primary)', color: 'var(--cyber-dark)', backgroundColor: 'var(--cyber-primary)' }}
              >
                Enter Projects
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 border px-6 py-4 font-mono text-sm font-bold uppercase tracking-[0.22em] transition-all duration-300"
                style={{ borderColor: 'var(--cyber-primary)', color: 'var(--cyber-primary)' }}
              >
                Open Contact Channel
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="grid gap-4 md:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="cyber-panel p-4">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em]" style={{ color: 'var(--cyber-primary)', opacity: 0.58 }}>
                  {stat.label}
                </p>
                <p className="mt-2 font-display text-lg font-bold" style={{ color: 'var(--cyber-primary-light)' }}>
                  {stat.value}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative z-10 flex flex-col gap-6">
          <motion.div variants={itemVariants} className="terminal-window">
            <div className="terminal-bar">
              <div className="terminal-dots">
                <span />
                <span />
                <span />
              </div>
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em]" style={{ color: 'var(--cyber-primary)', opacity: 0.62 }}>
                candidate.boot
              </p>
            </div>
            <div className="terminal-body space-y-3">
              {terminalLines.map((line) => (
                <div key={line} className="terminal-line">
                  <span className="terminal-prompt">&gt;</span>
                  <span>{line}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="cyber-panel p-6">
            <div className="mb-5 flex items-center justify-between">
              <p className="font-mono text-[0.72rem] uppercase tracking-[0.28em]" style={{ color: 'var(--cyber-primary)', opacity: 0.6 }}>
                Current Signal
              </p>
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: 'var(--cyber-primary-light)', boxShadow: '0 0 14px var(--glow-color)' }} />
            </div>
            <div className="space-y-4">
              <div className="border-b pb-4" style={{ borderColor: 'rgba(0,255,65,0.14)' }}>
                <p className="font-terminal text-3xl tracking-[0.08em]" style={{ color: 'var(--cyber-primary-light)' }}>
                  SEEKING INTERNSHIPS
                </p>
                <p className="mt-2 font-mono text-sm leading-7" style={{ color: 'var(--cyber-primary)', opacity: 0.76 }}>
                  Open to software engineering, security engineering, SOC, cloud security, and offensive security opportunities.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="border p-4" style={{ borderColor: 'rgba(0,255,65,0.16)' }}>
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em]" style={{ color: 'var(--cyber-primary)', opacity: 0.56 }}>
                    School
                  </p>
                  <p className="mt-2 font-display text-lg font-bold" style={{ color: 'var(--cyber-primary-light)' }}>
                    Hofstra University
                  </p>
                </div>
                <div className="border p-4" style={{ borderColor: 'rgba(0,255,65,0.16)' }}>
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em]" style={{ color: 'var(--cyber-primary)', opacity: 0.56 }}>
                    Resume Modes
                  </p>
                  <p className="mt-2 font-display text-lg font-bold" style={{ color: 'var(--cyber-primary-light)' }}>
                    Software / Blue / Red
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-4">
            <a
              href="https://github.com/jaydaVis04"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-panel flex flex-1 items-center justify-between p-4 transition-transform hover:-translate-y-1"
            >
              <span className="font-mono text-sm uppercase tracking-[0.18em]" style={{ color: 'var(--cyber-primary)' }}>
                GitHub
              </span>
              <span style={{ color: 'var(--cyber-primary-light)' }}>↗</span>
            </a>
            <a
              href="https://www.linkedin.com/in/jaydyn-davis-51b31b288"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-panel flex flex-1 items-center justify-between p-4 transition-transform hover:-translate-y-1"
            >
              <span className="font-mono text-sm uppercase tracking-[0.18em]" style={{ color: 'var(--cyber-primary)' }}>
                LinkedIn
              </span>
              <span style={{ color: 'var(--cyber-primary-light)' }}>↗</span>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
