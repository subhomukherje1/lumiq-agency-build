import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { caseStudies } from "@/data/casestudies";

const preview = caseStudies.slice(0, 3);

const CaseStudiesPreview = () => (
  <section className="bg-muted py-24 md:py-32">
    <div className="container mx-auto px-6">
      <AnimatedSection className="text-center mb-6">
        <span className="text-sm font-bold text-primary uppercase tracking-[0.15em]">
          Client Results
        </span>
      </AnimatedSection>
      <AnimatedSection delay={0.1} className="text-center max-w-2xl mx-auto mb-4">
        <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground leading-tight">
          Results we have delivered.
        </h2>
      </AnimatedSection>
      <AnimatedSection delay={0.2} className="text-center max-w-xl mx-auto mb-16">
        <p className="text-muted-foreground leading-relaxed">
          A sample of what happens when tracking, traffic, and conversion work
          together.
        </p>
      </AnimatedSection>

      <div className="space-y-6 max-w-4xl mx-auto">
        {preview.map((cs, i) => (
          <AnimatedSection key={cs.id} delay={i * 0.1}>
            <Link
              to={cs.slug}
              className="flex flex-col md:flex-row items-stretch bg-white rounded-2xl border border-border overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-200 group"
            >
              {/* Left */}
              <div className="flex-1 p-8">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${
                    cs.tagColor === "purple"
                      ? "bg-primary/10 text-primary"
                      : "bg-accent-pink/10 text-accent-pink"
                  }`}
                >
                  {cs.tag}
                </span>
                <h3 className="font-display text-xl font-extrabold text-foreground">
                  {cs.client}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{cs.industry}</p>
                <p className="text-sm text-muted-foreground mt-3 line-clamp-2 leading-relaxed">
                  {cs.challenge}
                </p>
              </div>

              {/* Right */}
              <div className="flex items-center justify-center p-8 md:min-w-[200px] bg-muted/50">
                <div className="text-center">
                  <span className="text-5xl font-display font-extrabold text-primary">
                    {cs.heroStat}
                  </span>
                  <p className="text-sm text-muted-foreground mt-1">
                    {cs.heroStatLabel}
                  </p>
                </div>
              </div>
            </Link>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection delay={0.4} className="text-center mt-12">
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
        >
          View all case studies <ArrowRight className="w-4 h-4" />
        </Link>
      </AnimatedSection>
    </div>
  </section>
);

export default CaseStudiesPreview;
