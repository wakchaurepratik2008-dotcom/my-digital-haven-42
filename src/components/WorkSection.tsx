import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack marketplace with real-time inventory and payment processing.",
    tags: ["React", "Node.js", "Stripe"],
    link: "#",
  },
  {
    title: "Analytics Dashboard",
    description: "Data visualization tool for tracking key business metrics at scale.",
    tags: ["TypeScript", "D3.js", "PostgreSQL"],
    link: "#",
  },
  {
    title: "Design System",
    description: "Component library powering consistent UI across multiple products.",
    tags: ["React", "Storybook", "Figma"],
    link: "#",
  },
];

const WorkSection = () => {
  return (
    <section id="work" className="py-32 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-mono text-sm text-primary mb-4 tracking-widest uppercase">Work</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Selected projects
          </h2>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group block p-6 md:p-8 rounded-lg bg-card border border-border hover:border-primary/40 transition-all duration-500 hover:glow"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base">{project.description}</p>
                  <div className="flex gap-2 mt-3">
                    {project.tags.map((tag) => (
                      <span key={tag} className="font-mono text-xs text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
