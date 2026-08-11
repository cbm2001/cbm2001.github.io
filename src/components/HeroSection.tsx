import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import { useScrollProgress } from "@/hooks/use-scroll-progress";

const marquee = ["Machine Learning", "Agentic AI", "RAG Pipelines", "Data Storytelling", "MLOps"];

export const HeroSection = () => {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();

  // Scroll-driven hero transformation
  const p = progress;
  const nameScale = 1 - p * 0.28;
  const nameY = -p * 60;
  const introOpacity = Math.max(1 - p * 2.2, 0);
  const introY = -p * 40;
  const cardsY = 120 - Math.min(p * 2, 1) * 120;
  const cardsOpacity = Math.min(p * 2.4, 1);
  const glowScale = 1 + p * 0.5;

  return (
    <div ref={ref} className="relative h-[220vh]" id="hero">
      <section className="sticky top-0 h-screen overflow-hidden bg-hero-gradient flex flex-col justify-center">
        {/* soft warm blooms */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute -top-24 left-1/2 -translate-x-1/2 w-[46rem] h-[46rem] rounded-full blur-3xl bg-peach-gradient opacity-70 animate-float"
            style={{ transform: `translate(-50%, ${p * -80}px) scale(${glowScale})` }}
          />
          <div className="absolute bottom-0 -left-20 w-[28rem] h-[28rem] rounded-full blur-3xl bg-accent/15 animate-float-delayed" />
          <div className="absolute top-1/3 -right-24 w-[30rem] h-[30rem] rounded-full blur-3xl bg-sage/15 animate-float" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <p
              className="eyebrow mb-8 animate-fade-in"
              style={{ opacity: introOpacity, transform: `translateY(${introY}px)` }}
            >
              Portfolio — 2026
            </p>

            <h1
              className="font-display text-6xl sm:text-7xl md:text-[7.5rem] leading-[0.9] text-foreground animate-fade-up"
              style={{ transform: `translateY(${nameY}px) scale(${nameScale})` }}
            >
              <span className="block italic font-light">Cheryl</span>
              <span className="block text-gradient">Biju</span>
            </h1>

            <div
              style={{ opacity: introOpacity, transform: `translateY(${introY}px)` }}
              className="mt-8"
            >
              <p className="text-sm md:text-base uppercase tracking-[0.32em] text-muted-foreground">
                Data Scientist &nbsp;·&nbsp; Machine Learning Engineer
              </p>
              <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl mx-auto font-light leading-relaxed">
                Turning complex data into clear, elegant decisions — and building
                intelligent systems that quietly do the heavy lifting.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
                <Button variant="hero" size="lg" asChild>
                  <a href="#projects">View My Work</a>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <a href="#contact">Contact Me</a>
                </Button>
              </div>
            </div>

            {/* Scroll-revealed stat cards */}
            <div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-14"
              style={{ opacity: cardsOpacity, transform: `translateY(${cardsY}px)` }}
            >
              {[
                { k: "2+", v: "Years building AI in production" },
                { k: "50K+", v: "Quality documents made searchable" },
                { k: "18%", v: "Procurement cost savings delivered" },
              ].map((s) => (
                <div
                  key={s.k}
                  className="rounded-3xl bg-card/70 backdrop-blur-sm border border-border/60 px-6 py-7 text-left shadow-soft"
                >
                  <p className="font-display text-4xl text-accent">{s.k}</p>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Marquee band */}
        <div
          className="absolute bottom-0 left-0 right-0 border-t border-border/60 bg-background/50 backdrop-blur-sm py-4 overflow-hidden"
          style={{ opacity: Math.min(p * 3, 1) }}
        >
          <div className="flex items-center justify-center gap-8 flex-wrap px-6">
            {marquee.map((m) => (
              <span key={m} className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                {m}
              </span>
            ))}
          </div>
        </div>

        <div
          className="absolute bottom-16 left-1/2 -translate-x-1/2 animate-bounce"
          style={{ opacity: introOpacity }}
        >
          <a href="#about" aria-label="Scroll to about" className="text-muted-foreground hover:text-accent transition-colors">
            <ArrowDown size={20} />
          </a>
        </div>
      </section>
    </div>
  );
};
