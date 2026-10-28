import { labs, labCategories, labRepos } from '@/lib/labs';

export default function Labs() {
  const count = labCategories.reduce((total, category) => total + labs[category.id].length, 0);

  return (
    <section id="labs" className="detail-section" aria-labelledby="labs-title">
      <div className="section-heading">
        <h2 id="labs-title">Lab archive</h2>
        <p>{count} exercises in authorized academic and controlled environments.</p>
      </div>
      <div className="lab-repositories">
        {labRepos.map((repo) => <a key={repo.href} className="button button-outline" href={repo.href} target="_blank" rel="noopener noreferrer">{repo.label}</a>)}
      </div>
      <div className="lab-groups">
        {labCategories.map((category) => (
          <details key={category.id} className="disclosure">
            <summary>
              <span>{category.label}<span className="summary-note">{category.summary}</span></span>
              <span className="archive-count">{labs[category.id].length} labs</span>
              <span className="disclosure-indicator" aria-hidden="true" />
            </summary>
            <div className="lab-entries" tabIndex={0} role="region" aria-label={category.label + ' lab entries'}>
              {labs[category.id].map((lab) => <article key={lab.title}><h3>{lab.title}</h3><p>{lab.desc}</p></article>)}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
