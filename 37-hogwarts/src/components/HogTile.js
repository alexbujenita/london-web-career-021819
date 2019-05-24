import React, { Component } from "react";

export default class HogTile extends Component {
  state = {
    detailedView: false
  };

  changeDetailView = () => {
    this.setState({ detailedView: !this.state.detailedView });
  };

  render() {
    const hogNameParsed = this.props.hog.name.replace(/\s/g, "_").toLowerCase();
    return (
      <div>
        <h3>{this.props.hog.name}</h3>
        <h5>{this.props.hog.greased ? "greased" : "not grased"}</h5>
        <img
          onClick={this.changeDetailView}
          src={require(`../hog-imgs/${hogNameParsed}.jpg`)}
        />
        {this.state.detailedView && (
          <p>specialty: {this.props.hog.specialty}</p>
        )}
      </div>
    );
  }
}
