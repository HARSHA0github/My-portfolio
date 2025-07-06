import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Home, User, Award, Briefcase, Mail } from "lucide-react";

export const Navigation = () => {
  const [isHovered, setIsHovered] = useState(false);

  const navItems = [
    { icon: Home, label: "Home", href: "#home" },
    { icon: User, label: "About", href: "#hero" },
    { icon: Briefcase, label: "Projects", href: "#projects" },
    { icon: Award, label: "Certifications", href: "#certifications" },
    { icon: Mail, label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`flex items-center gap-2 bg-background/80 backdrop-blur-md border border-border/50 rounded-full px-6 py-3 transition-all duration-300 ${
        isHovered ? 'scale-105 shadow-lg' : 'scale-100'
      }`}>
        {navItems.map((item, index) => (
          <Button
            key={item.label}
            variant="ghost"
            size="sm"
            className={`transition-all duration-300 ${
              isHovered 
                ? 'opacity-100 px-4 py-2' 
                : index === 0 
                  ? 'opacity-100 px-2 py-2' 
                  : 'opacity-0 w-0 px-0 py-2 overflow-hidden'
            }`}
            onClick={() => scrollToSection(item.href)}
          >
            <item.icon className="h-4 w-4" />
            {(isHovered || index === 0) && (
              <span className={`ml-2 transition-all duration-300 ${
                isHovered ? 'opacity-100' : index === 0 ? 'opacity-0 w-0 overflow-hidden' : 'opacity-0'
              }`}>
                {item.label}
              </span>
            )}
          </Button>
        ))}
      </div>
    </nav>
  );
};