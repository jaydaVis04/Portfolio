'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const profileStats = [
  { label: 'Degree', value: 'B.S. Computer Science & Cybersecurity' },
  { label: 'Expected', value: 'May 2027' },
  { label: 'Minor', value: 'Finance' },
  { label: 'GPA', value: '3.21' },
  { label: 'Certification', value: 'CompTIA Security+' },
  { label: 'Academic Role', value: 'Operating Systems TA' },
  { label: 'Location', value: 'Amityville, NY' },
];

const focusAreas = [
  {
    title: 'SOC / Detection',
    description:
      'Phishing analysis, logs, packet captures, IOC review, and incident notes.',
  },
  {
    title: 'Security Engineering',
    description:
      'TLS, DNS, SSH, Linux hardening, identity, and secure service configuration.',
  },
  {
    title: 'Offensive Security',
    description:
      'Exploit reproduction, GDB, shellcode, command injection, and low-level debugging.',
  },
  {
    title: 'Software Engineering',
    description:
      'Backend APIs, data models, testing, automation, and full-stack project work.',
  },
];

const coursework = [
  'Operating Systems',
  'Network Security',
  'Ethical Hacking',
  'Data Communications and Networking',
  'Software Engineering',
  'Database Management',
  'Data Structures and Algorithms',
  'Intro to Cryptography',
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="relative scroll-mt-20 px-4 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-4">Identity / Background</p>
          <h2 className="mb-4 text-5xl font-display font-black neon-text md:text-7xl">
            ABOUT
          </h2>
          <div className="mb-6 h-1 w-32" style={{ backgroundColor: 'var(--cyber-primary)' }} />
          <p className="max-w-2xl font-mono text-sm leading-7" style={{ color: 'var(--cyber-primary)', opacity: 0.78 }}>
            Computer Science and Cybersecurity major focused on secure systems, networking, threat analysis, and clear technical communication.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="terminal-window overflow-hidden"
          >
            <div className="terminal-bar">
              <div className="terminal-dots">
                <span />
                <span />
                <span />
              </div>
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em]" style={{ color: 'var(--cyber-primary)', opacity: 0.62 }}>
                candidate.profile
              </p>
            </div>
            <div className="grid gap-8 p-6 md:grid-cols-[1.1fr_0.9fr]">
              <div>
                <h3 className="mb-4 font-display text-2xl font-bold uppercase tracking-[0.08em]" style={{ color: 'var(--cyber-primary-light)' }}>
                  Who I Am
                </h3>
                <div className="space-y-4 font-mono text-sm leading-7" style={{ color: 'var(--cyber-primary)', opacity: 0.82 }}>
                  <p>
                    My work sits between software engineering, security operations, and offensive labs. I like understanding systems deeply enough to build them, defend them, and explain where they fail.
                  </p>
                  <p>
                    Teaching is part of that identity too. As an Operating Systems TA and STEM instructor, I practice breaking complex ideas into clear, useful explanations.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {profileStats.map((stat) => (
                  <div key={stat.label} className="cyber-panel p-4">
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em]" style={{ color: 'var(--cyber-primary)', opacity: 0.56 }}>
                      {stat.label}
                    </p>
                    <p className="mt-2 font-display text-lg font-bold" style={{ color: 'var(--cyber-primary-light)' }}>
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="grid gap-6"
          >
            <div className="cyber-panel p-6">
              <h3 className="mb-5 font-display text-2xl font-bold uppercase tracking-[0.08em]" style={{ color: 'var(--cyber-primary-light)' }}>
                Professional Lenses
              </h3>
              <div className="space-y-4">
                {focusAreas.map((area) => (
                  <div key={area.title} className="border-l pl-4" style={{ borderColor: 'rgba(0,255,65,0.18)' }}>
                    <p className="font-mono text-xs uppercase tracking-[0.22em]" style={{ color: 'var(--cyber-primary-light)' }}>
                      {area.title}
                    </p>
                    <p className="mt-2 font-mono text-sm leading-7" style={{ color: 'var(--cyber-primary)', opacity: 0.76 }}>
                      {area.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="cyber-panel p-6">
              <h3 className="mb-5 font-display text-2xl font-bold uppercase tracking-[0.08em]" style={{ color: 'var(--cyber-primary-light)' }}>
                Relevant Coursework
              </h3>
              <div className="flex flex-wrap gap-3">
                {coursework.map((course) => (
                  <span key={course} className="cyber-chip px-3 py-2 text-xs font-mono uppercase tracking-[0.14em]">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
