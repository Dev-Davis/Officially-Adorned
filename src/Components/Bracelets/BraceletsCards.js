// imports
import React from 'react'

import '../../css/bracelets.css'

function BraceletsCards({bracelet}) {

  function setPrice() {
    if(bracelet.set) {
      return <p>Set: ${bracelet.set}</p>
    } else {
      return null
    }
  }

  return (
    <div className="col item-card">
      <h6 className="item-name">{bracelet.name}</h6>
      <img src={bracelet.avi} alt="item-image" className="item-image" />
      <p className="single-price">Single: ${bracelet.price}</p>
      <p className="single-price">{setPrice()}</p>
      {}
    </div>
  )
}

export default BraceletsCards