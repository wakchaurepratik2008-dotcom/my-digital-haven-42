import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-sm text-primary mb-4 tracking-widest uppercase">Contact</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
            Let's work together.
          </h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            Have a project in mind or just want to chat? I'd love to hear from you.
          </p>

          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-heading font-semibold text-sm hover:opacity-90 transition-opacity duration-300 glow"
          >
            <Mail className="w-4 h-4" />
            Get in touch
          </a>

          <div className="flex justify-center gap-6 mt-12">
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
                className="p-3 rounded-md border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="mt-24 pt-8 border-t border-border text-center">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} · Built with care
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
