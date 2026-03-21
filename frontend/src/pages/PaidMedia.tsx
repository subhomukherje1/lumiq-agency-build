import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Search, RefreshCw, Users, TrendingUp, FileCheck } from "lucide-react";
import HeroProofPoints from "@/components/HeroProofPoints";
import AnimatedSection from "@/components/AnimatedSection";
import CTABanner from "@/components/CTABanner";
import PageMeta from "@/components/PageMeta";
import RelatedServices from "@/components/RelatedServices";

const services = [
  {
    icon: Linkedin,
    title: "Account-Based Marketing via LinkedIn",
    body: "Hyper-targeted campaigns aimed at specific job titles, company sizes, and industries. You define the accounts you want. We reach the decision-makers.",
  },
  {
    icon: Search,
    title: "High-Intent Google Search",
    body: "Capturing buyers at the exact moment they search for your category. Enterprise-focused keywords, tightly managed bids, and landing pages built to convert the click.",
  },
  {
    icon: RefreshCw,
    title: "Full-Funnel Retargeting",
    body: "Keeping your brand in front of visitors who showed intent but did not book. Segmented by behaviour — demo page viewers, pricing page visitors, blog readers.",
  },
];

const aiCards = [
  {
    icon: Users,
    title: "AI Audience Building",
    body: "We use AI to analyse your existing customer data and build lookalike and intent-based audiences that match your highest-value closed-won accounts.",
  },
  {
    icon: TrendingUp,
    title: "Predictive Bid Optimisation",
    body: "AI-assisted bidding models that predict which clicks are most likely to convert into qualified meetings — and adjust bids accordingly in real time.",
  },
  {
    icon: FileCheck,
    title: "Ad-to-Page Relevance Scoring",
    body: "AI analysis that scores the relevance between your ad creative and your landing page — and flags mismatches that are costing you conversion rate.",
  },
];

// Service structured data
const paidMediaServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "B2B Paid Advertising — LinkedIn ABM & Google Ads",
  "provider": {
    "@type": "Organization",
    "name": "Revium Labs"
  },
  "description": "LinkedIn ABM, high-intent Google Search, and full-funnel retargeting optimised entirely for qualified B2B pipeline — not clicks or impressions.",
  "areaServed": ["US", "CA"],
  "url": "https://reviumlabs.co/paid-advertising"
};

const PaidMedia = () => (
  <div className="min-h-screen">
    <PageMeta 
      title="B2B Paid Advertising Agency — LinkedIn ABM & Google Ads | Revium Labs" 
      description="LinkedIn ABM, high-intent Google Search, and full-funnel retargeting optimised entirely for qualified B2B pipeline — not clicks or impressions."
      keywords="B2B paid media agency, LinkedIn ABM agency, Google Ads B2B, account based marketing, B2B performance marketing, paid advertising SaaS"
      structuredData={paidMediaServiceSchema}
    />
    {/* HERO */}
    <section className="relative bg-dark min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(272,77%,20%)_0%,transparent_60%)]" />
      <div className="container mx-auto px-6 relative z-10 py-32">
        <motion.p
          className="text-accent-pink text-sm font-semibold uppercase tracking-widest mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Paid Advertising
        </motion.p>
        <motion.h1
          className="font-display text-[1.75rem] sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-white max-w-4xl leading-[1.1]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          We do not optimise for clicks.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-pink">
            We optimise for signed contracts.
          </span>
        </motion.h1>
        <motion.p
          className="mt-6 text-[15px] md:text-lg text-white/60 max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          B2B paid media is a different game. Audiences are tiny. Deals take months. Clicks mean nothing. We run LinkedIn and Google campaigns built entirely around your ideal customer profile — measured in qualified pipeline, not impressions.
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
            Start with a paid advertising audit <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
        <HeroProofPoints />
      </div>
    </section>

    {/* SERVICES */}
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground">
            Channels we run. Results we deliver.
          </h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((card, i) => (
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

    {/* AI CAPABILITIES */}
    <section className="bg-dark py-24">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-accent-pink text-sm font-semibold uppercase tracking-widest mb-4">AI-Powered Media Buying</p>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white max-w-3xl mx-auto leading-tight">
            Smarter targeting.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-pink">
              Less wasted spend.
            </span>
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

    {/* Related Services */}
    <RelatedServices currentService="paid-advertising" />

    {/* BOTTOM CTA */}
    <CTABanner
      headline="Spending on ads but cannot prove pipeline impact?"
      subheadline="We will review your current ad account and tell you the three biggest opportunities you are missing — free, no strings attached."
      buttonText="Request a free account review"
    />
  </div>
);

export default PaidMedia;
