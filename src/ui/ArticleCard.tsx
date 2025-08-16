import React from "react";

interface ArticleCardProps {
  children: React.ReactNode;
  className?: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  children,
  className = "",
}) => {
  return (
    <article
      className={`border-l-4 border-gray-800 pl-4 py-2 transition-all duration-300 hover:border-white hover:bg-gray-900/30 ${className}`}
    >
      {children}
    </article>
  );
};

interface ArticleHeaderProps {
  title: React.ReactNode;
  date?: string;
  subtitle?: React.ReactNode;
  className?: string;
}

const ArticleHeader: React.FC<ArticleHeaderProps> = ({
  title,
  date,
  subtitle,
  className = "",
}) => {
  return (
    <div className={className}>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-1">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        {date && (
          <span className="text-xs text-gray-500 font-mono mt-1 sm:mt-0">
            {date}
          </span>
        )}
      </div>
      {subtitle && <div className="text-md text-gray-400 mb-2">{subtitle}</div>}
    </div>
  );
};

interface HighlightListProps {
  highlights: string[];
  renderItem?: (highlight: string) => React.ReactNode;
  className?: string;
}

const HighlightList: React.FC<HighlightListProps> = ({
  highlights,
  renderItem,
  className = "",
}) => {
  return (
    <ul
      className={`list-disc list-outside pl-5 space-y-1 text-sm text-gray-400 marker:text-gray-600 ${className}`}
    >
      {highlights.map((highlight) => (
        <li key={highlight} className="markdown-content">
          {renderItem ? renderItem(highlight) : highlight}
        </li>
      ))}
    </ul>
  );
};

export { ArticleCard, ArticleHeader, HighlightList };
