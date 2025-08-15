import React from "react";
import ReactMarkdown from "react-markdown";

interface SummaryProps {
  summary: string;
}

const Summary: React.FC<SummaryProps> = ({ summary }) => {
  return (
    <section>
      <div className="flex items-center mb-6">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          Summary
        </h2>
        <div className="flex-grow border-t border-gray-700 ml-4"></div>
      </div>
      <div className="text-base leading-relaxed markdown">
        <ReactMarkdown>{summary}</ReactMarkdown>
      </div>
    </section>
  );
};

export default Summary;
