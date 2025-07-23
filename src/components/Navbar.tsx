"use client";

import React, { useEffect, useState, useRef } from "react";
import { Sun, Moon } from "lucide-react";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

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
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const { darkMode, setDarkMode } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav
      className={`sticky top-0 z-50 w-full backdrop-blur-md bg-transparent transition-colors duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-[#0d1117]/80 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center px-4 md:px-10 py-2 relative">
        {/* Logo */}
        <div>
          <Image
            src={darkMode ? "/1.png" : "/2.png"}
            alt="Logo"
            width={60}
            height={60}
            className="rounded-full object-cover border-3 border-gray-200 dark:border-gray-700 shadow-xl cursor-pointer hover:scale-105 transition-transform duration-300"
            priority
          />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-800 dark:text-white items-center">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className={`relative group transition-colors ${
                  activeSection === href.slice(1)
                    ? "text-purple-500 font-semibold"
                    : "text-gray-800 dark:text-white"
                }`}
              >
                {label}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-purple-400 transition-all ${
                    activeSection === href.slice(1)
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}

          {/* Dark Mode Toggle */}
          <li>
            <button
              onClick={() => setDarkMode(!darkMode)}
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

        {/* Mobile Menu Toggle */}
        <div className="md:hidden relative">
          <button
            aria-label="Toggle Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded hover:bg-purple-700/20 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 text-gray-900 dark:text-gray-300"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

          {menuOpen && (
            <div
              ref={menuRef}
              className="absolute rounded-2xl top-[70px] right-3 w-48 bg-white dark:bg-[#0d1117] shadow-md px-6 py-6 flex flex-col space-y-4 text-gray-900 dark:text-white text-lg z-40 animate-slideDown"
            >
              {links.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-purple-500 transition font-medium"
                >
                  {label}
                </a>
              ))}
              <button
                onClick={() => {
                  setDarkMode(!darkMode);
                  setMenuOpen(false);
                }}
                aria-label="Toggle Dark Mode"
                className="mt-4 p-2 rounded bg-purple-600 text-white font-semibold hover:bg-purple-700 transition"
              >
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
