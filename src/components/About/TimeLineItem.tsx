"use client";

import { motion } from "framer-motion";

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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative pb-12"
    >
      <span className="absolute left-5 top-0 h-full w-0.5 bg-purple-300 dark:bg-purple-700" />
      <span className="absolute left-1 top-1 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-800 flex items-center justify-center text-purple-600 dark:text-purple-300 shadow-md">
        {icon}
      </span>

      <div
        className={`ml-16 p-4 rounded-lg ${
          isCurrent
            ? "bg-purple-50 dark:bg-purple-900/30 shadow-md ring-1 ring-purple-300 dark:ring-purple-600"
            : ""
        }`}
      >
        <time className="text-sm text-gray-500 dark:text-gray-400 block mb-1">
          {date}
        </time>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          {title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mt-1">{description}</p>
      </div>
    </motion.article>
  );
};

export default TimeLineItem;
