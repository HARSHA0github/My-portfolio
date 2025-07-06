import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-5"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Let's Build Something <span className="hero-gradient bg-clip-text text-transparent">Amazing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to collaborate on your next innovative project? I'm always excited to discuss new opportunities and challenges.
          </p>
        </div>

        <Card className="border-0 bg-gradient-to-br from-card via-card/95 to-card/90 backdrop-blur-sm shadow-2xl animate-scale-in">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Get In Touch</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you're looking to build a cutting-edge AI solution, develop a robust web application, 
                  or optimize system performance, I'd love to hear about your project.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>yharshavardhanbabu@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-5 h-5 text-primary flex items-center justify-center text-sm font-bold">📍</span>
                    <span>7-118/7, Srirangapatnam, East Godavari District, Korukonda Mandalam, Andhra Pradesh, India - 533289</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-5 h-5 text-primary flex items-center justify-center text-sm font-bold">⏰</span>
                    <span>Available for new projects</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-foreground">Connect With Me</h4>
                <div className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start gap-3 h-12 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
                  >
                    <Mail className="w-5 h-5" />
                    Send Email
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full justify-start gap-3 h-12 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
                  >
                    <Github className="w-5 h-5" />
                    View GitHub
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full justify-start gap-3 h-12 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
                  >
                    <Linkedin className="w-5 h-5" />
                    Connect on LinkedIn
                  </Button>
                </div>
                
                <div className="pt-4">
                  <Button 
                    variant="hero" 
                    size="lg"
                    className="w-full h-14 text-lg font-semibold"
                  >
                    Schedule a Call
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground">
            © 2025 Harsha Vardhan. Built with React, TypeScript, and lots of ☕
          </p>
        </div>
      </div>
    </section>
  );
};