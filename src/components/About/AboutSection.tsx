"use client";

import React from "react";
import TimeLine from "./TimeLine";

const AboutSection = () => {
  return (
    <section id="about" className="section-bg py-16">
      <div className="max-w-5xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 dark:from-[#ef5cec] dark:via-[#c074f7] dark:to-[#dc82bc] mb-6">
          About Me
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          just a text for now . . .
        </p>
        <TimeLine />
      </div>
    </section>
  );
};

export default AboutSection;
