import React, { Component } from 'react'

class Search extends Component {
  state = {  }
  render() {
    const { updateSearchTerm, searchTerm } = this.props
    const style = { margin: '10px' }
    return (
      <div style={style} className="ui input">
        <input value={searchTerm} onChange={event => updateSearchTerm(event.target.value)} type="text" placeholder="Search..." />
      </div>
    )
  }
}
 
export default Search