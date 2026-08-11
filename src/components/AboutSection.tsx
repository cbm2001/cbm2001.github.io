import { Code, Brain, Database, Lightbulb } from "lucide-react";
import { Reveal } from "./Reveal";

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
    <section id="about" className="relative py-24 md:py-36 bg-warm-gradient overflow-hidden">
      <div className="absolute -left-32 top-1/4 w-[26rem] h-[26rem] rounded-full blur-3xl bg-accent/10 animate-float-delayed pointer-events-none" />
      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          <Reveal className="max-w-2xl mb-16">
            <span className="eyebrow">About me</span>
            <h2 className="font-display text-4xl md:text-6xl text-foreground mt-5 leading-[1.05]">
              Design with data.
              <span className="block italic text-gradient">Stories that scale.</span>
            </h2>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <Reveal delay={80} className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                I'm a Data Scientist and Machine Learning Engineer with a strong
                foundation in developing AI-powered solutions. My journey in tech has been
                driven by curiosity and a desire to solve meaningful problems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                With expertise in Python, machine learning frameworks, and data analysis tools,
                I specialize in building end-to-end ML pipelines, from data preprocessing to
                model deployment. I believe in the power of data to drive decisions and
                create positive change.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                When I'm not training models or analyzing datasets, you'll find me exploring
                new technologies, contributing to open-source projects, and staying updated
                with the latest advancements in AI research.
              </p>
              <div className="rule mt-10" />
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-5">
              {highlights.map((item, index) => (
                <Reveal key={item.title} delay={120 + index * 110}>
                  <div className="h-full p-7 rounded-[2rem] bg-card-gradient border border-border/70 shadow-soft hover:shadow-medium transition-all duration-500 hover:-translate-y-1.5 group">
                    <div className="w-12 h-12 rounded-full border border-accent/30 flex items-center justify-center mb-5 group-hover:bg-accent transition-all duration-500">
                      <item.icon size={20} className="text-accent group-hover:text-accent-foreground transition-colors" />
                    </div>
                    <h3 className="font-display text-2xl text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
