import React from "react";

class EvenAndOdd extends React.Component {
  constructor() {
    super();
    this.state = {
      evens: [],
      odds: [],
      userInput: ""
    };
  }
  handleInputChange = e => {
    this.setState({ userInput: e.target.value });
  };
  handleCalculation = () => {
    const { userInput } = this.state;
    let userInputArr = userInput.split(",");
    // console.log(userInputArr);
    let evenArr = [];
    let oddArr = [];

    userInputArr.map(el => {
      if (el % 2 === 0) {
        evenArr.push(parseInt(el, 10));
      } else {
        oddArr.push(parseInt(el, 10));
      }
    });

    //  WAY 2
    // for (let i = 0; i < userInputArr.length; i++) {
    //   if (userInputArr[i] % 2 === 0){
    //     evenArr.push(parseInt(userInputArr[i]))
    //   }else{
    //     oddArr.push(parseInt(userInputArr[i]))
    //   }
    // }

    this.setState({
      evens: evenArr,
      odds: oddArr
    });
  };
  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input className="inputLine" onChange={this.handleInputChange} />
        <button className="confirmationButton" onClick={this.handleCalculation}>
          Split
        </button>
        <span className="resultsBox">
          Evens:{JSON.stringify(this.state.evens)}
        </span>
        <span className="resultsBox">
          Odds: {JSON.stringify(this.state.odds)}
        </span>
      </div>
    );
  }
}
export default EvenAndOdd;
