import React from 'react'

import Painting from './Painting'

const PaintingList = props =>
  <div>
    {
      props.paintings.map(painting =>
        <Painting
          key={painting.id}
          painting={painting}
          handleClick={props.greet}
        />
      )
    }
  </div>

export default PaintingList
