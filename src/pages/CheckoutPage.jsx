import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { Check, CreditCard, ArrowLeft, ShieldCheck, HelpCircle, FileText } from "lucide-react";

const PLANS_DATA = {
  basic: {
    name: "Basic",
    priceMonthly: 12999,
    priceYearly: 10999,
    saving: "Save ₹24,000 / year",
    tags: ["HTML5", "CSS3", "JavaScript"],
    features: [
      "Responsive layout (mobile-first)",
      "Up to 5 custom-designed pages",
      "Basic SEO optimization & meta tags",
      "Secure contact forms & interactions",
      "1 year of basic email support",
    ],
    revisions: "2 rounds of design revisions",
    delivery: "7-10 business days",
  },
  professional: {
    name: "Professional",
    priceMonthly: 19999,
    priceYearly: 14999,
    saving: "Save ₹60,000 / year",
    tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    features: [
      "Everything in Basic included",
      "Sleek Apple-style animations & micro-interactions",
      "CMS integration (Sanity, Strapi, or WordPress)",
      "Interactive dashboard & full state management",
      "API integrations & custom backend endpoints",
      "Priority 24/7 chat support",
    ],
    revisions: "5 rounds of revisions",
    delivery: "14-21 business days",
  },
  enterprise: {
    name: "Enterprise",
    priceMonthly: 29999,
    priceYearly: 24999,
    saving: "Save ₹120,000 / year",
    tags: ["TypeScript", "Node.js", "PostgreSQL", "Docker", "AWS"],
    features: [
      "Everything in Professional included",
      "Scalable backend architecture & secure database design",
      "E-commerce integration & payment gateways (Stripe/Razorpay)",
      "Real-time features via WebSockets or AI-driven integrations",
      "SSO/OAuth security & advanced user authorization",
      "Dedicated developer support & custom service level agreements",
    ],
    revisions: "Unlimited revisions",
    delivery: "Custom timeline / Milestone based",
  },
};

export default function CheckoutPage() {
  const location = useLocation();
  const navigate = useNavigate();

  // Get selected plan and cycle or default to professional monthly
  const { planId = "professional", billingCycle = "monthly" } = location.state || {};
  const plan = PLANS_DATA[planId] || PLANS_DATA.professional;
  
  const isYearly = billingCycle === "yearly";
  const price = isYearly ? plan.priceYearly : plan.priceMonthly;

  useEffect(() => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0 });
    }
  }, []);

  const formatPrice = (value) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);
  };

  const handlePay = () => {
    window.open("https://pages.razorpay.com/amitpatra", "_blank");
  };

  return (
    <div className="min-h-screen bg-transparent text-white flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 font-sans relative overflow-hidden">
      
      {/* Ambient OLED Background Glows */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/[0.04] rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/[0.03] rounded-full blur-[120px] mix-blend-screen" />
      </div>

      {/* Close button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05, rotate: 90 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/")}
        className="fixed top-4 right-4 md:top-6 md:right-6 z-50 w-11 h-11 md:w-12 md:h-12 premium-close-btn cursor-pointer shadow-lg flex items-center justify-center"
      >
        <FaTimes size={18} />
      </motion.button>

      <div className="w-full max-w-5xl px-4 py-16 md:py-24 relative z-10">
        
        {/* Header section */}
        <div className="mb-12 flex flex-col items-start">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#4FB7B3] hover:text-[#4FB7B3]/80 transition-colors mb-6 group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" /> Back to pricing
          </button>
          
          <div className="premium-header-badge mb-4">
            <span className="premium-header-badge-dot bg-[#4FB7B3] animate-pulse" />
            <span className="text-slate-300 text-[10px] sm:text-xs font-semibold tracking-widest uppercase">
              Secure Checkout
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Review <span className="text-neutral-400">Order Details</span>
          </h1>
        </div>

        {/* Responsive Grid splits plan detail vs policy info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Plan Description Card (Left) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card border border-white/10 rounded-[2rem] p-6 sm:p-8 bg-[#0b0c10]/40 backdrop-blur-md relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-white mb-1">
                    {plan.name} Package
                  </h2>
                  <span className="text-neutral-400 text-xs sm:text-sm font-semibold block capitalize">
                    Billing Cycle: {billingCycle}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">
                    {formatPrice(price)}
                  </div>
                  <span className="text-neutral-500 text-xs sm:text-sm font-medium">/month</span>
                </div>
              </div>

              {isYearly && (
                <div className="px-4 py-2 bg-[#4FB7B3]/10 border border-[#4FB7B3]/20 rounded-xl text-xs font-bold text-[#4FB7B3] mb-6 inline-block">
                  {plan.saving} (Billed Annually)
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6 border-b border-white/[0.08] pb-6">
                {plan.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-semibold bg-white/[0.03] text-neutral-300 border border-white/[0.06] rounded-md px-2.5 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Delivery Details */}
              <div className="grid grid-cols-2 gap-4 mb-8 bg-white/[0.02] border border-white/[0.05] rounded-2xl p-4 text-xs sm:text-sm font-semibold">
                <div>
                  <span className="text-neutral-500 text-[10px] uppercase tracking-wider block mb-0.5">Estimated Delivery</span>
                  <span className="text-neutral-200">{plan.delivery}</span>
                </div>
                <div>
                  <span className="text-neutral-500 text-[10px] uppercase tracking-wider block mb-0.5">Included Revisions</span>
                  <span className="text-[#4FB7B3]">{plan.revisions}</span>
                </div>
              </div>

              {/* Deliverables checklist */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-400 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#4FB7B3]" /> Deliverables Included:
                </h3>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="p-0.5 rounded-full bg-[#4FB7B3]/15 text-[#4FB7B3] shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="text-neutral-300 text-sm leading-snug">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Payment Policies & Pay Actions (Right) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card border border-white/10 rounded-[2rem] p-6 sm:p-8 bg-[#0b0c10]/40 backdrop-blur-md relative overflow-hidden shadow-2xl space-y-6">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              
              <h3 className="text-lg font-bold tracking-tight text-white flex items-center gap-2.5">
                <FileText className="w-5 h-5 text-[#4FB7B3]" /> Payment Policy
              </h3>

              {/* Terms and policies list */}
              <div className="space-y-4 text-xs sm:text-[13px] leading-relaxed text-neutral-400">
                <div>
                  <h4 className="font-bold text-neutral-200 uppercase tracking-wider text-[11px] mb-1">
                    1. Downpayment & Milestones
                  </h4>
                  <p>
                    A standard 50% advance downpayment is required to schedule and initiate code development. The remaining 50% balance is invoiced upon project sign-off and before source code transfer.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-neutral-200 uppercase tracking-wider text-[11px] mb-1">
                    2. Revision Scope
                  </h4>
                  <p>
                    Revisions include visual refinements, typography tweaks, and functional adjustments within the initial scope. Changes outside of the initial design contract will be billed separately.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-neutral-200 uppercase tracking-wider text-[11px] mb-1">
                    3. Refund Policy
                  </h4>
                  <p>
                    Once work begins (after project kickoff discussion), the advance fee is non-refundable. If the project is terminated mid-way, invoice values will be recalculated based on hours worked.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-neutral-200 uppercase tracking-wider text-[11px] mb-1">
                    4. Post-Delivery Support
                  </h4>
                  <p>
                    Includes bug fixes and minor troubleshooting. Major updates, custom asset changes, and database modifications after launch require an ongoing maintenance package.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4 border-t border-white/[0.08]">
                <button
                  onClick={handlePay}
                  className="w-full py-4 px-6 rounded-full bg-white text-black hover:bg-neutral-200 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(255,255,255,0.25)] transition-all duration-300 text-sm font-bold tracking-tight flex items-center justify-center gap-2.5"
                >
                  <CreditCard className="w-4.5 h-4.5" /> Pay with Razorpay
                </button>
                
                <button
                  onClick={() => navigate("/")}
                  className="w-full py-4 px-6 rounded-full bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/20 hover:-translate-y-0.5 text-white transition-all duration-300 text-sm font-semibold tracking-tight"
                >
                  Cancel
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] text-neutral-500 font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-[#4FB7B3]" /> 256-bit encrypted secure checkout
              </div>
            </div>

            {/* Assistance Badge */}
            <div className="flex items-center gap-3 p-4 bg-white/[0.02] border border-white/[0.05] rounded-2xl">
              <HelpCircle className="w-5 h-5 text-indigo-400 shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-white block mb-0.5">Need help before checkout?</span>
                <span className="text-neutral-500">Contact me via WhatsApp at <a href="https://wa.me/8144129955" target="_blank" rel="noreferrer" className="text-[#4FB7B3] hover:underline">+91 81441 29955</a></span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
