import React from "react";
import ReactMarkdown from "react-markdown";

interface ArticleProps {
  title: React.ReactNode;
  date?: string;
  subtitle?: string;
  highlights?: string[];
  renderItem?: (highlight: string) => React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  headerClassName?: string;
  highlightClassName?: string;
}

const ArticleCard: React.FC<ArticleProps> = ({
  title,
  date,
  subtitle,
  highlights,
  renderItem,
  className = "",
  headerClassName = "",
  highlightClassName = "",
}) => {
  return (
    <article
      className={`border-l-4 border-gray-800 pl-4 py-2 transition-all duration-300 hover:border-white hover:bg-gray-900/30 ${className}`}
    >
      <div className={headerClassName}>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-1">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
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
          className={`list-disc list-outside pl-5 space-y-1 text-sm text-gray-400 marker:text-gray-600 ${highlightClassName}`}
        >
          {highlights.map((highlight) => (
            <li key={highlight} className="markdown-content">
              {renderItem ? renderItem(highlight) : <ReactMarkdown>{highlight}</ReactMarkdown>}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};

export default ArticleCard;
