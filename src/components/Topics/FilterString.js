// import React, { Component } from 'react'

// class FilterString extends Component {
//     constructor() {
//         super();
    
//         this.state = {
//           names: ['Sam', 'Anna','Molly','Stacy','Kevin', 'George', 'Blare', 'Jenn', 'Zach', 'Neil'],
//           userInput: '',
//           filteredNames:[],
//         };
//       }
    
//       handleChange(val) {
//         this.setState({ userInput: val });
//       }
//       filterNames(userInput) {
//         let names = this.state.names;
//         let filteredNames = [];
    
//         for ( let i = 0; i < names.length; i++ ) {
//           if ( names[i].includes(userInput) ) {
//             filteredNames.push(names[i]);
//           }
//         }
//         this.setState({ filteredNames: filteredNames });
//   }

//     render() {
//         return (
//             <div className="puzzleBox filterStringPB">
//               <h4> Filter String</h4>
//               <span className="puzzleText">Names: {JSON.stringify(this.state.names)}</span>
              
//               <input className="inputLine"
//               onChange={ (e)=>this.handleChange(e.target.value) }>
//               </input>

//               <button className="confirmationButton"
//               onClick={()=>this.filterNames(this.state.userInput) } >Filter</button>

//               <span className="resultsBox filterObjectRB"> Filtered Names: {JSON.stringify(this.state.filteredNames)}</span>               
//             </div>
//         )
//     }
// }
// export default FilterString



import React, { Component } from "react";

class FilterString extends Component {
  constructor() {
    super();
    this.state = {
      unfilteredArr: [
        "James",
        "Jessica",
        "Melody",
        "Tyler",
        "Blake",
        "Jennifer",
        "Mark",
        "Maddy"
      ],
      userInput: "",
      filteredArr: []
    };
  }
  handleInputChange = e => {
    this.setState({ userInput: e.target.value });
  };
  filterString = () => {
    const { unfilteredArr, userInput } = this.state;
    let filteredArr = unfilteredArr.filter(el => el.includes(userInput));
    this.setState({ filteredArr });
  };
  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">
          Names:{JSON.stringify(this.state.unfilteredArr)}
        </span>
        <input className="inputLine" onChange={this.handleInputChange} />
        <button className="confirmationButton" onClick={this.filterString}>
          Filter
        </button>
        <span className="resultsBox filterStringRB">
          Filtered Names:{JSON.stringify(this.state.filteredArr)}
        </span>
      </div>
    );
  }
}
export default FilterString;
