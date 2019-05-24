import React from 'react'

const Navbar = props => {
  return <div className={`ui inverted ${props.color} menu`}>
    <a href='/' className='item'>
      <h2 className="ui header">
        <i className={`${props.icon} icon`}></i>
        <div className="content">
          {props.content}
        </div>
        <div className="sub header">
          {props.subHeader}
        </div>
      </h2>
    </a>
  </div>
}

export default Navbar
