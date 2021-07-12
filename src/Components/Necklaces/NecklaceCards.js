// imports
import React from "react";

import "../../css/bracelets.css";

function NecklacesCards({ necklace }) {
  function setPrice() {
    if (necklace.set) {
      return <p>Set: ${necklace.set}</p>;
    } else {
      return null;
    }
  }

  return (
    <div className="col item-card">
      <h6 className="item-name">{necklace.name}</h6>
      <img src={necklace.avi} alt="item-pic" className="item-image" />
      <p className="single-price">Single: ${necklace.price}</p>
      <p className="single-price">{setPrice()}</p>
    </div>
  );
}

export default NecklacesCards;
