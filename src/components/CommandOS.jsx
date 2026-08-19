import React, { useState, useEffect } from 'react';
import { Cpu, Terminal, Radio, Shield, Activity, Target, Lock, Play, Pause, RefreshCw } from 'lucide-react';

export default function CommandOS() {
  const [activeTab, setActiveTab] = useState('telemetry');
  const [isSimulating, setIsSimulating] = useState(true);
  const [targetLock, setTargetLock] = useState({ lat: '33.6844° N', lng: '73.0479° E', alt: '14,250 FT', speed: '315 KM/H' });
  const [logs, setLogs] = useState([
    '[04:41:02] AGRON OS Core initialized. Encryption handshake: RSA-4096 OK.',
    '[04:41:08] UAV-01 Satellite Uplink established on 12.4 GHz Ku-Band.',
    '[04:41:15] AI Object Classifier active: 3 military targets identified.',
    '[04:41:22] Anti-Jamming FHSS hopping pattern sync complete.'
  ]);

  useEffect(() => {
    if (!isSimulating) return;

    const interval = setInterval(() => {
      const altNum = 14000 + Math.floor(Math.random() * 500);
      const speedNum = 310 + Math.floor(Math.random() * 20);
      setTargetLock(prev => ({
        ...prev,
        alt: `${altNum.toLocaleString()} FT`,
        speed: `${speedNum} KM/H`
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, [isSimulating]);

  const addLogMessage = (msg) => {
    const timeStr = new Date().toTimeString().slice(0, 8);
    setLogs(prev => [`[${timeStr}] ${msg}`, ...prev.slice(0, 6)]);
  };

  return (
    <section id="command-os" className="py-24 bg-[#07090e] relative border-t border-slate-800">
      
      {/* Glow effect */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-mono text-xs tracking-widest uppercase">
            <Cpu className="w-3.5 h-3.5 animate-pulse" />
            <span>PROPRIETARY GROUND CONTROL OS</span>
          </div>
          <h2 className="font-orbitron font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            AGRON DEFENSE <span className="text-cyan-400">COMMAND GCS</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans">
            Centralized flight management system supporting real-time telemetry, AI edge target recognition, autonomous swarm routing, and encrypted satellite uplink.
          </p>
        </div>

        {/* Command OS Simulator Window */}
        <div className="mt-12 tactical-card rounded-lg overflow-hidden border border-cyan-500/40 shadow-2xl">
          
          {/* GCS Titlebar */}
          <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between font-mono text-xs">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              </div>
              <span className="text-cyan-400 font-bold tracking-wider">
                AGRON-OS v4.8 // TACTICAL GCS TERMINAL
              </span>
            </div>

            <div className="flex items-center gap-4 text-[11px] text-slate-400">
              <span className="hidden sm:inline text-emerald-400">STATUS: SECURE SWARM CONNECTED</span>
              <button 
                onClick={() => setIsSimulating(!isSimulating)}
                className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 hover:text-white flex items-center gap-1.5"
              >
                {isSimulating ? <Pause className="w-3 h-3 text-amber-400" /> : <Play className="w-3 h-3 text-emerald-400" />}
                <span>{isSimulating ? 'PAUSE TELEMETRY' : 'RESUME'}</span>
              </button>
            </div>
          </div>

          {/* GCS Body */}
          <div className="grid lg:grid-cols-12 bg-slate-950">
            
            {/* Left GCS Panel: Map / Visual Simulation */}
            <div className="lg:col-span-8 p-6 relative border-r border-slate-800 flex flex-col justify-between min-h-[420px] bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px]">
              
              {/* Overlay Command Image */}
              <div className="absolute inset-0 opacity-40 mix-blend-luminosity pointer-events-none">
                <img 
                  src="/assets/safshikan_command_center.jpg" 
                  alt="Ground Control Center" 
                  className="w-full h-full object-cover" 
                />
              </div>

              {/* HUD Target Overlay */}
              <div className="relative z-10 space-y-4">
                <div className="flex justify-between items-start font-mono text-xs text-cyan-400">
                  <div className="bg-slate-950/80 p-2 border border-cyan-500/30 rounded backdrop-blur">
                    <p className="text-[10px] text-slate-400">PRIMARY TRACKING</p>
                    <p className="font-bold">UAV-ALPHA // TACTICAL-X</p>
                  </div>
                  <div className="bg-slate-950/80 p-2 border border-amber-500/30 text-amber-400 rounded backdrop-blur text-right">
                    <p className="text-[10px] text-slate-400">MISSION RADIUS</p>
                    <p className="font-bold">GRID 44-DELTA (380 KM)</p>
                  </div>
                </div>

                {/* Simulated Target Scope */}
                <div className="my-8 flex justify-center">
                  <div className="relative w-48 h-48 rounded-full border border-cyan-500/40 flex items-center justify-center">
                    <div className="w-36 h-36 rounded-full border border-dashed border-cyan-400/60 animate-spin" style={{ animationDuration: '12s' }}></div>
                    <div className="absolute w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                    <div className="absolute top-2 text-[9px] font-mono bg-red-950/90 border border-red-500/40 text-red-400 px-2 py-0.5 rounded">
                      TARGET LOCKED 99.8%
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Telemetry Bar */}
              <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs bg-slate-950/90 p-3 rounded border border-slate-800 backdrop-blur">
                <div>
                  <span className="text-slate-500 text-[10px] block">COORDINATES</span>
                  <span className="text-cyan-400 font-bold">{targetLock.lat}</span>
                </div>
                <div>
                  <span className="text-slate-500 text-[10px] block">LONGITUDE</span>
                  <span className="text-cyan-400 font-bold">{targetLock.lng}</span>
                </div>
                <div>
                  <span className="text-slate-500 text-[10px] block">ALTITUDE</span>
                  <span className="text-emerald-400 font-bold">{targetLock.alt}</span>
                </div>
                <div>
                  <span className="text-slate-500 text-[10px] block">AIRSPEED</span>
                  <span className="text-amber-400 font-bold">{targetLock.speed}</span>
                </div>
              </div>

            </div>

            {/* Right GCS Panel: Console & Controls */}
            <div className="lg:col-span-4 p-6 space-y-6 flex flex-col justify-between font-mono text-xs">
              
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Terminal className="w-4 h-4 text-cyan-400" />
                    Console Telemetry Log
                  </span>
                  <button 
                    onClick={() => addLogMessage('Ping re-sent to all active mesh nodes.')}
                    className="p-1 text-slate-400 hover:text-cyan-400"
                    title="Refresh"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Log Terminal Window */}
                <div className="bg-black/90 p-3 rounded border border-slate-800 space-y-2 h-44 overflow-y-auto text-[11px]">
                  {logs.map((log, idx) => (
                    <p key={idx} className={idx === 0 ? 'text-cyan-400 font-semibold' : 'text-slate-400'}>
                      {log}
                    </p>
                  ))}
                </div>
              </div>

              {/* Tactical Quick Actions */}
              <div className="space-y-3 pt-4 border-t border-slate-800">
                <p className="text-[10px] text-slate-500 uppercase tracking-widest">Autonomous Flight Controls</p>
                <button 
                  onClick={() => addLogMessage('COMMAND ISSUED: RTH (Return-To-Home) protocol initiated.')}
                  className="w-full py-2.5 rounded bg-slate-900 hover:bg-cyan-950 border border-slate-800 hover:border-cyan-500/40 text-cyan-400 transition-colors flex items-center justify-center gap-2"
                >
                  <Radio className="w-3.5 h-3.5" />
                  <span>Execute Return-To-Home (RTH)</span>
                </button>

                <button 
                  onClick={() => addLogMessage('COMMAND ISSUED: Swarm mesh encryption keys rotated.')}
                  className="w-full py-2.5 rounded bg-slate-900 hover:bg-amber-950 border border-slate-800 hover:border-amber-500/40 text-amber-400 transition-colors flex items-center justify-center gap-2"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>Rotate Swarm Encryption Keys</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
