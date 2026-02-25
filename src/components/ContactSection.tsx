import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";

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
            Let's <span className="text-primary">connect.</span>
          </h2>
          <p className="text-muted-foreground text-sm mb-10 leading-relaxed max-w-md mx-auto">
            I'm open to internships, collaborations, and opportunities. Feel free to reach out!
          </p>

          <a
            href="mailto:pratik.wakchaure2008@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            <Send className="w-4 h-4" />
            Send a Message
          </a>

          <div className="flex justify-center gap-4 mt-10">
            <a
              href="mailto:pratik.wakchaure2008@gmail.com"
              className="p-3 rounded-lg border border-border bg-card text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-200"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="tel:+919209502296"
              className="p-3 rounded-lg border border-border bg-card text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-200"
              aria-label="Phone"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>

          <p className="text-xs text-muted-foreground mt-6">
            pratik.wakchaure2008@gmail.com · +91 9209502296
          </p>
        </motion.div>
      </div>

      <div className="mt-20 pt-6 border-t border-border text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Pratik Wakchaure · Built with care
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
