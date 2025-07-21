"use client";

import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import Image from "next/image";

type NavLink = {
  label: string;
  href: string;
};

const links: NavLink[] = [
  { label: "About Me", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contact Me", href: "#contact" },
];

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-transparent ">
      <div className="flex justify-between items-center px-4 md:px-10 py-4">
        <div>
          <Image
            src="/logo.png"
            alt="Logo"
            width={60}
            height={60}
            className="object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
            priority
          />
        </div>

        <ul className="hidden md:flex gap-8 font-medium text-white items-center">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="relative group hover:text-purple-400 transition-colors"
              >
                {label}
                <span
                  className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-400 transition-all group-hover:w-full"
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}

          <li>
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              aria-label="Toggle Dark Mode"
              className="p-2 rounded hover:bg-purple-700 transition"
              type="button"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-300" />
              ) : (
                <Moon className="w-5 h-5 text-gray-300" />
              )}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
