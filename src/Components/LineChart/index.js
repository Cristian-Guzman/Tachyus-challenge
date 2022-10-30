import React from "react";
import { render } from "react-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export const LineChart = ({year, oil, water, gas, waterInj}) => {
    const options = {
        chart: {
          type: "line"
        },
        xAxis: {
            categories: year,
          },
        title: {
          text: "My chart"
        },
        series: [
          {
            name: "Oil",
            data: oil
          },
          {
            name: "Water",
            data: water
          },
          {
            name: "Gas",
            data: gas
          },
          {
              name: "waterInj",
              data: waterInj
            }
        ]
      }
  return (
    <>
    <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  )
}
