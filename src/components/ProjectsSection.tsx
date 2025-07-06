import { ProjectCard } from "./ProjectCard";
import aiProjectImage from "@/assets/ai-project.jpg";
import webProjectImage from "@/assets/web-project.jpg";
import cppProjectImage from "@/assets/cpp-project.jpg";

export const ProjectsSection = () => {
  const pythonProjects = [
    {
      title: "AI-Powered Trading Bot",
      description: "Advanced trading algorithm using machine learning to predict market trends with 85% accuracy. Features real-time data processing, risk management, and automated portfolio optimization.",
      image: aiProjectImage,
      technologies: ["Python", "TensorFlow", "Pandas", "NumPy", "FastAPI", "PostgreSQL"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      title: "Computer Vision Pipeline",
      description: "Real-time object detection and tracking system for industrial automation. Processes 60 FPS video streams with custom YOLO model optimization.",
      image: aiProjectImage,
      technologies: ["Python", "OpenCV", "PyTorch", "CUDA", "Docker", "AWS"],
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  const webProjects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with microservices architecture, real-time inventory management, and integrated payment processing.",
      image: webProjectImage,
      technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Stripe", "Docker"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      title: "Healthcare Dashboard",
      description: "Medical data visualization platform with HIPAA compliance, real-time patient monitoring, and predictive analytics for healthcare providers.",
      image: webProjectImage,
      technologies: ["Vue.js", "Python", "FastAPI", "MongoDB", "Chart.js", "WebSocket"],
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  const systemProjects = [
    {
      title: "High-Performance Database Engine",
      description: "Custom database engine written in C++ with B+ tree indexing, transaction management, and query optimization achieving 10x faster queries.",
      image: cppProjectImage,
      technologies: ["C++", "CMake", "GTest", "Valgrind", "Linux", "Assembly"],
      githubUrl: "#",
      featured: true
    },
    {
      title: "Distributed Computing Framework",
      description: "Parallel processing framework for large-scale data analysis with automatic load balancing and fault tolerance across multiple nodes.",
      image: cppProjectImage,
      technologies: ["C++", "MPI", "OpenMP", "Protocol Buffers", "gRPC", "Docker"],
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-background relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Featured <span className="hero-gradient bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of innovative solutions spanning AI/ML, web development, and system programming. 
            Each project demonstrates cutting-edge technology and problem-solving expertise.
          </p>
        </div>

        {/* Python & AI/ML Projects */}
        <div className="mb-16 animate-slide-in-left">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-3xl font-bold text-foreground">Python & AI/ML</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-primary to-transparent"></div>
            <span className="text-sm text-muted-foreground bg-primary/10 px-3 py-1 rounded-full">2025 Innovations</span>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {pythonProjects.map((project, index) => (
              <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>

        {/* Web Development Projects */}
        <div className="mb-16 animate-slide-in-right">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-3xl font-bold text-foreground">Full-Stack Web</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-primary to-transparent"></div>
            <span className="text-sm text-muted-foreground bg-accent/10 px-3 py-1 rounded-full">Modern Stack</span>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {webProjects.map((project, index) => (
              <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>

        {/* System Programming Projects */}
        <div className="animate-slide-in-left">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-3xl font-bold text-foreground">System Programming</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-primary to-transparent"></div>
            <span className="text-sm text-muted-foreground bg-destructive/10 px-3 py-1 rounded-full">C/C++</span>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {systemProjects.map((project, index) => (
              <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};