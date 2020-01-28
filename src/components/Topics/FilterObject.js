import React, { Component } from "react";

class FilterObject extends Component {
  constructor() {
    super();
    this.state = {
      unfilteredArr: [
        { name: "Jimmy Joe", title: "Hack0r", age: 12 },
        { name: "Jeremy Schrader", age: 24, hairColor: "brown" },
        { name: "Carly Armstrong", title: "CEO" }
      ],
      filteredArr: [],
      userInput: ""
    };
  }
  handleInputChange = e => {
    this.setState({
      userInput: e.target.value
    });
  };
  handleFilter = () => {
    const { unfilteredArr, userInput } = this.state;
    let filteredArr = unfilteredArr.filter(el => el.hasOwnProperty(userInput));
    this.setState({ filteredArr });
  };
  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">
          Original Array:{JSON.stringify(this.state.unfilteredArr)}
        </span>
        <input
          className="inputLine"
          name="userInput"
          onChange={this.handleInputChange}
        />
        <button className="confirmationButton" onClick={this.handleFilter}>
          Filter
        </button>
        <span className="resultsBox filterObjectRB">
          Filtered:{JSON.stringify(this.state.filteredArr)}{" "}
        </span>
      </div>
    );
  }
}
export default FilterObject;
