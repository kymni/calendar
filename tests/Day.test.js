import React from "react";
import ReactDOM from "react-dom";
import Day from "../src/components/day";

it("renders without crashing", () => {
  const tr = document.createElement("tr");
  ReactDOM.render(<Day key="day" date="1" month="1" year="2000" />, tr);
});
