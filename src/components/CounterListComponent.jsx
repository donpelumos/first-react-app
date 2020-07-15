import React, { Component } from "react";
import Counter from "./CounterComponent";

class CounterListComponent extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <button
          className="btn"
          onClick={() => this.props.onReset()}
          style={{ margin: "20px" }}
        >
          RESET
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            value={counter.value}
            id={counter.id}
            onDelete={() => this.props.onDelete(counter.id)}
            onIncrease={() => this.props.onIncrement(counter.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default CounterListComponent;
