import React, { Component } from 'react'

export default class State extends Component {
    constructor(props){
        super(props);
        this.state = {brand: "Ford"};
        
    }
    

    changeBrand = () => {
      
      // let val=brand;
      // if (val==="Ford") {
        (this.setState({brand: "Toyato"}))

      // }else{
      //   this.setState({brand: "Ford"})
      // }
      
    }

  render() {
    return (
      <div>
        <h1>My Car {this.state.brand}</h1>
        <button onClick={this.changeBrand}>Chane the brand </button>
      </div>
    )
  }
}
