import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-16">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-muted-foreground mb-2">Get In Touch</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's work <span className="text-primary">together.</span>
          </h2>
          <p className="text-muted-foreground text-sm mb-10 leading-relaxed max-w-md mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you. Feel free to reach out through any of the channels below.
          </p>

          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            <Send className="w-4 h-4" />
            Send a Message
          </a>

          <div className="flex justify-center gap-4 mt-10">
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-border bg-card text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-200"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="mt-20 pt-6 border-t border-border text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} John Doe · Built with care
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
