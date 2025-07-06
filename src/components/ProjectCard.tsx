import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const ProjectCard = ({ 
  title, 
  description, 
  image, 
  technologies, 
  githubUrl, 
  liveUrl, 
  featured = false 
}: ProjectCardProps) => {
  return (
    <Card className={`group overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl border-0 bg-gradient-to-br from-card via-card/95 to-card/90 backdrop-blur-sm ${featured ? 'ring-2 ring-primary/50 shadow-lg shadow-primary/20' : ''}`}>
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {featured && (
          <div className="absolute top-4 right-4">
            <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
              Featured
            </span>
          </div>
        )}
      </div>
      
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span 
              key={tech}
              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20 transition-all duration-300 hover:bg-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3 pt-2">
          {githubUrl && (
            <Button variant="outline" size="sm" className="flex-1 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              <Github className="w-4 h-4" />
              Code
            </Button>
          )}
          {liveUrl && (
            <Button variant="default" size="sm" className="flex-1 hover:scale-105 transition-all duration-300">
              Live Demo
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};