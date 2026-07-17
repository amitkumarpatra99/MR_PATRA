import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown, ChevronUp, Sparkles, Zap, Shield, ChevronLeft, ChevronRight } from "lucide-react";

const PLANS = [
  {
    id: "basic",
    badge: "STARTER",
    name: "Basic",
    subtitle: "Ideal for personal sites, portfolios, and launching a digital presence.",
    priceMonthly: 2999,
    priceYearly: 1999,
    saving: "Save ₹12,000 / year",
    tags: ["HTML5", "CSS3", "JavaScript"],
    icon: Zap,
    features: [
      "Responsive layout (mobile-first)",
      "Up to 5 custom-designed pages",
      "Basic SEO optimization & meta tags",
      "Secure contact forms & interactions",
      "1 year of basic email support",
    ],
    buttonText: "Purchase Basic",
    isRecommended: false,
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "group-hover:border-blue-500/30",
    glowColor: "rgba(59, 130, 246, 0.12)",
  },
  {
    id: "professional",
    badge: "MOST POPULAR",
    name: "Professional",
    subtitle: "Perfect for growing businesses requiring dynamic workflows and custom CMS.",
    priceMonthly: 5999,
    priceYearly: 4999,
    saving: "Save ₹12,000 / year",
    tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    icon: Sparkles,
    features: [
      "Everything in Basic included",
      "Sleek Apple-style animations & micro-interactions",
      "CMS integration (Sanity, Strapi, or WordPress)",
      "Interactive dashboard & full state management",
      "API integrations & custom backend endpoints",
      "Priority 24/7 chat support",
    ],
    buttonText: "Purchase Professional",
    isRecommended: true,
    color: "from-indigo-500/25 to-[#4FB7B3]/25",
    borderColor: "border-[#4FB7B3]/40 group-hover:border-[#4FB7B3]/60",
    glowColor: "rgba(79, 183, 179, 0.22)",
  },
  {
    id: "enterprise",
    badge: "FULL SOLUTION",
    name: "Enterprise",
    subtitle: "For complex web applications, platforms, and full-scale software products.",
    priceMonthly: 11999,
    priceYearly: 9999,
    saving: "Save ₹24,000 / year",
    tags: ["TypeScript", "Node.js", "PostgreSQL", "Docker", "AWS"],
    icon: Shield,
    features: [
      "Everything in Professional included",
      "Scalable backend architecture & secure database design",
      "E-commerce integration & payment gateways (Stripe/Razorpay)",
      "Real-time features via WebSockets or AI-driven integrations",
      "SSO/OAuth security & advanced user authorization",
      "Dedicated developer support & custom service level agreements",
    ],
    buttonText: "Purchase Enterprise",
    isRecommended: false,
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "group-hover:border-purple-500/30",
    glowColor: "rgba(168, 85, 247, 0.12)",
  },
];

const COMPARISON_FEATURES = [
  { category: "Page Count", basic: "Up to 5", professional: "Up to 15", enterprise: "Unlimited" },
  { category: "Support Response", basic: "Within 48 hours", professional: "Within 6 hours", enterprise: "Instant (Dedicated Slack)" },
  { category: "Custom Animations", basic: "Basic transitions", professional: "Premium custom motion", enterprise: "Advanced interactive Canvas/GSAP" },
  { category: "CMS Integration", basic: "✕", professional: "Included", enterprise: "Custom CMS & headless options" },
  { category: "E-Commerce", basic: "✕", professional: "Add-on", enterprise: "Fully Included" },
  { category: "Revisions", basic: "2 rounds", professional: "5 rounds", enterprise: "Unlimited" },
  { category: "Deployment", basic: "Vercel / Netlify", basicDesc: "Free tier hosting setup", professional: "Vercel / AWS / Docker", professionalDesc: "Production setup", enterprise: "Cloud Infrastructure Setup", enterpriseDesc: "Full CI/CD, AWS/GCP architecture" },
];

export default function Pricing() {
  const navigate = useNavigate();
  const [billingCycle, setBillingCycle] = useState("monthly"); // "monthly" | "yearly"
  const [compareExpanded, setCompareExpanded] = useState(false);

  // Mouse hover coordinate tracking for card glow effect
  const cardRefs = useRef([]);
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      sliderRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const handleMouseMove = (index, e) => {
    const card = cardRefs.current[index];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handlePurchase = (planId) => {
    navigate("/checkout", { state: { planId, billingCycle } });
  };

  return (
    <section
      id="pricing"
      className="content-visibility-auto relative py-24 bg-transparent text-white font-sans overflow-hidden flex flex-col items-center z-10"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#4FB7B3]/[0.02] rounded-[100%] blur-[140px] pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-[1280px] px-4 sm:px-6 md:px-12 lg:px-16 flex flex-col items-center">
        
        {/* Header Section */}
        <div className="mb-12 flex flex-col items-center text-center max-w-2xl px-4">
          <div className="premium-header-badge mb-6">
            <span className="premium-header-badge-dot bg-[#4FB7B3] animate-pulse" />
            <span className="text-neutral-300 text-[10px] sm:text-xs font-semibold tracking-widest uppercase">
              PRICING PLANS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Transparent, <span className="text-neutral-400">Value-First</span> Pricing
          </h2>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
            Pick a tier that matches your current developmental phase. No hidden maintenance fees, just clean scalable code built for performance.
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex items-center justify-center mb-16 relative">
          <div className="p-1 rounded-full bg-neutral-900/60 border border-white/[0.08] backdrop-blur-md flex items-center relative z-10 w-64 sm:w-72">
            <div className="relative flex w-full">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`flex-1 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-tight transition-colors duration-300 z-10 ${
                  billingCycle === "monthly" ? "text-black" : "text-neutral-400 hover:text-white"
                }`}
              >
                Monthly billing
              </button>
              
              <button
                onClick={() => setBillingCycle("yearly")}
                className={`flex-1 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-tight transition-colors duration-300 z-10 ${
                  billingCycle === "yearly" ? "text-black" : "text-neutral-400 hover:text-white"
                }`}
              >
                Yearly billing
              </button>

              {/* Slider Highlight */}
              <motion.div
                className="absolute top-0 bottom-0 bg-white rounded-full z-0 shadow-[0_4px_12px_rgba(255,255,255,0.15)]"
                initial={false}
                animate={{
                  left: billingCycle === "monthly" ? "0%" : "50%",
                  width: "50%"
                }}
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            </div>
          </div>
          
          
        </div>

        {/* Pricing Cards Slider */}
        <div className="relative group/slider w-full px-4">
          {/* Navigation Arrows (Visible on Hover/Desktop) */}
          <button
            onClick={() => scroll('left')}
            className="absolute -left-12 lg:-left-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#1a1a1a]/80 backdrop-blur-md border border-white/10 items-center justify-center text-white opacity-0 group-hover/slider:opacity-100 transition-opacity hidden md:flex hover:bg-[#2a2a2a] shadow-xl"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute -right-12 lg:-right-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#1a1a1a]/80 backdrop-blur-md border border-white/10 items-center justify-center text-white opacity-0 group-hover/slider:opacity-100 transition-opacity hidden md:flex hover:bg-[#2a2a2a] shadow-xl"
          >
            <ChevronRight size={24} />
          </button>

          {/* Slider Track */}
          <div
            ref={sliderRef}
            className="flex gap-6 lg:gap-8 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 px-4 -mx-4 hide-scrollbar w-full"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            data-lenis-prevent
          >
            {PLANS.map((plan, idx) => {
              const PlanIcon = plan.icon;
              const isYearly = billingCycle === "yearly";
              const price = isYearly ? plan.priceYearly : plan.priceMonthly;

              return (
                <div
                  key={plan.id}
                  ref={(el) => (cardRefs.current[idx] = el)}
                  onMouseMove={(e) => handleMouseMove(idx, e)}
                  className={`snap-center shrink-0 w-[290px] sm:w-[350px] md:w-[380px] group relative flex flex-col justify-between rounded-[2.2rem] bg-[#0b0c10]/40 border ${
                    plan.isRecommended
                      ? "border-[#4FB7B3]/40 bg-[#0b0c10]/70 shadow-[0_30px_60px_rgba(79,183,179,0.08)]"
                      : "border-white/[0.07]"
                  } backdrop-blur-md p-5 sm:p-6 md:p-7 transition-all duration-500 hover:-translate-y-2 hover:bg-[#12141c]/50 hover:border-white/20`}
                  style={{
                    "--mouse-x": "0px",
                    "--mouse-y": "0px",
                  }}
                >
                  {/* Mouse follow glow */}
                  <div
                    className="absolute inset-0 rounded-[2.2rem] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(350px circle at var(--mouse-x) var(--mouse-y), ${plan.glowColor}, transparent 85%)`,
                    }}
                  />

                  {/* Subtle Inner Highlight */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/[0.015] to-transparent pointer-events-none rounded-[2.2rem]" />

                  {/* Card Top Details */}
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <span className={`text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full ${
                        plan.isRecommended 
                          ? "bg-[#4FB7B3]/15 text-[#4FB7B3] border border-[#4FB7B3]/25" 
                          : "bg-white/[0.04] text-neutral-400 border border-white/[0.06]"
                      }`}>
                        {plan.badge}
                      </span>
                      {plan.isRecommended && (
                        <span className="flex items-center gap-1 text-[11px] font-semibold text-[#4FB7B3] animate-pulse">
                          <Sparkles className="w-3.5 h-3.5" /> Popular
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-xl bg-gradient-to-br ${plan.color} border border-white/5`}>
                        <PlanIcon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white tracking-tight">{plan.name}</h3>
                    </div>

                    <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-4 font-medium">
                      {plan.subtitle}
                    </p>

                    {/* Pricing Header */}
                    <div className="mb-4">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                          {formatPrice(price)}
                        </span>
                        <span className="text-neutral-500 text-sm font-semibold">/month</span>
                      </div>
                      <div className="h-4 mt-1 flex items-center">
                        <AnimatePresence mode="wait">
                          {isYearly ? (
                            <motion.span
                              initial={{ opacity: 0, y: -4 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 4 }}
                              transition={{ duration: 0.2 }}
                              className="text-[11px] font-bold text-[#4FB7B3] tracking-wide uppercase"
                            >
                              {plan.saving}
                            </motion.span>
                          ) : (
                            <span className="text-[11px] font-bold text-neutral-500 tracking-wide uppercase">
                              Billed monthly
                            </span>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* Technology badging */}
                    <div className="flex flex-wrap gap-2 mb-4 border-t border-b border-white/[0.06] py-3.5">
                      {plan.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-semibold bg-white/[0.03] text-neutral-300 border border-white/[0.06] rounded-md px-2.5 py-1 transition-all duration-300 hover:bg-white/[0.07] hover:border-white/[0.12]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Features List */}
                    <div className="space-y-3 mb-6">
                      <p className="text-[11px] font-bold uppercase tracking-widest text-neutral-500">Key Deliverables</p>
                      <ul className="space-y-2 text-left">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className={`p-0.5 rounded-full shrink-0 mt-0.5 ${
                              plan.isRecommended ? "bg-[#4FB7B3]/15 text-[#4FB7B3]" : "bg-white/[0.04] text-neutral-400"
                            }`}>
                              <Check className="w-3.5 h-3.5 stroke-[3]" />
                            </div>
                            <span className="text-neutral-300 text-xs sm:text-[13px] leading-snug font-medium">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA Action Button */}
                  <button
                    onClick={() => handlePurchase(plan.id)}
                    className={`w-full py-3 px-6 rounded-full text-sm font-bold tracking-tight transition-all duration-300 flex items-center justify-center gap-2 group/btn ${
                      plan.isRecommended
                        ? "bg-white text-black hover:bg-neutral-200 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(255,255,255,0.25)]"
                        : "bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] hover:border-[#4FB7B3]/40 hover:-translate-y-0.5 text-white"
                    }`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Compare Features Section */}
        <div className="mt-20 w-full flex flex-col items-center px-4">
          <button
            onClick={() => setCompareExpanded(!compareExpanded)}
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.07] hover:border-white/[0.12] transition-all duration-300 text-xs font-semibold uppercase tracking-wider text-neutral-300"
          >
            <span>Compare Features</span>
            {compareExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          <AnimatePresence>
            {compareExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden w-full max-w-4xl mt-8 border border-white/[0.06] bg-[#0b0c10]/20 rounded-[2rem] p-4 sm:p-8 backdrop-blur-md"
              >
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-white/[0.08] text-xs font-extrabold uppercase tracking-widest text-neutral-400">
                        <th className="py-4 pr-4">Feature</th>
                        <th className="py-4 px-4">Basic</th>
                        <th className="py-4 px-4 text-[#4FB7B3]">Professional</th>
                        <th className="py-4 pl-4 text-purple-300">Enterprise</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/[0.04] text-xs sm:text-sm font-medium">
                      {COMPARISON_FEATURES.map((item, idx) => (
                        <tr key={idx} className="hover:bg-white/[0.02] transition-colors duration-150">
                          <td className="py-4 pr-4 text-neutral-300 max-w-[120px] sm:max-w-none font-semibold">
                            {item.category}
                          </td>
                          <td className="py-4 px-4 text-neutral-400">
                            {item.basic}
                            {item.basicDesc && (
                              <span className="block text-[10px] text-neutral-600 mt-0.5">{item.basicDesc}</span>
                            )}
                          </td>
                          <td className="py-4 px-4 text-[#4FB7B3]/90">
                            {item.professional}
                            {item.professionalDesc && (
                              <span className="block text-[10px] text-neutral-600 mt-0.5">{item.professionalDesc}</span>
                            )}
                          </td>
                          <td className="py-4 pl-4 text-purple-300">
                            {item.enterprise}
                            {item.enterpriseDesc && (
                              <span className="block text-[10px] text-neutral-600 mt-0.5">{item.enterpriseDesc}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Internal CSS for scrollbar hiding/styling */}
      <style dangerouslySetInnerHTML={{
        __html: `
        /* Hide scrollbar for slider track */
        .hide-scrollbar::-webkit-scrollbar {
            display: none;
        }
      `}} />
    </section>
  );
}
