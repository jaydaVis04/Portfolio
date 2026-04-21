'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const workExperience = [
  {
    title: 'Teaching Assistant, Operating Systems',
    company: 'Hofstra University',
    location: 'Hempstead, NY',
    period: 'Dr. Shan',
    description:
      'Provide academic support for Operating Systems students through one-on-one and small-group tutoring, assignment guidance, and exam review sessions. Help students break down processes, threads, CPU scheduling, synchronization, memory management, and file systems into practical problem-solving approaches.',
  },
  {
    title: 'STEM Teacher',
    company: 'Snapology',
    location: 'Westbury, NY',
    period: 'January 2024 - Present',
    description:
      'Design and lead structured robotics and engineering sessions for 100+ students, developing problem-solving, logical reasoning, and teamwork through hands-on STEM activities.',
  },
  {
    title: 'Coding Coach',
    company: 'The Coder School',
    location: 'Bellmore, NY',
    period: 'March 2023 - November 2023',
    description:
      'Delivered project-based Python and Scratch instruction for 100+ students, guiding debugging, iteration, and foundational programming habits.',
  },
];

const internshipTracks = [
  {
    title: 'SOC / Detection',
    summary:
      'Security+ certified and strongest in phishing analysis, log review, packet inspection, timeline thinking, and translating technical findings into clean incident notes.',
    skills: ['Alert triage', 'IOC analysis', 'Wireshark', 'tcpdump', 'Linux auth logs', 'Threat intel'],
  },
  {
    title: 'Security Engineering',
    summary:
      'Comfortable with secure service setup, TLS/HTTPS deployment, DNS and SSH hardening, IAM concepts, Linux administration, and infrastructure-level security controls.',
    skills: ['TLS / X.509', 'Apache', 'Bind9', 'LDAP', 'NFS', 'OpenSSH'],
  },
  {
    title: 'Offensive Security',
    summary:
      'Hands-on with exploit reproduction, shellcode analysis, format string and buffer overflow labs, protocol abuse testing, and clear remediation-oriented reporting.',
    skills: ['GDB', 'Metasploit', 'Burp Suite', 'Nmap', 'Assembly', 'Exploit dev'],
  },
  {
    title: 'Software / Backend',
    summary:
      'Built secure APIs, telemetry pipelines, automated testing, data models, and CLI workflows with a focus on structure, repeatability, and maintainable architecture.',
    skills: ['Node.js', 'TypeScript', 'Python', 'PostgreSQL', 'Prisma', 'Jest / Pytest'],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="experience"
      ref={ref}
      className="relative px-4 py-32"
      style={{
        background:
          'linear-gradient(180deg, rgba(0,255,65,0.035) 0%, rgba(0,255,65,0.01) 100%)',
      }}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-4">Experience / Internship Paths</p>
          <h2 className="mb-4 text-5xl font-display font-black neon-text md:text-7xl">
            EXPERIENCE
          </h2>
          <div className="mb-6 h-1 w-32" style={{ backgroundColor: 'var(--cyber-primary)' }} />
          <p className="max-w-3xl font-mono text-sm leading-8" style={{ color: 'var(--cyber-primary)', opacity: 0.78 }}>
            The work history shows leadership and teaching range, while the track cards below make it obvious where that experience maps into real internship roles.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
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
                leadership.timeline
              </p>
            </div>
            <div className="space-y-8 p-6">
              {workExperience.map((job, index) => (
                <div key={job.title} className="relative pl-6">
                  <div
                    className="absolute left-0 top-1 h-full w-px"
                    style={{ background: index === workExperience.length - 1 ? 'linear-gradient(180deg, rgba(0,255,65,0.28), transparent)' : 'rgba(0,255,65,0.28)' }}
                  />
                  <div
                    className="absolute left-[-5px] top-1 h-3 w-3 rounded-full"
                    style={{ backgroundColor: 'var(--cyber-primary-light)', boxShadow: '0 0 14px var(--glow-color)' }}
                  />
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em]" style={{ color: 'var(--cyber-primary)', opacity: 0.58 }}>
                    {job.period}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-bold uppercase tracking-[0.06em]" style={{ color: 'var(--cyber-primary-light)' }}>
                    {job.title}
                  </h3>
                  <p className="mt-1 font-mono text-sm" style={{ color: 'var(--cyber-primary)', opacity: 0.76 }}>
                    {job.company} • {job.location}
                  </p>
                  <p className="mt-3 font-mono text-sm leading-7" style={{ color: 'var(--cyber-primary)', opacity: 0.8 }}>
                    {job.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="grid gap-6 md:grid-cols-2"
          >
            {internshipTracks.map((track, index) => (
              <motion.div
                key={track.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.35 + index * 0.08 }}
                className="cyber-panel p-6"
              >
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em]" style={{ color: 'var(--cyber-primary)', opacity: 0.56 }}>
                  Internship lane
                </p>
                <h3 className="mt-3 font-display text-2xl font-bold uppercase tracking-[0.08em]" style={{ color: 'var(--cyber-primary-light)' }}>
                  {track.title}
                </h3>
                <p className="mt-4 font-mono text-sm leading-7" style={{ color: 'var(--cyber-primary)', opacity: 0.78 }}>
                  {track.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {track.skills.map((skill) => (
                    <span key={skill} className="cyber-chip px-3 py-2 text-xs font-mono uppercase tracking-[0.14em]">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
