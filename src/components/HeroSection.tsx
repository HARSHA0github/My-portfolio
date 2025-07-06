import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";
export const HeroSection = ({ id }: { id?: string }) => {
  return <section id={id} className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  }}>
      {/* Animated background elements */}
      <div className="absolute inset-0 hero-gradient opacity-80"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 bg-indigo-950">
        {[...Array(6)].map((_, i) => <div key={i} className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${i * 0.5}s`,
        animationDuration: `${3 + Math.random() * 2}s`
      }} />)}
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl animate-fade-in-up">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-md rounded-full text-sm font-medium text-primary-foreground border border-primary/30 animate-scale-in">
            Full Stack Developer
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
          <span className="hero-gradient bg-clip-text text-transparent">Harsha Vardhan</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Crafting innovative solutions with <span className="text-primary-glow font-semibold">Python</span>, <span className="text-primary-glow font-semibold">AI/ML</span>, and modern web technologies. 
          Building the future, one line of code at a time.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6 h-auto animate-glow-pulse" onClick={() => document.getElementById('projects')?.scrollIntoView({
          behavior: 'smooth'
        })}>
            View My Work
          </Button>
          
          <Button variant="glass" size="lg" className="text-lg px-8 py-6 h-auto" onClick={() => document.getElementById('contact')?.scrollIntoView({
          behavior: 'smooth'
        })}>
            Get In Touch
          </Button>
        </div>
        
        <div className="mt-12 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>;
};