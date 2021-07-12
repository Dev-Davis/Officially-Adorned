// imports
import React from 'react'

import './bracelets.css'

function BraceletsCards({bracelet}) {

  function setPrice() {
    if(bracelet.set) {
      return <p><strong className="price">Set: ${bracelet.set}</strong></p>
    } else {
      return null
    }
  }

  return (
    <div className="col item-card">
      <h6 className="item-name">{bracelet.name}</h6>
      <img src={bracelet.avi} alt="item-pic" className="item-image" />
      <p className="single-price"><strong className="price">Single: ${bracelet.price}</strong></p>
      <p className="single-price">{setPrice()}</p>
    </div>
  )
}

export default BraceletsCards