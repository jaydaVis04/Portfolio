import Image from 'next/image';
import { ctf } from '@/lib/portfolio';

export default function Competition({ compact = false }: { compact?: boolean }) {
  return (
    <article className={'competition ' + (compact ? 'competition-compact' : 'competition-full')}>
      <div className="competition-photo">
        <Image src="/images/ctf.jpeg" alt="Hofstra-Amazon CTF team at the competition scoreboard" fill sizes={compact ? '(max-width: 640px) 120px, 160px' : '(max-width: 760px) 100vw, 380px'} />
      </div>
      <div className="competition-content">
        <p className="context">Hofstra-Amazon HUCTF</p>
        <h2>{compact ? '2nd place.' : ctf.title}</h2>
        <p className="award">{ctf.award} <span>of {ctf.pool}</span></p>
        <p>{compact ? 'Reverse engineering, pwn, and cryptography with James Scardino.' : ctf.summary}</p>
        {!compact && (
          <dl className="challenge-list">
            {ctf.challenges.map((challenge) => <div key={challenge.title}><dt>{challenge.title}</dt><dd>{challenge.text}</dd></div>)}
          </dl>
        )}
      </div>
    </article>
  );
}
