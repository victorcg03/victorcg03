import { education as edu } from "@/lib/data";
import TimelineItem from "../TimelineItem";
import MotionWrapper from "../MotionWrapper";

export default function EducationSection() {
  const education = edu.es;
  return (
    <section
      id="educación"
      className="py-12 bg-gradient-to-b from-muted/10 to-background"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
            🎓 Educación
          </h2>
        </MotionWrapper>

        <div className="mb-8">
          {education.map((edu, index) => (
            <TimelineItem
              key={edu.institution}
              title={`🎓 ${edu.degree}`}
              subtitle={`🏛️ ${edu.institution}`}
              date={`📅 ${edu.period}`}
              isLast={index === education.length - 1}
              index={index}
            >
              <p className="text-sm text-muted-foreground mb-3">
                📍 {edu.location}
              </p>
            </TimelineItem>
          ))}
        </div>
      </div>
    </section>
  );
}
