import React, { useState } from 'react';
import { Shield, Eye, Target, Zap, ChevronRight, Play, Crosshair, Cpu, Award } from 'lucide-react';

export default function Hero({ onOpenRfp, onSelectDrone }) {
  const [activeTab, setActiveTab] = useState('stealth');

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center tactical-grid">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Telemetry */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Classification & Status Badge */}
            <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded bg-cyan-950/60 border border-cyan-500/40 text-cyan-400 font-mono text-xs tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>CLASSIFIED DEFENSE TECHNOLOGY</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-300">MILITARY SPECIFICATION UAV</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-orbitron font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
              TACTICAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-amber-400 text-glow-cyan">AUTONOMOUS</span> DEFENSE UAVs
            </h1>

            {/* Subtext */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-sans">
              Safshikan engineers state-of-the-art stealth reconnaissance, precision tactical strike UAVs, and vertical takeoff aerospace platforms. Integrated with our proprietary <strong className="text-cyan-400 font-mono">AGRON Defense OS</strong> for real-time AI target tracking and secure swarm command.
            </p>

            {/* Quick Telemetry Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              <div className="tactical-card p-3 rounded">
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <Target className="w-3.5 h-3.5 text-cyan-400" />
                  <span>RANGE</span>
                </div>
                <p className="font-orbitron font-bold text-xl text-white mt-1">450+ <span className="text-xs text-cyan-400">KM</span></p>
              </div>

              <div className="tactical-card p-3 rounded">
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <Eye className="w-3.5 h-3.5 text-amber-400" />
                  <span>STEALTH RCS</span>
                </div>
                <p className="font-orbitron font-bold text-xl text-white mt-1">&lt;0.01 <span className="text-xs text-amber-400">m²</span></p>
              </div>

              <div className="tactical-card p-3 rounded">
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <Zap className="w-3.5 h-3.5 text-emerald-400" />
                  <span>ENDURANCE</span>
                </div>
                <p className="font-orbitron font-bold text-xl text-white mt-1">14+ <span className="text-xs text-emerald-400">HRS</span></p>
              </div>

              <div className="tactical-card p-3 rounded">
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                  <span>AI TRACKING</span>
                </div>
                <p className="font-orbitron font-bold text-xl text-white mt-1">99.8 <span className="text-xs text-cyan-400">% ACC</span></p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button 
                onClick={onOpenRfp}
                className="px-6 py-3.5 rounded bg-cyan-500 hover:bg-cyan-400 text-black font-orbitron font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.4)] flex items-center gap-2"
              >
                <Shield className="w-4 h-4" />
                <span>Request Defense Specifications</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <a 
                href="#fleet"
                className="px-6 py-3.5 rounded bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-slate-200 font-orbitron font-semibold text-sm tracking-wider uppercase transition-all flex items-center gap-2 hover:border-cyan-500/50"
              >
                <Crosshair className="w-4 h-4 text-cyan-400" />
                <span>Explore Fleet</span>
              </a>
            </div>

            {/* Trust & Defense Badges */}
            <div className="pt-6 border-t border-slate-800/80 flex items-center gap-6 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                <span>MIL-STD-810H CERTIFIED BUILD</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-cyan-400" />
                <span>ANTI-JAMMING MESH TELEMETRY</span>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Tactical UAV Display */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-lg overflow-hidden tactical-card p-2 border border-cyan-500/30 group">
              
              {/* Radar Sweep Effect */}
              <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-cyan-500"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-cyan-500/50"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent animate-radar-sweep origin-center"></div>
              </div>

              {/* Drone Render */}
              <div className="relative aspect-[16/10] bg-slate-950 rounded overflow-hidden">
                <img 
                  src="/assets/safshikan_stealth_uav.jpg" 
                  alt="Safshikan Stealth Reconnaissance Defense UAV" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* HUD Corner Markers */}
                <div className="absolute top-3 left-3 text-[10px] font-mono bg-black/70 text-cyan-400 px-2 py-1 border border-cyan-500/30 rounded flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping"></span>
                  <span>UAV-01 // TACTICAL-X</span>
                </div>

                <div className="absolute bottom-3 right-3 text-[10px] font-mono bg-black/80 text-slate-300 px-2.5 py-1 border border-slate-700 rounded">
                  ALT: 18,500 FT | SPD: 320 KM/H
                </div>

                {/* Target Scope Reticle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <div className="w-16 h-16 border border-cyan-400/60 rounded-full flex items-center justify-center animate-pulse">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  </div>
                </div>

              </div>

              {/* Drone Specs Quick Toggle Bar */}
              <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs font-mono">
                <button 
                  onClick={() => onSelectDrone && onSelectDrone('tactical-x')}
                  className="py-2 bg-slate-900 hover:bg-cyan-950/60 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-400 rounded transition-colors"
                >
                  Safshikan Tactical-X
                </button>
                <button 
                  onClick={() => onSelectDrone && onSelectDrone('apex-strike')}
                  className="py-2 bg-slate-900 hover:bg-cyan-950/60 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-400 rounded transition-colors"
                >
                  Apex-Strike Combat
                </button>
                <button 
                  onClick={() => onSelectDrone && onSelectDrone('vtol-sentry')}
                  className="py-2 bg-slate-900 hover:bg-cyan-950/60 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-400 rounded transition-colors"
                >
                  Sentinel-VTOL
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
