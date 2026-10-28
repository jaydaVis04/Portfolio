import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="detail-footer">
      <span>Jaydyn Davis / In depth portfolio</span>
      <div><Link href="/">Back to overview</Link><a href="#main-content">Back to top</a></div>
    </footer>
  );
}
