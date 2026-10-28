'use client';

import { useRef } from 'react';

export default function MobileNavigation({ sections }: { sections: string[] }) {
  const menu = useRef<HTMLDetailsElement>(null);

  function closeMenu() {
    if (menu.current) menu.current.open = false;
  }

  return (
    <details ref={menu} className="mobile-navigation" onKeyDown={(event) => {
      if (event.key === 'Escape') {
        closeMenu();
        menu.current?.querySelector('summary')?.focus();
      }
    }}>
      <summary>Menu</summary>
      <nav aria-label="Mobile portfolio sections">
        {sections.map((section) => <a key={section} href={'#' + section.toLowerCase()} onClick={closeMenu}>{section}</a>)}
      </nav>
    </details>
  );
}
