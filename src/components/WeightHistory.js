import { useState } from "react";
import "../views/css/Dashboard.css";

const WeightHistory = () => {
  const getWeightDifference = (current, next) => {
    let difference = current - next;
    if (difference === 0) return;

    difference = difference > 0 ? `+${difference}kg` : `${difference}kg`;

    return difference;
  };

  const [weightHistory, setWeightHistory] = useState([
    {
      day: "12",
      weekDay: "Mon",
      month: "January",
      weight: 60,
    },
    {
      day: "17",
      weekDay: "Tue",
      month: "January",
      weight: 65,
    },
    {
      day: "18",
      weekDay: "Sun",
      month: "January",
      weight: 73,
    },
    {
      day: "19",
      weekDay: "Frid",
      month: "January",
      weight: 65,
    },
    {
      day: "20",
      weekDay: "Mon",
      month: "January",
      weight: 65,
    },
  ]);

  return (
    <div className="view__weightHistory fadeIn">
      <div className="scrollable scrollable-y">
        {weightHistory.map((entry, index, array) => (
          <div className={"view__weightEntry"} key={entry.day}>
            <div className="weightEntry__date">
              <p className="date__day text-bold">{entry.day}</p>
              <p className="date__weekDay">{entry.weekDay}</p>
            </div>
            <div className="weightEntry__rightSection">
              <p className="weightEntry__month">{entry.month}</p>
              <p className="weightEntry__weight text-bold">
                {entry.weight}kg{" "}
                {array[index + 1] && (
                  <span className={'text-regular'}>
                    {getWeightDifference(
                      array[index].weight,
                      array[index + 1].weight
                    )}
                  </span>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeightHistory;
