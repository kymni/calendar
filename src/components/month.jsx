import React, { Component } from "react";
import Day from "./day";

// should return a grid of days in the month
class Month extends Component {
  state = {
    daysOfWeek: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  };
  render() {
    return (
      <div className="col-sm-4">
        <table className="table calendar-table">
          <caption>{this.props.month}</caption>
          <thead>
            <tr>
              {this.state.daysOfWeek.map(day => {
                return <th key={day}>{day}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {this.props.daysArray.map((week, i) => {
              return (
                <tr key={i}>
                  {week.map((day, i) => (
                    <Day
                      key={
                        this.state.daysOfWeek[i] +
                        "-" +
                        day +
                        "-" +
                        this.props.month +
                        "-" +
                        this.props.year
                      }
                      date={day}
                      month={this.props.month}
                      year={this.props.year}
                    />
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Month;
