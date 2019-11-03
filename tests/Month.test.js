import React from "react";
import ReactDOM from "react-dom";
import Month from "../src/components/month";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Month
      key="month"
      month="Jan"
      monthIndex="0"
      days="30"
      year="2000"
      daysArray={[[1, 2, 3, 4, 5, 6, 7]]}
    />,
    div
  );
});
