"use client";
import React from "react";
import AnimatedBackground from "./AnimatedBackground";
import useTypingEffect from "@/hooks/useTypingEffects";
import skills from "@/data/skills";
import ScrollDownIndicator from "./ScrollDownIndicator";
import Image from "next/image";

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
          <h1 className="bg-gradient-to-r from-[#ef5cec] via-[#c074f7] to-[#dc82bc] text-transparent bg-clip-text font-extrabold text-5xl lg:text-7xl drop-shadow-lg">
            {name}
          </h1>
          <p className="text-2xl lg:text-3xl font-semibold text-gray-100 mt-4 min-h-[2.5rem]">
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
        className="mt-6 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-full shadow-lg hover:scale-105 transform transition"
      >
        Download Resume
      </button>
      <ScrollDownIndicator />
    </section>
  );
};

export default Hero;
