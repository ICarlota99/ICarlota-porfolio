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
import { ArrowRight, Mail, FileText } from "lucide-react";
import GithubIcon from '@/assets/icons/github.svg?react';
import LinkedinIcon from '@/assets/icons/linkedin.svg?react';
import GradientText from "@/components/animations/GradientText";

const COLORS_TOP = [ "#FFB6C1", "#4A90E2", "#FF7F50", "#FF6B6B", "#7B5FFF", "#020617", "#FFB6C1"];

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

  const backgroundImage = useMotionTemplate`radial-gradient(120% 120% at 50% 100%, #020617 50%, ${color})`;

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
          className="max-w-4xl text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 tracking-tight leading-tight hover:cursor-default"
          colors={ [ "#86EFAC", "#2DD4BF", "#3B82F6", "#86EFAC" ] }
        >
          <span className="block text-2xl lg:text-5xl md:text-4xl">
            Hey there - I'm Carlota
          </span>
          <span className="block mt-10 font-bold">
            I Craft Beautiful & Reliable
          </span>
          <span className="block font-bold">
            Web Experiences
          </span>
        </GradientText>

        <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed text-slate-300">
          I'm a <strong className="font-semibold text-white">Junior Web Developer</strong> based in Havana City, 
          blending clean code with bold ideas to create high-performance digital experiences that feel as good as they look.
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
            <a href="#resume">
              Check My CV <FileText className="ml-2 h-5 w-5"/>
            </a>
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
            title="GitHub Profile"
          >
            <Button
              variant="ghost"
              size="icon"
              className="p-2.5 sm:p-3 rounded-full shadow-lg bg-gray-200/90 hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <GithubIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-800"/>
              <span className="sr-only">GitHub</span>
            </Button>
          </a>
          <a
            href="https://linkedin.com/in/icarlota99"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            title="Linkedin Profile"
          >
            <Button
              variant="ghost"
              size="icon"
              className="p-2.5 sm:p-3 rounded-full shadow-lg bg-gray-200/90 hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <LinkedinIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-800" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </a>
          <a
            href="mailto:icarlota99dev@gmail.com"
            aria-label="Send Email"
            title="Send Email"
          >
            <Button
              variant="ghost"
              size="icon"
              className="p-2.5 sm:p-3 rounded-full shadow-lg bg-gray-200/90 hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-gray-800" />
              <span className="sr-only">Email</span>
            </Button>
          </a>
        </motion.div>
      </div>
      <div className="absolute inset-0 z-0">
        <Canvas>
            <Stars radius={50} count={1000} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
}