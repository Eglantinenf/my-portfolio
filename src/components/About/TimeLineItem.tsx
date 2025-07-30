"use client";

import { motion } from "framer-motion";
import React from "react";

type TimeLineItemProps = {
  date: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  isCurrent?: boolean;
};

const TimeLineItem: React.FC<TimeLineItemProps> = ({
  date,
  title,
  description,
  icon,
  isCurrent,
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative group pb-16"
    >
      <span className="absolute left-6 top-0 h-full w-[2px] bg-gradient-to-b from-purple-400 via-pink-400 to-indigo-400 dark:from-[#bb6df3] dark:via-[#ef5cec] dark:to-[#8a64ff] animate-pulse z-0" />
      <span className="absolute left-0 top-2 w-12 h-12 rounded-full bg-gradient-to-tr from-purple-200 to-pink-200 dark:from-purple-800 dark:to-pink-700 shadow-xl flex items-center justify-center text-purple-700 dark:text-purple-100 ring-2 ring-white dark:ring-purple-400 z-10">
        <span className="absolute w-full h-full rounded-full border-2 border-dashed border-purple-400 dark:border-purple-500 animate-spin-slow" />
        {icon}
      </span>
      <div
        className={`ml-20 p-6 rounded-2xl backdrop-blur-lg bg-white/30 dark:bg-white/10 shadow-xl transition-transform duration-300 group-hover:scale-[1.015] ${
          isCurrent
            ? "ring-2 ring-purple-400 dark:ring-purple-600"
            : "ring-1 ring-white/10 dark:ring-white/5"
        }`}
      >
        <time className="text-sm text-gray-600 dark:text-gray-400 font-mono">
          {date}
        </time>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
          {title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mt-2 text-base leading-relaxed">
          {description}
        </p>
      </div>
    </motion.article>
  );
};

export default TimeLineItem;
