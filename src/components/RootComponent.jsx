import React, { Component } from "react";
import NavbarComponent from "./NavbarComponent";
import CounterListComponent from "./CounterListComponent";

class RootComponent extends Component {
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
        <NavbarComponent
          componentCount={
            this.state.counters.filter((counter) => counter.value > 0).length
          }
        />
        <CounterListComponent
          counters={this.state.counters}
          onReset={this.performReset}
          onIncrement={this.incrementCounter}
          onDelete={this.deleteCounter}
        />
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

export default RootComponent;
