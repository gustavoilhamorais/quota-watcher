import React from "react";
import Card from "../Card";
import { Chart, Bars, Dots, Labels, Layer, Title, Ticks } from "rumble-charts";

const ChartModel = ({ id, series, title, coin }) => {
  return (
    <Card className="mt-5" id={id} header={
      <h3 className="text-center">{title}</h3>}>
      <div className="row d-flex justify-content-center">
        <Chart width={900} height={380} series={series} minY={-1000} maxY={700000}>
          <Title position="middle center" style={{ textAnchor: "middle" }}>
            {coin}
          </Title>
          <Bars innerPadding="0.5%" groupPadding="5%" />
          <Layer width="95%" height="100%" position="center top">
            <Dots ellipseRadiusY={10} dotType="symbol" symbolType="diamond"/>
            <Labels
              label={({ point, pointIndex }) => pointIndex === 1 ? `${point.y || ""} %` : `$ ${point.y || ""}`}
              labelAttributes={{ y: 0 }}
              dotStyle={{
                textAnchor: "middle",
                dominantBaseline: "text-after-edge",
                fontFamily: "sans-serif",
                fontSize: "20px"
              }}
            />
            <Ticks
              axis="y"
              opacity={10}
              lineLength="99%"
              lineVisible={true}
              lineOffset={50}
              lineStyle={{ stroke: "lightgray" }}
              labelStyle={{ dominantBaseline: "middle", fill: "lightgray" }}
              labelAttributes={{ x: 0 }}
            />
          </Layer>
        </Chart>
      </div>
    </Card>
  );
};

export default ChartModel;
