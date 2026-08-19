import React, { useState } from 'react';
import { Shield, Eye, Crosshair, Zap, Cpu, FileText, Download, Check, ChevronRight, X, Radio } from 'lucide-react';

const DEFENSE_FLEET = [
  {
    id: 'tactical-x',
    name: 'Safshikan Tactical-X',
    category: 'ISR & Stealth',
    tagline: 'High-Altitude Stealth Reconnaissance & Surveillance UAV',
    image: '/assets/safshikan_stealth_uav.jpg',
    description: 'Engineered for covert ISR missions deep inside hostile environments. Built with radar-absorbent carbon matrix materials, satellite mesh uplink, and dual MWIR thermal sensors.',
    specs: {
      range: '450 km',
      endurance: '14 hours',
      maxCeiling: '22,000 ft',
      speed: '340 km/h',
      payload: '18 kg',
      rcs: '<0.008 m²',
      sensors: 'MWIR Thermal + 4K Electro-Optical 60x Zoom',
      comms: 'Encrypted Anti-Jamming SATCOM & UHF Mesh'
    },
    features: [
      'Radar Absorbent Carbon-Composite Stealth Airframe',
      'Dual EO/IR Optical Turret with Laser Rangefinder',
      'Autonomous Terrain-Following AI Flight Controller',
      'Zero-EM Radiation Silent Glide Mode'
    ]
  },
  {
    id: 'apex-strike',
    name: 'Safshikan Apex-Strike',
    category: 'Tactical Strike',
    tagline: 'Precision Payload & Tactical Engagement UAV Platform',
    image: '/assets/safshikan_strike_drone.jpg',
    description: 'Designed for precision tactical strike and rapid response scenarios. Features dual weapon bay lockouts, AI target acquisition algorithms, and emergency abort auto-return.',
    specs: {
      range: '320 km',
      endurance: '8 hours',
      maxCeiling: '16,000 ft',
      speed: '380 km/h',
      payload: '35 kg',
      rcs: '<0.02 m²',
      sensors: 'Laser Designator + Synthetic Aperture Radar (SAR)',
      comms: 'Triple-Redundant Frequency-Hopping Data Link'
    },
    features: [
      'High-G maneuverability delta wing layout',
      'Laser-guided target illumination and marking',
      'Real-time battle damage assessment (BDA) telemetry',
      'Automated Return-To-Home under ECM blackout'
    ]
  },
  {
    id: 'vtol-sentry',
    name: 'Safshikan Sentinel-VTOL',
    category: 'VTOL & Base Security',
    tagline: 'Vertical Takeoff Autonomous Reconnaissance & Security Drone',
    image: '/assets/safshikan_vtol_sentry.jpg',
    description: 'Combines the vertical takeoff convenience of multi-rotors with the efficiency of fixed-wing tactical flight. Ideal for shipboard deployment and forward military bases.',
    specs: {
      range: '280 km',
      endurance: '6.5 hours',
      maxCeiling: '14,000 ft',
      speed: '260 km/h',
      payload: '12 kg',
      rcs: '<0.03 m²',
      sensors: '360° Gyro-Stabilized Thermal Night Vision',
      comms: 'AGRON Mesh Node & Encrypted Direct Radio'
    },
    features: [
      'Zero runway requirement - vertical hover takeoff/landing',
      'Quick-deploy modular wing assembly (<3 minutes)',
      'Shipboard marine-grade salt-spray corrosion protection',
      'Autonomous landing on moving naval vessels'
    ]
  },
  {
    id: 'command-center',
    name: 'Safshikan Aegis-Sentry',
    category: 'VTOL & Base Security',
    tagline: 'Autonomous Perimeter Security & Swarm Defense UAV',
    image: '/assets/safshikan_command_center.jpg',
    description: 'Continuous 24/7 perimeter guarding system. Operates in coordinated swarms to detect perimeter breaches, track unauthorized personnel, and launch non-lethal deterrents.',
    specs: {
      range: '150 km',
      endurance: '10 hours (Tethered mode optional)',
      maxCeiling: '10,000 ft',
      speed: '180 km/h',
      payload: '20 kg',
      rcs: '<0.05 m²',
      sensors: 'LiDAR Terrain Mapping + Acoustic Intrusion Detection',
      comms: 'Autonomous Swarm Mesh Relay'
    },
    features: [
      'Automated charging dock integration with hot-swap power',
      'Multi-UAV swarm patrol coordination',
      'LiDAR 3D point-cloud perimeter anomaly detection',
      'Instant threat notification uplink to GCS'
    ]
  }
];

export default function FleetShowcase({ onOpenRfp }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedDrone, setSelectedDrone] = useState(null);

  const categories = ['All', 'ISR & Stealth', 'Tactical Strike', 'VTOL & Base Security'];

  const filteredFleet = activeCategory === 'All' 
    ? DEFENSE_FLEET 
    : DEFENSE_FLEET.filter(drone => drone.category === activeCategory);

  return (
    <section id="fleet" className="py-10 sm:py-16 md:py-20 bg-[#07090e] relative border-t border-slate-800/80">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-mono text-xs tracking-widest uppercase">
            <Shield className="w-3.5 h-3.5" />
            <span>DEFENSE FLEET CATALOG</span>
          </div>
          <h2 className="font-orbitron font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            AUTONOMOUS <span className="text-cyan-400">DEFENSE UAV</span> SYSTEMS
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans">
            Built for mission-critical operations, extreme weather endurance, and low radar cross-section stealth. Standardized on NATO-compatible telemetry protocols.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-10 font-mono text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded transition-all uppercase tracking-wider ${
                activeCategory === cat
                  ? 'bg-cyan-500 text-black font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:border-cyan-500/40 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Fleet Grid */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {filteredFleet.map((drone) => (
            <div 
              key={drone.id}
              className="tactical-card rounded-lg overflow-hidden group hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Header */}
                <div className="relative aspect-[16/12] bg-slate-950 overflow-hidden">
                  <img 
                    src={drone.image} 
                    alt={drone.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-black/80 px-2.5 py-1 border border-cyan-500/40 text-cyan-400 font-mono text-[10px] uppercase rounded">
                    {drone.category}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/80 px-2.5 py-1 border border-slate-700 text-amber-400 font-mono text-xs">
                    MAX CEILING: {drone.specs.maxCeiling}
                  </div>
                </div>

                {/* Drone Info */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-orbitron font-bold text-xl text-white group-hover:text-cyan-400 transition-colors">
                      {drone.name}
                    </h3>
                    <p className="text-xs font-mono text-cyan-400 mt-1">
                      {drone.tagline}
                    </p>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm line-clamp-2">
                    {drone.description}
                  </p>

                  {/* Spec Quick Grid */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-800 text-xs font-mono">
                    <div>
                      <span className="text-slate-500 block text-[10px]">RANGE</span>
                      <span className="text-white font-bold">{drone.specs.range}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px]">ENDURANCE</span>
                      <span className="text-emerald-400 font-bold">{drone.specs.endurance}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px]">SPEED</span>
                      <span className="text-amber-400 font-bold">{drone.specs.speed}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="px-6 pb-6 pt-2 flex items-center gap-3">
                <button 
                  onClick={() => setSelectedDrone(drone)}
                  className="flex-1 py-2.5 rounded bg-slate-900 hover:bg-cyan-950 border border-slate-800 hover:border-cyan-500/40 text-slate-200 hover:text-cyan-400 font-orbitron text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect Full Specs</span>
                </button>

                <button 
                  onClick={onOpenRfp}
                  className="px-4 py-2.5 rounded bg-cyan-500/20 hover:bg-cyan-500 border border-cyan-500/40 text-cyan-400 hover:text-black font-orbitron text-xs uppercase tracking-wider transition-colors"
                  title="Request Procurement Quote"
                >
                  RFP
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Modal Detailed Specs Inspector */}
      {selectedDrone && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="tactical-card max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-lg p-6 sm:p-8 space-y-6 border border-cyan-500/50">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                  [{selectedDrone.category}] MIL-SPEC TELEMETRY
                </span>
                <h3 className="font-orbitron font-extrabold text-2xl text-white mt-1">
                  {selectedDrone.name}
                </h3>
              </div>
              <button 
                onClick={() => setSelectedDrone(null)}
                className="p-1 rounded bg-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative aspect-[16/8] bg-slate-950 rounded overflow-hidden">
              <img 
                src={selectedDrone.image} 
                alt={selectedDrone.name}
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <p className="text-xs font-mono text-slate-200">
                  STATUS: VERIFIED FLIGHT READY | SER. NO: SF-UAV-2026-X
                </p>
              </div>
            </div>

            {/* Detailed Spec Matrix */}
            <div>
              <h4 className="font-orbitron text-sm text-cyan-400 font-bold uppercase tracking-wider mb-3">
                Full Technical Data Matrix
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono bg-slate-950 p-4 rounded border border-slate-800">
                <div>
                  <span className="text-slate-500 block">OPERATIONAL RANGE</span>
                  <span className="text-white font-bold">{selectedDrone.specs.range}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">FLIGHT ENDURANCE</span>
                  <span className="text-emerald-400 font-bold">{selectedDrone.specs.endurance}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">MAX CEILING</span>
                  <span className="text-amber-400 font-bold">{selectedDrone.specs.maxCeiling}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">MAX SPEED</span>
                  <span className="text-white font-bold">{selectedDrone.specs.speed}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">PAYLOAD CAPACITY</span>
                  <span className="text-cyan-400 font-bold">{selectedDrone.specs.payload}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">RADAR CROSS SECTION</span>
                  <span className="text-emerald-400 font-bold">{selectedDrone.specs.rcs}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-slate-500 block">OPTICS & SENSORS</span>
                  <span className="text-white font-bold">{selectedDrone.specs.sensors}</span>
                </div>
              </div>
            </div>

            {/* Key Capabilities */}
            <div>
              <h4 className="font-orbitron text-sm text-amber-400 font-bold uppercase tracking-wider mb-3">
                Tactical Features & Avionics
              </h4>
              <ul className="space-y-2 text-xs text-slate-300 font-mono">
                {selectedDrone.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-4">
              <button 
                onClick={() => { setSelectedDrone(null); onOpenRfp(); }}
                className="flex-1 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-orbitron font-bold text-xs uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>Request NDA Data Sheet & RFP</span>
              </button>
              <button 
                onClick={() => setSelectedDrone(null)}
                className="px-6 py-3 bg-slate-900 border border-slate-800 text-slate-300 hover:text-white font-orbitron text-xs uppercase tracking-wider rounded"
              >
                Close Inspector
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
