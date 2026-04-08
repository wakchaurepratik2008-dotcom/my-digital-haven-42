import { motion } from "framer-motion";

const skills = ["Python", "C", "HTML", "Leadership", "Fast Learner", "Problem Solving", "Team Management", "Event Planning", "Creativity", "Customer Service", "Hindi", "English", "Marathi"];

const SkillTags = () => {
  return (
    <section className="py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm font-medium text-muted-foreground mb-5"
        >
          What I Bring
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-3"
        >
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="px-4 py-2 rounded-lg bg-card border border-border text-sm font-medium text-foreground shadow-sm hover:border-primary/40 transition-colors cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillTags;
