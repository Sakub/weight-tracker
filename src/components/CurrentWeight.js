import { useState } from "react";

const CurrentWeight = () => {
  const [currentWeight, setCurrentWeight] = useState(60);

  return (
    <p className="view__currentWeight slideDown">
      Current weight: <br />
      <span className="text-accent currentWeight__value">{currentWeight}</span>
      kg
    </p>
  );
};

export default CurrentWeight;
