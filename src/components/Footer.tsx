"use client";

import { useEffect, useState } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  {
    icon: <Mail size={28} />,
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=farjamiinastaran@gmail.com",
    label: "Email",
  },
  {
    icon: <Github size={28} />,
    href: "https://github.com/Eglantinenf",
    label: "GitHub",
  },
  {
    icon: <Linkedin size={28} />,
    href: "https://www.linkedin.com/in/nastaran-farjami-63b33928b",
    label: "LinkedIn",
  },
  {
    icon: <Send size={28} />,
    href: "https://t.me/...",
    label: "Telegram",
  },
];

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Blog", href: "#blog" },
];

type Star = {
  size: number;
  top: string;
  left: string;
  animationDuration: string;
};

export default function Footer() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generatedStars: Star[] = Array.from({ length: 20 }).map(() => ({
      size: Math.random() * 5 + 2,
      top: `${Math.random() * 90}%`,
      left: `${Math.random() * 90}%`,
      animationDuration: `${Math.random() * 5 + 3}s`,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <footer
      id="contact"
      className="relative bg-white/10 dark:bg-black/70 backdrop-blur-md py-20 px-6 md:px-20 overflow-hidden transition-colors duration-500"
    >
      {/* With AI help :))) i love the result */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((star, index) => (
          <div
            key={index}
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              top: star.top,
              left: star.left,
              animationDuration: star.animationDuration,
            }}
            className="absolute bg-gradient-to-r from-purple-400 via-pink-400 rounded-full animate-pulse"
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="text-center md:text-left z-10">
          <p className="text-sm md:text-base font-semibold tracking-wide text-gray-800 dark:text-gray-300">
            &copy; 2025{" "}
            <span className="text-purple-500 dark:text-purple-400">
              Nastaran Farjami
            </span>
            . All rights reserved.
          </p>
        </div>

        <nav className="z-10">
          <ul className="flex flex-wrap gap-8 justify-center text-base font-bold text-gray-800 dark:text-gray-300">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group">
                <a
                  href={link.href}
                  className="relative hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 dark:from-purple-400 dark:via-pink-400 dark:to-indigo-400 group-hover:w-full transition-all duration-500 ease-out rounded"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex gap-8 z-10">
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              whileHover={{ scale: 1.5, rotate: 10 }}
              whileTap={{ scale: 1.2, rotate: -5 }}
              className="text-gray-700 dark:text-gray-200 hover:text-purple-500 dark:hover:text-purple-400 transition-all duration-300 drop-shadow-[0_0_12px_rgb(128,90,255)]"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Actually with a little AI help :)*/}
      <div className="relative mt-16 h-[3px] w-full overflow-hidden rounded">
        <div className="absolute h-full w-1/2 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 animate-gradient-x opacity-70"></div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-gradient-x {
          animation: gradient-x 5s linear infinite;
        }
      `}</style>
    </footer>
  );
}
