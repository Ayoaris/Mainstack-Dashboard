import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
import { data } from "../../db/data";
const { top_sources } = data;

function DoughnutChart() {
  const source = top_sources.map((item) => item.source);
  const percent = top_sources.map((item) => item.percent);

  const data = {
    labels: source,
    datasets: [
      {
        label: "Top Locations",
        data: percent,
        backgroundColor: [
          "#599EEA",
          "#844FF6",
          "#F09468",
          "#FAB70A",
          "#0FB77A",
        ],
        borderColor: ["#599EEA", "#844FF6", "#F09468", "#FAB70A", "#0FB77A"],
        borderWidth: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };
  return (
    <>
      <div className="container-fluid mt-3 mb-3 w-[70%] h-[50%]">
        <Doughnut data={data} options={options}></Doughnut>
      </div>
    </>
  );
}

export default DoughnutChart;
