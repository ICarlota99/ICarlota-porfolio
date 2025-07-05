import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Loader, CircleCheckBig, TriangleAlert } from "lucide-react";

interface FormState {
  status: "idle" | "loading" | "success" | "error";
  message: string | null;
}

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [formState, setFormState] = useState<FormState>({ 
    status: "idle", 
    message: null 
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({ status: "loading", message: null });

    if (!name || !email || !subject || !message) {
      setFormState({ status: "error", message: "Please fill in all required fields." });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFormState({ status: "error", message: "Please enter a valid email address." });
      return;
    }

    try {
      const mailtoLink = `mailto:k431999@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      )}`;
      
      window.location.href = mailtoLink;
      
      setFormState({
        status: "success",
        message: "Your email client should open with this message ready to send!"
      });
      
      // Clear form after successful submission
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      
    } catch (error) {
      console.error("Error opening email client:", error);
      setFormState({
        status: "error",
        message: "Could not open your email client. Please try again or email me directly at dhlananh2309@gmail.com"
      });
    }
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.3 }
    }),
  };

  const inputBaseClasses = "block w-full px-4 py-2.5 rounded-lg shadow-sm text-white placeholder-zinc-400 text-sm sm:text-base transition-colors duration-200";
  const inputBgFocusClasses = "bg-zinc-700/60 border-zinc-600 focus:ring-pink-500 focus:border-pink-500";

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-5 sm:space-y-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
    >
      <motion.div variants={inputVariants} custom={0}>
        <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-1.5">
          Full Name <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`${inputBaseClasses} ${inputBgFocusClasses}`}
          placeholder="Your Name"
        />
      </motion.div>

      <motion.div variants={inputVariants} custom={1}>
        <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-1.5">
          Email Address <span className="text-red-400">*</span>
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`${inputBaseClasses} ${inputBgFocusClasses}`}
          placeholder="you@example.com"
        />
      </motion.div>

      <motion.div variants={inputVariants} custom={2}>
        <label htmlFor="subject" className="block text-sm font-medium text-zinc-300 mb-1.5">
          Subject <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          required
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className={`${inputBaseClasses} ${inputBgFocusClasses}`}
          placeholder="Subject about cooperation opportunities..."
        />
      </motion.div>

      <motion.div variants={inputVariants} custom={3}>
        <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-1.5">
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${inputBaseClasses} ${inputBgFocusClasses}`}
          placeholder="Your detailed message here..."
        ></textarea>
      </motion.div>

      <motion.div variants={inputVariants} custom={4}>
        <button
          type="submit"
          disabled={formState.status === "loading"}
          className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-semibold text-white
          bg-gradient-to-r from-green-400 via-teal-500 to-blue-600
          hover:from-green-500 hover:via-teal-600 hover:to-blue-700
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-800
          focus:ring-teal-400 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300
          group transform hover:scale-[1.02]"
        >
          {formState.status === "loading" && <Loader className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />}
          {formState.status !== "loading" && <Send size={18} className="-ml-1 mr-2.5 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />}
          Send Message
        </button>
      </motion.div>

      {formState.message && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mt-4 p-3 rounded-md text-sm flex items-center shadow
            ${formState.status === "success" ? "bg-green-500 bg-opacity-25 text-green-300 border border-green-500/50" :
              formState.status === "error" ? "bg-red-500 bg-opacity-25 text-red-300 border border-red-500/50" : ""
            }`}
        >
          {formState.status === "success" && <CircleCheckBig className="mr-2 h-5 w-5 flex-shrink-0" />}
          {formState.status === "error" && <TriangleAlert className="mr-2 h-5 w-5 flex-shrink-0" />}
          {formState.message}
        </motion.div>
      )}
    </motion.form>
  );
}