import React from "react";
import { Education } from "@/data/types";
import { Award } from "lucide-react";
import { SectionHeader, SectionCard } from "@/ui";

interface EducationProps {
  education: Education[];
}

const EducationComponent: React.FC<EducationProps> = ({ education }) => {
  return (
    <section>
      <SectionHeader icon={Award} title="Education" />

      <div className="space-y-6">
        {education.map((edu) => (
          <SectionCard
            key={edu.name}
            title={`${edu.degree}, ${edu.name}, ${edu.area}`}
            date={edu.date}
            subtitle={edu.location}
            highlights={edu.highlights}
          />
        ))}
      </div>
    </section>
  );
};

export default EducationComponent;
