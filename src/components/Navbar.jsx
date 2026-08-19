import React, { useState, useEffect } from 'react';
import { Radio, Terminal, Menu, X, Shield } from 'lucide-react';

export default function Navbar({ onOpenRfp }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [utcTime, setUtcTime] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);

    const updateClock = () => {
      const now = new Date();
      setUtcTime(now.toUTCString().slice(17, 25) + ' UTC');
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#050914]/95 border-b border-blue-500/30 py-2 shadow-[0_4px_30px_rgba(0,119,255,0.25)] backdrop-blur-md' 
        : 'bg-gradient-to-b from-[#050914] via-[#050914]/90 to-transparent py-3.5'
    }`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* Left: Brand Logo & Optional Status */}
        <div className="flex items-center gap-3 shrink-0">
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-14 h-14 rounded-full bg-white p-2 flex items-center justify-center shadow-[0_0_22px_rgba(0,163,255,0.6)] border border-sky-400 group-hover:scale-105 transition-all shrink-0">
              <img 
                src="./assets/logo_blue_transparent.png" 
                alt="Safshikan Official Blue Logo" 
                className="w-full h-full object-contain"
                onError={(e) => { e.target.onerror=null; e.target.src='./assets/logo_blue.png'; }}
              />
              <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-emerald-400 border-2 border-[#050914] rounded-full animate-ping"></span>
              <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-emerald-400 border-2 border-[#050914] rounded-full"></span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-orbitron font-extrabold text-lg sm:text-xl tracking-wider text-white">SAFSHIKAN</span>
                <span className="px-1.5 py-0.5 text-[9px] font-mono bg-blue-950/80 text-sky-300 border border-blue-500/40 rounded uppercase tracking-wider font-bold">AEROSPACE</span>
              </div>
              <p className="text-[9px] font-mono text-slate-400 tracking-widest uppercase">NASTP Alpha // Rawalpindi</p>
            </div>
          </a>

          {/* Status Telemetry Pill */}
          <div className="hidden 2xl:flex items-center gap-2.5 px-3 py-1 rounded-full bg-[#0b1326]/90 border border-blue-500/30 text-[10px] font-mono shadow-[0_0_12px_rgba(0,119,255,0.15)] shrink-0">
            <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <Radio className="w-3 h-3 animate-pulse" />
              <span>ONLINE</span>
            </div>
            <div className="h-3 w-px bg-slate-700"></div>
            <div className="text-slate-200">
              <span className="text-slate-400">UTC:</span> {utcTime || '00:00:00'}
            </div>
          </div>
        </div>

        {/* Center: Nav links - Perfectly Centered */}
        <nav className="hidden lg:flex items-center justify-center gap-4 xl:gap-6 text-xs xl:text-sm font-medium text-slate-300 mx-auto font-sans">
          <a href="#products" className="hover:text-sky-400 transition-colors whitespace-nowrap">Products Catalog</a>
          <a href="#services" className="hover:text-sky-400 transition-colors whitespace-nowrap">Engineering Services</a>
          <a href="#agron-portal" className="hover:text-emerald-400 transition-colors whitespace-nowrap">AGRON Agri Portal</a>
          <a href="#simulator" className="hover:text-sky-400 transition-colors whitespace-nowrap">Quadcopter Requirements</a>
          <a href="#team" className="hover:text-sky-400 transition-colors whitespace-nowrap">Leadership</a>
        </nav>

        {/* Right: Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button 
            onClick={onOpenRfp}
            className="hidden sm:flex px-4 py-2 sm:px-5 sm:py-2.5 rounded bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 hover:from-blue-500 hover:to-cyan-300 text-white font-orbitron font-bold text-xs tracking-wider uppercase transition-all shadow-[0_0_18px_rgba(0,163,255,0.4)] items-center gap-2 whitespace-nowrap shrink-0"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Request Quotation</span>
          </button>

          <button 
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden p-2 rounded bg-slate-900 border border-slate-700 text-slate-300 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenu && (
        <div className="lg:hidden bg-[#050914]/98 border-b border-blue-500/30 px-6 pt-4 pb-6 space-y-3 font-mono text-xs shadow-2xl backdrop-blur-lg mt-2">
          <div className="flex items-center gap-3 py-2 text-emerald-400 border-b border-slate-800">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>UPLINK ONLINE | UTC: {utcTime}</span>
          </div>
          <a 
            href="#products" 
            onClick={() => setMobileMenu(false)}
            className="block py-2 text-slate-200 hover:text-sky-400 border-b border-slate-800/50"
          >
            &gt; Products Catalog
          </a>
          <a 
            href="#services" 
            onClick={() => setMobileMenu(false)}
            className="block py-2 text-slate-200 hover:text-sky-400 border-b border-slate-800/50"
          >
            &gt; Engineering Services
          </a>
          <a 
            href="#agron-portal" 
            onClick={() => setMobileMenu(false)}
            className="block py-2 text-slate-200 hover:text-emerald-400 border-b border-slate-800/50"
          >
            &gt; AGRON Agri Portal
          </a>
          <a 
            href="#simulator" 
            onClick={() => setMobileMenu(false)}
            className="block py-2 text-slate-200 hover:text-sky-400 border-b border-slate-800/50"
          >
            &gt; Quadcopter Requirements
          </a>
          <a 
            href="#team" 
            onClick={() => setMobileMenu(false)}
            className="block py-2 text-slate-200 hover:text-sky-400 border-b border-slate-800/50"
          >
            &gt; Leadership
          </a>
          <button 
            onClick={() => { setMobileMenu(false); onOpenRfp(); }}
            className="w-full mt-3 py-3 bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 text-white font-orbitron font-bold text-xs uppercase tracking-wider rounded shadow-[0_0_15px_rgba(0,163,255,0.4)] flex items-center justify-center gap-2"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Request Quotation</span>
          </button>
        </div>
      )}
    </header>
  );
}

