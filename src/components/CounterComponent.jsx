import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  constructor() {
    super();
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  render() {
    return (
      <div>
        <h1>Click Count : </h1>
        <span>{this.showCustomCount()}</span>
        <br />
        <button
          onClick={() => {
            this.handleButtonClick("pelumi");
          }}
          className="btn btn-primary"
        >
          click me
        </button>
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

  handleButtonClick(arg) {
    console.log(arg);
    this.setState({ count: this.state.count + 1 });
  }
}

export default Counter;
