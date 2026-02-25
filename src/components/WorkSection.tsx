import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Data Analysis Dashboard",
    category: "Data Analysis",
    problem: "Raw data is hard to interpret without proper visualization and insights.",
    solution: "Built interactive dashboards to visualize data trends, patterns, and key metrics for better decision-making.",
    impact: "Helped simplify complex datasets into actionable insights.",
    stats: [
      { value: "📊", label: "Data Viz" },
      { value: "📈", label: "Trend Analysis" },
      { value: "💡", label: "Insights" },
    ],
    tags: ["Data Analysis", "Visualization", "Problem Solving"],
    link: "#",
  },
  {
    title: "College Event Management",
    category: "Event Planning",
    problem: "Coordinating college events requires meticulous planning and team leadership.",
    solution: "Led end-to-end event planning including logistics, team coordination, and execution for college technical events.",
    impact: "Successfully organized events with positive feedback from participants and faculty.",
    stats: [
      { value: "🎯", label: "Planning" },
      { value: "👥", label: "Team Lead" },
      { value: "✅", label: "Execution" },
    ],
    tags: ["Leadership", "Event Planning", "Team Management"],
    link: "#",
  },
  {
    title: "Creative Tech Projects",
    category: "Technology",
    problem: "Learning best happens through hands-on building and experimentation.",
    solution: "Developed multiple creative projects combining computer engineering fundamentals with innovative thinking.",
    impact: "Strengthened practical skills in programming and problem-solving.",
    stats: [
      { value: "💻", label: "Coding" },
      { value: "🔧", label: "Engineering" },
      { value: "🚀", label: "Innovation" },
    ],
    tags: ["Computer Engineering", "Creativity", "Technology"],
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
          <p className="text-sm font-medium text-muted-foreground mb-2">My Work</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Projects & <span className="text-primary">Experience</span>
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-muted-foreground text-sm mb-12 max-w-xl"
        >
          Highlights of what I've worked on — combining creativity, technical skills, and leadership.
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
                    <p className="text-lg">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-6 text-sm">
                <div>
                  <p className="font-semibold text-foreground text-xs mb-1">The Challenge</p>
                  <p className="text-muted-foreground">{project.problem}</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-xs mb-1">My Approach</p>
                  <p className="text-muted-foreground">{project.solution}</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-xs mb-1">The Result</p>
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
