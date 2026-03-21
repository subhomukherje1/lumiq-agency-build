import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Search, FileText, Map, CheckCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import PageMeta from "@/components/PageMeta";

const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL || "https://calendly.com";

const phases = [
  {
    number: "Phase 1",
    title: "The Revenue Engine Audit",
    subtitle: "The Diagnostic",
    body: "Before we spend a single dollar on new traffic, we tear down your current setup. We audit your GA4 architecture, map your CRM data flow, and pinpoint exactly where your highest-value B2B buyers are abandoning your funnel. We find the leaks so you stop bleeding budget.",
    deliverables: [
      "Full tracking & attribution audit",
      "Funnel friction & UX analysis",
      "AI-assisted A/B test hypothesis generation",
      "6-month prioritized growth roadmap",
    ],
    featured: false,
  },
  {
    number: "Phase 2",
    title: "Infrastructure & Implementation",
    subtitle: "The Foundation",
    body: "We fix the plumbing so your tech stack finally tells you the truth about your marketing ROI. We repair broken APIs, implement flawless server-side tracking, and rebuild your core landing pages. Your data becomes your single source of truth — and every decision you make from here is built on something real.",
    deliverables: [
      "HubSpot & Salesforce integration & hygiene",
      "High-converting landing page development",
      "Executive pipeline & ROI dashboards",
      "Lead-routing and lifecycle automation",
    ],
    featured: true,
  },
  {
    number: "Phase 3",
    title: "Managed Growth & Scale",
    subtitle: "The Engine",
    body: "Once the foundation is solid, we turn on the traffic and multiply the conversions. We run continuous high-velocity experiments alongside high-intent performance marketing — optimised entirely for qualified pipeline and closed revenue, not vanity metrics.",
    deliverables: [
      "Continuous CRO & multivariate A/B testing",
      "LinkedIn ABM & high-intent Google Search",
      "Predictive attribution modeling",
      "Dedicated offshore specialist team — senior talent at efficient pricing",
    ],
    featured: false,
  },
];

const steps = [
  {
    number: "01",
    icon: Search,
    title: "You request a Revenue Teardown",
    body: "We review your website, ad account, or GA4 property before we ever speak — so the first conversation starts with specific findings about your business, not a generic agency pitch deck.",
  },
  {
    number: "02",
    icon: FileText,
    title: "We deliver the audit report",
    body: "Within 5 business days you receive a written findings report — a clear diagnosis of what is broken, what is working, and a prioritized list of what to fix first. No call required to receive this.",
  },
  {
    number: "03",
    icon: Map,
    title: "We build your roadmap together",
    body: "If the findings resonate, we present a Phase 1 scope tailored to your specific situation. You review it, ask questions, and decide whether to move forward. No pressure and no standard packages applied to every client regardless of their situation.",
  },
];

const differentiators = [
  {
    number: "01",
    label: "Audit before commitment",
    description: "We show you exactly what is broken before you sign anything. No other agency does this as standard.",
  },
  {
    number: "3x",
    label: "Average client ROAS",
    description: "Return on ad spend across active B2B retainer accounts once all three phases are complete.",
  },
  {
    number: "5",
    label: "Business days to your audit",
    description: "From the moment you request a Revenue Teardown to written findings in your inbox.",
  },
  {
    number: "0",
    label: "Generic retainers",
    description: "Every engagement is scoped after the audit — based on what your business actually needs, not a standard package.",
  },
];

const OurModel = () => (
  <div className="min-h-screen">
    <PageMeta
      title="Our Model — Revium Labs"
      description="We don't run campaigns and hope for the best. We diagnose your pipeline leaks, fix the infrastructure, and scale the channels that close deals."
    />

    {/* ═══════════════════════════════════════════════════════════════════
        SECTION 1 — HERO
    ═══════════════════════════════════════════════════════════════════ */}
    <section className="bg-[#0D0D1A] pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.span
          className="inline-block text-accent-pink text-xs font-bold uppercase tracking-[0.2em] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          data-testid="hero-label"
        >
          How We Work
        </motion.span>

        <motion.h1
          className="font-display text-[1.75rem] sm:text-4xl md:text-6xl font-extrabold text-white leading-tight max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          data-testid="hero-headline"
        >
          How We Build Your Revenue Engine.
        </motion.h1>

        <motion.p
          className="mt-8 text-lg text-white/50 max-w-[660px] leading-relaxed"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          data-testid="hero-subheadline"
        >
          We don't run campaigns and hope for the best. We diagnose your pipeline leaks, fix the infrastructure that's failing you, and then scale the channels that actually close deals. Every engagement follows the same three-phase system — in order, without shortcuts.
        </motion.p>
      </div>
    </section>

    {/* ═══════════════════════════════════════════════════════════════════
        SECTION 2 — PHASE CARDS
    ═══════════════════════════════════════════════════════════════════ */}
    <section className="bg-white py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Section Intro */}
        <div className="max-w-[580px] mx-auto text-center mb-16">
          <AnimatedSection>
            <span className="text-sm font-bold text-primary uppercase tracking-[0.15em]">
              The System
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-extrabold text-foreground leading-tight">
              Three phases. One revenue engine.
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Most agencies skip straight to running ads. We don't. Each phase builds on the last — and we don't move to the next until the foundation is solid.
            </p>
          </AnimatedSection>
        </div>

        {/* Phase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {phases.map((phase, i) => (
            <AnimatedSection key={phase.number} delay={i * 0.1}>
              <div
                className={`rounded-2xl p-8 h-full flex flex-col bg-white border ${
                  phase.featured
                    ? "border-primary/40 shadow-lg shadow-primary/5"
                    : "border-border"
                }`}
                data-testid={`phase-card-${i + 1}`}
              >
                {/* Phase Pill */}
                <span className="inline-flex self-start px-4 py-1.5 rounded-full bg-gradient-to-r from-primary to-accent-pink text-white text-xs font-bold">
                  {phase.number}
                </span>

                {/* Title */}
                <h3 className="mt-6 font-display text-[22px] font-bold text-foreground leading-tight">
                  {phase.title}
                </h3>

                {/* Subtitle */}
                <p className="mt-2 text-primary italic font-medium">
                  {phase.subtitle}
                </p>

                {/* Body */}
                <p className="mt-4 text-muted-foreground leading-relaxed text-sm flex-1">
                  {phase.body}
                </p>

                {/* Divider */}
                <div className="my-6 border-t border-border" />

                {/* Deliverables */}
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">
                  What We Deliver
                </p>
                <ul className="space-y-3">
                  {phase.deliverables.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-foreground">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0 fill-primary/10" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* ═══════════════════════════════════════════════════════════════════
        SECTION 3 — WHY THIS ORDER MATTERS
    ═══════════════════════════════════════════════════════════════════ */}
    <section className="bg-muted py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <span className="text-sm font-bold text-primary uppercase tracking-[0.15em]">
              Why The Sequence Matters
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-foreground leading-tight max-w-2xl">
              Most agencies start at Phase 3. That is the problem.
            </h2>
          </AnimatedSection>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Timeline */}
            <div className="md:col-span-4">
              <AnimatedSection delay={0.2}>
                <div className="relative pl-8" data-testid="timeline">
                  {/* Connecting Line */}
                  <div className="absolute left-[11px] top-3 bottom-3 w-0.5 bg-primary/30" />
                  
                  {/* Node 1 */}
                  <div className="relative mb-8">
                    <div className="absolute left-[-20px] top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                    <p className="font-display font-bold text-foreground">Phase 1 — Audit</p>
                  </div>

                  {/* Node 2 */}
                  <div className="relative mb-8">
                    <div className="absolute left-[-20px] top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                    <p className="font-display font-bold text-foreground">Phase 2 — Fix</p>
                  </div>

                  {/* Node 3 */}
                  <div className="relative">
                    <div className="absolute left-[-20px] top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                    <p className="font-display font-bold text-foreground">Phase 3 — Scale</p>
                  </div>
                </div>

                <p className="mt-8 text-sm text-muted-foreground italic">
                  "Skipping phases is how agencies waste your budget."
                </p>
              </AnimatedSection>
            </div>

            {/* Content */}
            <div className="md:col-span-8 space-y-6">
              <AnimatedSection delay={0.3}>
                <p className="text-foreground leading-relaxed">
                  If your tracking is broken, every campaign decision you make is based on fiction. You might be scaling your worst-performing channel and cutting the one that actually works — and your dashboard is telling you the opposite. Phase 1 exists because you cannot fix what you cannot see.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.4}>
                <p className="text-foreground leading-relaxed">
                  If your landing pages convert at 1.5% and your CRM has duplicate leads everywhere, spending more on ads makes the problem bigger, not better. Phase 2 exists because traffic is only valuable when the infrastructure is ready to receive it.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.5}>
                <p className="text-foreground leading-relaxed">
                  Once Phases 1 and 2 are done, Phase 3 is where the compounding begins. Clean data feeding into high-intent campaigns, optimised by continuous A/B testing, reported through dashboards your CEO actually trusts. That is the revenue engine.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ═══════════════════════════════════════════════════════════════════
        SECTION 4 — HOW EVERY ENGAGEMENT STARTS
    ═══════════════════════════════════════════════════════════════════ */}
    <section className="bg-white py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <AnimatedSection>
            <span className="text-sm font-bold text-primary uppercase tracking-[0.15em]">
              How It Starts
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-extrabold text-foreground leading-tight">
              Every engagement begins the same way.
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-[540px] mx-auto">
              We never scope an engagement without understanding your specific situation first. That starts with a Revenue Teardown.
            </p>
          </AnimatedSection>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting arrows on desktop */}
            <div className="hidden md:block absolute top-16 left-[calc(33.33%-20px)] w-[calc(33.33%+40px)] border-t-2 border-dashed border-primary/30" />
            <div className="hidden md:block absolute top-16 left-[calc(66.66%-20px)] w-[calc(33.33%+40px)] border-t-2 border-dashed border-primary/30" />

            {steps.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 0.15}>
                <div className="text-center" data-testid={`step-${i + 1}`}>
                  {/* Number Circle */}
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-display font-bold text-lg flex items-center justify-center mx-auto">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mt-6 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                    {step.title}
                  </h3>

                  {/* Body */}
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* ═══════════════════════════════════════════════════════════════════
        SECTION 5 — WHAT MAKES THIS DIFFERENT
    ═══════════════════════════════════════════════════════════════════ */}
    <section className="bg-[#1D0632] py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <AnimatedSection>
            <span className="text-sm font-bold text-accent-pink uppercase tracking-[0.15em]">
              Why This Is Different
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-white leading-tight">
              This is not how most agencies work. That is the point.
            </h2>
          </AnimatedSection>
        </div>

        {/* Differentiator Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {differentiators.map((item, i) => (
            <AnimatedSection key={item.label} delay={i * 0.1}>
              <div
                className="rounded-2xl bg-white/5 border border-white/10 p-8"
                data-testid={`differentiator-${i + 1}`}
              >
                <span className="text-5xl font-display font-extrabold text-accent-pink">
                  {item.number}
                </span>
                <h3 className="mt-4 font-display font-bold text-white text-lg">
                  {item.label}
                </h3>
                <p className="mt-2 text-sm text-white/50 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* ═══════════════════════════════════════════════════════════════════
        SECTION 6 — BOTTOM CTA
    ═══════════════════════════════════════════════════════════════════ */}
    <section className="bg-[#0D0D1A] py-24 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <AnimatedSection>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-white leading-tight max-w-2xl mx-auto">
            Stop guessing. Start scaling.
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <p className="mt-6 text-lg text-white/50 max-w-[560px] mx-auto leading-relaxed">
            Every engagement starts with a deep-dive audit so we both know exactly what needs to be fixed before any long-term commitments are made.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors text-base"
              data-testid="cta-primary"
            >
              Request a Revenue Teardown <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/30 text-white font-semibold hover:bg-white/5 transition-colors text-base"
              data-testid="cta-secondary"
            >
              Book a Strategy Session
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <p className="mt-8 text-sm text-white/30 max-w-md mx-auto">
            Audit delivered within 5 business days. No retainer required until Phase 2. No long-term commitment to get started.
          </p>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default OurModel;
