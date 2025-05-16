import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const { lang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 90 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 90 }}
          transition={{
            opacity: { duration: 2 },
            y: { type: "spring", stiffness: 300, damping: 25 },
          }}
          className="cursor-pointer fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-md bg-background/80 backdrop-blur border border-border hover:scale-105 transition-transform text-foreground"
          aria-label={lang === "es" ? "Volver arriba" : "Back to top"}
        >
          <ChevronUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
