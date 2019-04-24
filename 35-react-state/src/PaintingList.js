import React from 'react'

import Painting from './Painting'

const PaintingList = ({ paintings, selectPainting }) =>
  <div>
    {
      paintings.map(painting =>
        <Painting
          key={painting.id}
          painting={painting}
          selectPainting={selectPainting}
        />
      )
    }
  </div>

export default PaintingList
