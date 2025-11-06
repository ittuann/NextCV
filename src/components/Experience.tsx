import React from "react";
import { Experience } from "@/data/types";
import { Briefcase } from "lucide-react";
import { SectionHeader, SectionCard } from "@/ui";

interface ExperienceProps {
  experience: Experience[];
}

const ExperienceComponent: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <section>
      <SectionHeader icon={Briefcase} title="Experience" />

      <div className="space-y-6">
        {experience.map((exp) => (
          <SectionCard
            key={exp.name}
            title={exp.name}
            date={exp.date}
            subtitle={`${exp.position}, ${exp.location}`}
            highlights={exp.highlights}
          />
        ))}
      </div>
    </section>
  );
};

export default ExperienceComponent;
