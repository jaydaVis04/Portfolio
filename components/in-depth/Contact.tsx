import ContactLinks from '@/components/shared/ContactLinks';
import { profile } from '@/lib/portfolio';

export default function Contact() {
  return (
    <section id="contact" className="detail-section contact-section" aria-labelledby="contact-title">
      <div>
        <h2 id="contact-title">Let&apos;s talk research.</h2>
        <p>Reverse engineering, vulnerability research, embedded security, and supporting security engineering.</p>
        <a className="email-link" href={'mailto:' + profile.email}>{profile.email}</a>
      </div>
      <ContactLinks email={false} />
    </section>
  );
}
