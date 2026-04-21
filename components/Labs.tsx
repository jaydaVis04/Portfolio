'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const labs = {
  'ethical-hacking': [
    { title: 'Replay Attack', desc: 'Captured and modified HTTP traffic with tcpdump and netcat, then wrote savepasswd.py to restore critical system files and complete the workflow end to end.' },
    { title: 'DNS Setup and Port Scan', desc: 'Performed authorized DNS enumeration, added records, hardened Bind9, mapped services with nmap and lsof, and completed OS fingerprinting analysis.' },
    { title: 'Metasploit Penetration Testing', desc: 'Exploited MS08-067 for remote shell access, uploaded files with Meterpreter, tested Armitage automation, and proposed layered defenses.' },
    { title: 'Command Injection Exploit & Mitigation', desc: 'Reproduced automated mass-account creation through command injection, then implemented and verified input sanitization in C.' },
    { title: 'Metasploit Exploit Development & Session Analysis', desc: 'Developed and debugged custom Metasploit exploits and analyzed session behavior using Wireshark and Ruby debugging.' },
    { title: 'ICTF’07: Ruby & Metasploit', desc: 'Deployed and extended the grader, re-IP’d cloned VMs, mapped PHP flag flow, and built a one-command Ruby exfiltration and submission pipeline.' },
    { title: 'Sound of Music: Penetration Test', desc: 'Built a durable one-command exploit with programmatic login, cookie handling, server-side include abuse, and proxied submission for consistent scoring.' },
    { title: 'C Pointers & GDB', desc: 'Built an 8-digit zero-padded hex printer, fixed setvar for n=200, reasoned through addresses precisely, and stepped bubble_sort instruction by instruction in GDB.' },
    { title: 'Assembly & GDB', desc: 'Implemented cat.cc with execve, analyzed static-linked ls assembly, and extracted main() machine code into a shellcode-style character array for inspection.' },
    { title: 'Stack Exploitation', desc: 'Mapped a full fib stack frame and crafted Perl payloads to crash execution at 0x41414141 and redirect control flow to greeting().' },
    { title: 'Buffer Overflow & Shellcode', desc: 'Recovered setuid and execve parameters from shellcode, explained JMP/CALL position independence, and built a working exploit payload using GDB-derived offsets.' },
    { title: 'Remote Buffer Overflow & Metasploit', desc: 'Reproduced the peercast3 exploit, analyzed linux/x86/shell_bind_tcp, traced execution at JMP ESP, and wrote a syscall-level bind shell report.' },
    { title: 'Heap Spray / Browser Exploits', desc: 'Reproduced crashes, proved shellcode control in Immunity Debugger, installed mangleme, and built a Unicode-safe heap spray that triggered calc.exe.' },
    { title: 'Format String Exploitation', desc: 'Leaked main() return addresses with crafted %p payloads, used format-string writes to set a global Canary, and proposed a hardened post-compile PatchMe rewriter.' },
  ],
  cybersecurity: [
    { title: 'Game Hacking with OpenRA', desc: 'Modified OpenRA source to reduce soldier cost to $1, patched the Makefile with sed, automated fixes, and debugged C# syntax errors to simulate exploit-style manipulation.' },
    { title: 'Linux Command-Line Challenge', desc: 'Completed a timed Linux training bot covering file navigation, permissions, scripting, and fast CLI execution inside a scored environment.' },
    { title: 'Linux File Forensics', desc: 'Solved timed Linux analysis tasks using md5sum, chmod, xxd, sed, and grep for checksums, permissions, nested search, and precise file editing.' },
    { title: 'Encrypted Messaging & Access Control', desc: 'Configured Linux mail with ygm, applied Base64 and AES encryption, managed users, set file permissions, and deployed SUID programs for controlled access.' },
    { title: 'SSL Certificate Configuration & HTTPS Deployment', desc: 'Generated and signed CSRs with OpenSSL, deployed HTTPS certs to Apache, and handled private/public key use, X.509 certs, and secure transfers.' },
    { title: 'Linux Process & Log Analysis', desc: 'Used ps, strace, grep, kill, and crontab to identify malicious processes, interpret outputs, terminate threats, and automate parts of system hardening.' },
    { title: 'Secure Network Configuration & SSH Setup', desc: 'Configured OpenSSH, troubleshot routing issues, fixed Netplan interfaces, secured SFTP transfers, and configured DNS using Bind9.' },
    { title: 'LDAP-Based Single Sign-On', desc: 'Configured LDAP for centralized authentication, resolved service discovery issues with DNS and strace, and created secure user group models.' },
    { title: 'NFS Deployment & Authentication', desc: 'Built an NFS server for distributed file sharing, maintained file ownership and permissions, and integrated LDAP-based authentication.' },
  ],
  'cpp-labs': [
    { title: 'String Patterning & BMI Calculation', desc: 'Wrote nameDiamond() using substring logic and nested loops, plus a BMI calculator with modular functions and classification logic.' },
    { title: 'Vector Filtering & Element Removal', desc: 'Implemented countInRange() and removeAll() with reverse iteration to safely modify vectors in place.' },
    { title: 'Nearest Smaller Value via Stack', desc: 'Implemented nearest_smaller_to_right() with a stack and careful edge-case handling.' },
    { title: 'Vote Counting via HashMap', desc: 'Built tallyVote() to track character frequencies and answer queries efficiently with hashmap-based lookup.' },
    { title: 'Recursive Power & Decimal Printing', desc: 'Wrote myPow() with negative-power handling and printDecimal() for fixed-length base-10 formatting via recursion.' },
    { title: 'Unique Vector Permutations', desc: 'Implemented permute() using recursion and sets to generate only unique permutations.' },
    { title: 'Word Search in 2D Grid', desc: 'Built exist() using DFS-style backtracking with visited-state handling so each cell is used at most once.' },
    { title: 'Merge Two Sorted Linked Lists', desc: 'Created a non-recursive merge routine without auxiliary memory, focusing on pointer manipulation and edge cases.' },
    { title: 'Template List Concatenation', desc: 'Extended a custom linked-list template by overloading the + operator for list concatenation.' },
    { title: 'Remove Duplicates in Sorted List', desc: 'Implemented deleteDuplicates() to remove all duplicate values from a sorted linked list in a single traversal.' },
    { title: 'Second Minimum in Special Binary Tree', desc: 'Implemented findSecondMinimumValue() with recursion and tree traversal logic to detect the second smallest unique value.' },
  ],
};

const categoryMeta = {
  all: {
    label: 'All Labs',
    summary: 'A broad archive across exploit development, secure systems, networking, Linux, and core CS implementation work.',
  },
  'ethical-hacking': {
    label: 'Ethical Hacking',
    summary: 'Exploit reproduction, adversarial testing, low-level debugging, and offensive workflow automation.',
  },
  cybersecurity: {
    label: 'Cybersecurity',
    summary: 'Infrastructure security, Linux hardening, identity, TLS deployment, and operational diagnostics.',
  },
  'cpp-labs': {
    label: 'C++ Labs',
    summary: 'Foundational algorithm, data structure, recursion, pointer, and memory management practice.',
  },
};

export default function Labs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState<keyof typeof categoryMeta>('all');
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);

  const allLabs = [...labs['ethical-hacking'], ...labs.cybersecurity, ...labs['cpp-labs']];
  const displayLabs = activeCategory === 'all' ? allLabs : labs[activeCategory];
  const featuredLabs = displayLabs.slice(0, 6);

  const categories: { id: keyof typeof categoryMeta; count: number }[] = [
    { id: 'all', count: allLabs.length },
    { id: 'ethical-hacking', count: labs['ethical-hacking'].length },
    { id: 'cybersecurity', count: labs.cybersecurity.length },
    { id: 'cpp-labs', count: labs['cpp-labs'].length },
  ];

  return (
    <section
      id="labs"
      ref={ref}
      className="relative px-4 py-32"
      style={{
        background:
          'radial-gradient(circle at 85% 20%, rgba(57,255,20,0.045), transparent 18%), linear-gradient(180deg, rgba(232,220,195,0.012), transparent)',
      }}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-4">Archive / Technical Depth</p>
          <h2 className="mb-4 text-5xl font-display font-black neon-text md:text-7xl">
            LABS
          </h2>
          <div className="mb-6 h-1 w-32" style={{ backgroundColor: 'var(--cyber-primary)' }} />
          <p className="max-w-3xl font-mono text-sm leading-8" style={{ color: 'var(--cyber-primary)', opacity: 0.78 }}>
            This section is here to prove volume and repetition. The projects show larger systems; the labs show that I have spent real time operating at the command line, debugging memory, hardening services, and validating security concepts across many environments.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 xl:grid-cols-[0.42fr_0.58fr]">
          <motion.aside
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="cyber-panel h-fit p-6"
          >
            <h3 className="font-display text-2xl font-bold uppercase tracking-[0.08em]" style={{ color: 'var(--cyber-primary-light)' }}>
              Browse by track
            </h3>
            <div className="mt-5 grid gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className="text-left transition-transform hover:translate-x-1"
                >
                  <div
                    className="border px-4 py-4"
                    style={{
                      borderColor: activeCategory === category.id ? 'var(--cyber-primary)' : 'rgba(0,255,65,0.16)',
                      backgroundColor: activeCategory === category.id ? 'rgba(232,220,195,0.055)' : 'transparent',
                    }}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <p className="font-display text-lg font-bold uppercase tracking-[0.05em]" style={{ color: 'var(--cyber-primary-light)' }}>
                        {categoryMeta[category.id].label}
                      </p>
                      <span className="font-mono text-xs uppercase tracking-[0.16em]" style={{ color: 'var(--cyber-primary)', opacity: 0.6 }}>
                        {category.count}
                      </span>
                    </div>
                    <p className="mt-2 font-mono text-sm leading-7" style={{ color: 'var(--cyber-primary)', opacity: 0.74 }}>
                      {categoryMeta[category.id].summary}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </motion.aside>

          <div className="grid gap-6">
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
                  {categoryMeta[activeCategory].label.toLowerCase().replaceAll(' ', '.')}.archive
                </p>
              </div>
              <div className="grid gap-4 p-6 md:grid-cols-2">
                {featuredLabs.map((lab) => (
                  <div key={lab.title} className="cyber-panel p-5">
                    <p className="font-display text-xl font-bold uppercase tracking-[0.05em]" style={{ color: 'var(--cyber-primary-light)' }}>
                      {lab.title}
                    </p>
                    <p className="mt-3 font-mono text-sm leading-7" style={{ color: 'var(--cyber-primary)', opacity: 0.78 }}>
                      {lab.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="cyber-panel p-6"
            >
              <button
                type="button"
                onClick={() => setIsArchiveOpen((open) => !open)}
                className="flex w-full items-center justify-between gap-4 text-left"
              >
                <div>
                  <h3 className="font-display text-2xl font-bold uppercase tracking-[0.08em]" style={{ color: 'var(--cyber-primary-light)' }}>
                    Full Archive
                  </h3>
                  <p className="mt-2 font-mono text-xs uppercase tracking-[0.16em]" style={{ color: 'var(--cyber-primary)', opacity: 0.56 }}>
                    {displayLabs.length} entries available on demand
                  </p>
                </div>
                <span
                  className="font-mono text-sm uppercase tracking-[0.2em] transition-transform"
                  style={{
                    color: 'var(--cyber-primary-light)',
                    transform: isArchiveOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                >
                  ▼
                </span>
              </button>

              <motion.div
                initial={false}
                animate={isArchiveOpen ? { height: 'auto', opacity: 1, marginTop: 24 } : { height: 0, opacity: 0, marginTop: 0 }}
                className="overflow-hidden"
              >
                <div className="grid gap-4 border-t pt-6" style={{ borderColor: 'rgba(0,255,65,0.14)' }}>
                  {displayLabs.map((lab) => (
                    <div key={lab.title} className="border-l pl-4" style={{ borderColor: 'rgba(0,255,65,0.16)' }}>
                      <p className="font-display text-lg font-bold" style={{ color: 'var(--cyber-primary-light)' }}>
                        {lab.title}
                      </p>
                      <p className="mt-2 font-mono text-sm leading-7" style={{ color: 'var(--cyber-primary)', opacity: 0.76 }}>
                        {lab.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
