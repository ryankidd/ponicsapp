import React, { useContext } from "react"
import Chart from "chart.js";
import chartOptions from "components/Cards/custom-card-configs"
import { GlobalContext } from "contexts/context"
import stateMeta from "contexts/state-meta"
import ModeButtons from "components/ButtonContainers/ModeButtons"

export default function CardLineChart( props ) {
  // Get global context
  const [mode, room] = useContext(GlobalContext)
  const cardHeading = room ? room : "No Room Selected"
  const cardData = props.cardData.map(a => a.data[mode])
  const meta = stateMeta();
  const modeMeta = meta.modes.find(m => m.name === mode)
  const cardSubHeading = modeMeta.labels.heading

  React.useEffect(() => {

    var config = {
      type: "line",
      data: {
        labels: modeMeta.labels.chart,
        datasets: [
          {
            label: '',
            backgroundColor: "#4c51bf",
            borderColor: "#4c51bf",
            data: cardData,
            fill: false,
          },
        ],
      },
      options: chartOptions
    };
    var ctx = document.getElementById("line-chart").getContext("2d");
    window.myLine = new Chart(ctx, config);
  });

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
                { cardHeading }
              </h6>
              <h2 className="text-white text-xl font-semibold">{ cardSubHeading }</h2>
            </div>
          </div>
        </div>
       <ModeButtons />
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-350-px">
            <canvas id="line-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
