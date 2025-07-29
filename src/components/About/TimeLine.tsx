import TimeLineItem from "./TimeLineItem";
import { timelineData } from "./aboutData";

const TimeLine: React.FC = () => {
  return (
    <div>
      {timelineData.map((item) => {
        return (
          <TimeLineItem
            key={item.id}
            date={item.date}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        );
      })}
    </div>
  );
};

export default TimeLine;
