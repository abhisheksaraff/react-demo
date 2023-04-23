import React, {Component} from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(<div>
      <p>Click Me!!</p>
      <button onClick={this.props.addOne}>{this.props.counter}</button>
    </div>);
  }
}

export default MyComponent;