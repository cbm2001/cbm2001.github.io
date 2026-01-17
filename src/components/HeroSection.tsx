import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-accent/5 to-transparent rounded-full" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="inline-block px-4 py-2 rounded-full bg-secondary text-muted-foreground text-sm font-medium mb-6">
              👋 Hello, I'm
            </span>
          </div>

          {/* Name */}
          <h1
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Cheryl{" "}
            <span className="text-gradient">Biju</span>
          </h1>

          {/* Title */}
          <p
            className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-up font-light"
            style={{ animationDelay: "0.3s" }}
          >
            Data Scientist & Machine Learning Engineer
          </p>

          {/* Description */}
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            Passionate about transforming complex data into actionable insights and building 
            intelligent systems that solve real-world problems.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};
