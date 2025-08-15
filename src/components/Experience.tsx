import React from "react";
import ReactMarkdown from "react-markdown";
import { Experience } from "@/data/types";
import { Briefcase } from "lucide-react";

interface ExperienceProps {
  experience: Experience[];
}

const ExperienceComponent: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <section>
      <div className="flex items-center mb-6">
        <Briefcase className="h-6 w-6 text-gray-500 mr-3" />
        <h2 className="text-2xl font-bold text-white tracking-tight">
          Experience
        </h2>
        <div className="flex-grow border-t border-gray-700 ml-4"></div>
      </div>
      <div className="space-y-8">
        <div>
          <div className="space-y-6">
            {experience.map((exp) => (
              <article
                key={exp.name}
                className="border-l-4 border-gray-800 pl-4 py-2 transition-all duration-300 hover:border-white hover:bg-gray-900/30"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-1">
                  <h3 className="text-lg font-semibold text-white">
                    {exp.name}
                  </h3>
                  <span className="text-xs text-gray-500 font-mono mt-1 sm:mt-0">
                    {exp.date}
                  </span>
                </div>
                <p className="text-md text-gray-400 mb-2">
                  {exp.position}, {exp.location}
                </p>
                <ul className="list-disc list-outside pl-5 space-y-1 text-sm text-gray-400 marker:text-gray-600">
                  {exp.highlights.map((highlight) => (
                    <li key={highlight} className="markdown-content">
                      <ReactMarkdown>{highlight}</ReactMarkdown>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceComponent;
