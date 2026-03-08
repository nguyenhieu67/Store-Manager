import { Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
);

function ChartBox({ title, type, data, labels }) {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: title,
        data: data,
        backgroundColor:
          type === "line"
            ? "rgba(54, 162, 235, 0.2)"
            : ["#36A2EB", "#2ECC71", "#FFCE56"],
        borderColor: type === "line" ? "#36A2EB" : "#fff",
        borderWidth: 2,
        tension: 0.4,
        filter: type === "line",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => value.toLocaleString("en-EN") + "$",
        },
      },
    },
  };
  return (
    <div className="w-full rounded-2xl bg-white p-6 shadow-md">
      <h3 className="mb-4 text-lg font-bold text-slate-800">{title}</h3>

      <div className="relative h-75 w-full">
        {type === "line" ? (
          <Line data={chartData} options={options} />
        ) : (
          <Doughnut data={chartData} options={options} />
        )}
      </div>
    </div>
  );
}

export default ChartBox;
