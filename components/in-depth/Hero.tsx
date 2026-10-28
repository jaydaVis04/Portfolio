import ContactLinks from '@/components/shared/ContactLinks';
import { profile } from '@/lib/portfolio';

export default function Hero() {
  return (
    <section className="detail-hero" aria-labelledby="detail-title">
      <p className="context">{profile.clearance} / {profile.location}</p>
      <h1 id="detail-title">Reverse engineering &<br />vulnerability research.</h1>
      <div className="detail-hero-bottom">
        <p>I am Jaydyn Davis. I specialize in embedded targets, firmware debugging, and memory investigation, with a passion for understanding systems at their lowest level.</p>
        <ContactLinks />
      </div>
    </section>
  );
}
