import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import { SectionLink } from "./SectionLink";
import { useScrollProgress } from "@/hooks/use-scroll-progress";

export const HeroSection = () => {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();

  // Scroll-driven hero transformation
  const p = progress;
  const fadeStart = 0.08;
  const fadeEnd = 0.82;
  const fadeProgress = Math.min(Math.max((p - fadeStart) / (fadeEnd - fadeStart), 0), 1);
  const contentOpacity = 1 - fadeProgress;
  const nameScale = 1 - fadeProgress * 0.18;
  const nameY = -fadeProgress * 110;
  const introY = -fadeProgress * 52;
  const cardsY = 120 - Math.min(p * 2, 1) * 120;
  const cardsOpacity = Math.min(p * 2.4, 1);
  const glowScale = 1 + p * 0.5;

  return (
    <div ref={ref} className="relative h-[190vh]" id="hero">
      <section className="sticky top-0 z-20 h-screen overflow-hidden bg-hero-gradient flex flex-col justify-center pt-20 sm:pt-24 md:pt-28">
        {/* soft warm blooms */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute -top-24 left-1/2 -translate-x-1/2 w-[46rem] h-[46rem] rounded-full blur-3xl bg-peach-gradient opacity-70 animate-float"
            style={{ transform: `translate(-50%, ${p * -80}px) scale(${glowScale})` }}
          />
          <div className="absolute bottom-0 -left-20 w-[28rem] h-[28rem] rounded-full blur-3xl bg-accent/15 animate-float-delayed" />
          <div className="absolute top-1/3 -right-24 w-[30rem] h-[30rem] rounded-full blur-3xl bg-sage/15 animate-float" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-8 sm:pt-10 md:pt-12">
          <div
            className="max-w-5xl mx-auto text-center"
            style={{
              opacity: contentOpacity,
              transform: `translateY(${fadeProgress * -18}px)`,
              willChange: "opacity, transform",
            }}
          >
            <h1
              className="font-display text-[4.1rem] leading-[0.82] sm:text-7xl md:text-[7.5rem] text-foreground animate-fade-up"
              style={{
                transform: `translateY(${nameY}px) scale(${nameScale})`,
                willChange: "transform",
              }}
            >
              <span className="block italic font-light">Cheryl</span>
              <span className="block text-gradient">Biju</span>
            </h1>

            <div
              style={{ transform: `translateY(${introY}px)` }}
              className="mt-6 sm:mt-8"
            >
              <p className="text-[0.68rem] sm:text-sm md:text-base uppercase tracking-[0.18em] sm:tracking-[0.32em] text-muted-foreground">
                Data Scientist &nbsp;·&nbsp; MS Data Science, Michigan
              </p>
              <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto font-light leading-relaxed px-2 sm:px-0">
                I build forecasting models, pricing systems and the pipelines that keep
                them fed. Previously at Zoox, previously at Emerson.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-10 w-full px-2 sm:px-0">
                <Button variant="hero" size="lg" asChild className="w-full sm:w-auto">
                  <SectionLink to="projects">See my work</SectionLink>
                </Button>
                <Button variant="heroOutline" size="lg" asChild className="w-full sm:w-auto">
                  <SectionLink to="contact">Say hello</SectionLink>
                </Button>
              </div>
            </div>

            {/* Scroll-revealed stat cards */}
            <div
              className="hidden md:grid grid-cols-3 gap-4 mt-14"
              style={{ opacity: cardsOpacity, transform: `translateY(${cardsY}px)` }}
            >
              {[
                { k: "18%", v: "Revenue lift from a dynamic pricing engine" },
                { k: "10K+", v: "Manufacturing records checked every month" },
                { k: "4", v: "Departments on one analytics platform" },
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

        <div
          className="absolute bottom-16 left-1/2 -translate-x-1/2 animate-bounce"
          style={{ opacity: contentOpacity }}
        >
          <SectionLink to="about" aria-label="Scroll to about" className="text-muted-foreground hover:text-accent transition-colors">
            <ArrowDown size={20} />
          </SectionLink>
        </div>
      </section>
    </div>
  );
};
