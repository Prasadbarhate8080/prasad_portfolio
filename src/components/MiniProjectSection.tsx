import { Github } from "lucide-react";
import { Button } from "./ui/button";

const miniProjects = [
  {
    title: "Infinite Scroll Demo",
    description:
      "Infinite scrolling using Intersection Observer with loading states.",
    tags: ["React", "API"],
    githubUrl: "#",
  },
  {
    title: "Form Validation",
    description:
      "Reusable form validation with error handling and accessibility.",
    tags: ["React", "TypeScript"],
    githubUrl: "#",
  },
  {
    title: "File Upload API",
    description:
      "File upload service with validation and progress tracking.",
    tags: ["Node.js", "Multer"],
    githubUrl: "#",
  },
  {
    title: "Dark Mode Toggle",
    description: "Theme toggle with persistence using localStorage.",
    tags: ["React", "Tailwind"],
    githubUrl: "#",
  },
];


export default function MiniProjectsSection() {
  return (
    <section className="mt-20">
      <h2 className="text-2xl font-bold mb-2">Mini Projects</h2>
      <p className="text-sm text-muted-foreground mb-8">
        Small experiments and practice projects to strengthen fundamentals.
      </p>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {miniProjects.map((project, index) => (
          <div
            key={index}
            className="group rounded-xl border border-border bg-background p-5
                       hover:shadow-lg transition-all hover:-translate-y-1"
          >
            <h3 className="font-semibold text-lg mb-2">{project.title}</h3>

            <p className="text-sm text-muted-foreground mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 rounded-md bg-muted"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={project.githubUrl}
              target="_blank"
              className="inline-flex items-center gap-2 text-sm font-medium
                         text-primary hover:underline"
            >
              <Github size={16} />
              View Code
            </a>
          </div>
        ))}
      </div>
      
    </section>
  );
}
