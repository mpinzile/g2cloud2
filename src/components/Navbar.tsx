import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const navItems = [
    { label: "About", href: isHome ? "#about" : "/#about" },
    { label: "Services", href: isHome ? "#services" : "/#services" },
    { label: "Team", href: isHome ? "#team" : "/#team" },
    { label: "Presentation", href: "/presentation", isRoute: true },
    { label: "Contact", href: isHome ? "#contact" : "/#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="G2Cloud" className="h-8 w-8" />
          <span className="font-display text-xl font-bold tracking-tight text-foreground">
            G2<span className="text-gradient">Cloud</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) =>
            item.isRoute ? (
              <Link
                key={item.label}
                to={item.href}
                className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {item.label}
              </a>
            )
          )}
        </div>

        <div className="flex items-center gap-4">
          <a
            href={isHome ? "#contact" : "/#contact"}
            className="hidden md:block font-mono text-xs uppercase tracking-widest bg-primary text-primary-foreground px-5 py-2 rounded-md hover:opacity-90 transition-opacity"
          >
            Get Started
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-foreground transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-foreground transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-foreground transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t border-border bg-card/95 backdrop-blur-xl"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navItems.map((item) =>
                item.isRoute ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-mono text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-mono text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                )
              )}
              <a
                href={isHome ? "#contact" : "/#contact"}
                onClick={() => setMobileOpen(false)}
                className="font-mono text-sm uppercase tracking-widest bg-primary text-primary-foreground px-5 py-2 rounded-md text-center hover:opacity-90 transition-opacity mt-2"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
