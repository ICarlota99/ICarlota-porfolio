import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useEffect } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Mail } from "lucide-react";
import Github from '@/assets/icons/github.svg';
import Linkedin from '@/assets/icons/linkedin.svg';
import GradientText from "@/components/animations/GradientText";

const COLORS_TOP = [ "#CE84CF", "#1E67C6", "#FF6B3E", "#7B5FFF", "#020617", "#CE84CF"];

export default function HeroSection() {
  const color = useMotionValue(COLORS_TOP[ 0 ]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 20,
      repeat: Infinity,
      repeatType: "loop",
    });
  }, [ color ]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

  return (
    <motion.section
      id="hero"
      style={ {
        backgroundImage,
      } }
      className="relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-foreground"
    >
      <div className="relative z-10 flex flex-col items-center text-center">

        <GradientText
          className="max-w-4xl text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 tracking-tight leading-tight"
          colors={ [ "#86EFAC", "#2DD4BF", "#3B82F6", "#86EFAC" ] }
        >
          <span className="block text-5xl">
            Hi, I'm Carlota!
          </span>
          <span className="block mt-10 font-bold">
            I Build Modern & Intuitive
          </span>
          <span className="block font-bold">
            Web Experiences.
          </span>
        </GradientText>

        <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed text-slate-300">
          A passionate <strong className="font-semibold text-white">Web Developer</strong> based in Havana, dedicated to turning innovative ideas into beautiful, high-performance digital solutions.
        </p>

        <motion.div
          initial={ { opacity: 0, y: 20 } }
          animate={ { opacity: 1, y: 0 } }
          transition={ { duration: 0.5, delay: 0.4 } }
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <Button
            asChild
            size="lg"
            className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-lg px-6 py-3 text-center"
          >
            <a href="#projects" className="flex items-center">
              View Projects <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="bg-transparent hover:bg-transparent text-slate-100 hover:text-white
            font-medium rounded-lg text-lg px-6 py-3 text-center transition-transform
            hover:scale-105 border-2 border-slate-600 hover:border-slate-300"
            onClick={ (e) => {
              e.preventDefault();
              const contactSection = document.querySelector("#contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            } }
          >
            <a href="#contact">Contact me</a>
          </Button>

        </motion.div>

        <motion.div
          initial={ { opacity: 0 } }
          animate={ { opacity: 1 } }
          transition={ { duration: 0.5, delay: 0.6 } }
          className="flex items-center justify-center space-x-4 sm:space-x-6"
        >
          <a
            href="https://github.com/icarlota99"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <Button
              variant="ghost"
              size="icon"
              className="p-2.5 sm:p-3 rounded-full shadow-lg bg-gray-200/90 hover:bg-gray-100 transition-colors"
            >
              <img src={Github} alt="Github icon" className="h-5 w-5 sm:h-6 sm:w-6 text-gray-800" />
              <span className="sr-only">GitHub</span>
            </Button>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <Button
              variant="ghost"
              size="icon"
              className="p-2.5 sm:p-3 rounded-full shadow-lg bg-gray-200/90 hover:bg-gray-100 transition-colors"
            >
              <img src={Linkedin} alt="Linkedin icon" className="h-5 w-5 sm:h-6 sm:w-6 text-gray-800" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </a>
          <a
            href="mailto:icarlota99dev@gmail.com"
            aria-label="Send Email"
          >
            <Button
              variant="ghost"
              size="icon"
              className="p-2.5 sm:p-3 rounded-full shadow-lg bg-gray-200/90 hover:bg-gray-100 transition-colors"
            >
              <Mail className="h-5 w-5 sm:h-6 sm-w-6 text-gray-800" />
              <span className="sr-only">Email</span>
            </Button>
          </a>
        </motion.div>
      </div>

      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={ 50 } count={ 2500 } factor={ 4 } fade speed={ 2 } />
        </Canvas>
      </div>
    </motion.section>
  );
}