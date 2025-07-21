"use client";

import React from "react";
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
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-transparent ">
      <div className="flex justify-between items-center px-4 md:px-10 py-4">
        <div>
          <Image
            src="/logo.png"
            alt="Eglantinenf Logo"
            width={60}
            height={60}
            className="rounded-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
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
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
