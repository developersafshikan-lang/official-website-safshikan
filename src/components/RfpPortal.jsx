import React, { useState } from 'react';
import { Shield, Lock, Send, CheckCircle2, Phone, Mail, FileText, X, AlertCircle } from 'lucide-react';

export default function RfpPortal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    agency: '',
    email: '',
    phone: '',
    droneInterest: 'Tactical-X Reconnaissance',
    ndaAgreed: true,
    comments: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="tactical-card max-w-2xl w-full rounded-lg p-6 sm:p-8 space-y-6 border border-cyan-500/50 my-8">
        
        {/* Header */}
        <div className="flex items-start justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center">
              <Shield className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block">
                CLASSIFIED PROCUREMENT PORTAL
              </span>
              <h3 className="font-orbitron font-extrabold text-xl text-white">
                DEFENSE RFP & SPECIFICATION INQUIRY
              </h3>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/50 flex items-center justify-center mx-auto text-emerald-400 animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-orbitron font-bold text-2xl text-white">
              INQUIRY TRANSMITTED SECURELY
            </h4>
            <p className="text-slate-300 text-sm max-w-md mx-auto font-sans">
              Thank you, <strong className="text-cyan-400">{formData.name}</strong>. Your defense specification request has been registered under encrypted dispatch ID <span className="font-mono text-amber-400">#SF-RFP-2026-904</span>.
            </p>
            <p className="text-xs font-mono text-slate-400">
              Our aerospace technical directorate will contact your agency within 24 hours.
            </p>
            <div className="pt-6">
              <button 
                onClick={() => { setSubmitted(false); onClose(); }}
                className="px-6 py-2.5 bg-cyan-500 text-black font-orbitron font-bold text-xs uppercase tracking-wider rounded"
              >
                Close Portal
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="p-3 bg-cyan-950/40 border border-cyan-500/30 rounded flex items-center gap-3 text-xs font-mono text-cyan-300">
              <Lock className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <span>
                All communications are strictly confidential and governed by non-disclosure defense protocols.
              </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Official Full Name *</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Major H. Khan / Eng. Tariq"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded text-sm text-white font-sans focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Agency / Organization *</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Defense Directorate / Aero Firm"
                  value={formData.agency}
                  onChange={(e) => setFormData({ ...formData, agency: e.target.value })}
                  className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded text-sm text-white font-sans focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Official Email Address *</label>
                <input 
                  type="email" 
                  required
                  placeholder="name@agency.gov.pk or company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded text-sm text-white font-sans focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Phone / WhatsApp Contact *</label>
                <input 
                  type="tel" 
                  required
                  placeholder="+92 321 3630768"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded text-sm text-white font-sans focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1">Target UAV System / Solution</label>
              <select 
                value={formData.droneInterest}
                onChange={(e) => setFormData({ ...formData, droneInterest: e.target.value })}
                className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded text-sm text-white font-sans focus:outline-none focus:border-cyan-400"
              >
                <option value="Tactical-X Reconnaissance">Safshikan Tactical-X (Long-Range ISR)</option>
                <option value="Apex-Strike Combat">Safshikan Apex-Strike (Tactical Payload UAV)</option>
                <option value="Sentinel-VTOL">Safshikan Sentinel-VTOL (Vertical Takeoff Drone)</option>
                <option value="Aegis-Sentry Swarm">Safshikan Aegis-Sentry (Base Security Swarm)</option>
                <option value="AGRON OS Software">AGRON Defense Ground Control Station OS</option>
                <option value="Custom Aerospace Engineering">Custom Aerospace Engineering & Airframe</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1">Operational Requirements / Notes</label>
              <textarea 
                rows="3"
                placeholder="Specify payload weight, required range, deployment terrain, or fleet size..."
                value={formData.comments}
                onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded text-sm text-white font-sans focus:outline-none focus:border-cyan-400"
              ></textarea>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-slate-300">
              <input 
                type="checkbox" 
                id="nda" 
                checked={formData.ndaAgreed}
                onChange={(e) => setFormData({ ...formData, ndaAgreed: e.target.checked })}
                className="rounded accent-cyan-400"
              />
              <label htmlFor="nda" className="cursor-pointer">
                I request technical NDA data sheet for procurement evaluation.
              </label>
            </div>

            {/* Direct Contact info */}
            <div className="pt-2 border-t border-slate-800 flex flex-wrap items-center justify-between text-xs font-mono text-slate-400 gap-2">
              <div className="flex items-center gap-2 text-cyan-400">
                <Mail className="w-3.5 h-3.5" />
                <span>info.safshikan@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400">
                <Phone className="w-3.5 h-3.5" />
                <span>+92 321 3630768</span>
              </div>
            </div>

            <div className="pt-2">
              <button 
                type="submit"
                className="w-full py-3.5 rounded bg-cyan-500 hover:bg-cyan-400 text-black font-orbitron font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(0,240,255,0.4)] flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Transmit Encrypted RFP Request</span>
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
