import React from "react";
import { MapPin, Mail, Phone, Download, Linkedin, Github } from "lucide-react";
import { Info } from "@/data/types";
import { IconLink } from "@/ui";
import ThemeToggleButton from "./ThemesToggle";

interface HeaderProps {
  info: Info;
}

const Header: React.FC<HeaderProps> = ({ info }) => {
  return (
    <header className="flex flex-row items-center justify-between border-b border-gray-700 pb-6 mb-8">
      <div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tighter">
          {info.name}
        </h1>
        <h2 className="text-xl sm:text-2xl font-light text-gray-400 tracking-wide mt-1">
          {info.title}
        </h2>
      </div>

      <div className="flex flex-col items-end space-y-2 text-sm">
        <IconLink icon={MapPin}>{info.location}</IconLink>
        <IconLink href={`mailto:${info.email}`} icon={Mail}>
          {info.email}
        </IconLink>
        <IconLink icon={Phone}>{info.phone}</IconLink>
        {info.social.map((social) => (
          <IconLink
            key={social.network}
            href={social.url}
            icon={social.network === "GitHub" ? Github : Linkedin}
          >
            {social.name}
          </IconLink>
        ))}
        <IconLink href={info.resume} icon={Download}>
          Resume
        </IconLink>

        {/* <ThemeToggleButton /> */}
      </div>
    </header>
  );
};

export default Header;
