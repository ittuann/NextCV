import React from "react";
import ReactMarkdown from "react-markdown";
import { SectionHeader } from "@/ui";

interface SummaryProps {
  summary: string;
}

const Summary: React.FC<SummaryProps> = ({ summary }) => {
  return (
    <section>
      <SectionHeader title="Summary" />
      <div className="text-base leading-relaxed markdown-content">
        <ReactMarkdown>{summary}</ReactMarkdown>
      </div>
    </section>
  );
};

export default Summary;
