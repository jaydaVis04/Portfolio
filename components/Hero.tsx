'use client';

import { motion } from 'framer-motion';

const highlights = ['Security+', 'CS + Cybersecurity', 'May 2027', 'OS Teaching Assistant'];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-4 py-28 md:px-6">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 18% 18%, rgba(57,255,20,0.08), transparent 24%), radial-gradient(circle at 80% 12%, rgba(255,250,232,0.62), transparent 28%)',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="hero-shell relative z-10 mx-auto max-w-6xl px-6 py-10 md:px-10 md:py-14"
      >
        <p className="section-label mb-6">Portfolio / Jaydyn Davis</p>

        <div className="max-w-4xl">
          <h1 className="text-5xl font-display font-bold uppercase leading-[0.95] md:text-7xl lg:text-8xl" style={{ color: 'var(--cyber-primary-light)' }}>
            Secure systems, software, and threat analysis.
          </h1>

          <p className="mt-6 max-w-2xl font-mono text-base leading-8 md:text-lg" style={{ color: 'var(--cyber-primary)', opacity: 0.78 }}>
            Computer Science and Cybersecurity student focused on building, breaking, and explaining systems clearly.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {highlights.map((item) => (
            <span key={item} className="cyber-chip px-4 py-2 text-xs font-mono uppercase tracking-[0.16em]">
              {item}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex items-center justify-center border px-6 py-4 font-mono text-sm font-bold uppercase tracking-[0.18em] transition-transform hover:-translate-y-1"
            style={{ borderColor: 'var(--cyber-primary)', backgroundColor: 'var(--cyber-primary)', color: 'var(--cyber-dark)' }}
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center border px-6 py-4 font-mono text-sm font-bold uppercase tracking-[0.18em] transition-transform hover:-translate-y-1"
            style={{ borderColor: 'var(--cyber-primary)', color: 'var(--cyber-primary)' }}
          >
            Contact
          </a>
        </div>
      </motion.div>
    </section>
  );
}
