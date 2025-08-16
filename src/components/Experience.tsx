import React from "react";
import ReactMarkdown from "react-markdown";
import { Experience } from "@/data/types";
import { Briefcase } from "lucide-react";
import { SectionHeader, ArticleCard } from "@/ui";

interface ExperienceProps {
  experience: Experience[];
}

const ExperienceComponent: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <section>
      <SectionHeader icon={Briefcase} title="Experience" />
      <div className="space-y-8">
        <div>
          <div className="space-y-6">
            {experience.map((exp) => (
              <ArticleCard
                key={exp.name}
                title={exp.name}
                date={exp.date}
                subtitle={`${exp.position}, ${exp.location}`}
                highlights={exp.highlights}
                renderItem={(highlight) => (
                  <ReactMarkdown>{highlight}</ReactMarkdown>
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceComponent;
