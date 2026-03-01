import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 h-16 flex items-center justify-between">
        <a href="#" className="font-display text-xl font-bold tracking-tight text-foreground">
          G2<span className="text-gradient">Cloud</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {["About", "Services", "Team", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="font-mono text-xs uppercase tracking-widest bg-primary text-primary-foreground px-5 py-2 rounded-md hover:opacity-90 transition-opacity"
        >
          Get Started
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
