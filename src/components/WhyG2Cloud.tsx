import { motion } from "framer-motion";
import { Shield, Zap, Users, Target } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7 },
};

const reasons = [
  {
    icon: Target,
    title: "Outcome-Driven",
    description: "Every service is designed around measurable results, not vague promises.",
  },
  {
    icon: Zap,
    title: "Built for Speed",
    description: "Fast deployments, instant messaging, rapid skill acquisition. No waiting.",
  },
  {
    icon: Shield,
    title: "Reliable by Design",
    description: "Enterprise-grade infrastructure and support you can count on at every scale.",
  },
  {
    icon: Users,
    title: "Expert-Led",
    description: "A team of practitioners who build, deploy, and teach from real experience.",
  },
];

const WhyG2Cloud = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeUp} className="max-w-3xl mb-20">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">
            Why G2Cloud
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Clarity over complexity.
            <br />
            <span className="text-muted-foreground">Results over rhetoric.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              <reason.icon className="w-6 h-6 text-primary mb-4" strokeWidth={1.5} />
              <h3 className="font-display text-lg font-bold mb-2">{reason.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed text-sm">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyG2Cloud;
