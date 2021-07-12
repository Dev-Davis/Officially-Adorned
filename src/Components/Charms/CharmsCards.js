// imports
import React from 'react'

import '../../css/bracelets.css'

function charmsCards({charm}) {

  function setPrice() {
    if(charm.set) {
      return <p>Set: ${charm.set}</p>
    } else {
      return null
    }
  }

  return (
    <div className="col item-card">
      <h6 className="item-name">{charm.name}</h6>
      <img src={charm.avi} alt="item-pic" className="item-image" />
      <p className="single-price">Single: ${charm.price}</p>
      <p className="single-price">{setPrice()}</p>
      {}
    </div>
  )
}

export default charmsCards