import { Code, Brain, Database, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Expertise in building predictive models and neural networks",
  },
  {
    icon: Database,
    title: "Data Analysis",
    description: "Transforming raw data into meaningful insights",
  },
  {
    icon: Code,
    title: "Software Development",
    description: "Building scalable applications and APIs",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Creative solutions to complex challenges",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              About Me
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3">
              Turning Data into
              <span className="text-gradient"> Impact</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate Data Scientist and Machine Learning Engineer with a strong 
                foundation in developing AI-powered solutions. My journey in tech has been 
                driven by curiosity and a desire to solve meaningful problems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With expertise in Python, machine learning frameworks, and data analysis tools, 
                I specialize in building end-to-end ML pipelines, from data preprocessing to 
                model deployment. I believe in the power of data to drive decisions and 
                create positive change.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not training models or analyzing datasets, you'll find me exploring 
                new technologies, contributing to open-source projects, and staying updated 
                with the latest advancements in AI research.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl bg-card shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                    <item.icon size={24} className="text-accent group-hover:text-accent-foreground" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
