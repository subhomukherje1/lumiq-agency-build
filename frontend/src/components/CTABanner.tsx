import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CTABannerProps {
  headline?: string;
  subheadline?: string;
  buttonText?: string;
}

const CTABanner = ({
  headline = "Ready to grow smarter?",
  subheadline = "Get a free audit of your marketing stack and uncover hidden revenue opportunities.",
  buttonText = "Get Free Audit",
}: CTABannerProps) => {
  return (
    <section className="bg-section">
      <div className="container mx-auto px-6 py-24 text-center">
        <motion.h2
          className="font-display text-2xl sm:text-3xl md:text-5xl font-extrabold text-white max-w-3xl mx-auto leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {headline}
        </motion.h2>
        <motion.p
          className="mt-6 text-[15px] md:text-lg text-white/60 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {subheadline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-10 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-base hover:bg-primary/90 transition-colors"
          >
            {buttonText} <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
