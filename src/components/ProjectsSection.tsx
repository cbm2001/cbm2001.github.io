import { ExternalLink, Github, Brain, TrendingUp, Activity, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Detecting LLM-Generated Text",
    description:
      "A machine learning system designed to distinguish between human-written and AI-generated text using advanced NLP techniques and deep learning models.",
    tags: ["Python", "NLP", "Deep Learning", "Transformers"],
    icon: Brain,
    github: "https://github.com/cbm2001/Detecting-LLM-Generated-Text",
  },
  {
    title: "Price Optimization",
    description:
      "An intelligent pricing system that uses machine learning algorithms to optimize product pricing strategies based on market dynamics and demand patterns.",
    tags: ["Python", "ML", "Optimization", "Analytics"],
    icon: TrendingUp,
    github: "https://github.com/cbm2001/Price-Optimization",
  },
  {
    title: "Parkinson's Disease Detection",
    description:
      "A healthcare ML application that predicts Parkinson's disease using biomedical voice measurements and machine learning classification techniques.",
    tags: ["Python", "Healthcare AI", "Classification", "Scikit-learn"],
    icon: Activity,
    github: "https://github.com/cbm2001/Parkinson-s-Disease-Detection",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Portfolio
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3">
              Featured
              <span className="text-gradient"> Projects</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A selection of projects showcasing my expertise in machine learning, 
              data science, and software development
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl bg-card border border-border hover:border-primary/50 shadow-soft hover:shadow-medium transition-all duration-500 hover:-translate-y-2 overflow-hidden cursor-pointer block"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative p-6 h-full flex flex-col">
                  {/* Header with icon and arrow */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                      <project.icon
                        size={28}
                        className="text-accent group-hover:text-accent-foreground transition-colors"
                      />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                      <ArrowUpRight
                        size={18}
                        className="text-muted-foreground group-hover:text-primary-foreground transition-colors"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-5 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs rounded-md bg-secondary text-muted-foreground"
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
            ))}
          </div>

          {/* View More */}
          <div className="text-center mt-12">
            <Button variant="heroOutline" size="lg" asChild>
              <a
                href="https://github.com/cbm2001"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                View All Projects
                <ExternalLink size={18} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};