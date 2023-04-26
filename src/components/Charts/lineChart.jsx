import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import { data } from "../../db/data";
import info from "../../assets/info.svg";

function LineChart() {
  const { graph_data } = data;

  const { views } = graph_data;

  const keys = Object.keys(views);
  const values = Object.values(views);
  const options = {
    // responsive: true,
    maintainAspectRatio: false,

    scales: {
      y: {
        beginAtZero: false,
        min: 0,
        max: 1000,
        ticks: {
          stepSize: 200,
        },
      },
    },
  };

  const chartData = {
    labels: keys.map((item) => item),
    datasets: [
      {
        label: "Data",
        data: values.map((item) => item),
        borderColor: "#FF5403",
        fill: true,
        backgroundColor: "#FFEEE5",
        pointBackgroundColor: "rgba(0, 0, 255, 0.2)",
        pointBorderColor: "rgba(0, 0, 255, 0.2)",
        pointHoverBackgroundColor: "rgba(0, 0, 255, 0.2)",
        pointHoverBorderColor: "rgba(0, 0, 255, 0.2)",
      },
    ],
  };

  return (
    <div className="h-auto w-full border rounded-lg px-5">
      <div className="flex justify-between">
        <h1 className="py-4 text-xl font-semibold text-[#131316]">
          Page Views
        </h1>
        <img src={info} alt="info" />
      </div>
      <p className="text-base text-[#31373D] leading-5 h-6">All time</p>
      <div>
        <p className="py-6 text-4xl font-bold text-[#131316]">500</p>
      </div>
      <div className=" h-[40vh] lg:h-[60vh]">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
}

export default LineChart;
