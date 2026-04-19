'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useTheme } from '@/lib/ThemeContext';

export default function ResumeSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredResume, setHoveredResume] = useState<string | null>(null);
  const { setTheme } = useTheme();

  const resumes = [
    {
      id: 'software',
      title: 'Software Engineering',
      file: '/Jaydyn_Davis_Software_Egineering_Resume.pdf',
      theme: 'green' as const,
      icon: '💻',
      description: 'Full-stack development & system design',
    },
    {
      id: 'blue-team',
      title: 'Blue Team / Defense',
      file: '/Jaydyn_Davis_BLUE_TEAM_Resume.pdf',
      theme: 'blue' as const,
      icon: '🛡️',
      description: 'SOC operations & threat detection',
    },
    {
      id: 'red-team',
      title: 'Red Team / Offense',
      file: '/Jaydyn_Davis_RED_TEAM_Resume.pdf',
      theme: 'red' as const,
      icon: '⚔️',
      description: 'Penetration testing & exploit development',
    },
  ];

  const handleHover = (resumeId: string, theme: 'green' | 'blue' | 'red') => {
    setHoveredResume(resumeId);
    setTheme(theme);
  };

  const handleLeave = () => {
    setHoveredResume(null);
    setTheme('green'); // Reset to default
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cyber-panel px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 neon-border"
        style={{ color: 'var(--cyber-primary)' }}
      >
        <span className="flex items-center gap-2">
          Resume Vault
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            ▼
          </motion.span>
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-full z-50 mt-3 min-w-[320px]"
            onMouseLeave={handleLeave}
          >
            <div className="terminal-window p-2 neon-border">
              {resumes.map((resume, index) => (
                <motion.a
                  key={resume.id}
                  href={resume.file}
                  download
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onMouseEnter={() => handleHover(resume.id, resume.theme)}
                  className={`block mb-2 border p-4 transition-all last:mb-0 group ${
                    hoveredResume === resume.id ? 'bg-[var(--cyber-primary)]/10' : ''
                  }`}
                  style={{ borderColor: 'rgba(0,255,65,0.18)' }}
                >
                  <div className="flex items-start gap-3">
                    <span className="font-terminal text-3xl" style={{ color: 'var(--cyber-primary-light)' }}>{resume.icon}</span>
                    <div className="flex-1">
                      <div className="font-mono text-sm font-bold uppercase tracking-[0.16em] transition-colors group-hover:text-[var(--cyber-primary-light)]" style={{ color: 'var(--cyber-primary)' }}>
                        {resume.title}
                      </div>
                      <div className="mt-1 text-sm font-mono" style={{ color: 'var(--cyber-primary)', opacity: 0.6 }}>
                        {resume.description}
                      </div>
                      <div className="mt-2 text-xs uppercase tracking-[0.16em] font-mono" style={{ color: 'var(--cyber-primary)', opacity: 0.4 }}>
                        Download PDF
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
