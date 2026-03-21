import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CTABanner from "@/components/CTABanner";
import PageMeta from "@/components/PageMeta";
import { caseStudies } from "@/data/casestudies";

const filters = [
  "All",
  "CRO & Experimentation",
  "Analytics & Attribution",
  "Performance Marketing",
  "Full-Stack",
];

const CaseStudies = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? caseStudies
      : caseStudies.filter(
          (cs) => cs.tag === activeFilter || cs.services.includes(activeFilter)
        );

  return (
    <>
      <PageMeta
        title="Case Studies — Revium Labs"
        description="Real numbers from real B2B companies. Every result is from an actual client engagement."
      />

      {/* Hero */}
      <section className="bg-dark pt-32 pb-20">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <motion.span
            className="inline-block text-accent-pink text-xs font-bold uppercase tracking-[0.2em] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Client Results
          </motion.span>
          <motion.h1
            className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Real numbers from real B2B companies.
          </motion.h1>
          <motion.p
            className="mt-6 text-lg text-white/50 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            We do not use estimated projections or best-case scenarios. Every
            number below is from an actual client engagement.
          </motion.p>
          <motion.p
            className="mt-4 text-sm text-white/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            Client names and some identifying details have been changed to
            protect confidentiality.
          </motion.p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-white border-b border-border sticky top-20 z-40">
        <div className="container mx-auto px-6 py-4 flex flex-wrap gap-2 justify-center">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === f
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-primary/10"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Cards Grid */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              {filtered.map((cs, i) => (
                <AnimatedSection key={cs.id} delay={i * 0.1}>
                  <Link
                    to={cs.slug}
                    className="block bg-white rounded-2xl border border-border p-8 h-full hover:-translate-y-1 hover:shadow-lg transition-all duration-200 group"
                  >
                    {/* Tag */}
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                        cs.tagColor === "purple"
                          ? "bg-primary/10 text-primary"
                          : "bg-accent-pink/10 text-accent-pink"
                      }`}
                    >
                      {cs.tag}
                    </span>

                    {/* Client */}
                    <h3 className="mt-4 font-display text-2xl font-extrabold text-foreground">
                      {cs.client}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {cs.industry} · {cs.location}
                    </p>

                    {/* Hero Stat */}
                    <div className="mt-6 mb-4">
                      <span className="text-5xl font-display font-extrabold text-primary">
                        {cs.heroStat}
                      </span>
                      <p className="text-sm text-muted-foreground mt-1">
                        {cs.heroStatLabel}
                      </p>
                    </div>

                    {/* Challenge excerpt */}
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-6">
                      {cs.challenge}
                    </p>

                    {/* Services + Duration */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      {cs.services.map((s) => (
                        <span
                          key={s}
                          className="px-2.5 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground"
                        >
                          {s}
                        </span>
                      ))}
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground">
                        <Clock className="w-3 h-3" /> {cs.duration}
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                      Read case study <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </AnimatedSection>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <CTABanner
        headline="Want results like these?"
        subheadline="Start with a free audit. We will tell you exactly where your biggest conversion opportunity is."
        buttonText="Get your free audit"
      />
    </>
  );
};

export default CaseStudies;
