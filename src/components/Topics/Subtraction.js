import React, { Component } from 'react'

class Subtraction extends Component {
    constructor(){
        super();
        this.state={
            number1: 0,
            number2: 0,
            sum: null
        }
    }
   updateNum1(value){
       this.setState({number1: parseInt(value,10)})
   }
   updateNum2(value){
       this.setState({number2: parseInt(value,10)})
   }
   subtract(num1,num2){
       this.setState({sum: num1-num2})
   }

    render() {
        return (
            <div className="puzzleBox sumPB">
            <h4> Subtraction </h4>
            <input className="inputLine" type="number" onChange={(e)=>this.updateNum1(e.target.value)}></input>
            <input className="inputLine" type="number" onChange={(e)=>this.updateNum2(e.target.value)}></input>
            <button className="confirmationButton" onClick={()=>this.subtract(this.state.number1,this.state.number2)}> Subtract </button>
            <span className="resultsBox" >Result: {this.state.sum}</span>
          </div>

        )
    }
}

export default Subtraction