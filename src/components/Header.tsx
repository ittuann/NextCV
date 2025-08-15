import React from "react";
import Link from "next/link";
import { MapPin, Mail, Phone, Download, Linkedin, Github } from "lucide-react";
import { Info } from "@/data/types";

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
        <div className="flex items-center gap-2 transition-colors duration-300 text-gray-400 hover:text-white">
          <MapPin className="h-4 w-4 flex-shrink-0" />
          <span>{info.location}</span>
        </div>
        <Link
          href={`mailto:${info.email}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center gap-2 transition-colors duration-300 text-gray-400 hover:text-white">
            <Mail className="h-4 w-4 flex-shrink-0" />
            <span>{info.email}</span>
          </div>
        </Link>
        <div className="flex items-center gap-2 transition-colors duration-300 text-gray-400 hover:text-white">
          <Phone className="h-4 w-4 flex-shrink-0" />
          <span>{info.phone}</span>
        </div>
        {info.social.map((social) => (
          <Link
            key={social.network}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center gap-2 transition-colors duration-300 text-gray-400 hover:text-white">
              {social.network === "GitHub" && (
                <Github className="h-4 w-4 flex-shrink-0" />
              )}
              {social.network === "LinkedIn" && (
                <Linkedin className="h-4 w-4 flex-shrink-0" />
              )}
              <span>{social.name}</span>
            </div>
          </Link>
        ))}
        <Link href={info.resume} target="_blank" rel="noopener noreferrer">
          <div className="flex items-center gap-2 transition-colors duration-300 text-gray-400 hover:text-white">
            <Download className="h-4 w-4 flex-shrink-0" />
            <span>Resume</span>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
