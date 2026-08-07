const projects = [
  {
    name: 'Low-Level Vulnerability Research',
    text: 'Authorized lab portfolio covering GDB/Ghidra analysis, stack frames, registers, shellcode, memory corruption, format strings, and exploit root-cause notes.',
  },
  {
    name: 'SecPipe',
    text: 'Python telemetry pipeline that normalizes Linux, Nginx, syslog, and JSON logs into MITRE-mapped detections with JSONL, SQLite, Markdown, webhooks, pytest, and CI.',
    href: 'https://github.com/jaydaVis04/secpipe',
  },
  {
    name: 'Rodman Phishing Pipeline',
    text: 'URL-analysis workflow combining typosquat classification, Google Safe Browsing, VirusTotal, Multipass sandboxing, redirect review, TLS metadata, and JSON risk reports.',
    href: 'https://github.com/jaydaVis04/Rodman-Phishing-Prevention',
  },
];

const tools = [
  'C/C++',
  'x86/x64 Assembly',
  'GDB',
  'Ghidra',
  'IDA Pro',
  'Immunity Debugger',
  'Linux',
  'Python',
  'Wireshark',
  'tcpdump',
  'Metasploit',
  'Splunk SPL',
];

const facts = [
  'Secret clearance',
  'Battelle RE/VR co-op',
  'Hofstra CS & Cybersecurity',
  'GPA 3.30',
  'Expected Dec 2027',
];

export default function SimplePortfolio() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-between px-5 py-6 md:py-8">
        <nav className="flex items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <a href="#top" className="font-mono text-xs font-black uppercase tracking-[0.24em] text-slate-950">
            Jaydyn Davis
          </a>
          <a
            href="/in-depth"
            className="rounded-full border-2 border-emerald-600 bg-emerald-50 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-emerald-800 shadow-[0_0_0_5px_rgba(5,150,105,0.08)] transition hover:bg-emerald-600 hover:text-white"
          >
            In Depth Portfolio
          </a>
        </nav>

        <div id="top" className="grid gap-8 py-10 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-12">
          <div>
            <p className="font-mono text-xs font-black uppercase tracking-[0.3em] text-emerald-700">
              Reverse Engineering / Vulnerability Research
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.92] tracking-[-0.065em] text-slate-950 md:text-7xl">
              I analyze systems below the surface.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-700 md:text-lg">
              Secret-cleared Computer Science and Cybersecurity student focused on low-level debugging, vulnerability research, embedded-system concepts, and computer architecture.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="mailto:jaydyndavis04@gmail.com" className="rounded-full bg-slate-950 px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-emerald-700">
                Contact
              </a>
              <a href="https://github.com/jaydaVis04" target="_blank" rel="noopener noreferrer" className="rounded-full border border-slate-300 px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-slate-950 transition hover:border-emerald-600 hover:text-emerald-700">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/jaydyn-davis-51b31b288" target="_blank" rel="noopener noreferrer" className="rounded-full border border-slate-300 px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-slate-950 transition hover:border-emerald-600 hover:text-emerald-700">
                LinkedIn
              </a>
            </div>
          </div>

          <aside className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5 shadow-sm">
            <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-slate-500">Candidate Signal</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {facts.map((fact) => (
                <span key={fact} className="rounded-full bg-white px-3 py-2 text-xs font-bold uppercase tracking-[0.1em] text-slate-700 shadow-sm">
                  {fact}
                </span>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-slate-950 p-5 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">Battelle</p>
              <h2 className="mt-2 text-2xl font-black tracking-[-0.04em]">Reverse Engineering / Vulnerability Research Co-op</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Completed Mission Focused Tools work integrating hardware, software, embedded-system, and reverse-engineering workflows across cyber R&D tasks.
              </p>
            </div>
          </aside>
        </div>

        <section className="grid gap-5 border-t border-slate-200 pt-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-emerald-700">Selected Work</p>
                <h2 className="mt-2 text-3xl font-black tracking-[-0.04em]">Proof of depth</h2>
              </div>
            </div>
            <div className="mt-4 grid gap-3">
              {projects.map((project) => (
                <article key={project.name} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-black tracking-[-0.02em]">{project.name}</h3>
                    {'href' in project && project.href ? (
                      <a href={project.href} target="_blank" rel="noopener noreferrer" className="shrink-0 text-xs font-black uppercase tracking-[0.14em] text-emerald-700">
                        Repo
                      </a>
                    ) : null}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{project.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
            <p className="font-mono text-xs font-black uppercase tracking-[0.24em] text-emerald-700">Core Tools</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span key={tool} className="rounded-full bg-white px-3 py-2 text-xs font-bold uppercase tracking-[0.1em] text-slate-700 shadow-sm">
                  {tool}
                </span>
              ))}
            </div>
            <div className="mt-6 border-t border-slate-200 pt-5">
              <p className="text-sm leading-7 text-slate-700">
                Looking for reverse-engineering, vulnerability-research, embedded-security, or low-level cyber research internship opportunities.
              </p>
              <a href="/in-depth" className="mt-4 inline-flex rounded-full bg-emerald-600 px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-slate-950">
                Open Full Portfolio
              </a>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
