import { projects, supportingProjects } from '@/lib/portfolio';

export default function Projects() {
  return (
    <section id="projects" className="detail-section" aria-labelledby="projects-title">
      <div className="section-heading">
        <h2 id="projects-title">Projects</h2>
        <p>Supporting tools built for investigation and secure systems.</p>
      </div>
      <div className="project-list">
        {projects.map((project) => (
          <article key={project.name} className="project-entry">
            <div className="project-entry-heading">
              <p className="context">{project.category}</p>
              <h3><a href={project.href} target="_blank" rel="noopener noreferrer">{project.name}</a></h3>
              <a className="text-link" href={project.href} target="_blank" rel="noopener noreferrer" aria-label={'View ' + project.name + ' on GitHub'}>View repository</a>
            </div>
            <div>
              <p>{project.description}</p>
              <p className="project-skills">{project.skills.join(', ')}</p>
              <details className="project-details">
                <summary>Implementation details</summary>
                <ul>{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
              </details>
            </div>
          </article>
        ))}
      </div>
      <details className="disclosure">
        <summary><span>More builds<span className="summary-note">Frontend, data extraction, and C++</span></span><span className="disclosure-indicator" aria-hidden="true" /></summary>
        <div className="supporting-list">
          {supportingProjects.map((project) => (
            <article key={project.name}>
              <h3>{'href' in project && project.href ? <a href={project.href} target="_blank" rel="noopener noreferrer">{project.name}</a> : project.name}</h3>
              <p>{project.summary}</p>
              {!('href' in project) && <span className="availability-note">Repository unavailable</span>}
            </article>
          ))}
        </div>
      </details>
    </section>
  );
}
