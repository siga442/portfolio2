import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import { cvData } from "@/data/cv-data";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-bg dark:bg-slate-900 pt-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary/5 to-transparent rounded-full"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-accent/5 to-transparent rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Professional photo placeholder */}
          <div className="mb-8 animate-bounce">
            <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full mx-auto flex items-center justify-center shadow-xl ring-4 ring-white/20">
              <User className="text-white text-4xl h-16 w-16" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-secondary dark:text-white mb-6 animate-fade-in">
            {cvData.personal.name}
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 animate-fade-in-delay">
            {cvData.personal.title} | {cvData.personal.experience}
          </p>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-12 animate-fade-in-delay-2">
            {cvData.about}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3">
            <Button 
              onClick={() => scrollToSection("projects")}
              className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-semibold"
            >
              View Projects
            </Button>
            <Button 
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-semibold"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
