const Footer = () => {
  return (
    <footer className="border-t border-border px-6 md:px-12 lg:px-20 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <p className="font-display text-lg font-bold tracking-tight">
            G2<span className="text-gradient">Cloud</span>
          </p>
          <p className="font-body text-sm text-muted-foreground mt-1">
            Cloud training. Bulk SMS. Reliable hosting.
          </p>
        </div>

        <div className="flex items-center gap-8">
          {["About", "Services", "Team", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <p className="font-mono text-[11px] uppercase tracking-widest text-text-dim">
          © 2026 G2Cloud. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
