import React, { Component } from "react";
import MyPropsComponent from "./MyPropsComponent";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { counter: 1 };

    this.addOne = this.incrementCounter.bind(this);
  }

  incrementCounter() {
    console.log(this.state.counter);
    this.setState({ counter: this.state.counter + 1});
  }

  render() {
    return (
      <div>
        <h1>Counter is {this.state.counter}</h1>
        <button onClick={this.addOne}>Class Button</button>
        <MyPropsComponent counter= {this.state.counter} addOne = {this.addOne}/>
      </div>
    );
  }
}

export default App;
