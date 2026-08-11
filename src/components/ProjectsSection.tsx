import { ExternalLink, Github, Brain, TrendingUp, Activity, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import { Reveal } from "./Reveal";

const projects = [
  {
    title: "Healthcare Data Standardization",
    description:
      "Worked with a Taiwanese healthcare startup on an LLM-powered pipeline that maps different hospitals' lab terminology onto one shared vocabulary, so the data can actually be compared.",
    tags: ["Python", "LLMs", "Pipelines", "Healthcare"],
    icon: Activity,
    github: "https://github.com/cbm2001",
  },
  {
    title: "Podcast Recommendations",
    description:
      "A hybrid recommender over 1.1M podcast transcripts combining TF-IDF, BERT embeddings and metadata. Compared unsupervised ranking against learning-to-rank; best setup hit nDCG@5 above 0.60.",
    tags: ["BERT", "TF-IDF", "Learning to Rank"],
    icon: Brain,
    github: "https://github.com/cbm2001",
  },
  {
    title: "Dynamic Pricing Engine",
    description:
      "A pricing model for ride-sharing and retail using Random Forest and gradient boosting, plus a demand elasticity layer for weather and time. Simulated A/B tests showed an 18% revenue lift.",
    tags: ["Python", "Ensembles", "A/B Testing"],
    icon: TrendingUp,
    github: "https://github.com/cbm2001/Price-Optimization",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-36 bg-warm-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <span className="eyebrow">Recent work</span>
              <h2 className="font-display text-4xl md:text-6xl text-foreground mt-5 leading-[1.05]">
                Selected <span className="italic text-gradient">Projects</span>
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm font-light">
              A few things I've built recently, mostly out of curiosity.
            </p>
          </Reveal>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, projectIndex) => (
              <Reveal key={project.title} delay={projectIndex * 130}>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative h-full rounded-[2rem] bg-card-gradient border border-border/70 hover:border-accent/40 shadow-soft hover:shadow-medium transition-all duration-500 hover:-translate-y-2 overflow-hidden cursor-pointer block"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-peach-gradient opacity-0 group-hover:opacity-60 transition-opacity duration-500" />

                <div className="relative p-6 h-full flex flex-col">
                  {/* Header with icon and arrow */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-14 h-14 rounded-full border border-accent/30 flex items-center justify-center group-hover:bg-accent group-hover:scale-105 transition-all duration-500">
                      <project.icon
                        size={28}
                        className="text-accent group-hover:text-accent-foreground transition-colors"
                      />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-secondary/70 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                      <ArrowUpRight
                        size={18}
                        className="text-muted-foreground group-hover:text-primary-foreground transition-colors"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-2xl text-foreground mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-5 flex-grow leading-relaxed font-light">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-[0.65rem] uppercase tracking-[0.14em] rounded-full border border-border text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* GitHub indicator */}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    <Github size={16} />
                    <span>View on GitHub</span>
                  </div>
                </div>
              </a>
              </Reveal>
            ))}
          </div>

          {/* View More */}
          <Reveal className="text-center mt-14">
            <Button variant="heroOutline" size="lg" asChild>
              <a
                href="/projects"
                className="flex items-center gap-2"
              >
                View All Projects
                <ExternalLink size={18} />
              </a>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
};