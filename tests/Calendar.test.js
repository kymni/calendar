import React from "react";
import ReactDOM from "react-dom";
import Calendar from "../src/components/calendar";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Calendar />, div);
});

describe("functions", () => {
  it("returns an array", () => {
    const month = new Calendar();
    expect(Array.isArray(month.arrayOfDays(2000))).toBe(true);
  });
});
