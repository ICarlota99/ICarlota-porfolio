import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

import { TbApi } from "react-icons/tb";
import { MdOutlineImportantDevices } from "react-icons/md";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaPython,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiMysql,
  SiSqlalchemy,
} from "react-icons/si";
import Flask from '@/assets/icons/flask.svg';
import { VscVscodeInsiders } from "react-icons/vsc";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", icon: <FaReact className="h-8 w-8 text-[#61DAFB]" aria-label="ReactJS icon"/> },
      { name: "Next.js", icon: <SiNextdotjs className="h-8 w-8" aria-label="NextJS icon" /> },
      { name: "TypeScript", icon: <SiTypescript className="h-8 w-8 text-[#3178C6]" aria-label="Typescript icon" /> },
      { name: "HTML5", icon: <FaHtml5 className="h-8 w-8 text-[#E34F26]" aria-label="HTML5 icon" /> },
      { name: "CSS3", icon: <FaCss3Alt className="h-8 w-8 text-[#1572B6]" aria-label="CSS3 icon" /> },
      { name: "JavaScript (ES6+)", icon: <SiJavascript className="h-8 w-8 text-[#F7DF1E]" aria-label="Javascript icon" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="h-8 w-8 text-[#06B6D4]" aria-label="Tailwind css icon" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="h-8 w-8 text-[#6E36ED]" aria-label="Bootstrap icon" /> },
    ]
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="h-8 w-8 text-[#339933]" aria-label="NodeJS icon" /> },
      { name: "Express.js", icon: <SiExpress className="h-8 w-8 text-slate-200" aria-label="ExpressJS icon" /> },
      { name: "Python", icon: <FaPython className="h-8 w-8 text-[#3776AB]" aria-label="Python icon" /> },
      { name: "Flask", icon: <img src={Flask} className="h-8 w-8 text-[#A1D0E2]" loading="lazy" alt="flask icon" /> },
      { name: "MySQL", icon: <SiMysql className="h-10 w-10 text-[#06B6D4]" aria-label="MySQL icon" /> },
      { name: "SqlAlchemy", icon: <SiSqlalchemy className="h-10 w-10 text-cyan-200" aria-label="SqlAlchemy icon" /> },

    ]
  },
  {
    title: "Tools & Methodologies",
    skills: [
      { name: "Git", icon: <FaGitAlt className="h-8 w-8 text-[#F05032]" aria-label="Git icon" /> },
      { name: "VS Code", icon: <VscVscodeInsiders className="h-8 w-8 text-[#3178C6]" aria-label="VS Code icon" /> },
      { name: "RESTful APIs", icon: <TbApi className="h-10 w-10 text-blue-200" aria-label="Restful apis icon" /> },
      { name: "Responsive Design", icon: <MdOutlineImportantDevices className="h-8 w-8 text-rose-400" aria-label="Responsive design icon" /> },
    //   { name: "Figma", icon: <FaFigma className="h-8 w-8 text-[#F24E1E]" /> },
    //   { name: "Docker", icon: <FaDocker className="h-8 w-8 text-sky-400" /> },
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 sm:py-32 relative bg-gray-950 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-70 sm:opacity-100">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 sm:opacity-25 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-teal-500 to-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 sm:opacity-25 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <SectionHeading title="My Skills" subtitle="Technologies & Expertise" />

        <motion.div
          variants={ containerVariants }
          initial="hidden"
          whileInView="visible"
          viewport={ { once: true, amount: 0.1 } }
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          { skillCategories.map((category) => (
            <motion.div
              key={ category.title }
              variants={ itemVariants }
              className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-teal-400/50 hover:bg-slate-900"
            >
              <h3 className="mb-6 text-xl font-bold text-slate-100 text-center">
                { category.title }
              </h3>
              <div className="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3">
                { category.skills.map((skill) => (
                  <div key={ skill.name } className="flex flex-col items-center justify-center gap-2 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-800/70 transition-colors duration-300 group-hover:bg-slate-700/80">
                      { skill.icon }
                    </div>
                    <p className="text-sm font-medium text-slate-300">
                      { skill.name }
                    </p>
                  </div>
                )) }
              </div>
            </motion.div>
          )) }
        </motion.div>
      </div>
    </section>
  );
}
