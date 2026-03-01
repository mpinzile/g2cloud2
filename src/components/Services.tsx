import { motion } from "framer-motion";
import { Cloud, MessageSquare, Globe } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7 },
};

const services = [
  {
    icon: Cloud,
    title: "Cloud Solutions Training",
    description:
      "Hands-on programs designed around real-world cloud environments. From foundational infrastructure to advanced deployment strategies, our training builds career-ready skills aligned with industry standards.",
    tags: ["AWS", "Azure", "DevOps", "Certification"],
  },
  {
    icon: MessageSquare,
    title: "Bulk SMS Solutions",
    description:
      "Reliable, high-volume messaging for businesses, institutions, and organizations. Deliver notifications, alerts, and campaigns at scale with guaranteed delivery and real-time reporting.",
    tags: ["Enterprise", "API Access", "Analytics", "99.9% Uptime"],
  },
  {
    icon: Globe,
    title: "Hosting Services",
    description:
      "Secure, fast, and scalable hosting for modern web applications. From static sites to complex platforms, we provide the infrastructure and support to keep your projects running without interruption.",
    tags: ["SSD Storage", "SSL", "Auto-scaling", "24/7 Support"],
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeUp} className="max-w-3xl mb-20">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">
            Services
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Three pillars.
            <br />
            <span className="text-muted-foreground">One platform.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group glass rounded-xl p-8 hover:border-primary/30 transition-all duration-500"
            >
              <service.icon className="w-8 h-8 text-primary mb-6" strokeWidth={1.5} />
              <h3 className="font-display text-xl font-bold mb-4">
                {service.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] uppercase tracking-widest text-text-dim border border-border px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
