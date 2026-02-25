import { motion } from "framer-motion";

const navItems = ["About", "Work", "Contact"];

const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <button onClick={() => scrollTo("hero")} className="font-heading font-bold text-lg text-foreground tracking-tight">
        JD<span className="text-primary">.</span>
      </button>
      <div className="flex gap-8">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => scrollTo(item.toLowerCase())}
            className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            {item}
          </button>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
