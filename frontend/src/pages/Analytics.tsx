import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Server, DatabaseZap, LayoutDashboard, Bot, TrendingUp, ShieldAlert } from "lucide-react";
import HeroProofPoints from "@/components/HeroProofPoints";
import AnimatedSection from "@/components/AnimatedSection";
import CTABanner from "@/components/CTABanner";
import PageMeta from "@/components/PageMeta";
import RelatedServices from "@/components/RelatedServices";

const services = [
  {
    icon: Server,
    title: "Tracking & Attribution Setup",
    body: "Server-side tracking, GA4 architecture, and Conversion APIs so no data is lost to ad blockers or browser restrictions.",
  },
  {
    icon: DatabaseZap,
    title: "CRM Integration & Hygiene",
    body: "HubSpot and Salesforce connected cleanly to your ad platforms. No duplicate leads, no lost attribution, no manual cleanup.",
  },
  {
    icon: LayoutDashboard,
    title: "Executive ROI Dashboards",
    body: "Custom Looker Studio or Power BI dashboards that show your leadership team which channels are generating closed revenue — not just clicks.",
  },
];

const aiCards = [
  {
    icon: Bot,
    title: "AI Referral Tracking",
    body: "We configure GA4 to identify and track traffic arriving from AI tools like ChatGPT, Perplexity, and Google AI Overviews — so you know when AI is sending you buyers.",
  },
  {
    icon: TrendingUp,
    title: "Predictive Attribution Modelling",
    body: "AI models that analyze your historical conversion data and predict which campaigns and channels will generate the most pipeline in the next 90 days.",
  },
  {
    icon: ShieldAlert,
    title: "Automated Anomaly Detection",
    body: "AI monitoring that flags sudden drops in conversion rate, tracking gaps, or attribution anomalies before they cost you a month of bad data.",
  },
];

// Service structured data
const analyticsServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "B2B Analytics & Attribution",
  "provider": {
    "@type": "Organization",
    "name": "Revium Labs"
  },
  "description": "Fix your GA4, connect your CRM, and build dashboards that prove marketing ROI. We implement server-side tracking and attribution for B2B SaaS companies.",
  "areaServed": ["US", "CA"],
  "url": "https://reviumlabs.co/analytics"
};

const Analytics = () => (
  <div className="min-h-screen">
    <PageMeta 
      title="B2B Analytics & Attribution Agency — Revium Labs" 
      description="Fix your GA4, connect your CRM, and build dashboards that prove marketing ROI. We implement server-side tracking and attribution for B2B SaaS companies in the US and Canada."
      keywords="GA4 implementation agency, B2B marketing attribution, server-side tracking, HubSpot Salesforce integration, marketing ROI dashboard, B2B analytics agency"
      structuredData={analyticsServiceSchema}
    />
    {/* HERO */}
    <section className="relative bg-dark min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(272,77%,20%)_0%,transparent_60%)]" />
      <div className="container mx-auto px-6 relative z-10 py-32">
        <motion.p
          className="text-accent-pink text-sm font-semibold uppercase tracking-widest mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Analytics &amp; Attribution
        </motion.p>
        <motion.h1
          className="font-display text-[1.75rem] sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-white max-w-4xl leading-[1.1]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          If your data is wrong, every decision built on it is{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-pink">wrong.</span>
        </motion.h1>
        <motion.p
          className="mt-6 text-[15px] md:text-lg text-white/60 max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Most B2B marketing teams are optimizing based on GA4 data that is 30 to 40 percent inaccurate. Ad blockers, misconfigured tags, and disconnected CRMs mean your attribution is fiction. We fix the source — so every report you run is actually true.
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
            Start with an analytics audit <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
        <HeroProofPoints />
      </div>
    </section>

    {/* PROBLEM CALLOUT */}
    <section className="bg-section py-20">
      <div className="container mx-auto px-6 text-center">
        <AnimatedSection>
          <p className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white max-w-4xl mx-auto leading-snug">
            <span className="text-accent-pink">90%</span> of GA4 setups have critical tracking errors. We fix that.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* SERVICES */}
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground">
            What we fix and build for you.
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
          <p className="text-accent-pink text-sm font-semibold uppercase tracking-widest mb-4">AI-Powered Analytics</p>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white max-w-3xl mx-auto leading-tight">
            We do not build dashboards that look pretty. We build dashboards that answer:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-pink">
              what should we spend more on?
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
    <RelatedServices currentService="analytics" />

    {/* BOTTOM CTA */}
    <CTABanner
      headline="Think your tracking might be broken?"
      subheadline="It almost certainly is. Send us your GA4 property and we will tell you exactly what is wrong — free, within 3 business days."
      buttonText="Get a free GA4 audit"
    />
  </div>
);

export default Analytics;
