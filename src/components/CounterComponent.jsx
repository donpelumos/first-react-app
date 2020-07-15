import React, { Component } from "react";

class Counter extends Component {
  state = {};

  constructor() {
    super();
    console.log("App Constructor");
  }

  componentDidMount() {
    console.log("Component Mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component Updated");
    console.log(prevProps);
    console.log(prevState);
  }

  componentWillUnmount() {
    console.log("Component Unmounted");
  }

  render() {
    console.log("Component Rendered");
    return (
      <div style={{ margin: "20px" }}>
        <h1>Click Count : </h1>
        <span>{this.showCustomCount()}</span>
        <br />
        <button
          onClick={() => {
            this.props.onIncrease(this.props.id);
          }}
          className="btn btn-primary m-2"
        >
          +
        </button>
        <button
          onClick={() => {
            this.props.onDecrease(this.props.id);
          }}
          className="btn btn-secondary m-2"
          disabled={this.props.value < 1}
        >
          -
        </button>
        <button
          onClick={() => {
            this.props.onDelete(this.props.id);
          }}
          className="btn btn-primary btn-danger m-2"
        >
          x
        </button>
      </div>
    );
  }

  showCustomCount() {
    return this.props.value == 0 ? (
      <span className="m-20" style={{ color: "white", background: "red" }}>
        {this.props.value}
      </span>
    ) : (
      <span className="m-20" style={{ color: "white", background: "blue" }}>
        {this.props.value}
      </span>
    );
  }

  /*
  handleButtonClick = (counterId) => {
    console.log(counterId);
    this.props.value = this.props.value + 1;
    //this.setState({ count: this.props.value + 1 });
  };
  */
}

export default Counter;
