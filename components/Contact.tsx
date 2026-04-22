'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const contactMethods = [
  { label: 'Email', value: 'jaydyndavis04@gmail.com', link: 'mailto:jaydyndavis04@gmail.com' },
  { label: 'Phone', value: '631-480-0444', link: 'tel:6314800444' },
  { label: 'LinkedIn', value: 'jaydyn-davis-51b31b288', link: 'https://www.linkedin.com/in/jaydyn-davis-51b31b288' },
  { label: 'GitHub', value: 'jaydaVis04', link: 'https://github.com/jaydaVis04' },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formState.name}`);
    const body = encodeURIComponent(`${formState.message}\n\nReply to: ${formState.email}`);
    window.location.href = `mailto:jaydyndavis04@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative px-4 py-20 md:py-24"
      style={{
        background:
          'linear-gradient(180deg, rgba(57,255,20,0.02) 0%, rgba(232,220,195,0.015) 100%)',
      }}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-4">Reach Out / Internship Fit</p>
          <h2 className="mb-4 text-5xl font-display font-black neon-text md:text-7xl">
            CONTACT
          </h2>
          <div className="mb-6 h-1 w-32" style={{ backgroundColor: 'var(--cyber-primary)' }} />
          <p className="max-w-2xl font-mono text-sm leading-7" style={{ color: 'var(--cyber-primary)', opacity: 0.8 }}>
            Open to remote, hybrid, on-site, and relocation-friendly internships in security or software engineering.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="grid gap-6"
          >
            <div className="cyber-panel p-6">
              <h3 className="font-display text-2xl font-bold uppercase tracking-[0.08em]" style={{ color: 'var(--cyber-primary-light)' }}>
                Direct Channels
              </h3>
              <div className="mt-5 grid gap-3">
                {contactMethods.map((method) => (
                  <a
                    key={method.label}
                    href={method.link}
                    target={method.link.startsWith('http') ? '_blank' : undefined}
                    rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="cyber-panel flex items-center justify-between p-4 transition-transform hover:-translate-y-1"
                  >
                    <div>
                      <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em]" style={{ color: 'var(--cyber-primary)', opacity: 0.56 }}>
                        {method.label}
                      </p>
                      <p className="mt-2 font-mono text-sm" style={{ color: 'var(--cyber-primary-light)' }}>
                        {method.value}
                      </p>
                    </div>
                    <span style={{ color: 'var(--cyber-primary-light)' }}>↗</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.22 }}
            className="terminal-window overflow-hidden"
          >
            <div className="terminal-bar">
              <div className="terminal-dots">
                <span />
                <span />
                <span />
              </div>
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em]" style={{ color: 'var(--cyber-primary)', opacity: 0.62 }}>
                contact.compose
              </p>
            </div>

            <div className="p-6">
              <h3 className="font-display text-3xl font-bold uppercase tracking-[0.08em]" style={{ color: 'var(--cyber-primary-light)' }}>
                Send a Message
              </h3>
              <p className="mt-3 font-mono text-sm leading-8" style={{ color: 'var(--cyber-primary)', opacity: 0.76 }}>
                Use the form if you want to talk internships, projects, labs, or collaboration. The form opens your default mail client with the message prefilled.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div>
                  <label className="mb-2 block font-mono text-sm uppercase tracking-[0.16em]" style={{ color: 'var(--cyber-primary)' }}>
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full border bg-transparent px-4 py-3 font-mono text-sm outline-none transition-colors"
                    style={{ borderColor: 'rgba(232,220,195,0.24)', color: 'var(--cyber-primary-light)' }}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-mono text-sm uppercase tracking-[0.16em]" style={{ color: 'var(--cyber-primary)' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full border bg-transparent px-4 py-3 font-mono text-sm outline-none transition-colors"
                    style={{ borderColor: 'rgba(232,220,195,0.24)', color: 'var(--cyber-primary-light)' }}
                    placeholder="name@example.com"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-mono text-sm uppercase tracking-[0.16em]" style={{ color: 'var(--cyber-primary)' }}>
                    Message
                  </label>
                  <textarea
                    required
                    rows={7}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full resize-none border bg-transparent px-4 py-3 font-mono text-sm outline-none transition-colors"
                    style={{ borderColor: 'rgba(232,220,195,0.24)', color: 'var(--cyber-primary-light)' }}
                    placeholder="Tell me what role, team, or project you want to discuss."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-3 border px-6 py-4 font-mono text-sm font-bold uppercase tracking-[0.22em] transition-all duration-300 neon-border"
                  style={{ borderColor: 'var(--cyber-primary)', backgroundColor: 'var(--cyber-primary)', color: 'var(--cyber-dark)' }}
                >
                  Launch Message
                  <span>→</span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
