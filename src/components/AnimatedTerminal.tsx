"use client";
import React from "react";
import Typewriter from "typewriter-effect";

const AnimatedTerminal: React.FC = () => {
  return (
    <div
      className="
    hidden custom:block fixed right-10 top-[40%] -translate-y-1/2
    w-96 h-60
    bg-gray-100/60     
    dark:bg-[#0d1117]/80 
    backdrop-blur-sm
    border border-purple-400/30
    rounded-xl p-4
    font-mono text-sm
    text-pink-700
    shadow-[0_0_15px_#a81d8d]
    dark:shadow-[0_0_15px_#43054f] 
    animate-fade-in
    overflow-hidden
    pointer-events-none select-none
  "
    >
      <div className="h-full w-full overflow-hidden whitespace-pre-wrap leading-relaxed tracking-wide">
        <Typewriter
          options={{
            strings: [
              "git clone https://github.com/Eglantinenf/my-portfolio",
              "cd my-portfolio",
              "npm install",
              "npm run dev",
              "Server running at http://localhost:3000",
            ],
            autoStart: true,
            loop: true,
            delay: 50,
            deleteSpeed: 40,
          }}
        />
      </div>
    </div>
  );
};

export default AnimatedTerminal;
