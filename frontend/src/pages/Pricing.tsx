import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check, Star } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CTABanner from "@/components/CTABanner";
import PageMeta from "@/components/PageMeta";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const plans = [
  {
    name: "Starter",
    price: "$1,500",
    subtitle: "Best for companies new to CRO or analytics",
    featured: false,
    features: [
      "1 active A/B test per month",
      "GA4 audit and cleanup",
      "Monthly performance report",
      "Bi-weekly check-in call",
      "LLM visibility audit (one-time at onboarding)",
    ],
  },
  {
    name: "Growth",
    price: "$2,500",
    subtitle: "CRO plus analytics, fully managed",
    featured: true,
    features: [
      "2 to 3 A/B tests per month",
      "Full tracking and CRM setup",
      "Executive ROI dashboard",
      "Landing page build included (1 per month)",
      "AI hypothesis generation",
      "AI referral traffic tracking",
      "Weekly reporting",
      "Weekly strategy call",
    ],
  },
  {
    name: "Full-Stack",
    price: "$4,500",
    subtitle: "All three modules, end to end",
    featured: false,
    features: [
      "Everything in Growth",
      "LinkedIn and Google paid media management",
      "ABM campaign strategy and execution",
      "Full-funnel retargeting",
      "AI audience building and bid optimisation",
      "Predictive attribution modelling",
      "Dedicated senior strategist",
    ],
  },
];

const faqs = [
  {
    q: "Do you require long-term contracts?",
    a: "We work on 3-month initial engagements so there is enough time to see meaningful results from testing. After that, it is month-to-month with 30 days notice to cancel.",
  },
  {
    q: "Where is your team based?",
    a: "We are based in India, which means highly competitive pricing without compromising on quality. All client communication is in English and we run calls during US and Canada business hours. Our clients are entirely in North America.",
  },
  {
    q: "What tools do you use?",
    a: "VWO for A/B testing and personalisation, GA4 and Google Tag Manager for analytics, Looker Studio or Power BI for dashboards, HubSpot and Salesforce for CRM integration, LinkedIn Campaign Manager and Google Ads for paid media.",
  },
  {
    q: "What does the free audit include?",
    a: "Depending on what you need most, we will audit your GA4 tracking setup, review your two highest-traffic landing pages, or analyse your ad account. You receive a written findings report within 5 business days. No call required, no pitch attached.",
  },
  {
    q: "How quickly can we get started?",
    a: "The free audit takes 3 to 5 business days. Paid engagements typically kick off within one week of agreement.",
  },
  {
    q: "Do you work with companies outside the US and Canada?",
    a: "Our focus is North America but we occasionally take on UK and European clients. Reach out and we can discuss.",
  },
];

const Pricing = () => (
  <div className="min-h-screen">
    <PageMeta title="Pricing — Revium Labs" description="Transparent B2B marketing retainer pricing starting at $1,500/month. Free audit before you commit. No long-term contracts." />
    {/* HERO */}
    <section className="bg-dark pt-32 pb-20">
      <div className="container mx-auto px-6 text-center">
        <motion.h1
          className="font-display text-[1.75rem] sm:text-4xl md:text-6xl font-extrabold text-white max-w-3xl mx-auto leading-tight"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Transparent pricing.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-pink">
            No retainer surprises.
          </span>
        </motion.h1>
        <motion.p
          className="mt-6 text-lg text-white/60 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          Every engagement starts with a free audit so we both know exactly what needs to be done before any money changes hands.
        </motion.p>
      </div>
    </section>

    {/* PRICING CARDS */}
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
          {plans.map((plan, i) => (
            <AnimatedSection key={plan.name} delay={i * 0.1} className={plan.featured ? "order-first md:order-none" : ""}>
              <div
                className={`relative rounded-2xl p-8 h-full flex flex-col ${
                  plan.featured
                    ? "border-2 border-primary shadow-xl shadow-primary/10 bg-white"
                    : "border border-border bg-white"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                      <Star className="w-3 h-3" /> Most Popular
                    </span>
                  </div>
                )}
                <h3 className="font-display text-xl font-bold text-foreground">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-extrabold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground text-sm">/month</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{plan.subtitle}</p>
                <ul className="mt-8 space-y-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-foreground">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`mt-8 block text-center px-6 py-3 rounded-full font-semibold text-sm transition-colors ${
                    plan.featured
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border border-primary text-primary hover:bg-primary/5"
                  }`}
                >
                  Get started <ArrowRight className="w-4 h-4 inline ml-1" />
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-10">
          All plans billed monthly. Cancel anytime after the initial 3-month term. Prices in USD.
        </p>

        <AnimatedSection className="mt-12 max-w-3xl mx-auto">
          <div className="rounded-xl border-l-4 border-primary bg-primary/5 p-6 md:p-8">
            <p className="text-foreground italic leading-relaxed">
              We are so confident in our process that if you do not see a measurable improvement in your primary conversion metric within 90 days, we will work an additional month at no charge.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* FAQ */}
    <section className="bg-muted py-24">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground">
            Common questions.
          </h2>
        </AnimatedSection>
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-white rounded-xl border border-border px-6"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>

    {/* BOTTOM CTA */}
    <CTABanner
      headline="Not sure which plan is right?"
      subheadline="Start with the free audit. We will tell you exactly which plan makes sense for where you are."
      buttonText="Get your free audit"
    />
  </div>
);

export default Pricing;
