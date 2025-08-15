import React from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { Normal } from "@/data/types";
import { BookOpen } from "lucide-react";

interface NormalProps {
  normal?: Normal[];
  name?: string;
}

const NormalComponent: React.FC<NormalProps> = ({ normal = [], name }) => {
  return (
    <section>
      <div className="flex items-center mb-6">
        <BookOpen className="h-6 w-6 text-gray-500 mr-3" />
        <h2 className="text-2xl font-bold text-white tracking-tight">{name}</h2>
        <div className="flex-grow border-t border-gray-700 ml-4"></div>
      </div>
      <div className="space-y-8">
        <div>
          <div className="space-y-6">
            {normal.map((item) => (
              <article
                key={item.name}
                className="border-l-4 border-gray-800 pl-4 py-2 transition-all duration-300 hover:border-white hover:bg-gray-900/30"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-1">
                  <h3 className="text-lg font-semibold text-white">
                    {item.url ? (
                      <Link
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      item.name
                    )}
                  </h3>
                  <span className="text-xs text-gray-500 font-mono mt-1 sm:mt-0">
                    {item.date}
                  </span>
                </div>
                <div className="text-md text-gray-400 mb-2 markdown-content">
                  <ReactMarkdown>{item.summary}</ReactMarkdown>
                </div>
                <ul className="list-disc list-outside pl-5 space-y-1 text-sm text-gray-400 marker:text-gray-600">
                  {item.highlights.map((highlight) => (
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

export default NormalComponent;
