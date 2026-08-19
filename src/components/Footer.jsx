import React, { useState } from 'react';
import { Mail, Phone, MapPin, Terminal, ShieldCheck, X } from 'lucide-react';

export default function Footer({ onOpenRfp }) {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <>
      <footer className="bg-[#03060c] border-t border-blue-900/50 pt-16 pb-12 text-slate-400 font-mono text-xs relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
            
            {/* Col 1: Brand & Strategic Profile */}
            <div className="lg:col-span-4 space-y-4">
              <a href="#" className="flex items-center gap-3 group">
                <div className="w-11 h-11 rounded-full bg-white p-1.5 flex items-center justify-center border border-sky-400 shadow-[0_0_20px_rgba(0,163,255,0.5)] group-hover:scale-105 transition-transform shrink-0">
                  <img 
                    src="./assets/logo_blue_transparent.png" 
                    alt="Safshikan Logo" 
                    className="w-full h-full object-contain"
                    onError={(e) => { e.target.onerror=null; e.target.src='./assets/logo_blue.png'; }}
                  />
                </div>
                <div>
                  <span className="font-orbitron font-extrabold text-lg text-white tracking-wider block">SAFSHIKAN</span>
                  <span className="text-[10px] text-sky-400 font-mono tracking-widest uppercase block">Aerospace & Defense Systems</span>
                </div>
              </a>

              <p className="text-slate-400 font-sans text-xs leading-relaxed max-w-sm">
                Safshikan is Pakistan's leading defense aerospace and autonomous unmanned aerial vehicle (UAV) engineering firm. Manufacturing military-grade tactical drones, BVLOS platforms, and the AGRON Ground Control Command OS.
              </p>

              {/* Social Media Links Strip */}
              <div className="pt-2">
                <span className="text-[10px] text-slate-500 uppercase tracking-widest block mb-2.5 font-bold">Connect With Safshikan</span>
                <div className="flex items-center gap-3">
                  {/* Instagram */}
                  <a 
                    href="https://www.instagram.com/_safshikan" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-9 h-9 rounded bg-[#0b1326] border border-slate-800 text-slate-300 hover:text-sky-400 hover:border-sky-500/50 flex items-center justify-center transition-all hover:scale-110 shadow-[0_0_10px_rgba(0,163,255,0.2)]"
                    title="Instagram"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>

                  {/* Facebook */}
                  <a 
                    href="https://www.facebook.com/share/1EvyGE1gfM/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-9 h-9 rounded bg-[#0b1326] border border-slate-800 text-slate-300 hover:text-sky-400 hover:border-sky-500/50 flex items-center justify-center transition-all hover:scale-110 shadow-[0_0_10px_rgba(0,163,255,0.2)]"
                    title="Facebook"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
                    </svg>
                  </a>

                  {/* TikTok */}
                  <a 
                    href="https://www.tiktok.com/@_safshikan" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-9 h-9 rounded bg-[#0b1326] border border-slate-800 text-slate-300 hover:text-sky-400 hover:border-sky-500/50 flex items-center justify-center transition-all hover:scale-110 shadow-[0_0_10px_rgba(0,163,255,0.2)]"
                    title="TikTok"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.96-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.56-1.32 1.52-1.33 2.52-.04 1.05.47 2.08 1.34 2.64 1.08.73 2.56.71 3.61-.07.72-.52 1.17-1.36 1.22-2.25.07-3.56.03-7.12.04-10.68z"/>
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a 
                    href="https://www.linkedin.com/company/safshikan/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-9 h-9 rounded bg-[#0b1326] border border-slate-800 text-slate-300 hover:text-sky-400 hover:border-sky-500/50 flex items-center justify-center transition-all hover:scale-110 shadow-[0_0_10px_rgba(0,163,255,0.2)]"
                    title="LinkedIn"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Col 2: Defense UAV Platforms */}
            <div className="lg:col-span-3 space-y-3 font-sans">
              <h4 className="font-orbitron font-bold text-sm text-white uppercase tracking-wider">
                UAV Platforms
              </h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#products" className="hover:text-sky-400 transition-colors flex items-center gap-1"><span>&gt;</span> The Grim Reaper UAS</a></li>
                <li><a href="#products" className="hover:text-sky-400 transition-colors flex items-center gap-1"><span>&gt;</span> BVLOS Heavy Payload (16kg)</a></li>
                <li><a href="#products" className="hover:text-sky-400 transition-colors flex items-center gap-1"><span>&gt;</span> Sentinel Vigilance Pro</a></li>
                <li><a href="#products" className="hover:text-sky-400 transition-colors flex items-center gap-1"><span>&gt;</span> Edith Sovran 10" Series</a></li>
                <li><a href="#products" className="hover:text-sky-400 transition-colors flex items-center gap-1"><span>&gt;</span> 5" & 7" FPV Strike Platforms</a></li>
              </ul>
            </div>

            {/* Col 3: Portals & Systems */}
            <div className="lg:col-span-2 space-y-3 font-sans">
              <h4 className="font-orbitron font-bold text-sm text-white uppercase tracking-wider">
                Software & Portals
              </h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#agron-portal" className="hover:text-emerald-400 transition-colors flex items-center gap-1"><span>&gt;</span> AGRON Spray Command</a></li>
                <li><a href="#simulator" className="hover:text-sky-400 transition-colors flex items-center gap-1"><span>&gt;</span> Client Spec Collector</a></li>
                <li><a href="#team" className="hover:text-sky-400 transition-colors flex items-center gap-1"><span>&gt;</span> Executive Leadership</a></li>
                <li><button onClick={() => setPrivacyOpen(true)} className="hover:text-sky-400 transition-colors flex items-center gap-1"><span>&gt;</span> Defense Data Policy</button></li>
              </ul>
            </div>

            {/* Col 4: Directorate Contact */}
            <div className="lg:col-span-3 space-y-3 font-mono">
              <h4 className="font-orbitron font-bold text-sm text-white uppercase tracking-wider">
                Directorate Contact
              </h4>
              <div className="space-y-2 text-xs">
                <div className="flex items-start gap-2.5 text-slate-300">
                  <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>Office No. 18, Aplha 16, NASTP Industrial Innovative Enclave, Rawalpindi</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-300">
                  <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                  <a href="mailto:info.safshikan@gmail.com" className="hover:text-sky-400">info.safshikan@gmail.com</a>
                </div>
                <div className="flex items-center gap-2.5 text-slate-300">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <a href="https://wa.me/923213630768" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">+92 321 3630768</a>
                </div>
              </div>

              <div className="pt-2">
                <button 
                  onClick={onOpenRfp}
                  className="w-full py-2.5 bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white font-orbitron font-bold text-xs uppercase tracking-wider rounded transition-all shadow-[0_0_15px_rgba(0,163,255,0.3)] flex items-center justify-center gap-2"
                >
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Submit Encrypted RFP</span>
                </button>
              </div>
            </div>

          </div>

          {/* Bottom Copyright & Legal Links Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
            <p>© {new Date().getFullYear()} SAFSHIKAN AEROSPACE & DEFENSE SYSTEMS. ALL RIGHTS RESERVED.</p>
            
            <div className="flex flex-wrap items-center gap-4">
              <button onClick={() => setPrivacyOpen(true)} className="hover:text-sky-400 transition-colors">Privacy Policy</button>
              <span>•</span>
              <button onClick={() => setPrivacyOpen(true)} className="hover:text-sky-400 transition-colors">NDA & Security Protocol</button>
              <span>•</span>
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                NASTP ALPHA QUALIFIED
              </span>
            </div>
          </div>

        </div>
      </footer>

      {/* Privacy & Security Policy Modal */}
      {privacyOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur flex items-center justify-center p-4">
          <div className="tactical-card-blue max-w-xl w-full p-6 sm:p-8 rounded-lg space-y-4 max-h-[90vh] overflow-y-auto border border-blue-500/60 font-mono text-xs">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <div>
                <span className="text-[10px] text-sky-400 uppercase">[DEFENSE COMPLIANCE PROTOCOL]</span>
                <h3 className="font-orbitron font-bold text-white text-xl">SECURITY & PRIVACY POLICY</h3>
              </div>
              <button onClick={() => setPrivacyOpen(false)} className="text-slate-400 hover:text-white text-xl"><X className="w-5 h-5" /></button>
            </div>

            <div className="space-y-3 text-slate-300 font-sans text-xs leading-relaxed">
              <p>
                <strong>Safshikan Aerospace & Defense Systems</strong> enforces military-grade data protection standards for all client performance specifications, defense inquiries, and custom quadcopter requirements.
              </p>

              <div className="bg-slate-950 p-4 rounded border border-slate-800 space-y-2 font-mono text-[11px]">
                <span className="text-sky-400 font-bold block uppercase">1. Non-Disclosure & Classified Spec Handling</span>
                <p className="text-slate-400">All technical requirements, custom payload requests, and organization details transmitted through this portal are treated as confidential defense communications and governed under explicit non-disclosure protocols.</p>
              </div>

              <div className="bg-slate-950 p-4 rounded border border-slate-800 space-y-2 font-mono text-[11px]">
                <span className="text-emerald-400 font-bold block uppercase">2. Encrypted Data Transmission</span>
                <p className="text-slate-400">Inquiries and telemetry feedback sent to Safshikan are processed using encrypted SSL/TLS layers with zero third-party data tracking or external data monetization.</p>
              </div>

              <div className="bg-slate-950 p-4 rounded border border-slate-800 space-y-2 font-mono text-[11px]">
                <span className="text-amber-400 font-bold block uppercase">3. NASTP Alpha Facility Compliance</span>
                <p className="text-slate-400">Safshikan operates within NASTP Alpha (Rawalpindi), maintaining strict compliance with national aerospace testing, avionics calibration, and defense production standards.</p>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button 
                onClick={() => setPrivacyOpen(false)}
                className="px-5 py-2.5 bg-sky-500 hover:bg-sky-400 text-black font-orbitron font-bold text-xs uppercase rounded transition-colors"
              >
                Acknowledge & Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

