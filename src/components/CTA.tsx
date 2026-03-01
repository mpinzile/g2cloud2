import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative glass rounded-2xl p-12 md:p-20 text-center overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
          </div>

          <div className="relative z-10">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">
              Ready to Start?
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Let's build something
              <br />
              <span className="text-gradient">that matters.</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto mb-10">
              Whether you're starting your cloud journey, scaling your messaging,
              or launching your next project. We're ready when you are.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:hello@g2cloud.co"
                className="font-mono text-sm uppercase tracking-widest bg-primary text-primary-foreground px-8 py-3.5 rounded-md hover:opacity-90 transition-opacity"
              >
                Contact Us
              </a>
              <a
                href="#services"
                className="font-mono text-sm uppercase tracking-widest border border-border text-foreground px-8 py-3.5 rounded-md hover:bg-secondary transition-colors"
              >
                Explore Services
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
