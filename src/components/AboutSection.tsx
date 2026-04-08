import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpg";

const timeline = [
  { year: "School", title: "Academic Foundation", desc: "Scored 92.20% in 10th grade from a school in my local village, building a strong academic base." },
  { year: "2024", title: "Joined Sanjivani University", desc: "After 10th, connected with Sanjivani Group of Institutes for higher education — starting my Integrated B.Tech journey." },
  { year: "2025", title: "Vice President of SIBSA", desc: "Elected as Vice President of SIBSA, leading student initiatives and creating positive impact on campus." },
  { year: "Ongoing", title: "Building & Learning", desc: "Working on websites like Vistara and other projects, learning Python, C, HTML, and exploring new technologies every day." },
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
          A student from a local village, driven by curiosity and a passion for technology and leadership.
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
              <p className="text-sm font-semibold text-primary">Vice President, SIBSA</p>
              <p className="text-xs text-muted-foreground">✓ Open to Internships & Opportunities</p>
              <p className="text-xs text-muted-foreground">📍 Sanjivani Group of Institutes</p>
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
              I am a dedicated First-Year Integrated B.Tech student at Sanjivani Group of Institutes, currently serving as the <em>Vice President of SIBSA</em>. I am passionate about learning, leadership, and contributing to student initiatives that create a positive impact on campus.
            </p>
            <p>
              Coming from a local village, after my 10th I connected with Sanjivani University for higher education. I enjoy taking on responsibilities that help me grow both academically and personally. I'm a fast learner with strong leadership skills — I solve problems and lead teams effectively.
            </p>
            <p>
              As I continue my engineering journey, I am focused on building strong technical skills, improving my communication and teamwork abilities, and shaping myself into a capable and responsible professional. I'm passionate about technology — developing, updating, and working on real projects.
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
