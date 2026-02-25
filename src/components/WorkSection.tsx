import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Full-Stack",
    problem: "Traditional online stores lack real-time inventory and seamless checkout.",
    solution: "Built a full-stack marketplace with real-time stock updates, Stripe payments, and an admin dashboard.",
    impact: "Processing 500+ orders/month with 99.9% uptime.",
    stats: [
      { value: "500+", label: "Orders/Month" },
      { value: "99.9%", label: "Uptime" },
      { value: "<2s", label: "Load Time" },
    ],
    tags: ["React", "Node.js", "Stripe", "PostgreSQL"],
    link: "#",
  },
  {
    title: "Analytics Dashboard",
    category: "Frontend",
    problem: "Businesses need a clear, real-time view of key performance metrics.",
    solution: "Data visualization tool with interactive charts, filters, and export capabilities.",
    impact: "Used by 50+ teams to track and improve business outcomes.",
    stats: [
      { value: "50+", label: "Teams" },
      { value: "Real-time", label: "Updates" },
      { value: "12+", label: "Chart Types" },
    ],
    tags: ["TypeScript", "D3.js", "React", "WebSocket"],
    link: "#",
  },
  {
    title: "Component Library",
    category: "Design System",
    problem: "Inconsistent UI across multiple products slows development and hurts UX.",
    solution: "40+ accessible, themeable components with docs, tests, and Figma integration.",
    impact: "Adopted across 3 product teams, reducing UI development time by 60%.",
    stats: [
      { value: "40+", label: "Components" },
      { value: "60%", label: "Faster Dev" },
      { value: "3", label: "Teams" },
    ],
    tags: ["React", "Storybook", "Figma", "Testing Library"],
    link: "#",
  },
];

const WorkSection = () => {
  return (
    <section id="projects" className="py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <p className="text-sm font-medium text-muted-foreground mb-2">Case Studies</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Projects That <span className="text-primary">Matter</span>
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-muted-foreground text-sm mb-12 max-w-xl"
        >
          Not just what I built — but the problems I solved, the approach I took, and the impact I created.
        </motion.p>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 md:p-8 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">{project.category}</span>
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mt-1">{project.title}</h3>
                </div>
                <a href={project.link} className="p-2 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              <div className="flex flex-wrap gap-4 mb-6">
                {project.stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-lg font-bold text-primary">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-6 text-sm">
                <div>
                  <p className="font-semibold text-foreground text-xs mb-1">The Problem</p>
                  <p className="text-muted-foreground">{project.problem}</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-xs mb-1">My Solution</p>
                  <p className="text-muted-foreground">{project.solution}</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-xs mb-1">The Impact</p>
                  <p className="text-muted-foreground">{project.impact}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-md bg-muted text-xs font-medium text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
