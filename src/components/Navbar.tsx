import { motion } from "framer-motion";

const navItems = ["Home", "About", "Projects", "Contact"];

const Navbar = () => {
  const scrollTo = (id: string) => {
    if (id === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 py-4 bg-background/80 backdrop-blur-md"
    >
      <button onClick={() => scrollTo("Home")} className="font-heading font-bold text-xl text-foreground tracking-tight">
        John <span className="text-primary">Doe</span>
      </button>
      <div className="flex gap-8">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => scrollTo(item)}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            {item}
          </button>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
