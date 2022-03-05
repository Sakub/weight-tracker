import { useState } from "react";
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

  const labels = weightHistory.map(
    (entry) => `${entry.day} ${entry.month.slice(0, 3)}`
  );

  const chartGridColor = "rgba(255, 255, 255, 0.2)"

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
