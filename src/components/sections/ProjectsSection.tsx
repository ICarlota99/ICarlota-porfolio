import { useState } from "react";
import { projectsData } from "@/utils/data";
import ProjectCard from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

const getCategories = (projects: typeof projectsData) => {
  const categories = projects.map((p) => p.category);
  return ["All", ...Array.from(new Set(categories))];
};

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = getCategories(projectsData);
  const sortedProjects = [...projectsData].sort(
    (a, b) => new Date(b.projectStartDate).getTime() - new Date(a.projectStartDate).getTime()
  );

  const filteredProjects =
    selectedCategory === "All"
      ? sortedProjects
      : sortedProjects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="py-24 sm:py-32 relative text-white overflow-hidden">
      {/* Optimized Background */}
      <div className="absolute inset-0 -z-50 bg-slate-950">
        <div className="absolute top-1/4 left-1/4 w-60 h-60 sm:w-72 sm:h-72 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mix-blend-screen blur-2xl opacity-15" />
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 sm:w-72 sm:h-72 bg-gradient-to-r from-teal-500 to-pink-500 rounded-full mix-blend-screen blur-2xl opacity-15" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading title="Featured Projects" subtitle="My recent work" />

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 mt-10 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "px-5 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-950",
                selectedCategory === category
                  ? "bg-gradient-to-r from-green-400 to-blue-600 text-white shadow-lg scale-105"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700/80 hover:text-white"
              )}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
