"use client";
import { Orbitron, Russo_One } from "next/font/google";
import React from "react";
import AnimatedBackground from "./AnimatedBackground";
import useTypingEffect from "@/hooks/useTypingEffects";
import skills from "@/data/skills";
import ScrollDownIndicator from "./ScrollDownIndicator";
import Image from "next/image";
// import AnimatedTerminal from "./AnimatedTerminal";

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
  const tagline = useTypingEffect([
    "Frontend Developer",
    "React.js Enthusiast",
    "TypeScript Lover",
    "Open Source Explorer",
  ]);
  return (
    <section
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-[#17092c] via-[#6919a2] to-[#5922d7]
 hero-overlay relative"
    >
      <AnimatedBackground />
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="relative group">
          <Image
            src="/download.jfif"
            alt="Nastaran Farjami Portrait"
            width={192}
            height={192}
            className="w-36 h-36 lg:w-48 lg:h-48 rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-105 group-hover:shadow-xl transition-transform duration-300"
            style={{ objectPosition: "center 30%" }}
            priority
          />
        </div>
        <div className="text-center lg:text-left">
          <h1
            className={`${russoOne.className} bg-gradient-to-r from-[#ef5cec] via-[#c074f7] to-[#dc82bc] text-transparent bg-clip-text font-extrabold text-5xl lg:text-7xl drop-shadow-lg`}
          >
            {name}
          </h1>
          <p
            className={`${orbitron.className} text-2xl lg:text-3xl font-semibold text-gray-100 mt-4 min-h-[2.5rem]`}
          >
            {tagline}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-6 max-w-xl">
        {skills.map((skill) => (
          <span
            key={skill}
            className="animate-float bg-pink-900 bg-opacity-70 text-white px-3 py-1 rounded-full text-sm font-medium cursor-pointer transition hover:bg-pink-700"
            title={skill}
          >
            {skill}
          </span>
        ))}
      </div>
      <button
        aria-label="Download Resume"
        className="mt-6 px-6 py-3 flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-purple-700 text-white font-bold shadow-lg hover:scale-105 hover:brightness-110 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-pink-400"
      >
        Download Resume
        <svg
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
      {/* <AnimatedTerminal /> */}
      <ScrollDownIndicator />
    </section>
  );
};

export default Hero;
