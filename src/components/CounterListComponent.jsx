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
        <button onClick={this.performReset}>RESET</button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            value={counter.value}
            id={counter.id}
            onDelete={this.deleteCounter}
            onIncrease={this.incrementCounter}
          />
        ))}
      </React.Fragment>
    );
  }

  performReset = () => {
    for (let i = 0; i < this.state.counters.length; i++) {
      this.state.counters[i].value = 0;
    }
    this.setState({ counters: this.state.counters });
  };

  incrementCounter = (counterId) => {
    console.log("increment called for counter - " + counterId);
    for (let i = 0; i < this.state.counters.length; i++) {
      if (this.state.counters[i].id == counterId) {
        this.state.counters[i].value++;
        break;
      }
    }
    this.setState({ counters: this.state.counters });
  };

  deleteCounter = (counterId) => {
    console.log("Delete counter called - " + counterId);
    let newCounters = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({ counters: newCounters });
  };
}

export default CounterList;
