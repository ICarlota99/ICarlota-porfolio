import { useState } from "react";
import ContactForm from "@/components/ui/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion, easeInOut } from "framer-motion";
import { Mail, Copy, Check } from "lucide-react";
import GithubIcon from '@/assets/icons/github.svg?react';
import LinkedinIcon from '@/assets/icons/linkedin.svg?react';

const contactDetails = [
  {
    name: "Email",
    value: "k431999@gmail.com",
    href: "mailto:k431999@gmail.com",
    icon: Mail,
    type: "email"
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/icarlota99",
    href: "https://linkedin.com/in/icarlota99",
    icon: LinkedinIcon,
  },
  {
    name: "GitHub",
    value: "github.com/icarlota99",
    href: "https://github.com/icarlota99",
    icon: GithubIcon,
  },
];

const currentStatus = "Available for freelance work and full-time opportunities";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeInOut } },
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("k431999@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative text-white overflow-hidden">
      {/* Background blobs remain the same */}
      <div className="absolute inset-0 z-0 opacity-70 sm:opacity-100">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 sm:opacity-25 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-teal-500 to-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 sm:opacity-25 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/5 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full mix-blend-screen filter blur-3xl opacity-15 sm:opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <SectionHeading title="Get In Touch" subtitle="Let's work together" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-zinc-800/70 backdrop-blur-md border border-zinc-700/50 rounded-xl p-6 sm:p-8 shadow-xl mt-10"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
            <ul className="space-y-5 mb-8">
              {contactDetails.map((item) => (
                <li key={item.name} className="flex items-start gap-4">
                  <item.icon className="text-blue-400 w-5 h-5 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm text-zinc-400">{item.name}</p>
                    <div className="flex items-center gap-2">
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-200 hover:text-blue-300 transition-colors break-all"
                      >
                        {item.value}
                      </a>
                      {item.type === "email" && (
                        <button
                          onClick={copyEmail}
                          className="text-zinc-400 hover:text-blue-400 transition-colors p-1"
                          aria-label="Copy email"
                        >
                          {copied ? (
                            <Check className="h-4 w-4 text-green-400" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-zinc-700/50 pt-6">
              <h4 className="text-lg font-medium text-white mb-3">Current Status</h4>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                <p className="text-sm text-zinc-300">{currentStatus}</p>
              </div>
            </div>
          </motion.div>

          <div className="bg-zinc-800/70 backdrop-blur-md border border-zinc-700/50 rounded-xl p-6 sm:p-8 shadow-xl mt-10">
            <h3 className="text-2xl font-semibold text-white mb-6">Send Me a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}