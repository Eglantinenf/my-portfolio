import TimeLineItem from "./TimeLineItem";
import { timelineData } from "./aboutData";

const TimeLine: React.FC = () => {
  return (
    <div className="relative border-l-2 border-purple-300 dark:border-purple-700 ml-5 pl-6">
      {timelineData.map((item) => (
        <TimeLineItem
          key={item.id}
          date={item.date}
          title={item.title}
          description={item.description}
          icon={item.icon}
        />
      ))}
    </div>
  );
};

export default TimeLine;
