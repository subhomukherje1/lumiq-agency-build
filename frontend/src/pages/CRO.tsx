import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Eye, Brain, CheckCircle2, Search, Sparkles, Users } from "lucide-react";
import HeroProofPoints from "@/components/HeroProofPoints";
import AnimatedSection from "@/components/AnimatedSection";
import CountUp from "@/components/CountUp";
import CTABanner from "@/components/CTABanner";
import PageMeta from "@/components/PageMeta";
import RelatedServices from "@/components/RelatedServices";

const steps = [
  {
    num: "01",
    title: "UX & Funnel Audit",
    body: "We map your entire buyer journey using heatmaps, session recordings, and GA4 data. Our AI surfaces the friction points most likely to impact revenue.",
  },
  {
    num: "02",
    title: "Landing Page Rebuilds",
    body: "Dedicated fast-loading pages built for each campaign — copy, design, and layout aligned to your buyer's intent and the specific ad they clicked.",
  },
  {
    num: "03",
    title: "Continuous A/B Testing",
    body: "Using VWO, we generate and test hypotheses every month. AI helps us prioritise which tests to run first based on predicted impact.",
  },
];

const aiCards = [
  {
    icon: Brain,
    title: "AI Hypothesis Engine",
    body: "We feed your GA4 data, heatmaps, and session recordings into an LLM to generate test hypotheses ranked by predicted conversion impact.",
  },
  {
    icon: Eye,
    title: "LLM Visibility for CRO",
    body: "We audit your content to ensure you show up when buyers ask AI tools like ChatGPT or Perplexity about solutions in your category.",
  },
  {
    icon: Users,
    title: "AI Personalisation",
    body: "Using VWO's personalisation engine, we serve different page variants to different buyer segments automatically based on their behaviour.",
  },
];

const checklist = [
  "Monthly testing roadmap with AI-prioritised hypotheses",
  "Weekly status reports on active tests",
  "Winning variant implementation handled by our team",
  "Heatmaps, session recordings, and behavioural analysis",
  "Landing page design and development (1 per month)",
  "LLM visibility audit included at onboarding",
  "Dedicated account manager — one point of contact",
];

// Service structured data
const croServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Conversion Rate Optimization for B2B SaaS",
  "provider": {
    "@type": "Organization",
    "name": "Revium Labs"
  },
  "description": "AI-powered CRO for B2B companies — A/B testing, landing page optimization, and funnel analysis.",
  "areaServed": ["US", "CA"],
  "url": "https://reviumlabs.co/cro"
};

const CRO = () => (
  <div className="min-h-screen">
    <PageMeta 
      title="Conversion Rate Optimization for B2B SaaS — Revium Labs" 
      description="AI-powered CRO for B2B companies. We find where your buyers drop off and run data-backed A/B tests to convert more traffic into pipeline — without extra ad spend."
      keywords="B2B conversion rate optimization, CRO agency, A/B testing B2B, VWO agency, landing page optimization, B2B CRO"
      structuredData={croServiceSchema}
    />
    {/* HERO */}
    <section className="relative bg-dark min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(272,77%,20%)_0%,transparent_60%)]" />
      <div className="container mx-auto px-6 relative z-10 py-32">
        <motion.p
          className="text-accent-pink text-sm font-semibold uppercase tracking-widest mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Conversion Rate Optimization
        </motion.p>
        <motion.h1
          className="font-display text-[1.75rem] sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-white max-w-4xl leading-[1.1]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          More revenue. Same traffic.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-pink">
            No extra ad spend.
          </span>
        </motion.h1>
        <motion.p
          className="mt-6 text-[15px] md:text-lg text-white/60 max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Most B2B companies spend thousands getting buyers to their website — then lose them to a slow page, a confusing form, or a headline that says nothing. We fix that — with AI-assisted analysis and rigorous A/B testing.
        </motion.p>
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-base hover:bg-primary/90 transition-colors"
          >
            Start with a CRO audit <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
        <HeroProofPoints />
      </div>
    </section>

    {/* CREDIBILITY STAT */}
    <section className="bg-section py-20">
      <div className="container mx-auto px-6 text-center">
        <AnimatedSection>
          <p className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white max-w-4xl mx-auto leading-snug">
            We have taken clients from <span className="text-accent-pink">2.42%</span> to{" "}
            <span className="text-accent-pink">4.15%</span> conversion — a{" "}
            <span className="stat-callout inline">
              <CountUp end={71} suffix="%" />
            </span>{" "}
            lift — without touching their ad spend.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* HOW IT WORKS */}
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground">
            A process built for B2B buyers.
          </h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <AnimatedSection key={step.num} delay={i * 0.1}>
              <div className="relative">
                <span className="font-display text-7xl font-extrabold text-primary/10">{step.num}</span>
                <h3 className="font-display text-xl font-bold text-foreground mt-2">{step.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{step.body}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* AI CAPABILITIES */}
    <section className="bg-muted py-24">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">AI-Powered CRO</p>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground max-w-3xl mx-auto leading-tight">
            We use AI to find what your analytics dashboard is hiding.
          </h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {aiCards.map((card, i) => (
            <AnimatedSection key={card.title} delay={i * 0.1}>
              <div className="gradient-purple-card h-full">
                <card.icon className="w-10 h-10 text-accent-pink mb-5" />
                <h3 className="font-display text-lg font-bold text-white mb-3">{card.title}</h3>
                <p className="text-white/70 leading-relaxed text-sm">{card.body}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* WHAT YOU GET */}
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground">
            Everything included in your CRO retainer.
          </h2>
        </AnimatedSection>
        <div className="max-w-2xl mx-auto">
          {checklist.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div className="flex items-start gap-4 py-4 border-b border-border last:border-0">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <p className="text-foreground font-medium">{item}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Related Services */}
    <RelatedServices currentService="cro" />

    {/* BOTTOM CTA */}
    <CTABanner
      headline="Not sure if CRO is right for you?"
      subheadline="We will audit two of your highest-traffic landing pages for free and tell you exactly what we would test first. No obligation."
      buttonText="Get your free page audit"
    />
  </div>
);

export default CRO;
