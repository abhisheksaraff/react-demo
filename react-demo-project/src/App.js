import React, { Component } from "react";
import MyComponent from "./MyComponent";

class App extends Component {
  constructor(props) {
    super(props);
  }

  consoleLogFunction() {
    console.log("button has been clicked");
  }

  render() {
    return <MyComponent title="React" action={this.consoleLogFunction} />;
  }
}

export default App;
