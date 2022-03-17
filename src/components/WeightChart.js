import { useState, useContext } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import WeightContext from "../contexts/WeightContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const WeightChart = () => {
  const weightHistory = useContext(WeightContext);

  const labels = weightHistory.map(
    (entry) => `${entry.day} ${entry.month.slice(0, 3)}`
  );

  const chartGridColor = "rgba(255, 255, 255, 0.2)";

  const [options, setOptions] = useState({
    responsive: true,
    scales: {
      y: {
        grid: {
          color: chartGridColor,
        },
      },
      x: {
        grid: {
          color: chartGridColor,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  });

  const [data, setData] = useState({
    labels,
    datasets: [
      {
        data: weightHistory.map((entry) => entry.weight),
        borderColor: "#00b0ff",
        color: "#00b0ff",
      },
    ],
  });

  return (
    <div className="view__weightChart slideDown">
      <Line data={data} options={options} />
    </div>
  );
};

export default WeightChart;
