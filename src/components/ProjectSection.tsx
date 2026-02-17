import { ExternalLink, Github, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { VideoModal } from "./VideoModal";

const projects = [
  {
    title: "Anonymous Feedback App",
    description:
      "A full-stack anonymous feedback platform where users can send and receive honest messages without revealing their identity. Includes secure authentication, real-time message handling, and a clean, responsive dashboard for managing feedback.",
    tags: [
      "Next.js",
      "MongoDB",
      "NextAuth",
      "Tailwind CSS",
      "Shadcn",
      "Typescript",
    ],
    image: "/messaging_app_cover.png",
    liveUrl: "https://feedback-app-random.vercel.app/",
    githubUrl: "https://github.com/Prasadbarhate8080/feedback_app",
    featured: true,
    videoUrl: "https://ik.imagekit.io/yqu14knh8p/full%20stack%20app.mp4",
  },
  {
    title: "Blogging Platform",
    description:
      "A full-stack blogging platform where users can read, write, and publish blogs with a clean editor and responsive design. Includes user authentication, category-based browsing, and SEO-friendly pages for better content visibility.",
    tags: [
      "React.js",
      "AppWrite",
      "Tailwind CSS",
      "RTE(TinyMCE)",
      "React-hook-form",
    ],
    image: "/react_blog_app_cover.png",
    liveUrl: "https://reactblogapp-azure.vercel.app/",
    githubUrl: "https://github.com/Prasadbarhate8080/react-blog-app",
    featured: true,
    videoUrl: "https://ik.imagekit.io/yqu14knh8p/react_blog_app.mp4",
  },
  {
    title: "Reels Pro",
    description:
      "A full-stack short video (Reels) platform where users can upload, stream, and explore vertical videos. Features include creator-style upload flow, optimized video delivery, responsive reel feed, and secure backend APIs.",
    tags: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "ImageKit",
      "NextAuth",
      "Tailwind CSS",
    ],
    image: "/reels_pro_cover.png",
    liveUrl: "https://reels-pro-teal.vercel.app/",
    githubUrl: "https://github.com/Prasadbarhate8080/reels-pro",
    featured: true,
    videoUrl: "https://ik.imagekit.io/yqu14knh8p/reels_pro.mp4",
  },

  {
    title: "Train Ticket Booking App",
    description:
      "An online train ticket booking application that allows users to search trains, check seat availability, and book tickets seamlessly. Includes user authentication, booking history, fare details, and a responsive interface for a smooth travel experience.",
    tags: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Tailwind",
      "Express.js",
      "Redux Toolkit",
    ],
    image: "/train_ticket_cover.png",
    liveUrl: "https://easytrain.vercel.app/",
    githubUrl:
      "https://github.com/Prasadbarhate8080/Train-ticket-booking-system-frontend",
    featured: false,
    videoUrl:
      "https://ik.imagekit.io/n9fktxemx/train_ticket_booking.mp4?tr=orig",
  },
];

export const ProjectsSection = () => {
  const [open, setOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const playVideo = (url: string) => {
    setVideoUrl(url);
    setOpen(true);
  };
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(265_80%_60%_/_0.08)_0%,_transparent_70%)]" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="section-heading">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subheading mx-auto">
            A selection of projects that showcase my skills and experience
            in building modern web applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="project-card group ">
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="hero" size="lg" asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="heroOutline" size="lg" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
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
              </div>
              <div className="flex justify-end p-2 mt-auto">
                <Button
                  variant={"hero"}
                  className="flex"
                  onClick={() =>
                    playVideo(
                      project.videoUrl,
                    )
                  }
                >
                  <Video /> Know More
                </Button>
              </div>
            </div>
          ))}
        </div>
        {/* View More */}
        <div className="text-center mt-12">
          <Button variant="heroOutline" size="xl" asChild>
            <a
              href="https://github.com/prasadbarhate8080"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 mr-2" />
              View All on GitHub
            </a>
          </Button>
        </div>
      </div>
      <VideoModal
        isOpen={open}
        videoUrl={videoUrl}
        onClose={() => setOpen(false)}
      />
    </section>
  );
};
