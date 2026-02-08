import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const smallProjects = [
  {
    title: "Weather Widget",
    description:
      "A clean weather app with location-based forecasts and animated icons.",
    tags: ["React", "API", "CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Markdown Previewer",
    description:
      "Real-time markdown editor with syntax highlighting and export options.",
    tags: ["TypeScript", "React", "Markdown"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Color Palette Generator",
    description:
      "Generate beautiful color schemes with export to CSS, Tailwind, and SCSS.",
    tags: ["React", "Color Theory", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Pomodoro Timer",
    description:
      "Productivity timer with customizable intervals and sound notifications.",
    tags: ["React", "Hooks", "Audio API"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Quote Generator",
    description:
      "Random inspirational quotes with share functionality and favorites.",
    tags: ["React", "API", "LocalStorage"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Expense Tracker",
    description:
      "Simple expense tracking with charts and category breakdowns.",
    tags: ["React", "Chart.js", "Firebase"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export const MiniProjectsSection = () => {
  return (
    <section id="small-projects" className="py-24 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary)_/_0.05)_0%,_transparent_60%)]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
            Mini Projects
          </span>
          <h2 className="section-heading">
            Small <span className="gradient-text">Experiments</span>
          </h2>
          <p className="section-subheading mx-auto">
            Quick builds and experiments that showcase specific skills and
            creative problem-solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {smallProjects.map((project) => (
            <Card
              key={project.title}
              className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
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
                    target="_blank"
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
          ))}
        </div>
      </div>
    </section>
  );
};
