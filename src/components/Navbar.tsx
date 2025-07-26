"use client";

import React, { useEffect, useState, useRef } from "react";
import { Sun, Moon } from "lucide-react";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";

type NavLink = {
  label: string;
  href: string;
};

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const { darkMode, setDarkMode } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const links: NavLink[] = [
    { label: t("navbar.about"), href: "#about" },
    { label: t("navbar.projects"), href: "#projects" },
    { label: t("navbar.blog"), href: "#blog" },
    { label: t("navbar.contact"), href: "#contact" },
  ];

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
          <li>
            <LanguageSwitcher />
          </li>

          {/* Dark Mode Toggle */}
          <li>
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label={
                darkMode ? t("navbar.lightMode") : t("navbar.darkMode")
              }
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
        {/* Mobile Hamburger using shadcnUi */}
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                aria-label="Toggle Menu"
                className="p-2 rounded hover:bg-purple-700/20 transition"
              >
                <svg
                  className="w-6 h-6 text-white dark:text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              className="w-56 bg-white dark:bg-[#1a0b2e] shadow-xl rounded-lg border border-purple-800/30"
            >
              {links.map(({ label, href }) => (
                <DropdownMenuItem key={label} asChild>
                  <a
                    href={href}
                    className="w-full text-left text-sm hover:text-purple-600 transition-colors"
                  >
                    {label}
                  </a>
                </DropdownMenuItem>
              ))}

              <DropdownMenuSeparator />

              <DropdownMenuItem>
                <LanguageSwitcher />
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem asChild>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="flex items-center gap-2 w-full"
                >
                  {darkMode ? (
                    <>
                      <Sun className="w-4 h-4 text-yellow-300" />{" "}
                      {t("navbar.lightMode")}
                    </>
                  ) : (
                    <>
                      <Moon className="w-4 h-4 text-gray-300" />{" "}
                      {t("navbar.darkMode")}
                    </>
                  )}
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
