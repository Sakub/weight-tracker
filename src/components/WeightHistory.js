import { useState } from "react";

const WeightHistory = () => {
  const [weightHistory, setWeightHistory] = useState([
    {
      date: "12 Jan",
      weight: 60,
    },
    {
      date: "17 Jan",
      weight: 65,
    },
  ]);

  return (
    <div className="view__weightHistory">
      {weightHistory.map((entry) => (
        <p>{entry.date}</p>
      ))}
    </div>
  );
};

export default WeightHistory;
