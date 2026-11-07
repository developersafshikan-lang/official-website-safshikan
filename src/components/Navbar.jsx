import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const links = [['Home', '#home'], ['Drones', '#platforms'], ['Solutions', '#capabilities'], ['About', '#about'], ['Contact', '#contact']];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    const onKey = (event) => { if (event.key === 'Escape') setMenuOpen(false); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('keydown', onKey);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('keydown', onKey); };
  }, []);

  return (
    <header className={`site-header ${scrolled || menuOpen ? 'site-header--solid' : ''}`}>
      <div className="site-header__inner home-container">
        <a href="#home" className="site-brand" aria-label="Safshikan home" onClick={() => setMenuOpen(false)}>
          <img src="/assets/home-logo.webp" alt="" width="64" height="64" /><span>SAFSHIKAN</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <div className="site-header__actions">
          <a className="home-button home-button--outline header-contact" href="#contact">Get in touch <ArrowUpRight size={15} aria-hidden="true" /></a>
          <button className="mobile-menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation" hidden={!menuOpen}>
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}<ArrowUpRight size={17} aria-hidden="true" /></a>)}
        <a href="https://agron.safshikan.com" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>AGRON Agriculture <ArrowUpRight size={17} aria-hidden="true" /></a>
      </nav>
    </header>
  );
}
