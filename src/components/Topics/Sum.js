import React, { Component } from 'react'

class Sum extends Component {
    constructor() {
        super();
        this.state = {
            number1:0,
            number2:0,
            sum: null
        }
    }
  update1(value){
    this.setState({number1: parseInt(value,10)})
  }
  update2(value){
      this.setState({number2:parseInt(value,10)})
  }
  total(num1,num2){
     this.setState({sum:num1+num2})
  }
 
    render() {
        return (
            <div className="puzzleBox sumPB">
            <h4> Sum</h4>
            <input className="inputLine" type='number' onChange={(e) => this.update1(e.target.value)}></input>
            <input className="inputLine" type='number' onChange={(e) => this.update2(e.target.value)}></input>
            <button className="confirmationButton" onClick={()=>this.total(this.state.number1, this.state.number2)}> Add </button>
            <span className="resultsBox"> Sum: {this.state.sum} </span>
        </div>
        )
    }
}
export default Sum


// import React from "react";

// class Sum extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       number1: 0,
//       number2: 0,
//       sum: null
//     };
//   }
//   handleInputChange = e => {
//     this.setState({
//       // number1: e.target.value,
//       // number2: e.target.value,
//       [e.target.name]: e.target.value
//     });
//   };
//   handleSum = () => {
//     const { sum, number1, number2 } = this.state;
//     this.setState({
//       sum: parseInt(number1) + parseInt(number2)
//     });
//   };

//   render() {
//     return (
//       <div className="puzzleBox sumPB">
//         <h4>Sum</h4>
//         <input
//           className="inputLine"
//           type="number"
//           name="number1"
//           onChange={this.handleInputChange}
//         />
//         <input
//           className="inputLine"
//           type="number"
//           name="number2"
//           onChange={this.handleInputChange}
//         />
//         <button className="confirmationButton" onClick={this.handleSum}>
//           Add
//         </button>
//         <span className="resultsBox">Sum: {this.state.sum}</span>
//       </div>
//     );
//   }
// }
// export default Sum;

