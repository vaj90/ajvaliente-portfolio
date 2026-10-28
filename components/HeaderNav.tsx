'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Code2, Menu, X } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Experience', href: '/experience' },
  { name: 'Toolkit', href: '/tools' },
];

export default function HeaderNav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-inner">
        <Link className="brand-lockup" href="/" aria-label="Allan John Valiente home" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark"><Code2 size={20} /></span>
          <span className="brand-name">ALLAN JOHN <b>VALIENTE</b><small>FULL-STACK DEVELOPER</small></span>
        </Link>
        <button className="mobile-menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`} aria-label="Main navigation">
          {navLinks.map((link) => <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className={pathname === link.href ? 'nav-link nav-link-active' : 'nav-link'}>{link.name}</Link>)}
          <a className="nav-contact" href="mailto:allanjohn.valiente@gmail.com" onClick={() => setMenuOpen(false)}>Contact <ArrowUpRight size={15} /></a>
        </nav>
      </div>
    </header>
  );
}
