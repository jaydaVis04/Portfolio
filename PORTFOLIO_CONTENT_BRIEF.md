# Jaydyn Davis Portfolio Brief

This file is the source brief for building Jaydyn Davis's professional
portfolio. It contains the approved positioning, factual content, page
structure, visual direction, and claim boundaries. The portfolio should be
concise and scannable, but complete enough that a recruiter, engineer, or
research collaborator can understand Jaydyn's specialty within seconds.

## Core Positioning

### Primary identity

**Jaydyn Davis - Reverse Engineering and Vulnerability Research**

Jaydyn is a Computer Science and Cybersecurity student focused on reverse
engineering, vulnerability research, low-level systems, computer architecture,
embedded security, and cyber research. The site should make this specialization
the dominant message. Do not position Jaydyn primarily as a generic software
engineer, full-stack developer, or penetration tester.

### Short positioning statement

Secret-cleared Computer Science and Cybersecurity student specializing in
reverse engineering, vulnerability research, C/C++, computer architecture,
assembly-level analysis, and low-level debugging. Completed a Battelle Mission
Focused Tools co-op integrating hardware, software, embedded-system, and
reverse-engineering workflows.

### Longer positioning statement

I investigate how software and systems behave below the surface. My work
combines C/C++ debugging, assembly and architecture analysis, disassembly,
debugger-based investigation, memory-corruption research, embedded-system
concepts, and controlled vulnerability reproduction. I also build supporting
security tooling for telemetry, phishing analysis, cloud findings, and
repeatable research workflows.

### Current academic status

- Hofstra University, Hempstead, NY
- Bachelor of Science in Computer Science & Cybersecurity
- GPA: 3.30
- Expected graduation: December 2027
- Secret security clearance

## Contact

- Name: Jaydyn Davis
- Location: Amityville, NY 11701
- Email: jaydyndavis04@gmail.com
- Phone: 631-480-0444
- LinkedIn: https://www.linkedin.com/in/jaydyn-davis-51b31b288
- GitHub: https://github.com/jaydaVis04

## Recommended Page Structure

The site should be a single fast-scanning portfolio page with anchor links.
Use this order:

1. Hero and specialization
2. Battelle experience
3. Focus areas
4. Featured projects
5. Reverse-engineering and vulnerability-research lab portfolio
6. Tools and technical depth
7. Education and recognition
8. Origin story
9. Contact

The first viewport must immediately show Jaydyn's name, reverse-engineering and
vulnerability-research specialization, Battelle, Secret clearance, and the
primary contact/GitHub links. Do not lead with a generic greeting or a long
about paragraph.

## Hero Copy

### Eyebrow

REVERSE ENGINEERING / VULNERABILITY RESEARCH

### Headline

Understanding systems at the lowest level.

### Supporting copy

Jaydyn Davis is a Secret-cleared Computer Science and Cybersecurity student
focused on reverse engineering, vulnerability research, embedded systems,
computer architecture, and low-level security analysis.

### Hero facts

- Battelle Reverse Engineering/Vulnerability Research Co-op, completed
  August-December 2026
- C/C++, x86/x64 assembly, GDB, Ghidra, Immunity Debugger
- Expected December 2027 | Hofstra University

### Hero actions

- View projects
- Open GitHub
- Connect on LinkedIn
- Download resume

## Battelle Experience

This is the most important professional section. Give it visual priority over
the other experience entries.

### Display

**Battelle**  
**Reverse Engineering/Vulnerability Research Co-op**  
Columbus, OH | August 2026-December 2026 | Full-time, on-site

### Approved description

Completed a reverse-engineering and vulnerability-research co-op with
Battelle's Mission Focused Tools organization, supporting cyber research and
development involving hardware, software, embedded-system development, and
reverse-engineering workflows.

### Approved highlights

- Collaborated with Mission Focused Tools engineers to improve
  reverse-engineering and embedded-system development capabilities by
  integrating hardware, software, and analysis workflows.
- Applied C/C++ debugging, computer-architecture fundamentals,
  assembly-level analysis, and disassembler/decompiler workflows to
  reverse-engineering and vulnerability-research tasks.
- Supported cyber R&D programs by completing technical assignments
  independently within schedule constraints and communicating technical ideas
  across multidisciplinary engineering teams.

### Battelle claim boundary

Do not add internal project names, classified details, sponsor identities,
specific vulnerabilities discovered, proprietary tools, performance metrics,
or technical outcomes that Jaydyn has not separately confirmed.

## Focus Areas

Use short cards or a compact grid. These are specialties, not generic job
titles:

- Reverse engineering and disassembly
- Vulnerability research and controlled exploit reproduction
- C/C++ debugging and low-level program analysis
- x86/x64 assembly and architecture fundamentals
- ARM and MIPS architecture fundamentals
- Embedded systems and microcontroller concepts
- Stack, register, memory, and control-flow analysis
- Shellcode and memory-corruption research
- Security telemetry and detection engineering
- Linux systems, networking, and security tooling
- Cloud security workflow modeling and remediation tracking
- Technical documentation and research communication

## Featured Projects

Use project cards with a one-line result, three short bullets, and a link to
the corresponding repository when available.

### 1. Low-Level Vulnerability Research Portfolio

**Focus:** reverse engineering, memory corruption, debugging, assembly, and
vulnerability validation in authorized academic or controlled environments.

- Analyzed x86/x64 Linux and Windows binaries with GDB, Ghidra, and Immunity
  Debugger, tracing registers, stack frames, control flow, system calls, and
  C/C++/assembly relationships.
- Reproduced stack and heap overflows, format-string vulnerabilities,
  shellcode, and remote exploitation in authorized labs; calculated offsets and
  validated control-flow redirection.
- Developed and debugged Metasploit, Ruby, and Perl exploit workflows,
  inspected sessions with Wireshark and tcpdump, and documented root causes and
  mitigations.

### 2. SecPipe Security Telemetry Pipeline

**Focus:** Python security telemetry, detection logic, MITRE ATT&CK mapping, and
repeatable analysis workflows.

- Built a Python pipeline that ingests Linux authentication, Nginx, syslog,
  and JSON logs, normalizes events into a common schema, and runs rule-based
  detections mapped to MITRE ATT&CK.
- Implemented detections for brute force, password spraying, persistence,
  privilege escalation, and defense evasion; exported findings to JSONL,
  SQLite, Markdown, and webhooks through a CLI.
- Engineered parser, detection, and output registries with type hints,
  structured configuration, pytest coverage, and GitHub Actions CI.

### 3. SecPipe-CloudOps

**Focus:** cloud finding normalization, security triage, ownership, and
remediation workflows.

- Modeled findings across AWS, Azure, GCP, and OCI using a common normalized
  representation.
- Covered public storage exposure, excessive IAM permissions, broad
  service-account roles, public SSH/RDP exposure, and insecure network paths.
- Added prioritization, ownership routing, remediation-ticket workflows, SOPs,
  Docker packaging, and minimal Kubernetes manifests.

Important: describe this as a modeled multi-cloud workflow or prototype. Do not
claim production integrations with every cloud provider.

### 4. Phishing Analysis Pipeline (Rodman)

**Focus:** isolated URL analysis, phishing detection, sandboxing, and automated
risk reporting.

- Built a Python pipeline combining an AI-based typosquat classifier, Google
  Safe Browsing, VirusTotal, and a disposable Multipass VM sandbox.
- Provisioned a fresh VM per run and analyzed redirects, content patterns,
  network behavior, and TLS metadata to produce a unified risk verdict.
- Parallelized independent detectors and added pytest coverage for sandbox
  provisioning, analysis, cleanup, and JSON report generation.

### 5. jLedger Secure Ledger

**Focus:** secure application design, transaction integrity, and access
control.

- Built a TypeScript and Node.js/Express secure transaction ledger backed by
  PostgreSQL and Prisma.
- Implemented JWT authentication, refresh-token rotation with HttpOnly
  cookies, and role-based access control.
- Enforced append-only journal behavior at the database layer with balances
  derived from transaction line items; tested with Jest and Supertest.

### Additional projects

Keep these available as compact secondary cards:

- **Student Management System:** C++ application with MySQL storage,
  structured querying, authentication, unique student IDs, and file handling.
- **My Todo App:** responsive Svelte, HTML, and Ionic-Svelte task manager with
  task creation, toggling, keyboard shortcuts, responsive CSS, dark mode, and
  animation.
- **Web Data Extractor:** Python web crawler that traverses a supplied URL and
  extracts target data such as names, emails, courses, and source locations.
- **Word Transformation and Analysis Tool:** C++ application using stacks,
  queues, vectors, hashmaps, file processing, and robust error handling.

## Technical Depth

Display this as categorized tags or expandable groups. Keep the high-value
reverse-engineering terms visible without making the page look like a keyword
wall.

### Languages

C, C++, Python, JavaScript, TypeScript, Java, C#, Ruby, Perl, Bash/Shell,
PowerShell, SQL, x86/x64 Assembly

### Reverse engineering and vulnerability research

Ghidra, GDB, Immunity Debugger, IDA Free familiarity, Binary Ninja familiarity,
WinDbg familiarity, OllyDbg familiarity, disassembly, decompilation,
static/dynamic analysis, x86/x64, ARM and MIPS fundamentals, embedded and
microcontroller concepts, stack/register analysis, shellcode, buffer overflows,
format strings, heap sprays, memory corruption, exploit reproduction,
Metasploit, Meterpreter, Armitage

### Systems and networking

Linux, Windows, TCP/IP, DNS, DHCP, HTTP/HTTPS, SSH, SFTP, VPNs, firewalls,
OpenSSH, Bind9, Netplan, LDAP, NFS, Apache, Netcat, Nmap, Wireshark, tcpdump,
Packet Tracer, process and log analysis

### Security operations and detection

Splunk SPL, Microsoft Sentinel/KQL fundamentals, SIEM/SOAR concepts, log
ingestion, parsing validation, alert correlation, detection tuning,
false-positive analysis, dashboard concepts, MITRE ATT&CK mapping, incident
response lifecycle concepts, JSONL, SQLite, Markdown, webhook integrations

### Cloud and infrastructure

AWS, Azure, GCP, OCI, IAM, VPC, security groups/NSGs, cloud logging concepts,
Docker, Docker Compose, Kubernetes fundamentals, GitHub Actions, CI/CD,
Multipass VM provisioning

### Application and data security

Burp Suite, OWASP Top 10 awareness, command-injection mitigation, HTTP replay
analysis, TLS/SSL, OpenSSL, PKI, X.509 certificates, JWT, refresh-token
rotation, HttpOnly cookies, RBAC, SSO, PostgreSQL, MySQL, SQLite, Prisma,
Jest, Supertest, pytest

### Frameworks and methods

MITRE ATT&CK, NIST Cybersecurity Framework familiarity, ISO 27001 awareness,
Zero Trust Architecture concepts, IAM, least privilege, threat modeling,
vulnerability management, incident response, Agile/Scrum awareness, Kanban
awareness, technical documentation

## Experience Beyond Battelle

Include this below the featured work or in a compact timeline. Battelle remains
the visual priority.

### The Coder School

**Coding Coach** | Bellmore, NY | March 2023-November 2023

Delivered structured, project-based Python and Scratch instruction to 100+
students ages 5-15, strengthening programming, debugging, and problem-solving
skills.

### Snapology

**STEM Teacher** | Westbury, NY | January 2024-Present

Designed and led structured robotics and engineering sessions for 100+
students ages 2-12, developing problem-solving, logical reasoning, teamwork,
and hands-on STEM skills.

## Education and Recognition

- Hofstra University, Bachelor of Science in Computer Science & Cybersecurity
- GPA: 3.30
- Expected graduation: December 2027
- Dean's List five times: Spring 2023, Fall 2023, Spring 2025, Fall 2025,
  Spring 2026
- Upsilon Pi Epsilon Computer Science Honor Society
- National Society of Leadership and Success
- Amazon Capture the Flag participant
- Secret security clearance

The Amazon CTF line must never say that Jaydyn won $12,000 or received a
$12,000 award. The event was identified as a $12,000 CTF; participation is the
approved claim.

## Origin Story

Use this as a small human section, not the hero headline:

> When I was seven, I saw an ant on my dad's computer and poured water on it.
> It was not a good computer-safety decision, but it was an early sign of the
> curiosity that still drives me: I wanted to understand what was happening
> inside the system. Today that curiosity is directed toward reverse
> engineering, vulnerability research, and understanding how software and
> hardware behave under pressure.

Keep the story short, self-aware, and clearly separate from technical claims.
Do not present the incident as cybersecurity experience.

## Contact Section

### Closing copy

Interested in reverse engineering, vulnerability research, embedded security,
or low-level cyber research? View the work, inspect the code, or connect with
Jaydyn.

### Contact actions

- GitHub: https://github.com/jaydaVis04
- LinkedIn: https://www.linkedin.com/in/jaydyn-davis-51b31b288
- Email: mailto:jaydyndavis04@gmail.com
- Resume: link to the current reverse-engineering resume PDF in the project

## Visual and Interaction Direction

- Use a restrained engineering-research aesthetic: high contrast, crisp
  typography, dark charcoal or near-black base, and one restrained accent
  color such as signal green, electric cyan, or safety orange.
- Avoid generic hacker imagery, stock photos, skulls, neon overload, or fake
  terminal decorations.
- Use diagrams, code fragments, architecture sketches, debugger/register
  motifs, or project screenshots only when they represent real work.
- Make Battelle and the primary specialty visible before scrolling.
- Use compact project cards, tag groups, and expandable technical details so
  the page stays quick to scan.
- Ensure mobile layouts preserve readable text and do not turn skill tags into
  an unreadable wall.
- Use accessible contrast, keyboard navigation, semantic headings, alt text,
  visible focus states, and reduced-motion support.
- No fabricated repository links, screenshots, metrics, testimonials, logos,
  client names, or project outcomes.

## Agent Build Instructions

When implementing the site:

1. Treat this file and the canonical `profile` directory as the factual source
   of truth.
2. Use reverse engineering and vulnerability research as the primary SEO,
   navigation, hero, and metadata language.
3. Feature Battelle as completed August-December 2026 experience.
4. Include only confirmed tools and capabilities; use `familiarity`,
   `fundamentals`, `awareness`, or `exposure` where the profile marks them as
   non-advanced.
5. Keep controlled labs clearly labeled as authorized academic or lab work.
6. Do not claim professional penetration testing, malware-analysis expertise,
   production cloud integrations, certifications, winnings, or classified
   Battelle details without a new direct confirmation.
7. Preserve the exact graduation date, GPA, clearance wording, Dean's List
   semesters, and Battelle dates.
8. Keep copy concise on the visible page while making deeper project details
   available through accessible expansion or dedicated project pages.
9. Test desktop and mobile layouts, link behavior, accessibility, and the
   final rendered page before delivery.

## Disallowed Positioning

Do not use these as Jaydyn's primary identity:

- Generic software engineer
- Full-stack developer
- Penetration tester
- Generic cybersecurity enthusiast
- Hacker persona or offensive-security brand

Supporting programming, detection, cloud, networking, and application-security
work may appear as evidence, but the portfolio's central specialization is
reverse engineering and vulnerability research.
