import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  status: "active" | "expired" | "pending";
  description: string;
  skills: string[];
}

export const CertificationsSection = () => {
  const certifications: Certification[] = [
    {
      title: "AWS Certified Solutions Architect - Professional",
      issuer: "Amazon Web Services",
      date: "Dec 2024",
      status: "active",
      description: "Advanced cloud architecture design and implementation with deep expertise in scalable, fault-tolerant systems.",
      skills: ["Cloud Architecture", "Microservices", "DevOps", "Security"]
    },
    {
      title: "Google Professional Machine Learning Engineer",
      issuer: "Google Cloud",
      date: "Nov 2024",
      status: "active",
      description: "Designing and implementing ML solutions using Google Cloud AI/ML services with production-grade systems.",
      skills: ["TensorFlow", "Vertex AI", "MLOps", "BigQuery ML"]
    },
    {
      title: "Meta Certified Full Stack Developer",
      issuer: "Meta",
      date: "Oct 2024",
      status: "active",
      description: "Comprehensive full-stack development certification covering modern frameworks and best practices.",
      skills: ["React", "Node.js", "GraphQL", "Database Design"]
    },
    {
      title: "NVIDIA Deep Learning Institute - AI Fundamentals",
      issuer: "NVIDIA",
      date: "Sep 2024",
      status: "active",
      description: "Hands-on training in deep learning frameworks, GPU programming, and AI model optimization.",
      skills: ["CUDA", "PyTorch", "Model Optimization", "GPU Computing"]
    },
    {
      title: "Kubernetes Certified Application Developer",
      issuer: "Cloud Native Computing Foundation",
      date: "Aug 2024",
      status: "active",
      description: "Container orchestration and cloud-native application development with Kubernetes ecosystem.",
      skills: ["Docker", "Kubernetes", "Helm", "CI/CD"]
    },
    {
      title: "Python Institute PCPP1 - Advanced Programming",
      issuer: "Python Institute",
      date: "Jul 2024",
      status: "active",
      description: "Advanced Python programming concepts including design patterns, testing, and performance optimization.",
      skills: ["Python", "Design Patterns", "Testing", "Performance"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-success/10 text-success border-success/20";
      case "expired":
        return "bg-destructive/10 text-destructive border-destructive/20";
      case "pending":
        return "bg-primary/10 text-primary border-primary/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="certifications" className="py-20 px-6 bg-muted/30 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Professional <span className="hero-gradient bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Continuously expanding expertise through industry-recognized certifications from leading technology companies and organizations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              className="group hover:scale-105 transition-all duration-500 hover:shadow-xl border-0 bg-gradient-to-br from-card via-card/95 to-card/90 backdrop-blur-sm animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-3">
                  <Badge className={`${getStatusColor(cert.status)} transition-all duration-300`}>
                    {cert.status.charAt(0).toUpperCase() + cert.status.slice(1)}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{cert.date}</span>
                </div>
                <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                  {cert.title}
                </CardTitle>
                <p className="text-primary font-semibold text-sm">{cert.issuer}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {cert.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground">Key Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium border border-primary/20 transition-all duration-300 hover:bg-primary/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground italic">
            🏆 Pursuing continuous learning and staying current with emerging technologies
          </p>
        </div>
      </div>
    </section>
  );
};