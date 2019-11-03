import React, { Component } from "react";
import Month from "./month";
class Calendar extends Component {
  state = {
    months: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    year: new Date().getFullYear(),
    daysArray: this.arrayOfDays(new Date().getFullYear())
  };
  render() {
    let selectableYears = []; // initialize array of years to display for selection
    for (let i = -5; i < 5; i++) {
      selectableYears.push(this.state.year + i);
    }
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-sm-4">
            <button
              className="btn btn-secondary prv-btn"
              onClick={this.previousYear}
            >
              Previous year
            </button>
          </div>
          <div className="col-sm-4 yr-select">
            <select onChange={this.yearSelect} value={this.state.year}>
              {selectableYears.map(yr => {
                return (
                  <option key={yr} value={yr}>
                    {yr}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-sm-4">
            <button
              className="btn btn-secondary nxt-btn"
              onClick={this.nextYear}
            >
              Next year
            </button>
          </div>
        </div>
        <div className="row">
          {this.state.months.map((month, i) => (
            <Month
              key={month}
              month={month}
              monthIndex={i}
              days={32 - new Date(this.state.year, i, 32).getDate()}
              year={this.state.year}
              daysArray={this.state.daysArray[i]}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
  yearSelect = e => {
    this.handleYearChange(parseInt(e.target.value));
  };
  previousYear = () => this.handleYearChange(this.state.year - 1);
  nextYear = () => this.handleYearChange(this.state.year + 1);
  handleYearChange = yr => {
    this.setState({
      year: yr,
      daysArray: this.arrayOfDays(yr)
    });
  };
  arrayOfDays(year) {
    let daysArray = [];
    for (let i = 0; i < 12; i++) {
      const firstDayOfMonth = new Date(year, i, 1).getDay();
      const daysInMonth = 32 - new Date(year, i, 32).getDate();
      let weeks = [];
      let week = Array(firstDayOfMonth).fill(0);
      for (let j = 0; j < daysInMonth; j++) {
        if (week.length < 7) {
          week.push(j + 1);
        } else {
          weeks.push(week);
          // clear week array and populate dates in new week
          week = [];
          week.push(j + 1);
        }
      }
      // push last week of month into array
      weeks.push(
        week.length < 7 ? week.concat(Array(7 - week.length).fill(0)) : week
      );
      daysArray.push(weeks);
    }
    return daysArray;
  }
}

export default Calendar;
