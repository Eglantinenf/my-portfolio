"use client";
import React, { useEffect, useState } from "react";

const lines = [
  "> npm install my-awesome-library",
  "> git clone https://github.com/Eglantinenf/my-portfolio",
  "> yarn start",
  "> Live demo: http://myportfolio.com",
];

const AnimatedTerminal: React.FC = () => {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setVisibleLines((prev) => [...prev, lines[index]]);
      index++;
      if (index === lines.length) clearInterval(interval);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="absolute left-4 top-1 w-72 h-48 bg-black bg-opacity-30 backdrop-blur-sm rounded-lg p-4 font-mono text-sm text-green-400 overflow-auto select-none pointer-events-none">
      <pre>
        {visibleLines.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </pre>
      <span className="blink-cursor">|</span>
    </div>
  );
};

export default AnimatedTerminal;
