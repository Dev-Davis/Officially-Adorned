// imports
import React, { useEffect, useState } from "react";
import axios from "axios";

import BraceletsCards from "./BraceletsCards";

// const objects = require("../../db/bracelets.json");

function Bracelets() {
  const [bracelets, setBracelets] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://officially-adorned-default-rtdb.firebaseio.com/bracelets.json"
      )
      .then((res) => {
        const bracelets = Object.values(res.data);
        setBracelets(bracelets);
      });
  }, []);

  return (
    <div className="Bracelets">
      <h3>Bracelets</h3>
      <section className="display">
        <div className="container-fluid">
          <div className="row">
            {bracelets.map((brace) => {
              return <BraceletsCards key={brace.id} bracelet={brace} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Bracelets;
