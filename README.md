# Jaydyn Davis - Portfolio

A next-generation interactive portfolio with cyberpunk theme and dynamic color switching.

## ✨ Features

### Interactive Resume Selector with Theme Switching
- **Hover over resumes** to preview theme colors
- **Green theme** → Software Engineering resume
- **Blue theme** → Blue Team/Defensive Security resume  
- **Red theme** → Red Team/Offensive Security resume
- **Smooth color transitions** across entire UI

### Visual Effects
- Custom cursor with instant tracking
- Floating cubes animation
- Scanline CRT effect
- Grid background
- Neon glows
- Theme-aware colors

## 📁 Structure

```
portfolio/
├── app/
│   ├── globals.css      # Theme-aware styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main page
├── components/
│   ├── About.tsx         # Bio & skills
│   ├── Contact.tsx       # Contact (no phone/location)
│   ├── CustomCursor.tsx  # Fast cursor
│   ├── Experience.tsx    # All 5 jobs
│   ├── Footer.tsx        # Footer
│   ├── Hero.tsx          # Landing
│   ├── Labs.tsx          # ALL 40+ labs with filters
│   ├── Navigation.tsx    # Nav with resume selector
│   ├── Projects.tsx      # Featured + GitHub
│   └── ResumeSelector.tsx # Theme-switching dropdown
├── lib/
│   └── ThemeContext.tsx  # Theme state management
└── public/
    ├── Jaydyn_Davis_Software_Egineering_Resume.pdf
    ├── Jaydyn_Davis_BLUE_TEAM_Resume.pdf
    └── Jaydyn_Davis_RED_TEAM_Resume.pdf
```

## 🎨 Color Themes

**Default (Green)** - Software Engineering
- Primary: #00ff41
- Light: #39ff14
- Dark: #003d19

**Blue** - Defensive Security  
- Primary: #00d9ff
- Light: #33e0ff
- Dark: #003d4d

**Red** - Offensive Security
- Primary: #ff0055
- Light: #ff3377
- Dark: #4d0019

## 🔧 Customization

Edit `/lib/ThemeContext.tsx` to modify themes.
Edit `/components/ResumeSelector.tsx` to change resume mappings.

## 📊 Features Checklist

✅ Fast cursor (no lag)
✅ Theme switching on resume hover
✅ All 40+ labs included
✅ All 5 work experiences
✅ Privacy protected (no phone/location)
✅ 3 downloadable PDF resumes
✅ GitHub API integration
✅ Fully responsive
✅ SEO optimized

---

Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.
# Portfolio
