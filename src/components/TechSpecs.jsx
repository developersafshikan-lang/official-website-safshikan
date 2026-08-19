import React from 'react';
import { Cpu, Shield, Radio, Eye, Lock, Zap, Layers, Award } from 'lucide-react';

const TECH_PILLARS = [
  {
    icon: Shield,
    title: 'Stealth Carbon Matrix Airframe',
    badge: 'LOW RCS DESIGN',
    color: 'text-cyan-400',
    borderColor: 'border-cyan-500/30',
    description: 'Precision-molded radar absorbent carbon-composite structures designed to minimize radar reflection across X-band, S-band, and Ku-band tracking systems.'
  },
  {
    icon: Radio,
    title: 'Anti-Jamming FHSS Swarm Mesh',
    badge: 'EW RESISTANT',
    color: 'text-amber-400',
    borderColor: 'border-amber-500/30',
    description: 'Cryptographically secured frequency-hopping data links that automatically route telemetry across decentralized UAV swarm nodes when GPS or satellite signals are jammed.'
  },
  {
    icon: Cpu,
    title: 'On-Board Edge AI Neural Enclave',
    badge: 'AUTONOMOUS VISION',
    color: 'text-emerald-400',
    borderColor: 'border-emerald-500/30',
    description: 'Dual neural processing units performing real-time target classification, optical flow velocity estimation, and GPS-denied autonomous visual navigation.'
  },
  {
    icon: Eye,
    title: 'Multi-Spectral EO/MWIR Gimbal',
    badge: 'TARGET LOCKOUT',
    color: 'text-cyan-400',
    borderColor: 'border-cyan-500/30',
    description: 'Gyro-stabilized 3-axis payload pods featuring cooled MWIR thermal sensors, 4K optical cameras with 60x optical zoom, and eye-safe laser rangefinders.'
  }
];

export default function TechSpecs() {
  return (
    <section id="tech" className="py-24 bg-[#07090e] relative border-t border-slate-800">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-mono text-xs tracking-widest uppercase">
            <Layers className="w-3.5 h-3.5" />
            <span>AEROSPACE ENGINEERING EXCELLENCE</span>
          </div>
          <h2 className="font-orbitron font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            DEFENSE <span className="text-cyan-400">TECHNOLOGY & AVIONICS</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans">
            Safshikan builds every airframe, software module, and telemetry link to strict military reliability standards.
          </p>
        </div>

        {/* Pillar Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {TECH_PILLARS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className={`tactical-card p-6 sm:p-8 rounded-lg border ${item.borderColor} space-y-4 hover:border-cyan-500 transition-colors`}
              >
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded bg-slate-900 border border-slate-800 ${item.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono tracking-wider bg-slate-900 text-slate-300 px-2.5 py-1 rounded border border-slate-800">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-orbitron font-bold text-xl text-white">
                  {item.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed font-sans">
                  {item.description}
                </p>

                <div className="pt-2 flex items-center gap-2 font-mono text-xs text-slate-500">
                  <Lock className="w-3.5 h-3.5 text-cyan-400" />
                  <span>MIL-STD-810H & DEF-STAN 00-35 CERTIFIED</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
