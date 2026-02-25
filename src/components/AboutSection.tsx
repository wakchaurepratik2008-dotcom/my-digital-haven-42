import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpg";

const timeline = [
  { year: "School", title: "Academic Excellence", desc: "Scored 92.20% in 10th grade from Agasti Arts Commerce and Science Mahavidhyalay, Akole." },
  { year: "2025", title: "Diploma in Computer Engineering", desc: "Currently pursuing Diploma in Computer Engineering at Sanjivani University, building a strong foundation in technology." },
  { year: "2025", title: "Certifications & Growth", desc: "Earned Registration Certificate and actively expanding skills in data analysis, leadership, and technology." },
  { year: "Ongoing", title: "Building & Learning", desc: "Exploring new technologies, developing projects, and preparing for a career in the tech industry." },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <p className="text-sm font-medium text-muted-foreground mb-2">The Story</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            About <span className="text-primary">Me</span>
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-muted-foreground text-sm mb-12 max-w-2xl"
        >
          A student driven by curiosity, passionate about technology, science, and creative problem-solving.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1"
          >
            <img
              src={profilePhoto}
              alt="Pratik Wakchaure"
              className="w-full max-w-xs rounded-2xl shadow-md"
            />
            <div className="mt-4 space-y-1">
              <p className="text-sm font-semibold text-primary">Computer Engineering Student</p>
              <p className="text-xs text-muted-foreground">✓ Open to Internships & Opportunities</p>
              <p className="text-xs text-muted-foreground">📍 Akole, Ahmednagar, Maharashtra</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed text-sm"
          >
            <p>
              My journey started with a deep fascination for <em>technology and science</em> — wanting to understand how things work and how they can be improved.
            </p>
            <p>
              Currently pursuing my Diploma in Computer Engineering at Sanjivani University, I'm building a strong foundation in both technical skills and soft skills. With a 92.20% score in my 10th grade, I bring the same dedication and discipline to everything I do.
            </p>
            <p>
              I believe in continuous learning and growth. Whether it's leading events, analyzing data, or crafting creative solutions, I approach every challenge with enthusiasm and a desire to make an impact.
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-heading text-lg font-semibold text-foreground mb-8">My Journey</h3>
          <div className="relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <div className="relative flex-shrink-0">
                    <div className="w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-primary font-semibold mb-1">{item.year}</p>
                    <p className="text-sm font-semibold text-foreground mb-1">{item.title}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed max-w-md">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
