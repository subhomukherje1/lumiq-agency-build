import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || "14155551234";

const WhatsAppButton = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 items-center gap-3 hidden sm:flex"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && (
        <motion.span
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-foreground text-background text-xs font-medium px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap"
        >
          Chat with us on WhatsApp
        </motion.span>
      )}
      <motion.div
        className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-xl cursor-pointer"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 4 }}
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </motion.div>
    </motion.a>
  );
};

export default WhatsAppButton;
