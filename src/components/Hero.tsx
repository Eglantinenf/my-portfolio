"use client";
import { Orbitron, Russo_One } from "next/font/google";
import React from "react";
import AnimatedBackground from "./AnimatedBackground";
import AnimatedTerminal from "./AnimatedTerminal";
import useTypingEffect from "@/hooks/useTypingEffects";
import skills from "@/data/skills";
import ScrollDownIndicator from "./ScrollDownIndicator";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const russoOne = Russo_One({
  subsets: ["latin"],
  weight: "400",
});

export type HeroTypes = {
  name: string;
};

const Hero: React.FC<HeroTypes> = ({ name }) => {
  const { darkMode } = useTheme();
  const tagline = useTypingEffect([
    "Frontend Developer",
    "React.js Enthusiast",
    "TypeScript Lover",
    "Open Source Explorer",
  ]);
  return (
    <section className="h-screen flex flex-col justify-center items-center  hero-overlay relative px-4 md:px-6">
      <AnimatedBackground />
      <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8 max-w-6xl w-full">
        <div className="relative group">
          <Image
            src={darkMode ? "/1.png" : "/2.png"}
            alt="Nastaran Farjami Portrait"
            width={192}
            height={192}
            className="w-36 h-36 lg:w-48 lg:h-48 rounded-full object-cover group-hover:scale-105 dark:shadow-[0_0_10px_#43054f] group-hover:dark:shadow-[0_0_15px_#43054f] shadow-[0_0_10px_#a81d8d] group-hover:shadow-[0_0_15px_#a81d8d] transition-transform duration-300"
            style={{ objectPosition: "center 30%" }}
            priority
          />
        </div>
        <div className="text-center lg:text-left flex-1">
          <h1
            className={`${russoOne.className} 
    font-extrabold drop-shadow-lg leading-tight 
    text-4xl md:text-5xl lg:text-7xl
    text-transparent bg-clip-text transition-colors duration-500
    bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
    dark:from-[#ef5cec] dark:via-[#c074f7] dark:to-[#dc82bc]`}
          >
            {name}
          </h1>
          <p
            aria-live="polite"
            className={`${orbitron.className} text-lg md:text-2xl lg:text-3xl font-semibold mt-4 min-h-[2.5rem] drop-shadow-md`}
          >
            {tagline}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-6 max-w-xl w-full px-2">
        {skills.map((skill) => (
          <button
            key={skill}
            type="button"
            aria-label={`Skill: ${skill}`}
            className="animate-float bg-pink-900 bg-opacity-80 text-white px-3 py-1 rounded-full text-sm font-medium cursor-pointer transition hover:bg-pink-700 drop-shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
          >
            {skill}
          </button>
        ))}
      </div>

      <button
        aria-label="Download Resume"
        className="mt-6 px-6 py-3 flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-purple-700 text-white font-bold text-base md:text-lg shadow-lg hover:scale-105 hover:brightness-110 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-pink-400"
      >
        Download Resume
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
          />
        </svg>
      </button>
      <AnimatedTerminal />
      <ScrollDownIndicator />
    </section>
  );
};

export default Hero;
