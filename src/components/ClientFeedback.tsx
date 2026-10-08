import React from "react";
import { Reveal } from "@/components/motion/Reveal";
import { CheckCircle2 } from "lucide-react";
import triumphLogo from "@/assets/clients/triumph-logo-white.png";

export const ClientFeedback: React.FC = () => {
  return (
    <section className="py-24 md:py-32 relative z-10 border-b border-white/10 bg-[#070812]/80 backdrop-blur-md overflow-hidden">
      {/* Background subtle radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-rose/5 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <Reveal className="mb-16 md:mb-20 text-left max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] text-rose font-mono mb-4 block">
            // CLIENT RESULTS
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase leading-tight">
            Trusted by Forward-Thinking Organisations
          </h2>
        </Reveal>

        {/* Featured Client Feedback Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-8 group relative rounded-3xl p-8 md:p-12 border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-xl transition-all duration-500 shadow-2xl flex flex-col justify-between overflow-hidden">
            {/* Top glass sheen effect */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rose/30 to-transparent pointer-events-none" />

            <div>
              {/* Header: Logo & Project Tag */}
              <div className="flex flex-wrap items-center justify-between gap-6 pb-8 border-b border-white/[0.08]">
                <div className="flex items-center gap-4">
                  <div className="h-10 md:h-12 px-4 py-2 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center">
                    <img
                      src={triumphLogo}
                      alt="TRIUMPH logo"
                      className="h-6 md:h-7 w-auto object-contain brightness-110"
                    />
                  </div>
                  <div>
                    <span className="text-lg md:text-xl font-bold text-white tracking-tight block">
                      TRIUMPH
                    </span>
                    <span className="text-xs text-white/50 font-mono">
                      Verified Client
                    </span>
                  </div>
                </div>

                <div className="px-3.5 py-1.5 rounded-full border border-rose/30 bg-rose/[0.05]">
                  <span className="text-xs font-mono text-rose uppercase tracking-wider">
                    CRM Implementation
                  </span>
                </div>
              </div>

              {/* Quote / Feedback */}
              <div className="py-8">
                <p className="text-xl md:text-2xl lg:text-2xl font-medium text-white/90 leading-relaxed tracking-tight font-sans">
                  “A really great experience with Cohby Consulting, our brief was fully understood and developed beyond our expectations. We had very weak infrastructure and materials to develop the project but this was accommodated for. We received a flexible and thorough approach!”
                </p>
              </div>
            </div>

            {/* Metrics Row */}
            <div className="pt-6 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <span className="text-2xl font-bold text-white block">5 / 5</span>
                <span className="text-xs text-white/50 font-mono uppercase tracking-wider">Satisfaction</span>
              </div>

              <div>
                <span className="text-2xl font-bold text-white block">10 / 10</span>
                <span className="text-xs text-white/50 font-mono uppercase tracking-wider">NPS Score</span>
              </div>

              <div>
                <span className="text-2xl font-bold text-white block">On Schedule</span>
                <span className="text-xs text-white/50 font-mono uppercase tracking-wider">Full Scope Delivered</span>
              </div>
            </div>
          </div>

          {/* Side Context Card */}
          <div className="lg:col-span-4 rounded-3xl p-8 border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl flex flex-col justify-between">
            <div className="space-y-6">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/40 block">
                // PROJECT SCOPE
              </span>
              <h3 className="text-xl font-bold text-white tracking-tight uppercase">
                CRM Design & Staff Training
              </h3>
              <p className="text-sm text-white/60 leading-relaxed font-sans">
                Full-cycle system development including requirements gathering, data structuring, custom workflow automations, and practical documentation to ensure smooth adoption across the team.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-white/70 font-mono">
                  <CheckCircle2 className="h-4 w-4 text-rose flex-shrink-0" />
                  <span>Custom CRM Architecture</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-white/70 font-mono">
                  <CheckCircle2 className="h-4 w-4 text-rose flex-shrink-0" />
                  <span>Workflow Automations</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-white/70 font-mono">
                  <CheckCircle2 className="h-4 w-4 text-rose flex-shrink-0" />
                  <span>Staff Training Resources</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/[0.08] mt-6">
              <span className="text-[11px] font-mono text-white/40 uppercase tracking-widest block">
                Standardised Delivery
              </span>
              <span className="text-xs text-white/70 font-sans mt-1 block">
                Every project includes complete documentation and handoff support.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientFeedback;
