export const labs = {
  'network-security': [
    { title: 'Password Hashing and Hashcat Cracking', desc: 'Compared salted and unsalted MD5/SHA256 hashes, used Hashcat dictionary and mask attacks in Kali, and evaluated password length and policy weaknesses.' },
    { title: 'Web Application Security: SQL Injection', desc: 'Completed PortSwigger SQL injection labs using Burp Suite to inspect requests, alter vulnerable URL parameters, retrieve hidden product data, and bypass authentication into an administrator account.' },
    { title: 'Web Application Security: Cross-Site Scripting', desc: 'Completed reflected, stored, attribute-based, and DOM XSS labs using Burp Proxy, HTTP history, and Repeater to test payload placement, output encoding gaps, and unsafe client-side sinks.' },
    { title: 'Network Forensics with Wireshark', desc: 'Investigated multi-PCAP evidence covering scanning, exposed credentials, DNS C2, ICMP fragmentation, credential harvesting, DoS traffic, geolocation, FTP exfiltration, SQL injection, web shells, Zerologon, and malware behavior.' },
    { title: 'Wireshark and Protocol Analysis', desc: 'Captured and filtered ICMP, HTTP, and TCP traffic; inspected Ethernet II and IPv4 headers, followed HTTP streams, and identified TCP three-way handshake behavior for troubleshooting and protocol analysis.' },
    { title: 'Denial-of-Service Testing', desc: 'Ran controlled SYN flood simulations with Scapy and Netwox against a Telnet service, monitored traffic in Wireshark, compared tool behavior, and analyzed TCP connection impact in an authorized virtual lab.' },
    { title: 'Splunk and KQL SOC Investigation Labs', desc: 'Practiced SPL and KQL investigations across Linux authentication logs, web access logs, failed SSH attempts, brute-force logic, 404/scanning behavior, timelines, field extraction, joins, dashboards, false-positive tuning, and MITRE ATT&CK mapping.' },
  ],
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

export const labCategories = [
  { id: 'ethical-hacking', label: 'Ethical hacking & low-level research', summary: 'Binary analysis, exploit reproduction, memory corruption, and mitigation.' },
  { id: 'network-security', label: 'Network, web & detection', summary: 'Wireshark forensics, SQL injection, XSS, Hashcat, Splunk, and KQL.' },
  { id: 'cybersecurity', label: 'Linux & infrastructure security', summary: 'Identity, certificates, service hardening, and system diagnostics.' },
  { id: 'cpp-labs', label: 'C++ & algorithms', summary: 'Pointers, data structures, recursion, and memory reasoning.' },
] satisfies { id: keyof typeof labs; label: string; summary: string }[];

export const labRepos = [
  { label: 'Ethical hacking repository', href: 'https://github.com/jaydaVis04/Ethical-Hacking-Labs' },
  { label: 'Cybersecurity repository', href: 'https://github.com/jaydaVis04/Cybersecurity-Labs' },
];
