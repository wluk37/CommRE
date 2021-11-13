import React from "react";
import Chart from "react-google-charts";

const PieChart = (props) => {
  const { propertyTypes, agent } = props;
  return (
    <Chart
      width={"30rem"}
      height={"20rem"}
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={[["Property Type", "Number of Sales"]].concat(propertyTypes)}
      options={{
        title: `Sales by ${agent}`,
      }}
      rootProps={{ "data-testid": "1" }}
    />
  );
};

export default PieChart;
