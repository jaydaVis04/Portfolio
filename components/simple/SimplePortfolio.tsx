const focusAreas = [
  'Reverse engineering and disassembly',
  'Vulnerability research and controlled exploit reproduction',
  'C/C++ debugging and low-level program analysis',
  'x86/x64 assembly and architecture fundamentals',
  'Embedded systems and microcontroller concepts',
  'Security telemetry and detection engineering',
];

const projects = [
  {
    name: 'Low-Level Vulnerability Research Portfolio',
    focus: 'Reverse engineering, memory corruption, debugging, and vulnerability validation in authorized lab environments.',
    points: ['GDB, Ghidra, Immunity Debugger', 'Stack, heap, shellcode, and format-string labs', 'Root-cause and mitigation documentation'],
  },
  {
    name: 'SecPipe Security Telemetry Pipeline',
    focus: 'Python telemetry pipeline for normalized logs, detection logic, MITRE ATT&CK mapping, and repeatable analysis.',
    points: ['Linux auth, Nginx, syslog, JSON parsing', 'Brute force, spraying, persistence, and evasion detections', 'JSONL, SQLite, Markdown, webhook, pytest, CI'],
    href: 'https://github.com/jaydaVis04/secpipe',
  },
  {
    name: 'Phishing Analysis Pipeline',
    focus: 'Isolated URL analysis pipeline combining phishing detectors, sandbox execution, and risk reporting.',
    points: ['AI typosquat classifier, Safe Browsing, VirusTotal', 'Disposable Multipass VM analysis', 'Redirect, content, network, and TLS metadata review'],
    href: 'https://github.com/jaydaVis04/Rodman-Phishing-Prevention',
  },
  {
    name: 'jLedger Personal Finance Ledger',
    focus: 'Secure backend system emphasizing accounting data integrity, authentication, and access control.',
    points: ['TypeScript, Node.js, Express, PostgreSQL, Prisma', 'JWT, refresh-token rotation, HttpOnly cookies, RBAC', 'Append-only journal model with Jest and Supertest coverage'],
    href: 'https://github.com/jaydaVis04/jLedger',
  },
];

const toolGroups = [
  ['C', 'C++', 'Python', 'x86/x64 Assembly', 'Bash', 'Ruby', 'Perl'],
  ['GDB', 'Ghidra', 'Immunity Debugger', 'Metasploit', 'Wireshark', 'tcpdump'],
  ['Linux', 'TCP/IP', 'DNS', 'SSH', 'OpenSSL', 'LDAP', 'NFS'],
  ['Splunk SPL', 'KQL fundamentals', 'MITRE ATT&CK', 'JSONL', 'SQLite', 'GitHub Actions'],
];

export default function SimplePortfolio() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="font-mono text-sm font-bold uppercase tracking-[0.24em] text-slate-950">
            Jaydyn Davis
          </a>
          <div className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
            <a href="#experience" className="hover:text-slate-950">Battelle</a>
            <a href="#projects" className="hover:text-slate-950">Projects</a>
            <a href="#tools" className="hover:text-slate-950">Tools</a>
            <a href="#contact" className="hover:text-slate-950">Contact</a>
          </div>
        </nav>
      </header>

      <section id="top" className="mx-auto grid max-w-6xl gap-10 px-5 pb-20 pt-16 md:grid-cols-[1.05fr_0.95fr] md:pb-28 md:pt-24">
        <div>
          <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-emerald-700">
            Reverse Engineering / Vulnerability Research
          </p>
          <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-[-0.06em] text-slate-950 md:text-7xl">
            Understanding systems at the lowest level.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
            Secret-cleared Computer Science and Cybersecurity student focused on reverse engineering, vulnerability research, embedded systems, computer architecture, and low-level security analysis.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-full bg-slate-950 px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-emerald-700">
              View Projects
            </a>
            <a href="/in-depth" className="rounded-full border-2 border-emerald-600 bg-emerald-50 px-6 py-3 text-sm font-black uppercase tracking-[0.16em] text-emerald-800 shadow-[0_0_0_6px_rgba(5,150,105,0.08)] transition hover:-translate-y-0.5 hover:bg-emerald-600 hover:text-white">
              In Depth Portfolio
            </a>
          </div>
          <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold text-slate-700">
            <a href="https://github.com/jaydaVis04" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700">GitHub</a>
            <a href="https://www.linkedin.com/in/jaydyn-davis-51b31b288" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700">LinkedIn</a>
            <a href="mailto:jaydyndavis04@gmail.com" className="hover:text-emerald-700">Email</a>
            <a href="/Jaydyn_Davis_RED_TEAM_Resume.pdf" className="hover:text-emerald-700">Resume</a>
          </div>
        </div>

        <aside className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-slate-500">Current Signal</p>
          <div className="mt-5 space-y-4">
            {[
              ['Battelle', 'Reverse Engineering/Vulnerability Research Co-op, completed August-December 2026'],
              ['Clearance', 'Secret security clearance'],
              ['Core', 'C/C++, x86/x64 assembly, GDB, Ghidra, Immunity Debugger'],
              ['Education', 'Hofstra University, B.S. Computer Science & Cybersecurity, expected December 2027'],
            ].map(([label, value]) => (
              <div key={label} className="border-l-4 border-emerald-500 bg-white p-4">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{label}</p>
                <p className="mt-1 text-sm leading-6 text-slate-800">{value}</p>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section id="experience" className="border-y border-slate-200 bg-slate-950 px-5 py-16 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-emerald-300">Featured Experience</p>
          <div className="mt-6 grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="text-4xl font-black tracking-[-0.04em]">Battelle</h2>
              <p className="mt-2 text-lg font-semibold text-emerald-200">Reverse Engineering/Vulnerability Research Co-op</p>
              <p className="mt-3 text-sm text-slate-400">Columbus, OH | August 2026-December 2026 | Full-time, on-site</p>
            </div>
            <div className="space-y-4 text-base leading-8 text-slate-200">
              <p>Completed a reverse-engineering and vulnerability-research co-op with Battelle's Mission Focused Tools organization, supporting cyber research and development involving hardware, software, embedded-system development, and reverse-engineering workflows.</p>
              <ul className="space-y-3">
                <li>Collaborated with engineers to improve reverse-engineering and embedded-system development capabilities by integrating hardware, software, and analysis workflows.</li>
                <li>Applied C/C++ debugging, computer-architecture fundamentals, assembly-level analysis, and disassembler/decompiler workflows.</li>
                <li>Completed technical assignments independently within schedule constraints and communicated technical ideas across multidisciplinary teams.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-emerald-700">Focus</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em]">What I focus on</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-600">Concise by design: this main page gives the signal first. The in-depth portfolio keeps the full archive, teaching background, labs, and expanded history.</p>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((area) => (
            <div key={area} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold leading-6 text-slate-800">{area}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-emerald-700">Projects</p>
          <h2 className="mt-3 text-4xl font-black tracking-[-0.04em]">Featured work</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.name} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-black tracking-[-0.02em] text-slate-950">{project.name}</h3>
                  {'href' in project && project.href ? (
                    <a href={project.href} target="_blank" rel="noopener noreferrer" className="shrink-0 text-sm font-bold text-emerald-700 hover:text-emerald-900">Repo</a>
                  ) : null}
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-600">{project.focus}</p>
                <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-800">
                  {project.points.map((point) => (
                    <li key={point} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="tools" className="mx-auto max-w-6xl px-5 py-16">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-emerald-700">Technical Depth</p>
        <h2 className="mt-3 text-4xl font-black tracking-[-0.04em]">Tools I use</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {toolGroups.map((group, index) => (
            <div key={index} className="rounded-[1.5rem] border border-slate-200 p-5">
              <div className="flex flex-wrap gap-2">
                {group.map((tool) => (
                  <span key={tool} className="rounded-full bg-slate-100 px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-slate-700">{tool}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-5 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-emerald-700">Education</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.03em]">Hofstra University</h2>
            <p className="mt-4 leading-7 text-slate-700">B.S. Computer Science & Cybersecurity, minor in Finance. GPA 3.30. Expected December 2027.</p>
          </div>
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-emerald-700">Recognition</p>
            <p className="mt-4 leading-7 text-slate-700">Dean's List five times, Upsilon Pi Epsilon Computer Science Honor Society, National Society of Leadership and Success, Amazon Capture the Flag participant.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-5 py-16">
        <div className="rounded-[2rem] bg-slate-950 p-8 text-white md:p-10">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-emerald-300">Contact</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.04em]">Interested in reverse engineering, vulnerability research, embedded security, or low-level cyber research?</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="mailto:jaydyndavis04@gmail.com" className="rounded-full bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-slate-950">Email</a>
            <a href="https://github.com/jaydaVis04" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/30 px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white">GitHub</a>
            <a href="https://www.linkedin.com/in/jaydyn-davis-51b31b288" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/30 px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white">LinkedIn</a>
            <a href="/in-depth" className="rounded-full bg-emerald-400 px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-slate-950">Open In Depth Portfolio</a>
          </div>
        </div>
      </section>
    </main>
  );
}
