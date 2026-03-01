import { motion } from "framer-motion";

import teamDavid from "@/assets/team-david.jpg";
import teamRegina from "@/assets/team-regina.jpg";
import teamLightness from "@/assets/team-lightness.jpg";
import teamErick from "@/assets/team-erick.jpg";
import teamDhiki from "@/assets/team-dhiki.jpg";
import teamElizabeth from "@/assets/team-elizabeth.jpg";
import teamGabriel from "@/assets/team-gabriel.jpg";
import teamPeter from "@/assets/team-peter.jpg";
import teamSalvatory from "@/assets/team-salvatory.jpg";
import teamRegan from "@/assets/team-regan.jpg";
import teamEmilia from "@/assets/team-emilia.jpg";

const team = [
  {
    name: "David Mpinzile",
    role: "Chief Executive Officer",
    bio: "Drives G2Cloud's vision with a decade of experience in cloud strategy and technology leadership.",
    image: teamDavid,
  },
  {
    name: "Regina Mlay",
    role: "Chief Technology Officer",
    bio: "Architects scalable cloud infrastructure and leads all technical operations with precision.",
    image: teamRegina,
  },
  {
    name: "Lightness Joachim",
    role: "Head of Cloud Training",
    bio: "Designs industry-aligned curricula that turn learners into confident cloud practitioners.",
    image: teamLightness,
  },
  {
    name: "Erick Peter",
    role: "Lead Engineer",
    bio: "Builds and maintains the core platform infrastructure powering all G2Cloud services.",
    image: teamErick,
  },
  {
    name: "Dhiki Kidanha",
    role: "Head of Product",
    bio: "Translates complex requirements into elegant, user-centered product experiences.",
    image: teamDhiki,
  },
  {
    name: "Elizabeth Tobias",
    role: "Head of Communications",
    bio: "Leads bulk SMS operations and client communication strategy across all channels.",
    image: teamElizabeth,
  },
  {
    name: "Gabriel Lyaruu",
    role: "DevOps Architect",
    bio: "Ensures seamless deployments, monitoring, and reliability across every hosted environment.",
    image: teamGabriel,
  },
  {
    name: "Peter Kwene",
    role: "Head of Partnerships",
    bio: "Cultivates strategic relationships that expand G2Cloud's reach and impact across the region.",
    image: teamPeter,
  },
  {
    name: "Salvatory Mchesha",
    role: "Cloud Solutions Architect",
    bio: "Designs enterprise cloud migration strategies and ensures optimal infrastructure performance.",
    image: teamSalvatory,
  },
  {
    name: "Regan Mtuka",
    role: "Software Engineer",
    bio: "Develops robust applications and integrations that power the G2Cloud platform.",
    image: teamRegan,
  },
  {
    name: "Emilia Nzilano",
    role: "Operations Manager",
    bio: "Streamlines processes and ensures operational excellence across all service lines.",
    image: teamEmilia,
  },
];

const Team = () => {
  return (
    <section id="team" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-20"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">
            Our Team
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            People who
            <br />
            <span className="text-muted-foreground">build with purpose.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl mb-4 aspect-[4/5]">
                <img
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
              <h3 className="font-display text-base font-bold">{member.name}</h3>
              <p className="font-mono text-[10px] uppercase tracking-widest text-primary mt-1 mb-2">
                {member.role}
              </p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
