import { skillGroups } from '@/lib/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="detail-section" aria-labelledby="skills-title">
      <div className="section-heading">
        <h2 id="skills-title">Technical skills</h2>
        <p>Hands-on tools, with foundational knowledge labeled.</p>
      </div>
      <dl className="skills-list">
        {skillGroups.map((group) => <div key={group.title}><dt>{group.title}</dt><dd>{group.skills}</dd></div>)}
      </dl>
    </section>
  );
}
