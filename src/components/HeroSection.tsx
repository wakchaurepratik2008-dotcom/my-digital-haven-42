import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-16 pt-20">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm font-semibold text-primary tracking-widest uppercase mb-6"
          >
            Computer Engineering Student · Tech Enthusiast · Leader
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground mb-4"
          >
            I build creative solutions with{" "}
            <span className="text-primary">technology.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4 max-w-lg"
          >
            From data analysis and event planning to leadership and customer service, I bring a creative and analytical approach to everything I do.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-lg"
          >
            I am <strong className="text-foreground">Pratik Wakchaure</strong>, a Diploma in Computer Engineering student at Sanjivani University. I'm passionate about technology and science, with strong skills in creativity, data analysis, and leadership.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-3"
          >
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              View My Work <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="mailto:pratik.wakchaure2008@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card text-foreground font-semibold text-sm hover:bg-muted transition-colors"
            >
              <Download className="w-4 h-4" /> Download Resume
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">
            <img
              src={profilePhoto}
              alt="Pratik Wakchaure — Computer Engineering Student"
              className="w-72 h-80 md:w-80 md:h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
