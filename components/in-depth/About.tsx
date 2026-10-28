import { profile } from '@/lib/portfolio';

export default function About() {
  return (
    <section id="about" className="detail-section education-section" aria-labelledby="education-title">
      <div>
        <h2 id="education-title">Education</h2>
        <h3>{profile.university}</h3>
        <p>{profile.degree}</p>
        <p className="education-facts">GPA {profile.gpa} / Expected {profile.graduation}</p>
      </div>
      <div>
        <h3>Recognition & foundations</h3>
        <p>Dean&apos;s List five times. Upsilon Pi Epsilon Computer Science Honor Society. National Society of Leadership and Success.</p>
        <details className="project-details">
          <summary>Coursework & honors</summary>
          <p>Operating Systems, Ethical Hacking, Network Security, Data Structures & Algorithms, Intro to Cryptography, Computer Networking, Software Engineering, and Database Management.</p>
          <p>Dean&apos;s List: Spring 2023, Fall 2023, Spring 2025, Fall 2025, and Spring 2026.</p>
        </details>
      </div>
    </section>
  );
}
