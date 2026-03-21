import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import PageMeta from "@/components/PageMeta";

type Category = "All" | "Analytics" | "Experimentation & CRO" | "Paid Media" | "CRM & Automation" | "AI Tools";

interface Partner {
  category: Exclude<Category, "All">;
  name: string;
  description: string;
  url: string;
}

const partners: Partner[] = [
  // ANALYTICS
  {
    category: "Analytics",
    name: "Google Analytics 4",
    description: "The industry standard for web analytics — we implement GA4 with flawless server-side tracking and custom event architecture tailored to B2B conversion funnels.",
    url: "https://analytics.google.com",
  },
  {
    category: "Analytics",
    name: "Google Tag Manager",
    description: "The foundation of clean tracking infrastructure — we use GTM to implement and manage all tracking tags without touching your codebase.",
    url: "https://tagmanager.google.com",
  },
  {
    category: "Analytics",
    name: "Hotjar",
    description: "Heatmaps, session recordings, and on-page surveys that show us exactly where your B2B buyers hesitate, rage-click, or abandon your funnel.",
    url: "https://www.hotjar.com",
  },
  {
    category: "Analytics",
    name: "Contentsquare",
    description: "Enterprise-grade digital experience analytics that reveals how users interact with every element of your site — used for deep UX analysis on high-traffic B2B properties.",
    url: "https://contentsquare.com",
  },
  {
    category: "Analytics",
    name: "Lucky Orange",
    description: "Session recordings, heatmaps, and live visitor tracking — ideal for SMB and mid-market B2B companies starting their CRO journey without enterprise tool overhead.",
    url: "https://www.luckyorange.com",
  },
  {
    category: "Analytics",
    name: "Looker Studio",
    description: "We use Looker Studio to build custom executive dashboards that connect ad spend directly to pipeline and closed revenue — the single source of truth your CEO actually opens.",
    url: "https://lookerstudio.google.com",
  },
  {
    category: "Analytics",
    name: "Microsoft Power BI",
    description: "For enterprise clients requiring more complex data modelling — we build Power BI dashboards that connect your CRM, ad platforms, and web analytics into one unified revenue view.",
    url: "https://powerbi.microsoft.com",
  },
  // EXPERIMENTATION & CRO
  {
    category: "Experimentation & CRO",
    name: "VWO",
    description: "Our primary A/B testing and personalisation platform — we use VWO to run controlled experiments, multivariate tests, and AI-assisted personalisation campaigns across your B2B funnel.",
    url: "https://vwo.com",
  },
  {
    category: "Experimentation & CRO",
    name: "Convert",
    description: "A privacy-focused A/B testing platform built for serious experimenters — ideal for SMB and mid-market B2B companies that need enterprise-grade testing without the enterprise price tag.",
    url: "https://www.convert.com",
  },
  {
    category: "Experimentation & CRO",
    name: "Omniconvert",
    description: "A CRO and customer intelligence platform combining A/B testing, surveys, and segmentation — particularly strong for B2B companies wanting to personalise the buyer journey based on firmographic data.",
    url: "https://www.omniconvert.com",
  },
  {
    category: "Experimentation & CRO",
    name: "Optimizely",
    description: "Enterprise experimentation platform used for large-scale A/B testing, feature flagging, and full-stack personalisation across web and product experiences.",
    url: "https://www.optimizely.com",
  },
  {
    category: "Experimentation & CRO",
    name: "Unbounce",
    description: "The fastest way to build and test high-converting landing pages without developer dependency — we use Unbounce to deploy campaign-specific pages that match ad creative intent precisely.",
    url: "https://unbounce.com",
  },
  {
    category: "Experimentation & CRO",
    name: "Instapage",
    description: "Enterprise landing page platform with built-in A/B testing and personalisation — used for high-volume paid media campaigns requiring multiple audience-specific page variants.",
    url: "https://instapage.com",
  },
  // PAID MEDIA
  {
    category: "Paid Media",
    name: "LinkedIn Campaign Manager",
    description: "Our primary B2B paid media platform — we use LinkedIn to run hyper-targeted ABM campaigns aimed at specific job titles, company sizes, and industries your sales team actually wants to close.",
    url: "https://business.linkedin.com/marketing-solutions",
  },
  {
    category: "Paid Media",
    name: "Google Ads",
    description: "High-intent search campaigns that capture B2B buyers at the exact moment they are searching for solutions in your category — tightly managed keywords, bids, and landing page alignment.",
    url: "https://ads.google.com",
  },
  {
    category: "Paid Media",
    name: "Meta Ads",
    description: "Used selectively for B2B retargeting and brand awareness campaigns — particularly effective for nurturing prospects who visited your site but did not convert.",
    url: "https://www.facebook.com/business/ads",
  },
  {
    category: "Paid Media",
    name: "LinkedIn Insight Tag",
    description: "The foundation of LinkedIn conversion tracking and website retargeting — we implement this with server-side precision so no conversion data is lost to ad blockers.",
    url: "https://business.linkedin.com/marketing-solutions/insight-tag",
  },
  // CRM & AUTOMATION
  {
    category: "CRM & Automation",
    name: "HubSpot",
    description: "Our primary CRM integration platform for SMB and mid-market B2B clients — we connect HubSpot to your ad platforms, clean your data, and build lifecycle automation that routes leads to the right sales rep instantly.",
    url: "https://www.hubspot.com",
  },
  {
    category: "CRM & Automation",
    name: "Salesforce",
    description: "Enterprise CRM integration for larger B2B clients — we connect Salesforce to your marketing stack and build closed-loop attribution that tracks from first ad click to closed-won opportunity.",
    url: "https://www.salesforce.com",
  },
  {
    category: "CRM & Automation",
    name: "Zapier",
    description: "The connective tissue between tools that don't natively integrate — we use Zapier to build automated workflows that keep your CRM data clean, your leads routed correctly, and your reporting running without manual intervention.",
    url: "https://zapier.com",
  },
  {
    category: "CRM & Automation",
    name: "Make (formerly Integromat)",
    description: "Advanced workflow automation for complex multi-step integrations between your CRM, ad platforms, analytics stack, and reporting tools.",
    url: "https://www.make.com",
  },
  // AI TOOLS
  {
    category: "AI Tools",
    name: "Fibre AI",
    description: "AI-powered audience targeting and lead enrichment platform — we use Fibre AI to identify and target the highest-intent B2B accounts before they even visit your website.",
    url: "https://www.fibre.ai",
  },
  {
    category: "AI Tools",
    name: "Clay",
    description: "AI-powered data enrichment and outbound automation — we use Clay to build highly targeted prospect lists enriched with firmographic, technographic, and intent data for ABM campaigns.",
    url: "https://www.clay.com",
  },
  {
    category: "AI Tools",
    name: "Clearbit (now Breeze by HubSpot)",
    description: "B2B data enrichment that identifies anonymous website visitors by company and job title — turning your traffic analytics into actionable account intelligence.",
    url: "https://clearbit.com",
  },
  {
    category: "AI Tools",
    name: "Mutiny",
    description: "AI-powered B2B website personalisation — we use Mutiny to serve different homepage and landing page experiences to different target accounts automatically, without engineering resources.",
    url: "https://www.mutinyhq.com",
  },
  {
    category: "AI Tools",
    name: "6sense",
    description: "AI-driven account engagement platform that predicts which accounts are in-market for your solution — used to prioritise ABM targeting and time outreach for maximum pipeline impact.",
    url: "https://6sense.com",
  },
  {
    category: "AI Tools",
    name: "Drift (now Salesloft)",
    description: "AI-powered conversational marketing — we implement Drift to engage high-intent website visitors in real time, qualify them automatically, and route them to the right sales rep before they bounce.",
    url: "https://www.drift.com",
  },
];

const categories: Category[] = ["All", "Analytics", "Experimentation & CRO", "Paid Media", "CRM & Automation", "AI Tools"];

const categoryColors: Record<Exclude<Category, "All">, string> = {
  "Analytics": "bg-primary",
  "Experimentation & CRO": "bg-accent-pink",
  "Paid Media": "bg-purple-600",
  "CRM & Automation": "bg-indigo-600",
  "AI Tools": "bg-pink-500",
};

const Partners = () => {
  const [activeFilter, setActiveFilter] = useState<Category>("All");

  const filteredPartners = activeFilter === "All" 
    ? partners 
    : partners.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen">
      <PageMeta
        title="Tools & Partners — Revium Labs"
        description="The analytics, CRO, paid media, and AI tools Revium Labs uses to build B2B revenue engines. 27 tools across 5 categories."
      />

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 1 — HERO
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#0D0D1A] pt-24 md:pt-32 pb-12 md:pb-20">
        <div className="container mx-auto px-5 md:px-6 max-w-4xl">
          <motion.span
            className="inline-block text-accent-pink text-xs font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            data-testid="partners-hero-label"
          >
            Partners & Tools
          </motion.span>

          <motion.h1
            className="font-display text-[28px] leading-[1.15] sm:text-4xl md:text-6xl font-extrabold text-white max-w-3xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            data-testid="partners-hero-headline"
          >
            The tools we use to build your revenue engine.
          </motion.h1>

          <motion.p
            className="mt-5 md:mt-8 text-base md:text-lg text-white/50 max-w-[620px] leading-relaxed"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            data-testid="partners-hero-subheadline"
          >
            We partner with the best platforms in analytics, experimentation, CRM, and paid media. Every tool we recommend we have used in live client engagements — nothing is here for show. If you want an intro to any of these platforms, we are happy to make the connection.
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 2 — FILTER BAR
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-4 md:py-8 border-b border-border sticky top-16 md:top-20 z-40 overflow-hidden">
        <div className="container mx-auto px-5 md:px-6">
          <div 
            className="flex gap-2 md:gap-3 md:justify-center overflow-x-auto pb-2 md:pb-0 -mx-5 px-5 md:mx-0 md:px-0 scrollbar-hide"
            style={{ WebkitOverflowScrolling: 'touch' }}
            data-testid="filter-bar"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all whitespace-nowrap min-h-[44px] shrink-0 ${
                  activeFilter === cat
                    ? "bg-primary text-white"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
                data-testid={`filter-${cat.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 3 — PARTNER CARDS GRID
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-12 md:py-24">
        <div className="container mx-auto px-5 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            <AnimatePresence mode="popLayout">
              {filteredPartners.map((partner) => (
                <motion.div
                  key={partner.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white border border-border rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  data-testid={`partner-card-${partner.name.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {/* Category Pill */}
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-4 ${categoryColors[partner.category]}`}>
                    {partner.category}
                  </span>

                  {/* Tool Logo Placeholder */}
                  {/* TODO: Replace with official tool logo */}
                  <div className="w-full h-12 bg-muted rounded-lg flex items-center justify-center mb-4">
                    <span className="text-xs text-muted-foreground font-medium">{partner.name}</span>
                  </div>

                  {/* Tool Name */}
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {partner.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {partner.description}
                  </p>

                  {/* Visit Website Link */}
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                  >
                    Visit Website <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 4 — PARTNER CTA
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#0D0D1A] py-16 md:py-32">
        <div className="container mx-auto px-5 md:px-6 text-center">
          <AnimatedSection>
            <span className="text-xs md:text-sm font-bold text-accent-pink uppercase tracking-[0.12em] md:tracking-[0.15em]">
              Work With Us
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="mt-3 md:mt-4 font-display text-[26px] leading-tight md:text-4xl font-extrabold text-white max-w-2xl mx-auto">
              Using one of these tools and want expert help getting the most from it?
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="mt-4 md:mt-6 text-base md:text-lg text-white/50 max-w-[560px] mx-auto leading-relaxed">
              We implement, integrate, and optimise these platforms in live B2B client environments every day. If you want to know how we'd apply any of them to your specific situation — start with a Revenue Teardown.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 mt-8 md:mt-10 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors text-base min-h-[52px]"
              data-testid="partners-cta-btn"
            >
              Request a Revenue Teardown <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <p className="mt-6 text-sm text-white/30 max-w-md mx-auto">
              We are not paid to recommend any of these tools. We recommend them because we use them and they work.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Partners;
