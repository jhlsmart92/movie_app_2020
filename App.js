import React from 'react';
import PropTypes from "prop-types";



class App extends React.Component {

  state = {
    count: 0
  };
  add = () => {
    console.log("add")
    this.setState(current => ({count: current.count + 1}))
  };
  minus = () => {
    console.log("minus")
    this.setState(current => ({count: current.count - 1}))
  };
  componentDidMount() {
    console.log("component rendered")
  }
  componentDidUpdate() {
    console.log("i just updated")
  }
  componentWillUnmount() {
    console.log("goodbye cruel world")
  }
  render() {
    console.log("I am rendering")
    return (
    <div>
      {console.log("I am rendering next return")}
      <h1>The number is: {this.state.count}</h1>
      <button onClick = {this.add}>Add</button>
      <button onClick = {this.minus}>Minus</button>
    </div>);
  }

}

export default App;