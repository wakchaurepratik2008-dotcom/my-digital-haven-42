import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-sm text-primary mb-4 tracking-widest uppercase">About</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Turning ideas into reality through code & design.
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a developer with 5+ years of experience building web applications. I specialize in React, TypeScript, and Node.js, with a deep appreciation for clean architecture and thoughtful UI.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to open source, or sketching design concepts.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-8"
        >
          <div>
            <p className="font-mono text-sm text-muted-foreground mb-3 uppercase tracking-wider">Technologies</p>
            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "Node.js", "Next.js", "Tailwind CSS", "PostgreSQL", "GraphQL", "Docker"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground font-mono text-xs border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="font-mono text-sm text-muted-foreground mb-3 uppercase tracking-wider">Experience</p>
            <div className="space-y-3">
              {[
                { role: "Senior Developer", company: "Tech Co.", period: "2022 — Present" },
                { role: "Frontend Developer", company: "Startup Inc.", period: "2020 — 2022" },
                { role: "Junior Developer", company: "Agency Ltd.", period: "2019 — 2020" },
              ].map((exp) => (
                <div key={exp.role} className="flex justify-between items-baseline border-b border-border pb-3">
                  <div>
                    <p className="text-foreground font-medium text-sm">{exp.role}</p>
                    <p className="text-muted-foreground text-xs">{exp.company}</p>
                  </div>
                  <p className="font-mono text-xs text-muted-foreground">{exp.period}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
