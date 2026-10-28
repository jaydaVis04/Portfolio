import Image from 'next/image';
import { battelle, teaching } from '@/lib/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="detail-section" aria-labelledby="experience-title">
      <div className="section-heading">
        <h2 id="experience-title">Experience</h2>
        <p>Research, development, and technical teaching.</p>
      </div>
      <article className="battelle-feature">
        <div className="battelle-photo">
          <Image src="/images/battelle.jpeg" alt="Jaydyn Davis at Battelle" fill sizes="(max-width: 760px) 100vw, 340px" />
        </div>
        <div className="battelle-work">
          <p className="context">Mission Focused Tools / {battelle.location}</p>
          <h3>Battelle</h3>
          <p className="job-role">{battelle.role}</p>
          <p className="job-period">{battelle.period}</p>
          <dl className="research-highlights">
            {battelle.highlights.map((highlight) => <div key={highlight.title}><dt>{highlight.title}</dt><dd>{highlight.text}</dd></div>)}
          </dl>
        </div>
      </article>
      <details className="disclosure teaching-disclosure">
        <summary><span>Teaching & mentorship<span className="summary-note">Operating Systems TA, STEM teaching, coding coaching</span></span><span className="disclosure-indicator" aria-hidden="true" /></summary>
        <div className="teaching-list">
          {teaching.map((job) => (
            <article key={job.role}>
              <h3>{job.role}</h3>
              <p className="job-period">{job.organization} / {job.context}</p>
              <p>{job.description}</p>
            </article>
          ))}
        </div>
      </details>
    </section>
  );
}
