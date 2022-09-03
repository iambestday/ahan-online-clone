import React from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";

function index(chartData) {
 
  return (
    <>
      <Sparklines data={chartData}>
        <SparklinesLine color="blue" />
      </Sparklines>
    </>
  );
}

export default index;
