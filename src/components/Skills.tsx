import React from "react";
import { Skills } from "@/data/types";
import { Wrench } from "lucide-react";
import { SectionHeader } from "@/ui";

interface SkillsProps {
  skills: Skills[];
}

const SkillsComponent: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section>
      <SectionHeader icon={Wrench} title="Skills" />

      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name}>
            <h3 className="font-semibold text-white mb-2">{skill.name}</h3>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <span
                  key={item}
                  className="bg-gray-800 text-gray-300 text-xs font-mono px-2 py-1 rounded-md border border-gray-700 hover:scale-105 transition-transform duration-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsComponent;
