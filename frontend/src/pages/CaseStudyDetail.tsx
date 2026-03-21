import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Clock, Quote } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CTABanner from "@/components/CTABanner";
import PageMeta from "@/components/PageMeta";
import { getCaseStudyBySlug, getAdjacentCaseStudies } from "@/data/casestudies";

const serviceLinks: Record<string, string> = {
  "CRO & Experimentation": "/cro",
  "Analytics & Attribution": "/analytics",
  "Performance Marketing": "/paid-media",
};

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const cs = getCaseStudyBySlug(slug || "");

  if (!cs) return <Navigate to="/case-studies" replace />;

  const { prev, next } = getAdjacentCaseStudies(cs.id);

  return (
    <>
      <PageMeta
        title={`${cs.client} Case Study — Revium Labs`}
        description={`${cs.heroStat} ${cs.heroStatLabel}. See how Revium Labs helped ${cs.client} achieve measurable results.`}
      />

      {/* Section 1 — Hero */}
      <section className="bg-dark pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.span
            className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-6 ${
              cs.tagColor === "purple"
                ? "bg-primary/15 text-primary"
                : "bg-accent-pink/15 text-accent-pink"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {cs.tag}
          </motion.span>

          <motion.h1
            className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {cs.client}
          </motion.h1>

          <motion.div
            className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/40"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span>{cs.industry}</span>
            <span>{cs.location}</span>
            <span>{cs.companySize}</span>
            <span>{cs.arr}</span>
          </motion.div>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <span className="text-7xl md:text-[5.5rem] font-display font-extrabold text-accent-pink">
              {cs.heroStat}
            </span>
            <p className="mt-2 text-lg text-white/50">{cs.heroStatLabel}</p>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {cs.services.map((s) => (
              <span
                key={s}
                className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/60"
              >
                {s}
              </span>
            ))}
            <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/60">
              <Clock className="w-3 h-3" /> {cs.duration}
            </span>
          </motion.div>
        </div>
      </section>

      {/* Section 2 — The Challenge */}
      <section className="bg-white py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Stats sidebar */}
            <div className="md:col-span-1 space-y-8">
              {cs.results.slice(0, 3).map((r, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div>
                    <span className="text-4xl font-display font-extrabold text-primary">
                      {r.stat}
                    </span>
                    <p className="mt-1 text-sm text-muted-foreground">{r.label}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Challenge text */}
            <div className="md:col-span-2">
              <AnimatedSection>
                <span className="text-sm font-bold text-primary uppercase tracking-[0.15em]">
                  The Challenge
                </span>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <p className="mt-6 text-lg md:text-xl text-foreground leading-relaxed">
                  {cs.challenge}
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — What We Did */}
      <section className="bg-muted py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-4xl">
          <AnimatedSection>
            <span className="text-sm font-bold text-primary uppercase tracking-[0.15em]">
              What We Did
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-foreground leading-tight">
              Our approach, step by step.
            </h2>
          </AnimatedSection>

          <div className="mt-12 space-y-6">
            {cs.whatWeDid.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-sm">
                    {i + 1}
                  </div>
                  <p className="text-foreground leading-relaxed pt-2">{step}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Results */}
      <section className="bg-section py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-5xl">
          <AnimatedSection className="text-center mb-12">
            <span className="text-sm font-bold text-accent-pink uppercase tracking-[0.15em]">
              The Results
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Numbers that matter.
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cs.results.map((r, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center">
                  <span className="text-4xl font-display font-extrabold text-accent-pink">
                    {r.stat}
                  </span>
                  <p className="mt-2 text-sm text-white/60">{r.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Quote */}
      <section className="bg-white py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-3xl">
          <AnimatedSection>
            <div className="bg-muted rounded-2xl p-8 md:p-12 border-l-4 border-primary">
              <Quote className="w-10 h-10 text-primary/30 mb-4" />
              <p className="text-lg md:text-xl text-foreground italic leading-relaxed">
                "{cs.quote}"
              </p>
              <div className="mt-6">
                <p className="font-display font-bold text-foreground">
                  {cs.quoteName}
                </p>
                <p className="text-sm text-muted-foreground">{cs.quoteTitle}</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section 6 — Services Used */}
      <section className="bg-white pb-20 md:pb-28">
        <div className="container mx-auto px-6 max-w-4xl">
          <AnimatedSection className="text-center mb-10">
            <span className="text-sm font-bold text-primary uppercase tracking-[0.15em]">
              Services Used In This Engagement
            </span>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cs.services.map((s, i) => (
              <AnimatedSection key={s} delay={i * 0.1}>
                <Link
                  to={serviceLinks[s] || "/"}
                  className="block rounded-2xl border border-border p-6 text-center hover:-translate-y-1 hover:shadow-md transition-all duration-200"
                >
                  <h3 className="font-display font-bold text-foreground">{s}</h3>
                  <span className="inline-flex items-center gap-1 mt-3 text-sm text-primary font-medium">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 — CTA */}
      <CTABanner
        headline={`Ready to see results like ${cs.client}?`}
        subheadline="Start with a free audit — we will tell you exactly what we would do for your business specifically."
        buttonText="Get your free audit"
      />

      {/* Prev / Next Navigation */}
      <section className="bg-dark py-12 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl flex items-center justify-between">
          <Link
            to={prev.slug}
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>
              <span className="block text-xs text-white/30">Previous</span>
              {prev.client}
            </span>
          </Link>
          <Link
            to={next.slug}
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors text-right"
          >
            <span>
              <span className="block text-xs text-white/30">Next</span>
              {next.client}
            </span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default CaseStudyDetail;
