import { Reveal } from "./Reveal";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "R", "SQL", "JavaScript", "TypeScript"],
  },
  {
    title: "Machine Learning",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "XGBoost"],
  },
  {
    title: "Data Analysis",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Tableau"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "Docker", "AWS", "Jupyter", "VS Code"],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-24 md:py-36 bg-peach-gradient overflow-hidden">
      <div className="absolute right-0 top-10 w-[24rem] h-[24rem] rounded-full blur-3xl bg-background/60 animate-float pointer-events-none" />
      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow">Expertise</span>
            <h2 className="font-display text-4xl md:text-6xl text-foreground mt-5 leading-[1.05]">
              Skills & <span className="italic text-gradient">Technologies</span>
            </h2>
            <p className="text-muted-foreground mt-5 font-light">
              A considered toolkit for building intelligent, data-driven products.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {skillCategories.map((category, categoryIndex) => (
              <Reveal key={category.title} delay={categoryIndex * 120}>
                <div className="h-full p-7 rounded-[2rem] bg-card/80 backdrop-blur-sm border border-border/60 shadow-soft hover:shadow-medium transition-all duration-500 hover:-translate-y-1.5">
                  <span className="font-display text-accent text-sm">
                    {String(categoryIndex + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-2xl text-foreground mt-2 mb-5 pb-4 border-b border-border/70">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-xs uppercase tracking-[0.12em] rounded-full border border-border text-muted-foreground hover:border-accent hover:text-accent transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
