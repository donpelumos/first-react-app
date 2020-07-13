import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.value,
  };

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
          className="btn btn-primary m-2"
        >
          click me
        </button>
        <button
          onClick={() => {
            this.props.onDelete(this.props.id);
          }}
          className="btn btn-primary btn-danger m-2"
        >
          Delete Button
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

  handleButtonClick = (arg) => {
    console.log(arg);
    this.setState({ count: this.state.count + 1 });
  };
}

export default Counter;
