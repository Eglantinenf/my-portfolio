"use client";
import React from "react";
import AnimatedBackground from "./AnimatedBackground";
import useTypingEffect from "@/hooks/useTypingEffects";

export type HeroTypes = {
  name: string;
};

const Hero: React.FC<HeroTypes> = ({ name }) => {
  const tagline = useTypingEffect("Frontend Developer | React.js | TypeScript");
  return (
    <section
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-[#17092c] via-[#6919a2] to-[#5922d7]
 hero-overlay relative"
    >
      <AnimatedBackground />
      <h1 className="bg-gradient-to-r from-[#ef5cec] via-[#c074f7] to-[#dc82bc] text-transparent bg-clip-text font-extrabold text-5xl lg:text-7xl drop-shadow-lg">
        {name}
      </h1>
      <p className=" text-xl text-gray-200 mt-4">{tagline}</p>
      <button>Download Resume</button>
    </section>
  );
};

export default Hero;
