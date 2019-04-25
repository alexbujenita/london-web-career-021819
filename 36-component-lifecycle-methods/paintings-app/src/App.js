import React, { Component } from "react";

import Title from "./Title";
import PaintingList from "./PaintingList";
import Search from "./Search";

import API from "./API";

class App extends Component {
  state = {
    searchInput: "",
    paintings: []
  };

  updateSearch = newSearchInput => {
    // this.state.searchInput = 'something else' // << NO! X
    this.setState({ searchInput: newSearchInput }); // YES! :)
  };

  getFilteredPaintings = () =>
    this.state.paintings.filter(painting =>
      painting.title
        .toLowerCase()
        .includes(this.state.searchInput.toLowerCase())
    );

  deletePainting = id => {
    API.deletePainting(id);
    const paintings = this.state.paintings.filter(
      painting => painting.id !== id
    );
    this.setState({ paintings });
  };

  getPaintings = () => {
    API.getPaintings().then(paintings => this.setState({ paintings }));
  };

  componentDidMount() {
    console.log("App has been mounted - the data is being fetched");
    this.getPaintings();
  }

  render() {
    console.log("App has been rendered");
    const { updateSearch, getFilteredPaintings, deletePainting } = this;
    return (
      <div className="app">
        <Title />
        <Search handleChange={updateSearch} />
        <PaintingList
          paintings={getFilteredPaintings()}
          deletePainting={deletePainting}
        />
      </div>
    );
  }
}

export default App;
