import React, { useEffect, useRef, useState } from 'react';
import slides from './bannerSlides.json';
import './ThreeDroneBanner.css';

export default function Hero() {
  const root = useRef(null);
  const [active, setActive] = useState(0);
  const [cycle, setCycle] = useState(0);
  const [ready, setReady] = useState(false);
  const [paused, setPaused] = useState(false);
  const [manual, setManual] = useState(false);
  const [visible, setVisible] = useState(true);
  const [hidden, setHidden] = useState(false);
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    let alive = true;
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    const motion = () => setReduced(media.matches);
    const visibility = () => setHidden(document.hidden);
    motion(); visibility();
    media.addEventListener('change', motion);
    document.addEventListener('visibilitychange', visibility);
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    observer.observe(root.current);
    Promise.all(slides.flatMap(s => [s.image, s.background]).map(src => new Promise(resolve => {
      const image = new Image();
      image.onload = () => image.decode ? image.decode().catch(() => {}).then(resolve) : resolve();
      image.onerror = resolve;
      image.src = src;
    }))).then(() => { if (alive) setReady(true); });
    return () => { alive = false; observer.disconnect(); media.removeEventListener('change', motion); document.removeEventListener('visibilitychange', visibility); };
  }, []);
  const stopped = !ready || paused || hidden || !visible;
  const select = index => { setActive((index + slides.length) % slides.length); setCycle(n => n + 1); setManual(true); setPaused(true); };
  const toggle = () => {
    if (paused && manual) { setManual(false); setCycle(n => n + 1); }
    setPaused(value => !value);
  };
  return <section id="home" ref={root} className={`sf-banner ${stopped ? 'sf-paused' : ''} ${reduced || manual ? 'sf-static' : ''}`} aria-labelledby="hero-title" aria-roledescription="carousel" aria-label="Drone banner">
    <div className="sf-scenery" aria-hidden="true">{slides.map((slide,i) => <div key={slide.name} className={`sf-scene ${i === active ? 'sf-active' : ''}`} style={{backgroundImage:`url("${slide.background}")`}} />)}</div>
    <div className="sf-shade" aria-hidden="true"/><div className="sf-mist" aria-hidden="true"/>
    <h1 id="hero-title">BUILT FOR <span>WHAT’S NEXT.</span></h1>
    <div className="sf-stage"><div key={`flight-${cycle}-${active}`} className="sf-pass" onAnimationEnd={event => {
      if(event.target === event.currentTarget && event.animationName === 'sf-flight') { setActive(i => (i + 1) % slides.length); setCycle(n => n + 1); }
    }}><div className="sf-hover"><img src={slides[active].image} alt={`${slides[active].name} — cinematic drone illustration`} decoding="async" fetchpriority="high" /></div></div></div>
    <div key={`name-${cycle}-${active}`} className="sf-name" aria-live={paused ? 'polite' : 'off'}>{slides[active].name}</div>
    <nav className="sf-controls" aria-label="Banner controls">
      <span className="sf-count">{String(active+1).padStart(2,'0')} / {String(slides.length).padStart(2,'0')}</span>
      <button type="button" aria-label="Previous drone" onClick={() => select(active-1)}>←</button>
      <div className="sf-dots">{slides.map((slide,i) => <button type="button" key={slide.name} className="sf-dot" aria-label={`Show ${slide.name}`} aria-pressed={active === i} onClick={() => select(i)} />)}</div>
      <button type="button" aria-label="Next drone" onClick={() => select(active+1)}>→</button>
      {!reduced && <button type="button" aria-label={paused ? 'Resume animation' : 'Pause animation'} onClick={toggle}>{paused ? '▶' : 'Ⅱ'}</button>}
    </nav>
  </section>;
}
