import React, { Component } from "react";
import Counter from "./CounterComponent";

class CounterList extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 5 },
      { id: 3, value: 0 },
    ],
  };
  render() {
    return (
      <React.Fragment>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            value={counter.value}
            id={counter.id}
            onDelete={this.deleteCounter}
          />
        ))}
      </React.Fragment>
    );
  }

  deleteCounter = (counterId) => {
    console.log("Delete counter called - " + counterId);
    let counters = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({ counters: counters });
  };
}

export default CounterList;
