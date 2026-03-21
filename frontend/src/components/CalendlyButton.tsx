import { Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

// TODO: Replace with real Calendly URL
const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL || "https://calendly.com";

const CalendlyButton = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-50 items-center gap-3 hidden sm:flex"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-testid="calendly-floating-btn"
    >
      {hovered && (
        <motion.span
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-foreground text-background text-xs font-medium px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap"
        >
          Book a 30-min strategy call
        </motion.span>
      )}
      <motion.div
        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#7B2FBE] flex items-center justify-center shadow-xl cursor-pointer"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 4 }}
      >
        <Calendar className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </motion.div>
    </motion.a>
  );
};

export default CalendlyButton;
