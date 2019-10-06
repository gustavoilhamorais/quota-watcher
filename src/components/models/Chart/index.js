import React from "react";
import Card from "../Card";
import { Chart, Bars, Dots, Labels, Layer, Title, Ticks } from "rumble-charts";

const ChartModel = ({ id, series, title, coin }) => {
  return (
    <Card className="mt-5" id={id} header={
      <h3 className="text-center">{title}</h3>}>
      <div className="row d-flex justify-content-center">
        <Chart width={900} height={380} series={series} minY={-100} maxY={1000000}>
          <Title position="middle center" style={{ textAnchor: "middle" }}>
            {coin}
          </Title>
          <Bars colors="category10" innerPadding="0.5%" groupPadding="5%" />
          <Layer width="95%" height="100%" position="center top">
            <Dots />
            <Labels
              label={({ point, pointIndex }) => pointIndex === 1 ? `${point.y || ""} %` : `R$ ${point.y || ""}`}
              labelAttributes={{ y: -10 }}
              dotStyle={{
                textAnchor: "middle",
                dominantBaseline: "text-after-edge",
                fontFamily: "sans-serif",
                fontSize: "20px"
              }}
            />
            <Ticks
              axis="y"
              lineLength="100%"
              lineVisible={true}
              lineStyle={{ stroke: "lightgray" }}
              labelStyle={{ textAnchor: "start", dominantBaseline: "middle", fill: "lightgray" }}
              labelAttributes={{ x: -5 }}
            />
          </Layer>
        </Chart>
      </div>
    </Card>
  );
};

export default ChartModel;
