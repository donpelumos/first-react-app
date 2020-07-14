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
    let counters = this.state.counters;
    for (let i = 0; i < counters.length; i++) {
      counters[i].value = 0;
    }
    this.setState({ counters: counters });
  };

  incrementCounter = (counterId) => {
    console.log("increment called for counter - " + counterId);
    let counters = this.state.counters;
    for (let i = 0; i < counters.length; i++) {
      if (counters[i].id == counterId) {
        counters[i].value++;
        break;
      }
    }
    this.setState({ counters: counters });
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
