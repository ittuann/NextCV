import React from "react";
import { Skills } from "@/data/types";
import { Wrench } from "lucide-react";

interface SkillsProps {
  skills: Skills[];
}

const SkillsComponent: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section>
      <div className="flex items-center mb-6">
        <Wrench className="h-6 w-6 text-gray-500 mr-3" />
        <h2 className="text-2xl font-bold text-white tracking-tight">Skills</h2>
        <div className="flex-grow border-t border-gray-700 ml-4"></div>
      </div>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name}>
            <h3 className="font-semibold text-white mb-2">{skill.name}</h3>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <span
                  key={item}
                  className="bg-gray-800 text-gray-300 text-xs font-mono px-2 py-1 rounded-md border border-gray-700"
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
