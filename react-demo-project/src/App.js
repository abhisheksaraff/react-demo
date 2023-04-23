import React, { Component } from "react";
import MyComponent from "./MyComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.thisComponentsLog = this.consoleLogFunction.bind(this);
  }

  consoleLogFunction() {
    console.log(this);
    console.log("button has been clicked");
  }

  render() {
    return <MyComponent title="React" action={this.thisComponentsLog} />;
  }
}

export default App;
