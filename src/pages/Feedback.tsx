import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Star, 
  MessageSquare, 
  CheckCircle2, 
  Clock, 
  HeartHandshake, 
  FileText, 
  ArrowRight,
  ShieldCheck,
  Send
} from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";

const RatingScale = ({
  name,
  id,
  value,
  onChange,
  label,
  helperText,
  labels = ["1 - Poor", "2 - Fair", "3 - Good", "4 - Great", "5 - Exceptional"],
}: {
  name: string;
  id: string;
  value: number;
  onChange: (val: number) => void;
  label: string;
  helperText?: string;
  labels?: string[];
}) => {
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-baseline flex-wrap gap-1">
        <label htmlFor={id} className="studio-label text-sm font-semibold text-[#121214]">
          {label} <span className="text-rose">*</span>
        </label>
        {value > 0 && (
          <span className="text-xs font-mono font-medium text-rose">
            {labels[value - 1]}
          </span>
        )}
      </div>
      {helperText && <p className="text-xs text-black/40">{helperText}</p>}
      
      {/* Hidden input for form submission */}
      <input type="hidden" name={name} id={id} value={value || ""} required />

      <div className="grid grid-cols-5 gap-2 md:gap-3">
        {[1, 2, 3, 4, 5].map((num) => {
          const isSelected = value === num;
          return (
            <button
              type="button"
              key={num}
              onClick={() => onChange(num)}
              className={`py-3 px-2 rounded-xl text-sm font-mono font-bold transition-all duration-200 border flex flex-col items-center justify-center gap-1 ${
                isSelected
                  ? "bg-[#121214] text-white border-[#121214] shadow-md scale-[1.02]"
                  : "bg-white text-black/70 border-black/10 hover:border-black/30 hover:bg-black/[0.02]"
              }`}
            >
              <span className="text-base md:text-lg">{num}</span>
              <span className="text-[10px] hidden md:block opacity-60">
                {num === 1 ? "Low" : num === 5 ? "High" : ""}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

const Feedback = () => {
  // Controlled interactive states for dynamic UI feedback
  const [satisfaction, setSatisfaction] = useState<number>(0);
  const [communication, setCommunication] = useState<number>(0);
  const [documentation, setDocumentation] = useState<number>(0);
  const [npsScore, setNpsScore] = useState<number | null>(null);
  const [scopeDelivery, setScopeDelivery] = useState<string>("");
  const [deliveredOnTime, setDeliveredOnTime] = useState<string>("");
  const [testimonialPermission, setTestimonialPermission] = useState<string>("Yes_with_name_and_company");

  return (
    <div className="min-h-screen overflow-x-hidden selection:bg-rose/30">
      {/* ── Hero - Dark ── */}
      <section className="relative min-h-[45vh] flex items-end overflow-hidden z-10 border-b border-white/[0.06]">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[75%] md:w-[50%] h-[60%] rounded-t-[14rem] border-t border-x border-white/[0.06] bg-white/[0.01] backdrop-blur-[14px] z-0 pointer-events-none" />
        <RevealGroup className="container relative mx-auto px-4 md:px-8 z-10 pb-20 pt-40 max-w-7xl">
          <RevealItem>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.1] text-rose text-xs font-mono uppercase tracking-wider mb-6">
              <Star className="w-3.5 h-3.5 fill-rose text-rose" />
              Client Experience & Project Review
            </div>
          </RevealItem>
          <RevealItem>
            <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tight leading-[0.9]">
              Project<br />
              <span className="text-rose font-extrabold italic font-serif lowercase tracking-wide">feedback</span>
            </h1>
          </RevealItem>
          <RevealItem>
            <p className="text-base text-white/50 mt-6 max-w-xl leading-relaxed">
              Your insights help us continuously elevate our delivery. Thank you for partnering with Cohby Consulting Services.
            </p>
          </RevealItem>
        </RevealGroup>
      </section>

      {/* ── Body - Light Clay Transition ── */}
      <div 
        className="h-24 w-full pointer-events-none" 
        style={{ background: "linear-gradient(180deg, hsl(240,10%,4%) 0%, #f0ede9 100%)" }} 
      />

      <section className="bg-studio-light relative pb-32">
        <div className="studio-pillar-left" aria-hidden="true" />
        <div className="studio-pillar-right" aria-hidden="true" />

        <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">

          {/* Header Bar */}
          <Reveal y={16} className="pb-10 border-b studio-rule flex flex-col md:flex-row md:items-baseline justify-between gap-4">
            <div>
              <h2 className="studio-heading text-3xl md:text-4xl">Client Review Form</h2>
              <p className="text-sm text-black/50 mt-1">Takes approx. 3 minutes to complete</p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-black/40">
              <ShieldCheck className="w-4 h-4 text-rose" />
              Direct integration to Cohby Consulting CRM
            </div>
          </Reveal>

          <RevealGroup className="pt-12">
            <RevealItem>
              <div className="bg-white border border-black/[0.08] rounded-3xl p-8 md:p-14 shadow-[0_8px_40px_rgba(0,0,0,0.06)]">
                
                {/* ── Web-to-Lead Form ── */}
                <form
                  action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DgD000000GzkH"
                  method="POST"
                  className="space-y-12"
                >
                  {/* Salesforce Hidden Configuration Parameters */}
                  <input type="hidden" name="oid" value="00DgD000000GzkH" />
                  <input type="hidden" name="retURL" value="https://cohbyconsultingservices.com/thank-you" />
                  
                  {/* Categorization & Staging Handshake */}
                  <input type="hidden" name="lead_source" value="Client Feedback" />
                  <input type="hidden" name="00NgD000000x7n3" value="Client Feedback" /> {/* Lead_Type__c */}

                  {/* ── Section 1: Client & Project Details ── */}
                  <div className="space-y-6">
                    <div className="border-b border-black/[0.06] pb-3 flex items-center gap-2">
                      <span className="text-xs font-mono uppercase tracking-widest text-rose font-bold">01</span>
                      <h3 className="text-lg font-bold text-[#121214] uppercase tracking-tight">Client & Project Details</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col space-y-2">
                        <label htmlFor="first_name" className="studio-label">
                          First Name <span className="text-rose">*</span>
                        </label>
                        <input
                          id="first_name"
                          name="first_name"
                          type="text"
                          required
                          maxLength={40}
                          placeholder="e.g. Sarah"
                          className="border-b border-black/15 focus:border-[#121214] focus:outline-none py-2.5 text-sm text-[#121214] bg-transparent placeholder:text-black/25 transition-colors"
                        />
                      </div>

                      <div className="flex flex-col space-y-2">
                        <label htmlFor="last_name" className="studio-label">
                          Last Name <span className="text-rose">*</span>
                        </label>
                        <input
                          id="last_name"
                          name="last_name"
                          type="text"
                          required
                          maxLength={80}
                          placeholder="e.g. Jenkins"
                          className="border-b border-black/15 focus:border-[#121214] focus:outline-none py-2.5 text-sm text-[#121214] bg-transparent placeholder:text-black/25 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col space-y-2">
                        <label htmlFor="email" className="studio-label">
                          Email Address <span className="text-rose">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          maxLength={80}
                          placeholder="sarah@organization.org"
                          className="border-b border-black/15 focus:border-[#121214] focus:outline-none py-2.5 text-sm text-[#121214] bg-transparent placeholder:text-black/25 transition-colors"
                        />
                      </div>

                      <div className="flex flex-col space-y-2">
                        <label htmlFor="company" className="studio-label">
                          Organization / Company <span className="text-rose">*</span>
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          required
                          maxLength={80}
                          placeholder="e.g. Hope Horizon Trust"
                          className="border-b border-black/15 focus:border-[#121214] focus:outline-none py-2.5 text-sm text-[#121214] bg-transparent placeholder:text-black/25 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                      <label htmlFor="00NSj000004UjdJ" className="studio-label">
                        Project Name or Engagement Scope
                      </label>
                      <input
                        id="00NSj000004UjdJ"
                        name="00NSj000004UjdJ"
                        type="text"
                        maxLength={100}
                        placeholder="e.g. Salesforce NPSP Migration & Automation"
                        className="border-b border-black/15 focus:border-[#121214] focus:outline-none py-2.5 text-sm text-[#121214] bg-transparent placeholder:text-black/25 transition-colors"
                      />
                    </div>
                  </div>

                  {/* ── Section 2: Delivery & Performance Ratings ── */}
                  <div className="space-y-8 pt-6 border-t border-black/[0.06]">
                    <div className="border-b border-black/[0.06] pb-3 flex items-center gap-2">
                      <span className="text-xs font-mono uppercase tracking-widest text-rose font-bold">02</span>
                      <h3 className="text-lg font-bold text-[#121214] uppercase tracking-tight">Project Execution & Quality</h3>
                    </div>

                    {/* Question 1: Overall Satisfaction */}
                    <RatingScale
                      id="00NSj000004UjJy"
                      name="00NSj000004UjJy"
                      value={satisfaction}
                      onChange={setSatisfaction}
                      label="Overall, how satisfied are you with the work delivered?"
                      helperText="Rate from 1 (Very Dissatisfied) to 5 (Exceeded All Expectations)"
                    />

                    {/* Question 2: Scope Delivery */}
                    <div className="space-y-3">
                      <label className="studio-label text-sm font-semibold text-[#121214] block">
                        Did the automation/system work the way it was scoped to? <span className="text-rose">*</span>
                      </label>
                      <input type="hidden" name="00NSj000004Ujob" value={scopeDelivery} required />
                      
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {[
                          { key: "Yes", label: "Yes, fully scoped", desc: "Delivered exactly or beyond expectations" },
                          { key: "Partially", label: "Partially", desc: "Some requirements needed adjustments" },
                          { key: "No", label: "No", desc: "Key parts did not perform as scoped" },
                        ].map((item) => (
                          <button
                            type="button"
                            key={item.key}
                            onClick={() => setScopeDelivery(item.key)}
                            className={`p-4 rounded-xl text-left border transition-all duration-200 ${
                              scopeDelivery === item.key
                                ? "bg-[#121214] text-white border-[#121214] shadow-md"
                                : "bg-white text-black/80 border-black/10 hover:border-black/30 hover:bg-black/[0.01]"
                            }`}
                          >
                            <p className="font-bold text-sm mb-1">{item.label}</p>
                            <p className={`text-xs ${scopeDelivery === item.key ? "text-white/60" : "text-black/40"}`}>
                              {item.desc}
                            </p>
                          </button>
                        ))}
                      </div>

                      {/* Scope Comments (Conditional or always accessible) */}
                      <div className={`pt-3 transition-all duration-300 ${scopeDelivery ? "opacity-100" : "opacity-70"}`}>
                        <label htmlFor="00NSj000004Ujjl" className="studio-label text-xs block mb-1">
                          {scopeDelivery === "Partially" || scopeDelivery === "No" 
                            ? "Please tell us what differed from the original scope:" 
                            : "Any notes on scope delivery (optional):"}
                        </label>
                        <textarea
                          id="00NSj000004Ujjl"
                          name="00NSj000004Ujjl"
                          rows={3}
                          placeholder="Provide details here..."
                          className="w-full border border-black/15 rounded-xl p-3 text-sm text-[#121214] bg-black/[0.01] focus:border-[#121214] focus:outline-none transition-colors resize-none"
                        />
                      </div>
                    </div>

                    {/* Question 3: Communication & Responsiveness */}
                    <RatingScale
                      id="00NSj000004UjgX"
                      name="00NSj000004UjgX"
                      value={communication}
                      onChange={setCommunication}
                      label="How would you rate communication and responsiveness throughout the project?"
                      helperText="Rate from 1 (Slow / Unclear) to 5 (Proactive & Extremely Responsive)"
                    />

                    {/* Question 4: Delivered On Time */}
                    <div className="space-y-3">
                      <label className="studio-label text-sm font-semibold text-[#121214] block">
                        Was the project delivered on time? <span className="text-rose">*</span>
                      </label>
                      <input type="hidden" name="00NSj000004UjqD" value={deliveredOnTime} required />

                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { key: "Yes", label: "Yes, on schedule" },
                          { key: "No", label: "No, delayed" },
                        ].map((item) => (
                          <button
                            type="button"
                            key={item.key}
                            onClick={() => setDeliveredOnTime(item.key)}
                            className={`py-3.5 px-4 rounded-xl text-center font-bold text-sm border transition-all duration-200 ${
                              deliveredOnTime === item.key
                                ? "bg-[#121214] text-white border-[#121214] shadow-md"
                                : "bg-white text-black/80 border-black/10 hover:border-black/30 hover:bg-black/[0.01]"
                            }`}
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>

                      {/* Delivery Time Comments */}
                      <div className="pt-2">
                        <label htmlFor="00NSj000004Ujmz" className="studio-label text-xs block mb-1">
                          {deliveredOnTime === "No" 
                            ? "Please explain timeline delays or impact:" 
                            : "Comments on timeline & milestones (optional):"}
                        </label>
                        <textarea
                          id="00NSj000004Ujmz"
                          name="00NSj000004Ujmz"
                          rows={2}
                          placeholder="Add comments on timeline..."
                          className="w-full border border-black/15 rounded-xl p-3 text-sm text-[#121214] bg-black/[0.01] focus:border-[#121214] focus:outline-none transition-colors resize-none"
                        />
                      </div>
                    </div>

                    {/* Question 5: Documentation & Handover Clarity */}
                    <RatingScale
                      id="00NSj000004Ujev"
                      name="00NSj000004Ujev"
                      value={documentation}
                      onChange={setDocumentation}
                      label="How clear was the documentation and handover you received?"
                      helperText="Rate from 1 (Confusing / Incomplete) to 5 (Comprehensive & Clear)"
                    />
                  </div>

                  {/* ── Section 3: Qualitative Reflection ── */}
                  <div className="space-y-6 pt-6 border-t border-black/[0.06]">
                    <div className="border-b border-black/[0.06] pb-3 flex items-center gap-2">
                      <span className="text-xs font-mono uppercase tracking-widest text-rose font-bold">03</span>
                      <h3 className="text-lg font-bold text-[#121214] uppercase tracking-tight">Qualitative Reflection</h3>
                    </div>

                    {/* Question 6: What went particularly well */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="00NSj000004Uji9" className="studio-label text-sm font-semibold text-[#121214]">
                        What's one thing that went particularly well?
                      </label>
                      <textarea
                        id="00NSj000004Uji9"
                        name="00NSj000004Uji9"
                        rows={3}
                        placeholder="e.g. Quick turnaround on data flows, clear explanations during walkthroughs, etc."
                        className="w-full border border-black/15 rounded-xl p-3 text-sm text-[#121214] bg-white focus:border-[#121214] focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    {/* Question 7: What could have gone better */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="00NSj000004UjS2" className="studio-label text-sm font-semibold text-[#121214]">
                        What's one thing that could have gone better?
                      </label>
                      <textarea
                        id="00NSj000004UjS2"
                        name="00NSj000004UjS2"
                        rows={3}
                        placeholder="e.g. More frequent milestone check-ins, earlier sandbox access, etc."
                        className="w-full border border-black/15 rounded-xl p-3 text-sm text-[#121214] bg-white focus:border-[#121214] focus:outline-none transition-colors resize-none"
                      />
                    </div>
                  </div>

                  {/* ── Section 4: NPS & Recommendation ── */}
                  <div className="space-y-6 pt-6 border-t border-black/[0.06]">
                    <div className="border-b border-black/[0.06] pb-3 flex items-center gap-2">
                      <span className="text-xs font-mono uppercase tracking-widest text-rose font-bold">04</span>
                      <h3 className="text-lg font-bold text-[#121214] uppercase tracking-tight">Net Promoter Score (NPS)</h3>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-baseline flex-wrap gap-2">
                        <label htmlFor="00NSj000004Ujbh" className="studio-label text-sm font-semibold text-[#121214]">
                          How likely are you to recommend Cohby Consulting Services to another organisation? <span className="text-rose">*</span>
                        </label>
                        {npsScore !== null && (
                          <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                            npsScore >= 9 ? "bg-emerald-100 text-emerald-800" :
                            npsScore >= 7 ? "bg-amber-100 text-amber-800" : "bg-rose/10 text-rose"
                          }`}>
                            {npsScore >= 9 ? "Promoter (9-10)" : npsScore >= 7 ? "Passive (7-8)" : "Detractor (0-6)"}
                          </span>
                        )}
                      </div>

                      <input type="hidden" name="00NSj000004Ujbh" id="00NSj000004Ujbh" value={npsScore !== null ? npsScore : ""} required />

                      {/* 0 to 10 Scale Grid */}
                      <div className="grid grid-cols-11 gap-1 md:gap-2">
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((score) => {
                          const isSelected = npsScore === score;
                          return (
                            <button
                              type="button"
                              key={score}
                              onClick={() => setNpsScore(score)}
                              className={`py-3 px-1 rounded-xl text-xs md:text-sm font-mono font-bold transition-all duration-200 border text-center ${
                                isSelected
                                  ? "bg-[#121214] text-white border-[#121214] shadow-md scale-105"
                                  : "bg-white text-black/70 border-black/10 hover:border-black/30 hover:bg-black/[0.02]"
                              }`}
                            >
                              {score}
                            </button>
                          );
                        })}
                      </div>

                      <div className="flex justify-between text-[11px] font-mono text-black/40 px-1">
                        <span>0 - Not at all likely</span>
                        <span>10 - Extremely likely</span>
                      </div>
                    </div>
                  </div>

                  {/* ── Section 5: Testimonial Consent & Final Remarks ── */}
                  <div className="space-y-6 pt-6 border-t border-black/[0.06]">
                    <div className="border-b border-black/[0.06] pb-3 flex items-center gap-2">
                      <span className="text-xs font-mono uppercase tracking-widest text-rose font-bold">05</span>
                      <h3 className="text-lg font-bold text-[#121214] uppercase tracking-tight">Testimonial Consent & Notes</h3>
                    </div>

                    {/* Question 9: Testimonial Permission */}
                    <div className="space-y-3">
                      <label className="studio-label text-sm font-semibold text-[#121214] block">
                        Would you be open to us using your feedback as a testimonial? <span className="text-rose">*</span>
                      </label>
                      <input type="hidden" name="00NSj000004Ujrp" value={testimonialPermission} required />

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {[
                          { 
                            key: "Yes_with_name_and_company", 
                            label: "Yes, with attribution", 
                            desc: "Display name & organisation" 
                          },
                          { 
                            key: "Yes_anonymous", 
                            label: "Yes, anonymously", 
                            desc: "Display quote without names" 
                          },
                          { 
                            key: "No", 
                            label: "No, keep private", 
                            desc: "For internal improvement only" 
                          },
                        ].map((option) => (
                          <button
                            type="button"
                            key={option.key}
                            onClick={() => setTestimonialPermission(option.key)}
                            className={`p-4 rounded-xl text-left border transition-all duration-200 ${
                              testimonialPermission === option.key
                                ? "bg-[#121214] text-white border-[#121214] shadow-md"
                                : "bg-white text-black/80 border-black/10 hover:border-black/30 hover:bg-black/[0.01]"
                            }`}
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-bold text-sm">{option.label}</span>
                              {testimonialPermission === option.key && (
                                <CheckCircle2 className="w-4 h-4 text-rose" />
                              )}
                            </div>
                            <p className={`text-xs ${testimonialPermission === option.key ? "text-white/60" : "text-black/40"}`}>
                              {option.desc}
                            </p>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Question 10: Anything else to add */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="00NSj000004UjlN" className="studio-label text-sm font-semibold text-[#121214]">
                        Anything else you'd like to add?
                      </label>
                      <textarea
                        id="00NSj000004UjlN"
                        name="00NSj000004UjlN"
                        rows={3}
                        placeholder="Any additional thoughts, suggestions, or ideas..."
                        className="w-full border border-black/15 rounded-xl p-3 text-sm text-[#121214] bg-white focus:border-[#121214] focus:outline-none transition-colors resize-none"
                      />
                    </div>
                  </div>

                  {/* ── Submit Action ── */}
                  <div className="pt-8 border-t border-black/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6">
                    <p className="text-xs text-black/45 flex items-center gap-2">
                      <HeartHandshake className="w-4 h-4 text-rose" />
                      We deeply appreciate your candid feedback and partnership.
                    </p>

                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#121214] text-white hover:bg-rose transition-all duration-300 font-mono text-sm uppercase tracking-wider font-bold shadow-lg hover:shadow-xl cursor-pointer"
                    >
                      <span>Submit Feedback</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>

              </div>
            </RevealItem>
          </RevealGroup>

        </div>
      </section>
    </div>
  );
};

export default Feedback;
