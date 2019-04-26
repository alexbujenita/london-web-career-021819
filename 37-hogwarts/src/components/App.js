import React, { Component } from "react";

import "../App.css";

import HogList from "./HogList";
import Nav from "./Nav";

import hogs from "../porkers_data";

class App extends Component {
  state = {
    hogs,
    viewOnlyGreased: false
  };

  sortByName = () => {
    const sorted = this.state.hogs.sort((hogA, hogB) => {
      if (hogA.name < hogB.name) return -1;
      return 1;
    });

    this.setState({ hogs: sorted });
  };

  sortByWeight = () => {
    const weight =
      "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water";
    const sorted = this.state.hogs.sort((hogA, hogB) => {
      if (hogA[weight] < hogB[weight]) return 1;
      return -1;
    });

    this.setState({ hogs: sorted });
  };

  toggleGreased = () => {
    this.setState({ viewOnlyGreased: !this.state.viewOnlyGreased });
  };

  filteredHogs = () => {
    return this.state.viewOnlyGreased
      ? this.state.hogs.filter(hog => hog.greased === true)
      : this.state.hogs;
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <button onClick={this.sortByName}>sort by name</button>
        <button onClick={this.sortByWeight}>sort by weight</button>
        <button onClick={this.toggleGreased}>toggle greased</button>
        <HogList hogs={this.filteredHogs()} />
      </div>
    );
  }
}

export default App;
