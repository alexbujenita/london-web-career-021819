import React, { Component } from 'react'

import Navbar from './Navbar'
import PaintingList from './PaintingList'
import Search from './Search'

import paintings from './painting-data'

class App extends Component {

  state = {
    paintings: paintings,
    searchTerm: '',
    selectedPainting: null
  }

  removePainting = (paintingId) => {
    const paintings = this.state.paintings.filter(painting => painting.id !== paintingId)
    this.setState({ paintings })
  }

  updateSearchTerm = (searchTerm) => {
    this.setState({ searchTerm })
  }

  selectPainting = selectedPainting => {
    this.setState({ selectedPainting })
  }

  deselectPainting = () => {
    this.setState({ selectedPainting: null })
  }

  render () {
    const { updateSearchTerm, deselectPainting, selectPainting } = this
    const { paintings, searchTerm, selectedPainting } = this.state
    const filteredPaintings = paintings.filter(
      painting => painting.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        painting.artist.name.toLowerCase().includes(searchTerm.toLowerCase()) 
    )
  
    return (
      <div className="App">
        <Navbar
          color="red"
          icon="qq"
          content="My Paintings App"
          subHeader="Gotta buy them all!"
        />
        {
          selectedPainting
            ? <h1>I'm {selectedPainting.title}, trust me.<button onClick={deselectPainting}>BACK</button></h1>
            : <div>
              <Search updateSearchTerm={updateSearchTerm} searchTerm={searchTerm} />
              <PaintingList
                paintings={filteredPaintings}
                selectPainting={selectPainting}
              />
            </div>
        }
      </div>
    )
  }
}

export default App
