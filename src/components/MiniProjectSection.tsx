import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const smallProjects = [
  {
    title: "Calculator",
    description: "A simple calculator made using html css javascript",
    tags: ["Html", "CSS", "Javascript"],
    githubUrl: "https://github.com/Prasadbarhate8080/Calculator",
    liveUrl: "/",
  },
  {
    title: "Currency Converter",
    description:
      "A currency converter made using the react javascript and currencyApi",
    tags: ["JavaScript", "React", "CurrencyApi"],
    liveUrl: "/",
    githubUrl: "https://github.com/Prasadbarhate8080/currency_converter",
  },
  {
    title: "Movie Search App",
    description: "A movie search app made using the html css js",
    tags: ["Html", "CSS", "Javascript"],
    liveUrl: "/",
    githubUrl: "https://github.com/Prasadbarhate8080/movie_search_app",
  },
  {
    title: "Password Generator",
    description: "A Password generator made using react and javascript",
    tags: ["React", "Javascript", "Html", "CSS"],
    liveUrl: "/",
    githubUrl: "https://github.com/Prasadbarhate8080/password_generator",
  },
  {
    title: "Whether App",
    description: "A Whether app made using react and javascript",
    tags: ["React", "Javascript", "Html", "CSS"],
    liveUrl: "/",
    githubUrl: "https://github.com/Prasadbarhate8080/react_wheather_app",
  },
  {
    title: "Todo List",
    description:
      "A Todo list application made using react javascript and localstorage",
    tags: ["React", "JavaScript", "LocalStorage"],
    liveUrl: "/",
    githubUrl: "https://github.com/Prasadbarhate8080/react_todo_list",
  },
];

const ProjectCard = ({
  project,
}: {
  project: (typeof smallProjects)[0];
}) => (
  <Card
    className="
  group flex-shrink-0
  w-[240px] sm:w-[280px] md:w-[320px]
  bg-card/50 backdrop-blur-sm
  border-border/50
  hover:border-primary/30
  transition-all duration-300
"
  >
    <CardContent className="p-6">
      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-mono px-2 py-1 rounded bg-secondary text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </CardContent>
    <CardFooter className="px-6 pb-6 pt-0 gap-3">
      <Button
        variant="ghost"
        size="sm"
        asChild
        className="text-muted-foreground hover:text-primary"
      >
        <a
          href={project.liveUrl}
          rel="noopener noreferrer"
        >
          <ExternalLink className="w-4 h-4 mr-1" />
          Demo
        </a>
      </Button>
      <Button
        variant="ghost"
        size="sm"
        asChild
        className="text-muted-foreground hover:text-primary"
      >
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="w-4 h-4 mr-1" />
          Code
        </a>
      </Button>
    </CardFooter>
  </Card>
);

const MarqueeRow = ({
  projects,
  direction = "left",
  duration = 15,
}: {
  projects: typeof smallProjects;
  direction?: "left" | "right";
  duration?: number;
}) => {
  const duplicatedProjects = [...projects, ...projects];

  return (
    <div className="relative overflow-hidden py-4">
      {/* Gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-4 sm:gap-6"
        animate={{
          x:
            direction === "left"
              ? [0, -projects.length * 260]
              : [-projects.length * 260, 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration,
            ease: "linear",
          },
        }}
        style={{ willChange: "transform" }}
      >
        {duplicatedProjects.map((project, index) => (
          <ProjectCard
            key={`${project.title}-${index}`}
            project={project}
          />
        ))}
      </motion.div>
    </div>
  );
};


export const MiniProjectsSection = () => {
  // Split projects into two rows
  const row1Projects = smallProjects.slice(0, 3);
  const row2Projects = smallProjects.slice(3);

  return (
    <section
      id="small-projects"
      className="py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary)_/_0.05)_0%,_transparent_60%)]" />

      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 px-6">
          <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
            Other Projects
          </span>
          <h2 className="section-heading">
            Small <span className="gradient-text">Experiments</span>
          </h2>
          <p className="section-subheading mx-auto">
            Quick builds and experiments that showcase specific skills and
            creative problem-solving.
          </p>
        </div>

        {/* Marquee Rows */}
        <div className="space-y-4">
          <MarqueeRow
            projects={row1Projects}
            direction="left"
            duration={30}
          />
          <MarqueeRow
            projects={row2Projects}
            direction="right"
            duration={30}
          />
        </div>
      </div>
    </section>
  );
};
