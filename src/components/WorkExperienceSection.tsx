import { Calendar, MapPin, Briefcase } from "lucide-react";

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
    <section id="experience" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Career Journey
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3">
              Work
              <span className="text-gradient"> Experience</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-accent via-accent/50 to-transparent" />

            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-accent shadow-glow z-10" />

                {/* Content card */}
                <div
                  className={`ml-8 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="p-6 rounded-2xl bg-card shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 group">
                    {/* Company & Role */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 text-accent mb-2">
                        <Briefcase size={18} />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <h3 className="font-heading text-xl font-bold text-foreground">
                        {exp.role}
                      </h3>
                    </div>

                    {/* Meta info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-accent" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin size={14} className="text-accent" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-3">
                      {exp.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-sm text-muted-foreground leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
