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
    <div>
      <article>
        <time>{date}</time>
        <div>{icon}</div>
        <h3>{title}</h3>
        <p>{description}</p>
      </article>
    </div>
  );
};

export default TimeLineItem;
