import React, { Component } from 'react'

class Palindrome extends Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            palindrome: '',
        }
    }
  handleChange(value) {
    this.setState({ userInput: value});
  }
    palindromeCheck(userInput) {
        let front = userInput;
        let back = userInput;
        back = back.split('').reverse().join('');

        if (front === back) {
            this.setState({ palindrome: 'true' })
        } else {
            this.setState({ palindrome: 'false'})
        }
    }

    render() {
        return (
            <div className="puzzleBox palindromePB">
                <h4> Palindrome </h4>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={()=>this.palindromeCheck(this.state.userInput)}> Check </button>
                <span className="resultsBox"> Palindrome: {this.state.palindrome} </span>
            </div>
        )
    }
}
export default Palindrome
