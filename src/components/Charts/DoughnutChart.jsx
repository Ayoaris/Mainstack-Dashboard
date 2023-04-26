import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

import { data } from "../../db/data";
const { top_locations } = data;

function DoughnutChart() {
  const country = top_locations.map((item) => item.country);
  const percent = top_locations.map((item) => item.percent);

  const data = {
    labels: country,
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
      <div className="container-fluid mr-6 lg:w-[35%] lg:h-[40%]">
        <Doughnut data={data} options={options}></Doughnut>
      </div>
    </>
  );
}

export default DoughnutChart;
