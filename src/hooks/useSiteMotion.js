import { useEffect, useRef } from 'react';

// Decorative motion only. Every interaction and every piece of content remains
// available with reduced motion or without pointer hover.
export default function useSiteMotion(contentKey) {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    let teardown = () => {};

    const setup = () => {
      teardown();
      const elements = [...root.querySelectorAll('[data-reveal]')];
      const cards = [...root.querySelectorAll('[data-motion-card]')];
      const clearCard = (card) => {
        ['--tilt-x', '--tilt-y', '--image-x', '--image-y', '--glow-x', '--glow-y'].forEach(name => card.style.removeProperty(name));
        card.classList.remove('pointer-active');
      };
      if (reduced.matches) {
        elements.forEach(el => el.classList.remove('reveal-pending'));
        cards.forEach(clearCard);
        teardown = () => {};
        return;
      }

      const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.remove('reveal-pending');
          entry.target.dataset.revealed = 'true';
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.06, rootMargin: '0px 0px -24px 0px' }) : null;

      elements.forEach(el => {
        // Do not replay sections already read when the catalogue filter changes.
        if (el.dataset.revealed || !observer) return;
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * .93) {
          el.dataset.revealed = 'true';
          return;
        }
        el.classList.add('reveal-pending');
        observer.observe(el);
      });

      const listeners = [];
      if (finePointer.matches) cards.forEach(card => {
        let frame = 0;
        let point = null;
        const move = event => {
          if (event.pointerType === 'touch') return;
          point = { x: event.clientX, y: event.clientY };
          if (frame) return;
          frame = requestAnimationFrame(() => {
            frame = 0;
            const rect = card.getBoundingClientRect();
            const x = Math.max(0, Math.min(1, (point.x - rect.left) / rect.width));
            const y = Math.max(0, Math.min(1, (point.y - rect.top) / rect.height));
            card.style.setProperty('--tilt-x', `${(0.5 - y) * 5}deg`);
            card.style.setProperty('--tilt-y', `${(x - 0.5) * 5}deg`);
            card.style.setProperty('--image-x', `${(x - 0.5) * 12}px`);
            card.style.setProperty('--image-y', `${(y - 0.5) * 8}px`);
            card.style.setProperty('--glow-x', `${x * 100}%`);
            card.style.setProperty('--glow-y', `${y * 100}%`);
            card.classList.add('pointer-active');
          });
        };
        const leave = () => {
          cancelAnimationFrame(frame);
          frame = 0;
          clearCard(card);
        };
        card.addEventListener('pointermove', move, { passive: true });
        card.addEventListener('pointerleave', leave);
        card.addEventListener('pointercancel', leave);
        listeners.push(() => {
          card.removeEventListener('pointermove', move);
          card.removeEventListener('pointerleave', leave);
          card.removeEventListener('pointercancel', leave);
          leave();
        });
      });

      // Keyboard focus must never land on an invisible reveal target.
      const revealFocused = event => {
        let el = event.target;
        while (el && el !== root) {
          if (el.hasAttribute('data-reveal')) {
            el.classList.remove('reveal-pending');
            el.dataset.revealed = 'true';
            observer?.unobserve(el);
          }
          el = el.parentElement;
        }
      };
      root.addEventListener('focusin', revealFocused);
      teardown = () => {
        observer?.disconnect();
        elements.forEach(el => el.classList.remove('reveal-pending'));
        listeners.forEach(remove => remove());
        root.removeEventListener('focusin', revealFocused);
      };
    };

    setup();
    reduced.addEventListener('change', setup);
    finePointer.addEventListener('change', setup);
    return () => {
      teardown();
      reduced.removeEventListener('change', setup);
      finePointer.removeEventListener('change', setup);
    };
  }, [contentKey]);

  return rootRef;
}
