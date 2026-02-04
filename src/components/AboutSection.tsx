import { motion } from "framer-motion";
import {
  Code2,
  Rocket,
  Database,
  Globe,
  Smartphone,
  Server,
  GitBranch,
  Cpu,
  Cloud,
  Lock,
  Gauge,
  Paintbrush,
  Bug,
  Monitor,
  Github,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Globe,
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "API Integration & Error Handling", level: 80 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 85 },
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: [
      { name: "Node.js", level: 90 },
      { name: "File Handling (Uploads,Manage,Process)", level: 85 },
      { name: "Express.js", level: 88 },
      { name: "Error Handling & Logging", level: 85 },
      { name: "REST APIs", level: 95 },
      { name: "Authentication (JWT, OAuth)", level: 85 },
    ],
  },
  {
    title: "Database & Storage",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: 88 },
      { name: "MongoDB", level: 85 },
      { name: "Redis", level: 78 },
      { name: "Appwrite", level: 82 },
      { name: "Database Schema Design", level: 85 },
      { name: "MongoDB Aggregation", level: 80 },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    skills: [
      { name: "Cloud Fundamentals (AWS Basics)", level: 70 },
      { name: "Docker", level: 85 },
      { name: "Environment Variables & Secrets", level: 90 },
      { name: "Render", level: 85 },
      { name: "Vercel/Netlify", level: 90 },
      { name: "Linux (CLI & Server Basics)", level: 80 },
    ],
  },
];

const additionalSkills = [
  { name: "Git", icon: GitBranch },
  { name: "Github", icon: Github },
  { name: "UI/UX Design", icon: Paintbrush },
  { name: "Responsive Design", icon: Smartphone },
  { name: "Performance", icon: Gauge },
  { name: "Security", icon: Lock },
  { name: "Production Debugging", icon: Bug },
  { name: "Microservices", icon: Cpu },
];

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that your team will love",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimized applications that load fast and run smooth",
  },
  {
    icon: Monitor,
    title: "Frontend Development",
    description:
      "Creating intuitive interfaces that users enjoy And Error free api integration",
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Building REST APIs and structuring clean, maintainable backend code.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const categoryVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut" as const,
    },
  }),
};

const skillBarVariants = {
  hidden: { width: 0 },
  visible: (level: number) => ({
    width: `${level}%`,
    transition: {
      duration: 1.2,
      ease: "easeOut" as const,
    },
  }),
};

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
            About Me
          </span>
          <h2 className="section-heading">
            Turning Ideas Into{" "}
            <span className="gradient-text">Reality</span>
          </h2>
          <p className="section-subheading mx-auto">
            I specialize in building modern web applications that solve
            real-world problems using clean and scalable code.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {highlights.map((item) => (
            <motion.div
              key={item.title}
              className="glass-card rounded-xl p-6 group hover:border-primary/50 transition-all duration-300"
              variants={itemVariants}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px hsl(190 100% 50% / 0.15)",
                borderColor: "hsl(190 100% 50% / 0.5)",
              }}
            >
              <motion.div
                className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <item.icon className="w-6 h-6 text-primary" />
              </motion.div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              My <span className="gradient-text">Skills</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit built over years of hands-on
              experience across the full development stack
            </p>
          </motion.div>

          {/* Skill Categories with Progress Bars */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                custom={categoryIndex}
                variants={categoryVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="glass-card rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-all duration-500"
                whileHover={{ scale: 1.02 }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center"
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <category.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <h4 className="text-lg font-semibold">
                    {category.title}
                  </h4>
                </div>

                {/* Skills with Progress Bars */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: skillIndex * 0.1 + categoryIndex * 0.2,
                      }}
                    >
                      <div className="flex justify-between mb-1.5">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <motion.span
                          className="text-xs text-muted-foreground font-mono"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            delay:
                              skillIndex * 0.1 + categoryIndex * 0.2 + 0.5,
                          }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
                        <motion.div
                          custom={skill.level}
                          variants={skillBarVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          className="h-full rounded-full bg-gradient-to-r from-primary via-primary to-accent relative"
                          style={{
                            boxShadow:
                              "0 0 10px hsl(var(--primary) / 0.5)",
                          }}
                        >
                          {/* Shimmer effect on progress bar */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            animate={{ x: ["-100%", "200%"] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatDelay: 3,
                              ease: "easeInOut",
                            }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills - Floating Badges */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-muted-foreground">
              Also Proficient In
            </h4>
            <div className="flex flex-wrap justify-center gap-4">
              {additionalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.08,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{
                    scale: 1.15,
                    y: -8,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.3 },
                  }}
                  className="glass-card px-5 py-3 rounded-xl flex items-center gap-2 cursor-pointer group hover:border-primary/50"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <skill.icon className="w-4 h-4 text-primary group-hover:text-accent transition-colors" />
                  </motion.div>
                  <span className="text-sm font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Animated Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              { value: "12+", label: "Tools & Libraries Used" },
              { value: "10+", label: "Personal Projects" },
              { value: "∞", label: "Learning Mindset" },
              { value: "10+", label: "Tools & Libraries Used" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="glass-card rounded-xl p-6 text-center group hover:border-primary/50 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.span
                  className="text-3xl md:text-4xl font-bold gradient-text block mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.15 + 0.3,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  {stat.value}
                </motion.span>
                <span className="text-sm text-muted-foreground">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
