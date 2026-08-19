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

      {/* RFP / Specification Request Modal */}
      <RfpPortal isOpen={rfpOpen} onClose={handleCloseRfp} />

    </div>
  );
}
