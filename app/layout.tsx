import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/lib/ThemeContext'

export const metadata: Metadata = {
  title: 'Jaydyn Davis | Reverse Engineering & Vulnerability Research',
  description: 'Secret-cleared Computer Science and Cybersecurity student focused on reverse engineering, vulnerability research, embedded systems, and low-level security analysis.',
  keywords: ['reverse engineering', 'vulnerability research', 'cybersecurity', 'computer architecture', 'low-level security', 'portfolio'],
  authors: [{ name: 'Jaydyn Davis' }],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
