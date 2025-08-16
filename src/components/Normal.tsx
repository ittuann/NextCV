import React from "react";
import Link from "next/link";
import { Normal } from "@/data/types";
import { BookOpen } from "lucide-react";
import { SectionHeader, ArticleCard } from "@/ui";

interface NormalProps {
  normal?: Normal[];
  name?: string;
}

const NormalComponent: React.FC<NormalProps> = ({ normal = [], name }) => {
  return (
    <section>
      <SectionHeader icon={BookOpen} title={name || "Normal"} />
      <div className="space-y-8">
        <div>
          <div className="space-y-6">
            {normal.map((item) => (
              <ArticleCard
                key={item.name}
                title={
                  item.url ? (
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
                  )
                }
                date={item.date}
                subtitle={item.summary}
                highlights={item.highlights}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NormalComponent;
