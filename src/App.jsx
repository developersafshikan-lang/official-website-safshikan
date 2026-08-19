import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FleetShowcase from './components/FleetShowcase';
import Services from './components/Services';
import CommandOS from './components/CommandOS';
import MissionSimulator from './components/MissionSimulator';
import TechSpecs from './components/TechSpecs';
import RfpPortal from './components/RfpPortal';
import Footer from './components/Footer';

export default function App() {
  const [rfpOpen, setRfpOpen] = useState(false);

  const handleOpenRfp = () => setRfpOpen(true);
  const handleCloseRfp = () => setRfpOpen(false);

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 font-sans selection:bg-cyan-500 selection:text-black">
      
      {/* Navigation Header */}
      <Navbar onOpenRfp={handleOpenRfp} />

      {/* Hero Banner with telemetry & 3D drone display */}
      <Hero onOpenRfp={handleOpenRfp} />

      {/* Defense Fleet Product Showcase */}
      <FleetShowcase onOpenRfp={handleOpenRfp} />

      {/* Engineering & Defense Services */}
      <Services onOpenRfp={handleOpenRfp} />

      {/* Mission Range & Payload Interactive Simulator / Client Performance Expectation Sheet */}
      <MissionSimulator onOpenRfp={handleOpenRfp} />

      {/* AGRON Defense Ground Control Command Software */}
      <CommandOS />

      {/* Aerospace Engineering Capabilities */}
      <TechSpecs />

      {/* Footer */}
      <Footer onOpenRfp={handleOpenRfp} />

      {/* Mobile Bottom Sticky Quick Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#050914]/95 backdrop-blur-md border-t border-blue-500/40 px-2 py-2 flex items-center justify-around text-slate-300 font-mono text-[10px] shadow-[0_-4px_25px_rgba(0,119,255,0.25)]">
        <a href="#fleet" className="flex flex-col items-center gap-1 hover:text-sky-400 p-1">
          <span className="text-sky-400 font-bold">🛸</span>
          <span>Products</span>
        </a>
        <a href="#services" className="flex flex-col items-center gap-1 hover:text-sky-400 p-1">
          <span className="text-sky-400 font-bold">⚙️</span>
          <span>Services</span>
        </a>
        <a href="#simulator" className="flex flex-col items-center gap-1 hover:text-sky-400 p-1">
          <span className="text-amber-400 font-bold">📊</span>
          <span>Requirements</span>
        </a>
        <a href="https://wa.me/923213630768" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 text-emerald-400 p-1">
          <span className="text-emerald-400 font-bold">💬</span>
          <span>WhatsApp</span>
        </a>
        <button onClick={handleOpenRfp} className="flex flex-col items-center gap-1 text-sky-300 font-bold p-1">
          <span className="text-sky-300 font-bold">📋</span>
          <span>Get Quote</span>
        </button>
      </div>

      {/* Floating WhatsApp Action Button */}
      <a
        href="https://wa.me/923213630768?text=Hello%20Safshikan%20Aerospace%2C%20I%20have%20an%20inquiry%20regarding%20UAV%20systems"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-16 lg:bottom-6 right-4 sm:right-6 z-50 group flex items-center gap-3 p-3 sm:px-4 sm:py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-mono text-xs shadow-[0_0_25px_rgba(37,211,102,0.6)] hover:shadow-[0_0_35px_rgba(37,211,102,0.9)] transition-all duration-300 hover:scale-105"
        aria-label="Direct WhatsApp Contact"
        title="Chat on WhatsApp (+92 321 3630768)"
      >
        <div className="relative flex items-center justify-center">
          <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-white" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-white border-2 border-[#25D366] rounded-full animate-ping"></span>
        </div>
        <span className="hidden sm:inline font-orbitron font-bold tracking-wider uppercase text-[11px] whitespace-nowrap">WhatsApp Chat</span>
      </a>

      {/* RFP / Specification Request Modal */}
      <RfpPortal isOpen={rfpOpen} onClose={handleCloseRfp} />

    </div>
  );
}
