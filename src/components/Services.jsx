import React from 'react';
import { Cpu, Terminal, Sliders, Zap, Compass, CheckCircle, Send, Wrench } from 'lucide-react';

const SAFSHIKAN_SERVICES = [
  {
    id: 'hw-testing',
    title: 'Hardware Testing & Integration',
    category: 'Avionics & Mechanical Stress',
    icon: Cpu,
    status: 'AS PER USER REQUIREMENT',
    desc: 'Comprehensive hardware stress testing, environmental vibration testing, thermal calibration, and avionics integration conducted under NASTP facility standards for military and industrial UAVs.',
    features: [
      'Vibration, Thermal & Environmental Stress Testing',
      'Structural Airframe Integration & Center-of-Gravity Tuning',
      'Avionics Power Distribution & ESC Calibration',
      'Payload Structural Mounting & Mechanism Integration'
    ]
  },
  {
    id: 'sitl-sim',
    title: 'SITL ( Software in the Loop ) Simulation',
    category: 'Autonomous Software Verification',
    icon: Terminal,
    status: 'AS PER USER REQUIREMENT',
    desc: 'Digital twin autonomous flight simulation environment. Tests PX4 autopilot firmware, flight path navigation algorithms, failsafe trigger conditions, and ground control telemetry in full 3D physics environments prior to physical flight trials.',
    features: [
      'Digital Twin 3D Physics & Aerodynamic Modeling',
      'Autonomous Waypoint & Flight Controller Logic Verification',
      'Failsafe, Return-To-Home & Blackout Telemetry Simulation',
      'Multi-UAV Swarm Dynamic Routing Test'
    ]
  },
  {
    id: 'hitl-sim',
    title: 'HITL ( Hardware in the Loop ) Simulation',
    category: 'Real Physical Avionics Simulation',
    icon: Sliders,
    status: 'AS PER USER REQUIREMENT',
    desc: 'Physical flight controller hardware (Pixhawk, custom PX4 boards, companion computers) linked directly to real-time physics simulators. Validates physical sensor response, PWM motor signals, and hardware timing under high-G tactical maneuvers.',
    features: [
      'Real Flight Controller Board Interfacing (PX4/Pixhawk)',
      'PWM Signal Response & Motor Output Telemetry',
      'Hardware Sensor Fusion & IMU Gyro Stress Testing',
      'Electronic Warfare Jamming & Sensor Noise Injection'
    ]
  },
  {
    id: 'px4-impl',
    title: 'PX4 Based Software & Hardware Implementation',
    category: 'Custom Autopilot Firmware & Stacks',
    icon: Zap,
    status: 'AS PER USER REQUIREMENT',
    desc: 'Tailored PX4 autopilot software stack development, custom MAVLink protocol extensions, companion computer integration (NVIDIA Jetson / Raspberry Pi), AI vision-based obstacle avoidance, and custom sensor driver implementation.',
    features: [
      'Custom PX4 Autopilot Firmware & MAVLink Extensions',
      'AI Companion Computer Integration (NVIDIA Jetson / NPU)',
      'Obstacle Avoidance & Optical Flow Navigation Systems',
      'Encrypted Radio & SATCOM Telemetry Driver Development'
    ]
  },
  {
    id: 'custom-uav',
    title: 'Custom UAV Design & Development',
    category: 'Bespoke Airframe & Payload Engineering',
    icon: Compass,
    status: 'AS PER USER REQUIREMENT',
    desc: 'End-to-end bespoke drone design from mission requirement analysis to 3D CAD modeling, CFD aerodynamic analysis, carbon fiber composite fabrication, custom payload rack design, and flight testing.',
    features: [
      'Mission-Specific 3D CAD & Aerodynamic CFD Simulation',
      'Lightweight Carbon Fiber & Kevlar Airframe Layup',
      'Custom Ordnance Release / Agricultural Spray Mechanism',
      'BVLOS Extended Range Airframe Configuration'
    ]
  }
];

export default function Services({ onOpenRfp }) {
  return (
    <section id="services" className="py-24 bg-[#03060c] border-t border-blue-900/50 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/10 blur-[140px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-950/80 border border-blue-500/40 text-sky-300 font-mono text-xs uppercase tracking-widest font-bold">
            <Wrench className="w-3.5 h-3.5 text-sky-400" />
            <span>AEROSPACE & DEFENSE SERVICES</span>
          </div>
          <h2 className="font-orbitron font-extrabold text-3xl sm:text-4xl text-white">ENGINEERING & TECHNICAL SERVICES</h2>
          <p className="text-slate-300 text-sm font-sans">
            Safshikan provides specialized UAV hardware testing, flight simulation, PX4 stack implementation, and custom airframe development configured strictly <strong>as per user requirements</strong>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {SAFSHIKAN_SERVICES.map((srv, index) => {
            const IconComponent = srv.icon;
            return (
              <div 
                key={srv.id} 
                className={`tactical-card-blue rounded-lg p-6 sm:p-7 space-y-5 border border-blue-900/50 hover:border-sky-400 transition-all flex flex-col justify-between group ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-12 h-12 rounded-lg bg-[#0b1326] border border-blue-500/40 flex items-center justify-center text-sky-400 group-hover:scale-110 group-hover:border-sky-400 transition-all shrink-0">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 rounded bg-emerald-950/90 text-emerald-300 border border-emerald-500/40 font-mono text-[10px] uppercase font-bold tracking-wider text-right shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                      {srv.status}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-sky-400 uppercase block tracking-wider font-semibold">{srv.category}</span>
                    <h3 className="font-orbitron font-bold text-white text-lg sm:text-xl mt-0.5 group-hover:text-sky-300 transition-colors">{srv.title}</h3>
                  </div>

                  <p className="text-slate-300 text-xs font-sans leading-relaxed">{srv.desc}</p>

                  <div className="space-y-2 pt-3 border-t border-slate-800/80 font-mono text-xs text-slate-200">
                    <span className="text-[10px] text-slate-400 uppercase block font-bold">KEY TECHNICAL SCOPE:</span>
                    {srv.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-[11px]">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <button 
                    onClick={onOpenRfp}
                    className="w-full py-2.5 bg-[#0b1326] hover:bg-gradient-to-r hover:from-blue-600 hover:to-sky-400 hover:text-white border border-blue-500/40 hover:border-sky-300 text-sky-300 font-orbitron font-bold text-xs uppercase rounded transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Request Service Proposal</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
