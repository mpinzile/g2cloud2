import { motion } from "framer-motion";
import HeroIllustration from "./HeroIllustration";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center section-padding pt-32">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-pulse-glow" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-6">
              Cloud · SMS · Hosting
            </p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8">
              Build with
              <br />
              <span className="text-gradient">confidence</span>
              <br />
              in the cloud.
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-12">
              G2Cloud delivers practical cloud training, reliable bulk SMS, and
              secure hosting, everything your organization needs to scale with
              clarity and precision.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="font-mono text-sm uppercase tracking-widest bg-primary text-primary-foreground px-8 py-3.5 rounded-md hover:opacity-90 transition-opacity"
              >
                Start Learning
              </a>
              <a
                href="#contact"
                className="font-mono text-sm uppercase tracking-widest border border-border text-foreground px-8 py-3.5 rounded-md hover:bg-secondary transition-colors"
              >
                Talk to Us
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:flex justify-center"
          >
            <HeroIllustration />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
