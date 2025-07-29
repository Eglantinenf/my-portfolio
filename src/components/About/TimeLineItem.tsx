"use client";

type TimeLineItemProps = {
  date: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const TimeLineItem: React.FC<TimeLineItemProps> = ({
  date,
  title,
  description,
  icon,
}) => {
  return (
    <article>
      <div className="flex items-start gap-4 mb-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 shrink-0">
          {icon}
        </div>
        <div>
          <time className="text-sm text-gray-500 dark:text-gray-400">
            {date}
          </time>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            {title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mt-1">{description}</p>
        </div>
      </div>
    </article>
  );
};

export default TimeLineItem;
