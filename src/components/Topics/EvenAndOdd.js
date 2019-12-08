import React, { Component } from 'react'

class EvenAndOdd extends Component {
    constructor() {
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }
    inputChange(value) {
        this.setState({ userInput: value })
    }

    assignEvenAndOdds(userInput) {
        let inputNums = userInput.split(',')
        //  console.log(inputNums)
        let evens = [];
        let odds = [];


        inputNums.map(function (element) {
            if (element % 2 === 0) {
                evens.push(parseInt(element));
            } else {
                odds.push(parseInt(element))
            }

        })

        this.setState({ evenArray: evens, oddArray: odds })

    }

    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input
                    className="inputLine"
                    onChange={(e) => this.inputChange(e.target.value)}>
                </input>
                <button
                    className="confirmationButton"
                    onClick={() => this.assignEvenAndOdds(this.state.userInput)}>SPLIT
                </button>
    
                <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>

            </div>
        )
    }
}
export default EvenAndOdd