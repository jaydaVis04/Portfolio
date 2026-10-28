import Link from 'next/link';

import MobileNavigation from './MobileNavigation';

const sections = ['Experience', 'Projects', 'Labs', 'Skills', 'About', 'Contact'];

export default function PortfolioHeader({ inDepth = false }: { inDepth?: boolean }) {
  return (
    <header className="site-header">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <div className="page-width header-inner">
        <Link href="/" className="wordmark" aria-label="Jaydyn Davis home">Jaydyn Davis<span className="name-dot" aria-hidden="true" /></Link>
        <span className="page-mode">{inDepth ? 'In depth' : 'Overview'}</span>
        {inDepth && (
          <nav className="desktop-nav" aria-label="Portfolio sections">
            {sections.map((section) => <a key={section} href={'#' + section.toLowerCase()}>{section}</a>)}
          </nav>
        )}
        <Link href={inDepth ? '/' : '/in-depth'} aria-label={inDepth ? 'Back to overview' : 'In depth portfolio'} className={'button header-switch ' + (inDepth ? 'button-outline' : 'button-primary')}>
          {inDepth ? 'Overview' : 'In depth portfolio'}
        </Link>
        {inDepth && <MobileNavigation sections={sections} />}
      </div>
    </header>
  );
}
