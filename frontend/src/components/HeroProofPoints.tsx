import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const points = [
  "Free audit included",
  "No long-term contracts",
  "Results within 90 days",
];

const HeroProofPoints = () => (
  <motion.div
    className="mt-8 flex flex-wrap gap-x-6 gap-y-3"
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.6 }}
  >
    {points.map((point) => (
      <span key={point} className="inline-flex items-center gap-2 text-sm text-white/50">
        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
        {point}
      </span>
    ))}
  </motion.div>
);

export default HeroProofPoints;
