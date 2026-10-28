import { profile } from '@/lib/portfolio';

export default function ContactLinks({ email = true }: { email?: boolean }) {
  return (
    <div className="contact-links">
      {email && <a href={'mailto:' + profile.email}>Email</a>}
      <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </div>
  );
}
