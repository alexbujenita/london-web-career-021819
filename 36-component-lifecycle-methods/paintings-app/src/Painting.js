import React from "react";

class Painting extends React.Component {
  componentDidMount() {
    console.log("Painting has been mounted");
  }

  componentWillUnmount() {
    console.log("Painting is being unmounted");
  }

  render() {
    console.log("Painting has been rendered");
    const { painting, deletePainting } = this.props;
    return (
      <div onClick={() => deletePainting(painting.id)} className="painting">
        <h1>{painting.title}</h1>
        <p>{painting.artist.name}</p>
        <img src={painting.image} alt="" />
      </div>
    );
  }
}

export default Painting;
