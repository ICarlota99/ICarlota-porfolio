import { useEffect } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Mail, FileText } from "lucide-react";
import GithubIcon from "@/assets/icons/github.svg?react";
import LinkedinIcon from "@/assets/icons/linkedin.svg?react";
import GradientText from "@/components/animations/GradientText";

const COLORS = ["#FFB6C1", "#4A90E2", "#FF7F50", "#FF6B6B", "#7B5FFF", "#020617", "#FFB6C1"];

export default function HeroSection() {
  const color = useMotionValue(COLORS[0]);

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 20,
      repeat: Infinity,
      repeatType: "loop",
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(120% 120% at 50% 100%, #020617 50%, ${color})`;

  return (
    <>
      {/* Animated background behind all content */}
      <motion.div
        style={{ backgroundImage }}
        className="absolute inset-0 -z-50"
        aria-hidden
      />

      <section
        id="hero"
        className="relative z-0 min-h-screen grid place-content-center px-4 pt-24 text-foreground"
      >
        <div className="flex flex-col items-center text-center">

          {/* Heading */}
          <GradientText
            className="max-w-4xl text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 tracking-tight leading-tight hover:cursor-default"
            colors={["#86EFAC", "#2DD4BF", "#3B82F6", "#86EFAC"]}
          >
            <span className="block text-2xl md:text-4xl lg:text-5xl">Hey there — I'm Carlota</span>
            <span className="block mt-10 font-bold">I Craft Beautiful & Reliable</span>
            <span className="block font-bold">Web Experiences</span>
          </GradientText>

          {/* Description */}
          <p className="my-6 max-w-xl text-base md:text-lg text-slate-300 leading-relaxed">
            I'm a <strong className="font-semibold text-white">Junior Web Developer</strong> based in Havana City,
            blending clean code with bold ideas to create high-performance digital experiences that feel as good as they look.
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            <Button
              asChild
              size="lg"
              className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 text-lg px-6 py-3"
              onClick={(e) => {
                e.preventDefault();
                const projects = document.querySelector("#projects");
                if (projects) {
                  projects.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <a href="#projects" className="flex items-center">
                View Projects <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent text-slate-100 hover:text-white border-2 border-slate-600 hover:border-slate-300 text-lg px-6 py-3 transition-transform hover:scale-105"
              onClick={(e) => {
                e.preventDefault();
                const resume = document.querySelector("#resume");
                if (resume) {
                  resume.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <a href="#resume">
                Check My CV <FileText className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center justify-center gap-4 sm:gap-6"
          >
            <SocialIcon
              href="https://github.com/icarlota99"
              label="GitHub"
              icon={<GithubIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-800" />}
            />
            <SocialIcon
              href="https://linkedin.com/in/icarlota99"
              label="LinkedIn"
              icon={<LinkedinIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-800" />}
            />
            <SocialIcon
              href="mailto:k431999@gmail.com"
              label="Email"
              icon={<Mail className="h-5 w-5 sm:h-6 sm:w-6 text-gray-800" />}
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}

function SocialIcon({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} Profile`}
      title={`${label} Profile`}
    >
      <Button
        variant="ghost"
        size="icon"
        className="p-2.5 sm:p-3 rounded-full shadow-lg bg-gray-200/90 hover:bg-gray-100 transition-colors"
      >
        {icon}
        <span className="sr-only">{label}</span>
      </Button>
    </a>
  );
}
