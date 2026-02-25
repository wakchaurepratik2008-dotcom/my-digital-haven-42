import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpg";

const timeline = [
  { year: "2019", title: "Foundation", desc: "Started coding journey, learning fundamentals of web development and programming." },
  { year: "2020", title: "Building Real Systems", desc: "Developed first full-stack apps, dove deep into React and Node.js." },
  { year: "2022", title: "Professional Growth", desc: "Joined a startup as frontend developer, shipped products used by thousands." },
  { year: "Present", title: "Senior Developer", desc: "Leading frontend architecture, mentoring junior developers, and building scalable systems." },
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
          A developer driven by curiosity, building at the intersection of design, engineering, and real-world impact.
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
              alt="John Doe"
              className="w-full max-w-xs rounded-2xl shadow-md"
            />
            <div className="mt-4 space-y-1">
              <p className="text-sm font-semibold text-primary">Full-Stack Developer</p>
              <p className="text-xs text-muted-foreground">✓ Open to opportunities</p>
              <p className="text-xs text-muted-foreground">📍 San Francisco, CA</p>
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
              My journey started with a simple question: <em>How can technology make everyday life better?</em>
            </p>
            <p>
              I discovered my passion for building systems that bridge the gap between great design and robust engineering. From e-commerce platforms to real-time dashboards, I focus on crafting experiences that are both beautiful and performant.
            </p>
            <p>
              Beyond building, I contribute to open source and mentor aspiring developers. I believe the best products come from diverse teams solving problems they genuinely care about.
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
                  key={item.year}
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
