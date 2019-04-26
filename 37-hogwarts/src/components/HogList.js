import React, { Component } from "react";
import HogTile from "./HogTile";

export default class HogList extends Component {
  render() {
    return (
      <ul>
        {this.props.hogs.map(hog => {
          return <HogTile key={hog.name} hog={hog} />;
        })}
      </ul>
    );
  }
}
