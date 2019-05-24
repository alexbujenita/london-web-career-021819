import React from "react";

import Painting from "./Painting";

class PaintingList extends React.Component {
  componentDidMount() {
    console.log("PaintingList has been mounted");
  }
  render() {
    console.log("PaintingList has been rendered");
    const { paintings, deletePainting } = this.props;
    return (
      <div id="painting-list">
        {paintings.map(painting => (
          <Painting
            painting={painting}
            deletePainting={deletePainting}
            key={painting.id}
          />
        ))}
      </div>
    );
  }
}

export default PaintingList;
