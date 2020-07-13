import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <div>
        <h1>Click Count : </h1>
        <span>{this.showCustomCount()}</span>
        <br />
        <button class="btn btn-primary">click me</button>
      </div>
    );
  }

  showCustomCount() {
    let { count } = this.state;
    return count == 0 ? (
      <span style={{ color: "white", background: "red" }}>{count}</span>
    ) : (
      <span style={{ color: "white", background: "blue" }}>{count}</span>
    );
  }
}

export default Counter;
