import TimeLineItem from "./TimeLineItem";
import { timelineData } from "./aboutData";

const TimeLine: React.FC = () => {
  return (
    <div className="relative mt-14 ml-6">
      {timelineData.map((item, index) => (
        <TimeLineItem
          key={item.id}
          date={item.date}
          title={item.title}
          description={item.description}
          icon={item.icon}
          isCurrent={index === timelineData.length - 1}
        />
      ))}
    </div>
  );
};

export default TimeLine;
