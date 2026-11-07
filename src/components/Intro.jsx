import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Intro() {
  const section = useRef(null);
  useEffect(() => {
    const element = section.current;
    if (!element || !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { element.classList.add('is-visible'); observer.disconnect(); }
    }, { threshold: 0.12 });
    element.classList.add('reveal-ready');
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return (
    <section id="beyond" className="beyond-section" ref={section} aria-labelledby="beyond-title">
      <div className="beyond-scene" aria-hidden="true"><img src="/assets/home-beyond.webp" alt="" width="1672" height="941" loading="lazy" decoding="async" /></div>
      <div className="beyond-shade" aria-hidden="true" />
      <div className="home-container beyond-content">
        <p className="home-eyebrow">Purpose in every flight</p>
        <h2 id="beyond-title">ENGINEERED<br />TO GO BEYOND.</h2>
        <p>We design and develop professional drone systems<br className="desktop-break" /> for the challenges that matter on the ground.</p>
        <a href="#about" className="home-button home-button--outline">Discover Safshikan <ArrowRight size={17} aria-hidden="true" /></a>
      </div>
      <div className="home-container beyond-capabilities" aria-label="Safshikan expertise">
        <div><strong>UAV platforms</strong><span>Purpose-built systems</span></div>
        <div><strong>Engineering</strong><span>Design & integration</span></div>
        <div><strong>AGRON</strong><span>Precision agriculture</span></div>
        <div><strong>Field support</strong><span>Training & maintenance</span></div>
      </div>
    </section>
  );
}
