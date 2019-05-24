import React from 'react'

import Navbar from './Navbar'
import PaintingList from './PaintingList'

import paintings from './painting-data'

function App (props) {

  const greet = name =>
    console.log(`I've been painted by ${name}!`)

  return (
    <div className="App">
      <Navbar
        color="red"
        icon="qq"
        content="My Paintings App"
        subHeader="Gotta buy them all!"
      />
      <PaintingList paintings={paintings} greet={greet} />
    </div>
  )
}

export default App
