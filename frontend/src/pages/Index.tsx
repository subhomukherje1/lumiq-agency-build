import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BarChart2, Database, Target, Brain, Eye, TrendingUp, Sparkles } from "lucide-react";
import CountUp from "@/components/CountUp";
import AnimatedSection from "@/components/AnimatedSection";
import CTABanner from "@/components/CTABanner";
import PageMeta from "@/components/PageMeta";
import CaseStudiesPreview from "@/components/CaseStudiesPreview";

const services = [
  {
    icon: Target,
    title: "Paid Advertising",
    description: "We run LinkedIn ABM and high-intent Google Search campaigns optimised entirely for qualified pipeline — not clicks, not impressions, not vanity metrics.",
    href: "/paid-advertising",
  },
  {
    icon: BarChart2,
    title: "Conversion Rate Optimization",
    description: "We use AI to find where your B2B buyers drop off and run rigorous A/B tests to convert more of your existing traffic into revenue — without increasing ad spend.",
    href: "/cro",
  },
  {
    icon: Database,
    title: "Analytics & Attribution",
    description: "We fix your GA4, connect your CRM, and build executive dashboards that prove exactly which campaigns are generating closed revenue.",
    href: "/analytics",
  },
];

const stats = [
  { value: 71, suffix: "%", label: "Avg. conversion lift" },
  { value: 50, suffix: "M+", prefix: "$", label: "Pipeline attributed" },
  { value: 20, suffix: "+", label: "B2B clients" },
  { value: 3, suffix: "x", label: "Average client ROAS" },
];

const aiTiles = [
  {
    icon: Brain,
    title: "AI Hypothesis Engine",
    description: "We use LLMs to generate A/B test ideas from your heatmaps, session recordings, and analytics data.",
  },
  {
    icon: Eye,
    title: "LLM Visibility Optimization",
    description: "We structure your content so your brand gets cited when buyers ask ChatGPT or Perplexity about your category.",
  },
  {
    icon: TrendingUp,
    title: "Predictive Attribution",
    description: "AI models that predict which campaigns will generate pipeline before you've spent the budget.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Personalisation",
    description: "Show different page variants to different buyer segments automatically, using behavioural signals.",
  },
];

const Index = () => {
  return (
    <>
      <PageMeta title="Revium Labs — B2B Analytics, CRO & AI-Powered Growth" description="Revium Labs helps B2B SaaS companies fix broken tracking, run AI-assisted A/B tests, and generate provable pipeline." ogImage="/og-home.png" />
      {/* ===================== SECTION 1 — HERO ===================== */}
      <section className="relative bg-dark min-h-screen flex items-center overflow-hidden">
        {/* Gradient orbs - hidden on mobile to prevent overflow */}
        <div className="hidden md:block absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/8 rounded-full blur-[150px] pointer-events-none" />
        <div className="hidden md:block absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-pink/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-5 md:px-6 pt-24 md:pt-32 pb-16 md:pb-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              className="inline-block text-accent-pink text-xs font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] mb-6 md:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              AI-Powered B2B Growth
            </motion.span>

            <motion.h1
              className="font-display text-[32px] leading-[1.15] sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <span className="text-white">Your website is losing revenue.</span>
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              <span className="bg-gradient-to-r from-primary to-accent-pink bg-clip-text text-transparent">
                We find exactly where.
              </span>
            </motion.h1>

            <motion.p
              className="mt-6 md:mt-8 text-base md:text-xl text-white/50 max-w-[600px] mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Revium Labs is a B2B analytics, CRO, and performance marketing agency. We fix broken tracking, run AI-powered A/B tests, and turn your ad spend into provable pipeline.
            </motion.p>

            <motion.div
              className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors text-base min-h-[52px]"
              >
                Get a free audit <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors text-base min-h-[52px]"
              >
                See how it works
              </Link>
            </motion.div>

            <motion.p
              className="mt-6 text-sm text-white/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Free audit delivered within 5 business days. No credit card required.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ===================== SECTION 2 — STATS BAR ===================== */}
      <section className="bg-section py-12 md:py-20">
        <div className="container mx-auto px-5 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1} className="text-center">
                <CountUp end={stat.value} suffix={stat.suffix} prefix={stat.prefix || ""} />
                <p className="mt-2 text-xs md:text-sm text-white/40 font-medium">{stat.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SECTION 3 — PROBLEM STATEMENT ===================== */}
      <section className="bg-white py-16 md:py-32">
        <div className="container mx-auto px-5 md:px-6">
          <div className="max-w-3xl mx-auto text-left md:text-left">
            <AnimatedSection>
              <span className="text-xs md:text-sm font-bold text-primary uppercase tracking-[0.12em] md:tracking-[0.15em]">The Problem</span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="mt-4 md:mt-6 font-display text-[26px] leading-tight md:text-5xl font-extrabold text-foreground">
                90% of B2B companies are making decisions on broken data.
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="mt-6 md:mt-8 text-base md:text-lg text-muted-foreground leading-relaxed">
                Your GA4 is misconfigured. Your CRM has duplicate leads. Your attribution tells you LinkedIn works but cannot prove it closed a deal. So your marketing budget is a guess dressed up as a strategy.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <p className="mt-4 md:mt-6 text-base md:text-lg text-foreground leading-relaxed font-medium">
                Revium Labs fixes the foundation, drives the right traffic, and uses AI to convert it — end to end.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===================== SECTION 4 — SERVICES ===================== */}
      <section className="bg-white pb-16 md:pb-32">
        <div className="container mx-auto px-5 md:px-6">
          <AnimatedSection className="text-center mb-10 md:mb-16">
            <span className="text-xs md:text-sm font-bold text-primary uppercase tracking-[0.12em] md:tracking-[0.15em]">What We Do</span>
            <h2 className="mt-3 md:mt-4 font-display text-[26px] leading-tight md:text-5xl font-extrabold text-foreground">
              Three services. One revenue system.
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.15}>
                <Link to={service.href} className="gradient-purple-card block h-full group hover-scale">
                  <service.icon className="w-8 md:w-10 h-8 md:h-10 text-accent-pink mb-4 md:mb-6" />
                  <h3 className="font-display text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{service.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed mb-4 md:mb-6">{service.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent-pink group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SECTION 5 — AI CAPABILITIES ===================== */}
      <section className="bg-dark py-16 md:py-32">
        <div className="container mx-auto px-5 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
            <AnimatedSection>
              <span className="text-xs md:text-sm font-bold text-accent-pink uppercase tracking-[0.12em] md:tracking-[0.15em]">AI-First Agency</span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="mt-3 md:mt-4 font-display text-[26px] leading-tight md:text-5xl font-extrabold text-white">
                We don't just use data. We use AI to find what humans miss.
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="mt-4 md:mt-6 text-base md:text-lg text-white/45 leading-relaxed">
                Most agencies run the same playbook on every client. Revium Labs uses AI to analyse your funnel, generate test hypotheses, predict which experiments will move the needle, and surface attribution insights that manual analysis would take weeks to find.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
            {aiTiles.map((tile, i) => (
              <AnimatedSection key={tile.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-6 md:p-8 h-full hover:border-primary/30 transition-colors">
                  <div className="w-10 md:w-12 h-10 md:h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-4 md:mb-5">
                    <tile.icon className="w-5 md:w-6 h-5 md:h-6 text-accent-pink" />
                  </div>
                  <h3 className="font-display text-base md:text-lg font-bold text-white mb-2">{tile.title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{tile.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SECTION 6 — SOCIAL PROOF ===================== */}
      <section className="bg-white py-16 md:py-32">
        <div className="container mx-auto px-5 md:px-6">
          <AnimatedSection className="text-center mb-4 md:mb-6">
            <span className="text-xs md:text-sm font-bold text-primary uppercase tracking-[0.12em] md:tracking-[0.15em]">Trusted By</span>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="text-center max-w-2xl mx-auto mb-6 md:mb-8">
            <h2 className="font-display text-[26px] leading-tight md:text-4xl font-extrabold text-foreground">
              B2B companies across SaaS, fintech, and professional services.
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2} className="text-center max-w-xl mx-auto mb-10 md:mb-16">
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              We work with growth-stage and mid-market B2B companies in the US and Canada who are serious about turning marketing spend into measurable revenue.
            </p>
          </AnimatedSection>

          {/* Logo strip */}
          <AnimatedSection delay={0.3}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="h-14 md:h-16 rounded-xl bg-muted flex items-center justify-center"
                >
                  <span className="text-xs font-medium text-muted-foreground">Client Logo</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===================== SECTION 7 — CASE STUDIES PREVIEW ===================== */}
      <CaseStudiesPreview />

      {/* ===================== SECTION 8 — BOTTOM CTA ===================== */}
      <CTABanner
        headline="Not sure where your funnel is leaking?"
        subheadline="We will audit your tracking, landing pages, or ad account and send you a written findings report within 5 business days. No pitch call required."
        buttonText="Request your free audit"
      />
    </>
  );
};

export default Index;
