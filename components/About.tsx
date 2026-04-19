'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const profileStats = [
  { label: 'Degree', value: 'B.S. Computer Science & Cybersecurity' },
  { label: 'Expected', value: 'May 2027' },
  { label: 'Minor', value: 'Finance' },
  { label: 'GPA', value: '3.21' },
  { label: 'Certification', value: 'CompTIA Security+' },
  { label: 'Location', value: 'Amityville, NY' },
];

const focusAreas = [
  {
    title: 'SOC / Detection',
    description:
      'Focused on phishing investigation, packet capture analysis, alert triage, IOC review, Linux auth logs, and documentation that can actually support incident workflows.',
  },
  {
    title: 'Security Engineering',
    description:
      'Strongest in secure service configuration, TLS deployment, DNS and SSH hardening, Linux administration, and building systems that encode security controls instead of describing them.',
  },
  {
    title: 'Offensive Security',
    description:
      'Hands-on exploit development and low-level debugging work across buffer overflows, shellcode inspection, GDB analysis, command injection, replay attacks, and Metasploit-driven validation.',
  },
  {
    title: 'Software Engineering',
    description:
      'Backend-heavy engineering work in TypeScript, Node.js, Python, PostgreSQL, testing, automation, and API design, with growing frontend work in Next.js, Svelte, and Ionic.',
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
    <section id="about" ref={ref} className="relative scroll-mt-20 px-4 py-32">
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
          <p className="max-w-3xl font-mono text-sm leading-8" style={{ color: 'var(--cyber-primary)', opacity: 0.8 }}>
            Computer Science and Cybersecurity major with a minor in Finance, focused on secure systems, networking, threat analysis, and practical security engineering. My coursework and labs emphasize operating systems, network security, ethical hacking, databases, and applied cybersecurity, with a strong bias toward turning technical findings into clear documentation and useful recommendations.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
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
                <div className="space-y-4 font-mono text-sm leading-8" style={{ color: 'var(--cyber-primary)', opacity: 0.82 }}>
                  <p>
                    I care most about the intersection between how systems are built and how they fail. That is why my work keeps crossing between backend engineering, secure configuration, incident-style analysis, and offensive labs.
                  </p>
                  <p>
                    The teaching and mentorship roles matter here too. They forced me to explain technical ideas clearly, structure information, and stay patient while debugging with other people, which translates directly into better engineering and better security documentation.
                  </p>
                  <p>
                    I am not trying to look like I only fit one internship lane. The portfolio now reflects the truth more accurately: I can contribute in SOC-oriented roles, security engineering, backend engineering, cloud security, and offensive security environments depending on the team.
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
