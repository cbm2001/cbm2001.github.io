import { Calendar, MapPin } from "lucide-react";
import { Reveal } from "./Reveal";

const experiences = [
  {
    company: "Emerson",
    role: "Data Scientist - Analytics & Automation",
    location: "Dubai, UAE",
    period: "Feb 2024 - Aug 2025",
    highlights: [
      "Architected agentic AI system for cross-functional analytics to autonomously analyze supplier performance metrics and product defect patterns across quality, manufacturing, operations, and purchasing departments.",
      "Built conversational supplier intelligence system enabling natural language queries over 50K+ historical RFT/SCAR quality documents; implemented RAG pipeline surfacing relevant past quality issues and anomalies within seconds.",
      "Developed intelligent procurement optimization system predicting optimal quote pricing with LLM-powered natural language interface, achieving 18% cost savings validated through A/B testing.",
      "Engineered end-to-end data quality monitoring platform tracking 10K+ monthly manufacturing records from Oracle across calibration testing, maintenance schedules, and production workflows.",
    ],
  },
  {
    company: "Wavelogix FZE",
    role: "Software Engineering Intern",
    location: "Dubai, UAE",
    period: "Jul 2023 - Aug 2023",
    highlights: [
      "Participated in full SDLC for in-house asset management applications conducting QA testing with C# and .NET framework, while managing Agile sprint workflows via JIRA.",
      "Collaborated with project managers to develop Functional Specification Documents (FSDs) translating client requirements into technical specifications, improving delivery efficiency.",
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
              <span className="eyebrow">Career journey</span>
              <h2 className="font-display text-4xl md:text-6xl text-foreground mt-5 leading-[1.05]">
                Work <span className="italic text-gradient">Experience</span>
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm font-light">
              Two years of shipping analytics and AI systems inside global manufacturing.
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
