"use client";

import React from "react";
import TimeLine from "./TimeLine";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const AboutSection = () => {
  return (
    <section id="about" className="section-bg py-20">
      <div className="max-w-5xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 dark:from-[#ef5cec] dark:via-[#c074f7] dark:to-[#dc82bc] mb-8">
          About Me
        </h2>
        <p
          className={`${playfair.className} text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12 px-4 py-5 md:px-6 rounded-xl bg-white/30 dark:bg-white/5 backdrop-blur-sm shadow-md`}
        >
          As a Computer Engineering student from Iran, I’m driven by a strong
          passion for front-end development and clean, purposeful UI design.
          I’ve worked with technologies like React.js, TypeScript, and Tailwind
          CSS, and I’m continuously exploring advanced concepts such as
          WebSocket and Next.js. My learning journey is deeply project-based,
          and I love transforming ideas into intuitive digital experiences that
          feel modern, fast, and reliable.
        </p>
        <TimeLine />
      </div>
    </section>
  );
};

export default AboutSection;
