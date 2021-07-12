// imports
import React, { useEffect, useState } from "react";
import axios from "axios";

import NecklacesCards from "./NecklaceCards";

function Necklaces() {
  const [necklaces, setNecklaces] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://officially-adorned-default-rtdb.firebaseio.com/necklaces.json"
      )
      .then((res) => {
        const necklaces = Object.values(res.data);
        setNecklaces(necklaces);
      });
  }, []);

  return (
    <div className="Necklaces">
      <h3 className="necklace-title">Necklaces</h3>
      <section className="display">
        <div className="container-fluid">
          <div className="row">
            {necklaces.map((necklace) => {
              return <NecklacesCards key={necklace.id} necklace={necklace} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Necklaces;
