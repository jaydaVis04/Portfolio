export const profile = {
  name: 'Jaydyn Davis',
  specialty: 'Reverse engineering & vulnerability research',
  email: 'jaydyndavis04@gmail.com',
  github: 'https://github.com/jaydaVis04',
  linkedin: 'https://www.linkedin.com/in/jaydyn-davis-51b31b288',
  clearance: 'DoD Secret clearance',
  university: 'Hofstra University',
  degree: 'B.S. Computer Science & Cybersecurity',
  graduation: 'December 2027',
  gpa: '3.30',
  location: 'Amityville, NY',
};

export const battelle = {
  role: 'Reverse Engineering / Vulnerability Research Co-op',
  period: 'August - December 2026',
  location: 'Columbus, OH',
  summary: 'ARM and MIPS firmware research, a C debugger and kernel module for memory investigation, and Dockerized research tooling.',
  highlights: [
    {
      title: 'Embedded reverse engineering',
      text: 'Reverse engineered ARM, MIPS, and other RISC-based targets with Ghidra, GDB/pwndbg, and Binary Ninja. Traced control flow, registers, memory state, and system behavior.',
    },
    {
      title: 'Debugger and kernel development',
      text: 'Implemented a firmware memory debugger and a C kernel module providing device memory read/write access for investigation.',
    },
    {
      title: 'Research automation',
      text: 'Built a pipeline combining web scraping with system and tool logs. Configured Linux services, path-triggered tasks, and timers; packaged the tool with Docker for repeatable deployment.',
    },
    {
      title: 'Offensive cyber R&D',
      text: 'Combined network attack analysis with low-level research in red-team workflows, documented findings, and collaborated with multidisciplinary engineers.',
    },
  ],
};

export const ctf = {
  title: '2nd place, Hofstra-Amazon CTF',
  event: 'HUCTF',
  teammate: 'James Scardino',
  award: '$4,000 team prize',
  pool: '$12,000 prize pool',
  summary: 'Reverse engineering, binary exploitation, and cryptography with teammate James Scardino.',
  challenges: [
    { title: 'Reverse engineering', text: 'x86 binary analysis with pwndbg, XOR-based cryptography, TinyVM, and block-cipher challenges.' },
    { title: 'Binary exploitation', text: 'Classic buffer overflow, return-address recovery, and control-flow redirection to retrieve a flag.' },
    { title: 'Cryptography', text: 'RSA challenges involving the public modulus, exponent, and ciphertext.' },
  ],
};

export const projects = [
  {
    name: 'SecPipe',
    category: 'Detection engineering',
    summary: 'Multi-source logs to MITRE ATT&CK-mapped detections.',
    description: 'Python pipeline that normalizes Linux authentication, Nginx, syslog, and JSON events into a common schema.',
    details: [
      'Detects brute force, password spraying, persistence, privilege escalation, and defense evasion.',
      'Exports JSONL, SQLite, Markdown, and webhooks through a CLI.',
      'Plugin-style registries, typed configuration, pytest, and GitHub Actions CI.',
    ],
    skills: ['Python', 'MITRE ATT&CK', 'SQLite', 'pytest', 'GitHub Actions'],
    href: 'https://github.com/jaydaVis04/secpipe',
  },
  {
    name: 'Rodman',
    category: 'Phishing analysis',
    summary: 'URL risk analysis inside disposable VM sandboxes.',
    description: 'Combines an AI typosquat classifier, Google Safe Browsing, VirusTotal, and isolated Multipass analysis.',
    details: [
      'Provisions a fresh VM per run and examines redirects, content patterns, and TLS metadata.',
      'Runs independent detectors in parallel and produces a unified JSON risk report.',
      'Tests sandbox provisioning, analysis, cleanup, and reporting with pytest.',
    ],
    skills: ['Python', 'Multipass', 'VirusTotal', 'Google Safe Browsing', 'TLS'],
    href: 'https://github.com/jaydaVis04/Rodman-Phishing-Prevention',
  },
  {
    name: 'jLedger',
    category: 'Secure backend engineering',
    summary: 'An append-only ledger with traceable transaction history.',
    description: 'TypeScript and Express API backed by PostgreSQL and Prisma, with integrity enforced at the database level.',
    details: [
      'JWT authentication, refresh-token rotation, HttpOnly cookies, and role-based access control.',
      'Derives balances from transaction line items instead of mutable totals.',
      'Validates authentication and ledger flows with Jest and Supertest integration tests.',
    ],
    skills: ['TypeScript', 'Express', 'PostgreSQL', 'Prisma', 'Jest', 'Supertest'],
    href: 'https://github.com/jaydaVis04/jLedger',
  },
];

export const supportingProjects = [
  {
    name: 'My Todo App',
    summary: 'Responsive Svelte and Ionic-Svelte task manager with keyboard shortcuts.',
    href: 'https://github.com/jaydaVis04/Todo-App',
  },
  {
    name: 'Web Data Extractor',
    summary: 'Python crawler that extracts names, emails, and course information with source locations.',
  },
  {
    name: 'Word Transformation and Analysis',
    summary: 'C++ text processing with stacks, queues, vectors, hashmaps, and file error handling.',
  },
];

export const skillGroups = [
  {
    title: 'Reverse engineering',
    skills: 'Ghidra, Binary Ninja, GDB/pwndbg, Immunity Debugger, disassembly, decompilation, control-flow and memory analysis',
  },
  {
    title: 'Systems and architectures',
    skills: 'C, C++, assembly, ARM, MIPS, x86/x64, RISC embedded targets, Linux, kernel modules, firmware debugging',
  },
  {
    title: 'Research and security',
    skills: 'Buffer overflows, shellcode, format strings, protocol analysis, Metasploit, Burp Suite, Nmap, Hashcat, Wireshark, tcpdump',
  },
  {
    title: 'Automation and engineering',
    skills: 'Python, Bash, Ruby, Perl, TypeScript, Node.js, Docker, Docker Compose, systemd, Git, GitHub Actions, pytest, Jest',
  },
  {
    title: 'Detection and infrastructure',
    skills: 'Splunk SPL, KQL fundamentals, MITRE ATT&CK, CyberChef, DNS, SSH, TLS/OpenSSL, LDAP, NFS, PostgreSQL, SQLite',
  },
  {
    title: 'Cloud foundations',
    skills: 'AWS, Azure, GCP, OCI, IAM, cloud logging concepts, Kubernetes fundamentals, CI/CD workflows',
  },
];

export const teaching = [
  {
    role: 'Operating Systems Teaching Assistant',
    organization: 'Hofstra University',
    context: 'Dr. Shan',
    description: 'One-on-one tutoring, small-group instruction, and exam reviews on processes, threads, scheduling, synchronization, memory, and file systems.',
  },
  {
    role: 'STEM Teacher',
    organization: 'Snapology',
    context: 'January 2024 - Present',
    description: 'Led robotics and engineering sessions for 100+ students, building problem-solving and teamwork through hands-on learning.',
  },
  {
    role: 'Coding Coach',
    organization: 'The Coder School',
    context: 'March - November 2023',
    description: 'Taught Python and Scratch to 100+ students through project-based programming and guided debugging.',
  },
];
