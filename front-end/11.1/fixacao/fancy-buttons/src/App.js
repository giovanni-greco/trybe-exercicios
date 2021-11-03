import './App.css';
import React from 'react'


class App extends React.Component {
  constructor() {
    super()
    this.btn3 = this.btn3.bind(this)
    this.state = {
      clickCounter: 0
    }
  }
  
  btn1() {
    console.log('hi')
    
  }
  
  btn2() {
    console.log('hello')
  }
  
   btn3() {
     if (this.state.clickCounter % 2 === 0) {
       const btn = document.getElementsByClassName('btn3')
       btn.color = 'green'
     }
    this.setState((previousState, _props) => ({
      clickCounter: previousState.clickCounter + 1
    }));
  }

  render() {
  return (
    <div className="App">
   <button onClick={this.btn1}>Btn 1</button>
   <button onClick={this.btn2}>Btn 2</button>
   <button className="btn3" onClick={this.btn3}>{this.state.clickCounter}</button>
    </div>
  );}
}

export default App;
