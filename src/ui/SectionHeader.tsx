import React from "react";
import { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  icon?: LucideIcon;
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ icon: Icon, title }) => {
  return (
    <div className={`flex items-center mb-6`}>
      {Icon && <Icon className="h-6 w-6 text-gray-500 mr-3" />}
      <h2 className="text-2xl font-bold text-white tracking-tight">{title}</h2>
      <div className="flex-grow border-t border-gray-700 ml-4"></div>
    </div>
  );
};

export default SectionHeader;
