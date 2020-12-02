//import logo from './logo.svg';
//import './App.css';
import React, { Component } from 'react';
import Counter from './count/counter';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
    count: 0,
    bgColor: 'white' 
  };
  this.addition = this.addition.bind(this)
  this.reset = this.reset.bind(this)
  this.substract = this.substract.bind(this)
}
  addition = () => {
    this.setState({
      count: this.state.count + 1,
      bgColor: this.randomColor()
    }
    ) 
    // console.log(this.state.bgColor);
  }

  substract = () => {
    this.setState({
      count: this.state.count - 1,
      bgColor: this.randomColor()
    }
    ) 
    // console.log(this.state.num + 1);
  }

  reset = () => {
    this.setState({
      count: 0,
      bgColor: 'white'
    }
    ) 
    // console.log(this.state.num + 1);
  }
  randomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }

  render(){
    return(
      <div>
        <center>
          <h1>BUTTON COUNTER</h1>
          <Counter count = {this.state.count} bgColor = {this.state.bgColor} 
            addition = {this.addition} substract = {this.substract} reset = {this.reset}> 
          </Counter>
        </center>
    </div>
    )
  }

}

export default App;
