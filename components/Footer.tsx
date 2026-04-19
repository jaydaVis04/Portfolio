'use client';

export default function Footer() {
  const navItems = ['About', 'Experience', 'Labs', 'Projects', 'Contact'];

  return (
    <footer className="relative px-4 pb-12 pt-20">
      <div className="mx-auto max-w-6xl">
        <div className="terminal-window overflow-hidden">
          <div className="terminal-bar">
            <div className="terminal-dots">
              <span />
              <span />
              <span />
            </div>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em]" style={{ color: 'var(--cyber-primary)', opacity: 0.62 }}>
              session.closeout
            </p>
          </div>

          <div className="grid gap-10 px-6 py-8 md:grid-cols-[1.1fr_0.8fr_0.9fr] md:px-8">
            <div className="space-y-4">
              <p className="section-label">Exit Node</p>
              <div>
                <h3 className="font-display text-3xl font-bold uppercase tracking-[0.08em]" style={{ color: 'var(--cyber-primary-light)' }}>
                  Jaydyn Davis
                </h3>
                <p className="mt-3 max-w-md font-mono text-sm leading-7" style={{ color: 'var(--cyber-primary)', opacity: 0.72 }}>
                  Student engineer with a bias toward learning in public, building secure systems, and understanding what breaks them.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="section-label">Navigate</p>
              <div className="grid gap-3">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="font-mono text-sm uppercase tracking-[0.18em] transition-colors hover:neon-text"
                    style={{ color: 'var(--cyber-primary)', opacity: 0.72 }}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <p className="section-label">Connect</p>
              <div className="grid gap-3">
                <a
                  href="https://github.com/jaydaVis04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-panel flex items-center justify-between p-3 transition-transform hover:-translate-y-1"
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
                  className="cyber-panel flex items-center justify-between p-3 transition-transform hover:-translate-y-1"
                >
                  <span className="font-mono text-sm uppercase tracking-[0.18em]" style={{ color: 'var(--cyber-primary)' }}>
                    LinkedIn
                  </span>
                  <span style={{ color: 'var(--cyber-primary-light)' }}>↗</span>
                </a>
                <a
                  href="mailto:jaydyndavis04@gmail.com"
                  className="cyber-panel flex items-center justify-between p-3 transition-transform hover:-translate-y-1"
                >
                  <span className="font-mono text-sm uppercase tracking-[0.18em]" style={{ color: 'var(--cyber-primary)' }}>
                    Email
                  </span>
                  <span style={{ color: 'var(--cyber-primary-light)' }}>↗</span>
                </a>
              </div>
            </div>
          </div>

          <div
            className="flex flex-col gap-3 border-t px-6 py-4 text-xs font-mono uppercase tracking-[0.16em] md:flex-row md:items-center md:justify-between md:px-8"
            style={{ borderColor: 'rgba(0,255,65,0.15)', color: 'var(--cyber-primary)', opacity: 0.58 }}
          >
            <p>© 2026 Jaydyn Davis</p>
            <p>Built with Next.js, TypeScript, Tailwind, and Framer Motion</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
