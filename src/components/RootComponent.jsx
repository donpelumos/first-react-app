import React, { Component } from "react";
import NavbarComponent from "./NavbarComponent";
import CounterListComponent from "./CounterListComponent";
import { Route, Switch, Link } from "react-router-dom";
import App from "./../App";

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
        <Switch>
          <Route path="/app" component={App} />
          <Route
            path="/"
            render={() => (
              <div>
                <NavbarComponent
                  componentCount={
                    this.state.counters.filter((counter) => counter.value > 0)
                      .length
                  }
                />
                <Link to="/app">React Default Page Link</Link>
                <br />
                <CounterListComponent
                  counters={this.state.counters}
                  onReset={this.performReset}
                  onIncrement={this.incrementCounter}
                  onDecrement={this.decrementCounter}
                  onDelete={this.deleteCounter}
                />
              </div>
            )}
          />
        </Switch>
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

  decrementCounter = (counterId) => {
    console.log("increment called for counter - " + counterId);
    let counters = this.state.counters;
    for (let i = 0; i < counters.length; i++) {
      if (counters[i].id == counterId && counters[i].value > 0) {
        counters[i].value--;
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
