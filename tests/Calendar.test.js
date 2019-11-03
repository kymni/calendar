import React from "react";
import ReactDOM from "react-dom";
import Calendar from "../src/components/calendar";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Calendar />, div);
});
