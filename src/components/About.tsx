import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7 },
};

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeUp} className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">
            About G2Cloud
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-8">
            Technology that serves
            <br />
            <span className="text-muted-foreground">real outcomes.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.1 }}>
            <h3 className="font-display text-2xl font-bold mb-4">Our Mission</h3>
            <p className="font-body text-muted-foreground leading-relaxed text-lg">
              We exist to close the gap between emerging technology and practical
              application. G2Cloud equips individuals and organizations with the
              skills, tools, and infrastructure needed to operate confidently in
              a cloud-first world.
            </p>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.2 }}>
            <h3 className="font-display text-2xl font-bold mb-4">Our Vision</h3>
            <p className="font-body text-muted-foreground leading-relaxed text-lg">
              A future where every organization — regardless of size or location
              — has access to world-class cloud infrastructure, communication
              tools, and the expertise to use them effectively. We build for
              long-term impact, not short-term hype.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
