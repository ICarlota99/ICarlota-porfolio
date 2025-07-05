import { motion } from "framer-motion";
import { CircleChevronUp} from "lucide-react";

export default function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return(
    <div>
        {/* Scroll to Top Button */ }
        <motion.button
            onClick={ scrollToTop }
            aria-label="Scroll to top"
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-gradient-to-r
            from-teal-400 via-cyan-500 to-blue-600 text-white hover:bg-teal-600
            focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50
            transition-all duration-300 shadow-lg"
            whileHover={ { scale: 1.1, rotate: 360 } }
            whileTap={ { scale: 0.95 } }
            initial={ { scale: 0, opacity: 0 } }
            animate={ { scale: 1, opacity: 1 } }
            exit={ { scale: 0, opacity: 0 } }
            transition={ { type: "spring", stiffness: 260, damping: 20, rotate: { duration: 0.7 } } }
        >
            <CircleChevronUp size={ 30 } />
        </motion.button>
    </div>
  )
}