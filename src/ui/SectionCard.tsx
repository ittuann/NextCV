import React from "react";
import ReactMarkdown from "react-markdown";

interface SectionCardProps {
  title: string;
  date?: string;
  subtitle?: string;
  highlights?: string[];
}

const SectionCard: React.FC<SectionCardProps> = ({
  title,
  date,
  subtitle,
  highlights,
}) => {
  return (
    <article
      className={`border-l-4 border-gray-800 pl-4 py-2 transition-all duration-300 hover:border-white hover:bg-gray-900/30`}
    >
      <div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-1">
          <h3 className="markdown-content text-lg font-semibold text-white ">
            <ReactMarkdown>{title}</ReactMarkdown>
          </h3>
          {date && (
            <span className="text-xs text-gray-500 font-mono mt-1 sm:mt-0">
              {date}
            </span>
          )}
        </div>
        {subtitle && (
          <div className="text-md text-gray-400 mb-2">
            <ReactMarkdown>{subtitle}</ReactMarkdown>
          </div>
        )}
      </div>

      {highlights && highlights.length > 0 && (
        <ul
          className={`list-disc list-outside pl-5 space-y-1 text-sm text-gray-400 marker:text-gray-600`}
        >
          {highlights.map((highlight, index) => (
            <li key={`${highlight}-${index}`} className="markdown-content">
              <ReactMarkdown>{highlight}</ReactMarkdown>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};

export default SectionCard;
