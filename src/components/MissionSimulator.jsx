import React, { useState } from 'react';
import { Sliders, Target, Shield, Zap, AlertTriangle, ChevronRight } from 'lucide-react';

export default function MissionSimulator({ onOpenRfp }) {
  const [payloadKg, setPayloadKg] = useState(15);
  const [altitudeFt, setAltitudeFt] = useState(15000);
  const [windKnots, setWindKnots] = useState(12);
  const [fuelMix, setFuelMix] = useState('hybrid'); // 'electric' or 'hybrid'

  // Dynamic calculations based on defense avionics formulas
  const baseRange = fuelMix === 'hybrid' ? 420 : 220;
  const rangeModifier = (payloadKg * 4) + (altitudeFt / 1000 * 3) + (windKnots * 2);
  const calculatedRange = Math.max(120, Math.round(baseRange - rangeModifier + 80));

  const baseHours = fuelMix === 'hybrid' ? 14 : 7;
  const enduranceModifier = (payloadKg * 0.15) + (windKnots * 0.08);
  const calculatedEndurance = Math.max(2.5, (baseHours - enduranceModifier).toFixed(1));

  const stealthRcs = payloadKg > 25 ? '0.015 m²' : payloadKg > 10 ? '0.008 m²' : '0.004 m²';
  const signalLinkScore = windKnots > 30 ? '94.2%' : '99.8%';

  return (
    <section id="simulator" className="py-24 bg-[#07090e] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-mono text-xs tracking-widest uppercase">
            <Sliders className="w-3.5 h-3.5" />
            <span>TACTICAL RANGE & PAYLOAD CALCULATOR</span>
          </div>
          <h2 className="font-orbitron font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            MISSION <span className="text-cyan-400">RANGE SIMULATOR</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans">
            Calculate operational range, loiter endurance, and stealth radar cross-section under custom tactical payload configurations.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="mt-12 grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Form Column */}
          <div className="lg:col-span-6 tactical-card p-6 sm:p-8 rounded-lg space-y-6">
            
            <h3 className="font-orbitron font-bold text-lg text-white flex items-center justify-between border-b border-slate-800 pb-3">
              <span>Mission Parameters</span>
              <span className="text-xs font-mono text-cyan-400">SIMULATOR V2.4</span>
            </h3>

            {/* Power Source Selector */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-slate-300 block">Powertrain Configuration</label>
              <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                <button
                  onClick={() => setFuelMix('hybrid')}
                  className={`py-2.5 rounded border transition-colors ${
                    fuelMix === 'hybrid'
                      ? 'bg-cyan-950 border-cyan-500 text-cyan-400 font-bold'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Turbine-Hybrid (Extended Range)
                </button>
                <button
                  onClick={() => setFuelMix('electric')}
                  className={`py-2.5 rounded border transition-colors ${
                    fuelMix === 'electric'
                      ? 'bg-cyan-950 border-cyan-500 text-cyan-400 font-bold'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Full Electric (Silent Stealth)
                </button>
              </div>
            </div>

            {/* Payload Weight Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-300">Payload Weight (Sensors / Munitions)</span>
                <span className="text-cyan-400 font-bold">{payloadKg} KG</span>
              </div>
              <input 
                type="range" 
                min="5" 
                max="40" 
                value={payloadKg} 
                onChange={(e) => setPayloadKg(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>5 kg (Light EO/IR)</span>
                <span>20 kg (Tactical SAR)</span>
                <span>40 kg (Max Payload)</span>
              </div>
            </div>

            {/* Operating Altitude Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-300">Operating Ceiling Altitude</span>
                <span className="text-amber-400 font-bold">{altitudeFt.toLocaleString()} FT</span>
              </div>
              <input 
                type="range" 
                min="2000" 
                max="25000" 
                step="1000"
                value={altitudeFt} 
                onChange={(e) => setAltitudeFt(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>2,000 ft</span>
                <span>15,000 ft</span>
                <span>25,000 ft (Max Service Ceiling)</span>
              </div>
            </div>

            {/* Wind Resistance Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-300">Environmental Wind Speed</span>
                <span className="text-emerald-400 font-bold">{windKnots} KNOTS</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="45" 
                value={windKnots} 
                onChange={(e) => setWindKnots(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
            </div>

          </div>

          {/* Results Output Column */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="tactical-card p-6 sm:p-8 rounded-lg space-y-6 border border-cyan-500/40">
              <h3 className="font-orbitron font-bold text-lg text-cyan-400 flex items-center justify-between border-b border-slate-800 pb-3">
                <span>Calculated Mission Performance</span>
                <Target className="w-5 h-5 text-cyan-400" />
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-950 p-4 rounded border border-slate-800">
                  <span className="text-slate-500 font-mono text-xs block">ESTIMATED MISSION RADIUS</span>
                  <p className="font-orbitron font-extrabold text-3xl text-white mt-1">
                    {calculatedRange} <span className="text-sm font-normal text-cyan-400">KM</span>
                  </p>
                </div>

                <div className="bg-slate-950 p-4 rounded border border-slate-800">
                  <span className="text-slate-500 font-mono text-xs block">MAX LOITER ENDURANCE</span>
                  <p className="font-orbitron font-extrabold text-3xl text-emerald-400 mt-1">
                    {calculatedEndurance} <span className="text-sm font-normal text-slate-300">HRS</span>
                  </p>
                </div>

                <div className="bg-slate-950 p-4 rounded border border-slate-800">
                  <span className="text-slate-500 font-mono text-xs block">ESTIMATED STEALTH RCS</span>
                  <p className="font-orbitron font-bold text-xl text-amber-400 mt-1">
                    {stealthRcs}
                  </p>
                </div>

                <div className="bg-slate-950 p-4 rounded border border-slate-800">
                  <span className="text-slate-500 font-mono text-xs block">DATA LINK STABILITY</span>
                  <p className="font-orbitron font-bold text-xl text-cyan-400 mt-1">
                    {signalLinkScore}
                  </p>
                </div>
              </div>

              {/* Security Warning Notice */}
              <div className="p-3 bg-amber-950/40 border border-amber-500/30 rounded flex items-start gap-3 font-mono text-xs text-amber-200">
                <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <p>
                  Calculated values assume standard military environmental margins. For custom payload configurations or classified RFP details, submit an encrypted inquiry.
                </p>
              </div>

              <button 
                onClick={onOpenRfp}
                className="w-full py-3.5 rounded bg-cyan-500 hover:bg-cyan-400 text-black font-orbitron font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)] flex items-center justify-center gap-2"
              >
                <Shield className="w-4 h-4" />
                <span>Submit RFP Based On These Specs</span>
                <ChevronRight className="w-4 h-4" />
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
