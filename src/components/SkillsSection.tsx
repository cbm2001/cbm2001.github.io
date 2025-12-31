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
    <section id="skills" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Expertise
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3">
              Skills &
              <span className="text-gradient"> Technologies</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A comprehensive toolkit for building intelligent data-driven solutions
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="p-6 rounded-2xl bg-card shadow-soft hover:shadow-medium transition-all duration-300 group"
              >
                <h3 className="font-heading font-semibold text-foreground mb-4 pb-3 border-b border-border">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                      style={{
                        animationDelay: `${(categoryIndex * 5 + skillIndex) * 0.05}s`,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
