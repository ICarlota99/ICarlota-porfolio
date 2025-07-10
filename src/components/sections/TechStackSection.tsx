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
      { name: "React.js", icon: <FaReact className="h-8 w-8 text-[#61DAFB]" /> },
      { name: "Next.js", icon: <SiNextdotjs className="h-8 w-8" /> },
      { name: "TypeScript", icon: <SiTypescript className="h-8 w-8 text-[#3178C6]" /> },
      { name: "HTML5", icon: <FaHtml5 className="h-8 w-8 text-[#E34F26]" /> },
      { name: "CSS3", icon: <FaCss3Alt className="h-8 w-8 text-[#1572B6]" /> },
      { name: "JavaScript (ES6+)", icon: <SiJavascript className="h-8 w-8 text-[#F7DF1E]" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="h-8 w-8 text-[#06B6D4]" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="h-8 w-8 text-[#6E36ED]" /> },
    ]
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="h-8 w-8 text-[#339933]" /> },
      { name: "Express.js", icon: <SiExpress className="h-8 w-8 text-slate-200" /> },
      { name: "Python", icon: <FaPython className="h-8 w-8 text-[#3776AB]" /> },
      {
        name: "Flask",
        icon: <img src={Flask} alt="Flask icon" loading="lazy" className="h-8 w-8" />,
      },
      { name: "MySQL", icon: <SiMysql className="h-10 w-10 text-[#06B6D4]" /> },
      { name: "SqlAlchemy", icon: <SiSqlalchemy className="h-10 w-10 text-cyan-200" /> },
    ]
  },
  {
    title: "Tools & Methodologies",
    skills: [
      { name: "Git", icon: <FaGitAlt className="h-8 w-8 text-[#F05032]" /> },
      { name: "VS Code", icon: <VscVscodeInsiders className="h-8 w-8 text-[#3178C6]" /> },
      { name: "RESTful APIs", icon: <TbApi className="h-10 w-10 text-blue-200" /> },
      { name: "Responsive Design", icon: <MdOutlineImportantDevices className="h-8 w-8 text-rose-400" /> },
    ]
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 sm:py-32 relative bg-slate-950 overflow-hidden">
      {/* Simplified animated blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-60 h-60 sm:w-80 sm:h-80 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mix-blend-screen blur-2xl opacity-15" />
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 sm:w-80 sm:h-80 bg-gradient-to-r from-teal-500 to-pink-500 rounded-full mix-blend-screen blur-2xl opacity-15" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <SectionHeading title="My Skills" subtitle="Technologies & Expertise" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm transition-all hover:border-teal-400/50 hover:bg-slate-900"
            >
              <h3 className="mb-6 text-xl font-bold text-slate-100 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center justify-center gap-2 text-center"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-800/70 group-hover:bg-slate-700/80 transition-colors">
                      {skill.icon}
                    </div>
                    <p className="text-sm font-medium text-slate-300">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}