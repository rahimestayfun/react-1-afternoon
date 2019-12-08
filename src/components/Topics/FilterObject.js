import React, { Component } from 'react'

class FilterObject extends Component {
    constructor(){
        super();

        this.state={
            cats:[
                {
                    name: 'Cookie',
                    color: 'brown',
                    age: 3,
                },
                {
                    friend:'pon',
                    color: 'white'
                },
                {
                    name: 'Coral',
                    city: 'frisco',
                    age: 3,
                }
                ],
            userInput:'',
            filteredCats: []
        }
    }

       
        handleChange(value){
            this.setState({userInput: value}); 
        }

        // should update the value of filterCats array

        filterCats(userInput) {
            let cats = this.state.cats;
            let filteredCats = [];
        
            for ( let i = 0; i < cats.length; i++ ) {
              if ( cats[i].hasOwnProperty(userInput) ) {
                filteredCats.push(cats[i]);

              }
            }
            this.setState({ filteredCats: filteredCats });
        }

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
              <h4> Filter Object</h4>
              <span className="puzzleText">Original: {JSON.stringify(this.state.cats)}</span>
              
              <input className="inputLine" onChange={ (e)=>this.handleChange(e.target.value) }></input>

              <button className="confirmationButton" onClick={()=>this.filterCats(this.state.userInput) } >Filter</button>

              <span className="resultsBox filterObjectRB"> Filtered: {JSON.stringify(this.state.filteredCats)}</span>               
            </div>
        )

     
    }
}
     

export default FilterObject
