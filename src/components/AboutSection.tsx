import { Code, Brain, Database, Lightbulb } from "lucide-react";
import { Reveal } from "./Reveal";

const highlights = [
  {
    icon: Brain,
    title: "Modeling",
    description: "Forecasting, regression and classification — chosen to fit the question",
  },
  {
    icon: Database,
    title: "Data engineering",
    description: "ETL pipelines and validation checks in Databricks, Python and SQL",
  },
  {
    icon: Code,
    title: "Automation",
    description: "Internal tools and dashboards people actually use day to day",
  },
  {
    icon: Lightbulb,
    title: "Framing problems",
    description: "Turning a vague business ask into something measurable",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 md:py-28 bg-warm-gradient overflow-hidden">
      <div className="absolute -left-32 top-1/4 w-[26rem] h-[26rem] rounded-full blur-3xl bg-accent/10 animate-float-delayed pointer-events-none" />
      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          <Reveal className="max-w-2xl mb-12 md:mb-16">
            <span className="eyebrow">About me</span>
            <h2 className="font-display text-4xl md:text-6xl text-foreground mt-3 md:mt-5 leading-[1.05]">
              A bit about
              <span className="block italic text-gradient">how I work.</span>
            </h2>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <Reveal delay={80} className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                I'm a data scientist finishing a master's in Data Science at the University
                of Michigan. This summer I'm at Zoox, working on demand forecasting and
                pricing for autonomous vehicles.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                Before grad school I spent a year and a half at Emerson, sitting between
                quality, manufacturing, operations and purchasing teams. Most of my work
                there was unglamorous and useful: getting messy Oracle data into shape,
                writing validation checks, and building dashboards that answered the
                questions people kept asking in meetings.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                I like problems where the modeling is only half the job — the rest is
                figuring out what to measure and making the result easy to act on.
                Outside of work I'm usually reading, or tinkering with a side project
                that started as a small question.
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
