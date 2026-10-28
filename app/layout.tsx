import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Jaydyn Davis | Reverse Engineering & Vulnerability Research',
  description: 'DoD Secret-cleared researcher specializing in reverse engineering and vulnerability research. Battelle firmware work, ARM/MIPS analysis, C debugger and kernel development, and 2nd place at Hofstra-Amazon HUCTF.',
  keywords: ['reverse engineering', 'vulnerability research', 'ARM', 'MIPS', 'firmware', 'Ghidra', 'GDB', 'embedded security'],
  authors: [{ name: 'Jaydyn Davis' }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
