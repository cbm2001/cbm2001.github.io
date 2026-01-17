import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";

const education = [
  {
    degree: "Master of Science in Data Science",
    school: "University of Michigan",
    location: "Ann Arbor, MI",
    period: "Aug 2023 - May 2025",
    coursework: [
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Data Mining",
      "Statistical Learning",
      "Big Data Analytics"
    ]
  },
  {
    degree: "Bachelor of Science in Computer Science",
    school: "Heriot-Watt University",
    location: "Dubai, UAE",
    period: "Sep 2019 - May 2023",
    coursework: [
      "Data Structures & Algorithms",
      "Database Systems",
      "Software Engineering",
      "Artificial Intelligence",
      "Computer Networks",
      "Operating Systems"
    ]
  }
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto grid gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-primary font-semibold mb-3">
                    {edu.school}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex items-center gap-2 text-foreground mb-3">
                      <BookOpen className="w-4 h-4 text-accent" />
                      <span className="font-medium">Relevant Coursework</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
