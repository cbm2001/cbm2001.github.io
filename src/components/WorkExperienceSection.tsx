import { Calendar, MapPin } from "lucide-react";
import { Reveal } from "./Reveal";

const experiences = [
  {
    company: "Zoox (Amazon)",
    role: "Data Science Intern",
    location: "Foster City, CA",
    period: "May 2026 - Aug 2026",
    highlights: [
      "Framed a demand forecasting problem for autonomous vehicles in Scala and Databricks, comparing a static fallback model against time-series approaches and setting the evaluation criteria the team used to pick one.",
      "Built a dynamic pricing layer on top of the team's demand models, turning forecasted demand into prices that could run in real time.",
      "Wrote internal tooling to speed the team up — an automated PR helper and new features for an internal chatbot over our databases.",
    ],
  },
  {
    company: "Emerson",
    role: "Data Scientist — Analytics & Automation",
    location: "Dubai, UAE",
    period: "Feb 2024 - Aug 2025",
    highlights: [
      "Built an analytics platform in Power BI and DAX that pulled quality, manufacturing, operations and purchasing data together, and defined the supplier metrics behind it. Error identification got about 15% faster.",
      "Set up data quality monitoring across 10K+ manufacturing records a month from Oracle, using Python and SQL checks, Power Automate for orchestration and PowerApps for the interface.",
      "Made a supplier lookup tool over historical RFT and SCAR records so purchasing and engineering could see recurring quality patterns by part and supplier.",
    ],
  },
  {
    company: "Wavelogix FZE",
    role: "Software Engineering Intern",
    location: "Dubai, UAE",
    period: "Jul 2023 - Aug 2023",
    highlights: [
      "Worked across the SDLC on in-house asset management apps, doing QA testing in C# and .NET and tracking sprints in Jira.",
      "Wrote functional specification documents with project managers, translating client requests into something engineers could build from.",
    ],
  },
];

export const WorkExperienceSection = () => {
  return (
    <section id="experience" className="py-24 md:py-36 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <Reveal className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="eyebrow">Where I've worked</span>
              <h2 className="font-display text-4xl md:text-6xl text-foreground mt-5 leading-[1.05]">
                Work <span className="italic text-gradient">Experience</span>
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm font-light">
              Forecasting and pricing at Zoox, analytics and automation at Emerson.
            </p>
          </Reveal>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Reveal key={exp.company} delay={index * 140}>
                <article className="group relative grid md:grid-cols-[13rem_1fr] gap-8 p-8 md:p-10 rounded-[2.25rem] bg-card-gradient border border-border/70 shadow-soft hover:shadow-medium transition-all duration-500">
                  <div className="md:border-r md:border-border/70 md:pr-8">
                    <p className="font-display text-3xl text-foreground">{exp.company}</p>
                    <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} className="text-accent" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={14} className="text-accent" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm uppercase tracking-[0.22em] text-foreground/80 mb-5">
                      {exp.role}
                    </h3>
                    <ul className="space-y-4">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex gap-4 text-sm text-muted-foreground leading-relaxed font-light">
                          <span className="font-display text-accent text-base leading-none pt-0.5">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
