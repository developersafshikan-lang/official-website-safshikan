import React from 'react';

// Catalogue-only artwork. Hero images and original technical photographs are unchanged.
const scenes = {
  'grim-reaper': '/assets/card-grim-reaper.webp',
  'bvlos-network': '/assets/card-bvlos-network.webp',
  'sentinel-vigilance': '/assets/home-hero.webp',
  'sovraan-1': '/assets/card-sovraan-1.webp',
  'sovraan-2': '/assets/card-sovraan-2.webp',
  'sovraan-3': '/assets/card-sovraan-3.webp',
  '7inch-digital': '/assets/card-7inch-digital.webp',
  '7inch-analog': '/assets/card-7inch-analog.webp',
  '5inch-digital': '/assets/card-5inch-digital.webp',
  '5inch-analog': '/assets/card-5inch-analog.webp',
  'agron-10l': '/assets/flight-agron-10l.webp',
  'agron-30l': '/assets/flight-agron-30l.webp',
  'agron-50l': '/assets/flight-agron-50l.webp',
};
// Frame the product area of existing artwork; exclude its poster headings/specifications.
const frames = {
  'grim-reaper': { viewBox: '0 780 940 646', width: 940, height: 1672 },
  'sovraan-1': { viewBox: '0 592 1122 642', width: 1122, height: 1402 },
};
export default function ProductVisual({ product }) {
  const original = false;
  const scene = scenes[product.id];
  const frame = !original && frames[product.id];
  const alt = product.name + (scene && !original ? ' — illustrative product scene' : ' — original product photo');
  return <>
    {frame ? <svg viewBox={frame.viewBox} preserveAspectRatio="xMidYMid meet" className="w-full h-full" role="img" aria-label={alt} style={{ background: '#071521' }}>
      <defs><clipPath id={`card-crop-${product.id}`}><rect x={frame.viewBox.split(' ')[0]} y={frame.viewBox.split(' ')[1]} width={frame.viewBox.split(' ')[2]} height={frame.viewBox.split(' ')[3]} /></clipPath></defs>
      <image href={scene} width={frame.width} height={frame.height} clipPath={`url(#card-crop-${product.id})`} />
    </svg> : <img src={scene && !original ? scene : product.image} alt={alt} className="w-full h-full object-cover" loading="lazy" decoding="async" />}
  </>;
}
