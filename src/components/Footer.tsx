import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-center text-sm text-gray-600 border-t border-gray-800 mt-12 py-6">
      <p>
        Build by{" "}
        <a
          href="https://github.com/ittuann/NextCV"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          NextCV
        </a>
      </p>
    </footer>
  );
};

export default Footer;
