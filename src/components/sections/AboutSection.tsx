import { motion } from "framer-motion";
import { GlassmorphicCard } from "@/components/ui/GlassmorphicCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import profileImage from "@/assets/pfp.webp";

const AboutSection = () => {


  return (
    <section id="about" className="py-24 sm:py-32 relative text-white overflow-hidden">
      {/* Gradients */}
      <div className="absolute inset-0 -z-50 bg-slate-950">
        <div className="absolute top-1/4 right-1/4 w-56 h-56 sm:w-72 sm:h-72 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 rounded-full opacity-10 sm:opacity-15 blur-2xl pointer-events-none" />
        <div className="absolute bottom-1/3 left-1/3 w-56 h-56 sm:w-72 sm:h-72 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 rounded-full opacity-10 sm:opacity-15 blur-2xl pointer-events-none" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <SectionHeading title="About Me" subtitle="My Journey" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start md:items-center">
          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative will-change-transform"
          >
            <div className="absolute -inset-2 sm:-inset-3 rounded-xl bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-teal-500/30 blur-xl opacity-50 transition-all duration-500 group-hover:opacity-70" />
            <div className="relative aspect-[3/4] sm:aspect-square rounded-xl overflow-hidden border border-zinc-800 shadow-2xl group">
              <img
                src={profileImage}
                alt="Irene Carlota - Web Developer"
                className="transform transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6">
                <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-md w-fit">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs sm:text-sm font-medium text-gray-100">Available for work</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <div className="space-y-6">
            <GlassmorphicCard>
              <p className="text-lg text-zinc-300 leading-relaxed lg:text-justify">
                Hi! I'm <strong className="text-teal-400">Carlota </strong> 
                (though my full name is <strong className="font-semibold text-white">
                Irene Carlota del Cueto Mora</strong>)
              </p>
              <p className="text-lg text-zinc-300 mt-4 leading-relaxed lg:text-justify">
                Fueled by curiosity for science, technology, and complex puzzles, I'm a 
                self-taught <strong className="text-teal-400">Junior Full Stack Developer</strong>. 
                My background in medicine, studied in Havana, forged analytical precision 
                that I now channel into coding, after building a solid technical foundation 
                from Harvard's CS50 course.
              </p>
              <p className="text-lg text-zinc-300 mt-4 leading-relaxed lg:text-justify">
                A rapid and independent learner, I master new technologies through deep 
                documentation dives. While I have a diverse <a href="#skills" 
                className="underline font-semibold text-white italic">toolkit</a>, 
                I specialize in crafting performant frontends with 
                <strong className="font-semibold text-white"> React</strong> and efficient 
                backends with <strong className="font-semibold text-white">Python & Node.js</strong>. 
                I'm also exploring <strong className="font-semibold text-white">LLMs </strong> 
                and <strong className="font-semibold text-white">AI</strong> to enhance web applications.
              </p>
              <p className="text-lg text-zinc-300 mt-4 leading-relaxed lg:text-justify">
                Committed to lifelong learning, I thrive in collaborative environments and aim 
                to craft experiences where clean code, performance, and great UX/UI converge.
              </p>
              <p className="text-lg text-zinc-300 mt-4 leading-relaxed lg:text-justify">
                Beyond coding? You'll find me reading, conquering game worlds, enjoying nature, 
                or pushing fitness limits.
              </p>

              {/* Personal Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mt-8 pt-6 border-t border-zinc-700/50">
                <div>
                  <div className="text-xs sm:text-sm text-white/90">Full Name</div>
                  <div className="font-medium text-zinc-200">Irene Carlota del Cueto Mora</div>
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-white/90">Email</div>
                  <a href="mailto:k431999@gmail.com" className="font-medium text-zinc-200 hover:text-teal-400 transition-colors">
                    k431999@gmail.com
                  </a>
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-white/90">Location</div>
                  <div className="font-medium text-zinc-200">La Habana, Cuba</div>
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-white/90">Availability</div>
                  <div className="font-medium text-green-400">Open to opportunities</div>
                </div>
              </div>
            </GlassmorphicCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;