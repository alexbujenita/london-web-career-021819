import React, { Component } from "react";

export default class Profile extends Component {
  render() {
    const id = this.props.match.params.id;
    return (
      <div>
        <p>Profile</p>
        <h1>hi, {`${id}`}</h1>
      </div>
    );
  }
}
