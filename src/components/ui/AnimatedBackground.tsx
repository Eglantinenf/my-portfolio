"use client";
import { motion } from "framer-motion";

const AnimatedBackground: React.FC = () => {
  return (
    <>
      <motion.div
        aria-hidden="true"
        className="w-32 h-32 rounded-full bg-purple-400 opacity-30 absolute blur-sm top-10 left-10 z-[-10] "
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: 0,
        }}
      />

      <motion.div
        aria-hidden="true"
        className="w-24 h-24 rounded-full bg-indigo-400 opacity-20 absolute blur-sm bottom-20 right-20 z-[-10] "
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        aria-hidden="true"
        className="w-28 h-28 rounded-full bg-pink-400 opacity-25 absolute blur-sm top-1/2 left-1/3 z-[-10] "
        animate={{ y: [0, -25, 0] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </>
  );
};

export default AnimatedBackground;
