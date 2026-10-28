import Image from 'next/image';
import Link from 'next/link';
import PortfolioHeader from '@/components/shared/PortfolioHeader';
import ContactLinks from '@/components/shared/ContactLinks';
import Competition from '@/components/shared/Competition';
import { profile, projects } from '@/lib/portfolio';

export default function SimplePortfolio() {
  return (
    <>
      <PortfolioHeader />
      <main id="main-content" className="page-width overview">
        <section className="overview-hero" aria-labelledby="overview-title">
          <div className="hero-copy">
            <p className="context">Computer Science & Cybersecurity / {profile.clearance}</p>
            <h1 id="overview-title">Reverse engineering.<br />Vulnerability research.</h1>
            <p className="hero-intro">I specialize in embedded reverse engineering and low-level security research. I am passionate about understanding firmware, memory, and how systems fail.</p>
            <p className="hero-tools">C/C++ <span>/</span> ARM & MIPS <span>/</span> Ghidra <span>/</span> GDB/pwndbg <span>/</span> Binary Ninja</p>
            <div className="hero-actions">
              <a className="button button-primary" href={'mailto:' + profile.email}>Get in touch</a>
              <ContactLinks email={false} />
            </div>
          </div>
          <figure className="hero-photo">
            <div className="hero-photo-frame">
              <Image src="/images/battelle.jpeg" alt="Jaydyn Davis at Battelle during his reverse engineering and vulnerability research co-op" fill priority sizes="(max-width: 700px) 100vw, 340px" />
            </div>
            <figcaption>Jaydyn Davis at Battelle</figcaption>
          </figure>
        </section>

        <div className="academic-line">
          <strong>{profile.university}</strong>
          <span>{profile.degree}</span>
          <span>GPA {profile.gpa}</span>
          <span>Expected {profile.graduation}</span>
        </div>

        <section className="overview-evidence" aria-label="Experience and competition results">
          <article className="battelle-summary">
            <p className="context">Battelle / Mission Focused Tools</p>
            <h2>Firmware. Memory.<br />Offensive cyber research.</h2>
            <p>Reverse engineered ARM and MIPS targets. Built a C debugger and kernel module for device memory access. Automated research workflows with Linux and Docker.</p>
            <Link className="text-link" href="/in-depth#experience">Explore the experience</Link>
          </article>
          <Competition compact />
        </section>

        <section className="overview-projects" aria-labelledby="selected-projects">
          <div className="section-heading compact-heading">
            <h2 id="selected-projects">Selected engineering</h2>
            <Link className="text-link" href="/in-depth#projects">All projects</Link>
          </div>
          <div className="project-strip">
            {projects.map((project) => (
              <a key={project.name} href={project.href} target="_blank" rel="noopener noreferrer" className="project-preview">
                <h3>{project.name}<svg className="external-mark" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10" /></svg></h3>
                <p>{project.summary}</p>
              </a>
            ))}
          </div>
        </section>
        <footer className="overview-footer">
          <a href={'mailto:' + profile.email}>{profile.email}</a>
          <Link className="text-link" href="/in-depth">Experience, skills & lab archive</Link>
        </footer>
      </main>
    </>
  );
}
