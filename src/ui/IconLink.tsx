import React from "react";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface IconLinkProps {
  href?: string;
  icon: LucideIcon;
  children: React.ReactNode;
  isExternal?: boolean;
}

const IconLink: React.FC<IconLinkProps> = ({
  href,
  icon: Icon,
  children,
  isExternal = true,
}) => {
  const content = (
    <div
      className={`flex items-center gap-2 transition-colors duration-300 text-gray-400 hover:text-white`}
    >
      <Icon className="h-4 w-4 flex-shrink-0" />
      <span>{children}</span>
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {content}
      </Link>
    );
  }

  return content;
};

export default IconLink;
