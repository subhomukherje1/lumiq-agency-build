import { Link } from "react-router-dom";
import { ArrowRight, Target, BarChart2, Database } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

interface Service {
  title: string;
  description: string;
  href: string;
  icon: typeof Target;
}

const allServices: Service[] = [
  {
    title: "Paid Advertising",
    description: "LinkedIn ABM and high-intent Google Search campaigns optimized for qualified pipeline.",
    href: "/paid-advertising",
    icon: Target,
  },
  {
    title: "Conversion Rate Optimization",
    description: "AI-powered A/B tests that convert more of your existing traffic into revenue.",
    href: "/cro",
    icon: BarChart2,
  },
  {
    title: "Analytics & Attribution",
    description: "Fix your GA4, connect your CRM, and prove marketing ROI with clean dashboards.",
    href: "/analytics",
    icon: Database,
  },
];

interface RelatedServicesProps {
  currentService: "paid-advertising" | "cro" | "analytics";
}

const RelatedServices = ({ currentService }: RelatedServicesProps) => {
  const related = allServices.filter(s => !s.href.includes(currentService));

  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="container mx-auto px-5 md:px-6">
        <AnimatedSection className="text-center mb-10 md:mb-12">
          <h2 className="font-display text-2xl md:text-3xl font-extrabold text-foreground">
            Explore our other services
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto">
          {related.map((service, i) => (
            <AnimatedSection key={service.href} delay={i * 0.1}>
              <Link
                to={service.href}
                className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
