"use client";

import { motion } from "framer-motion";

const ScrollDownIndicator: React.FC = () => {
  return (
    <motion.div
      aria-label="Scroll down"
      className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
      animate={{ y: [0, 10, 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg
        className="w-8 h-8 text-white opacity-70"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 9l-7 7-7-7"
        ></path>
      </svg>
    </motion.div>
  );
};

export default ScrollDownIndicator;
