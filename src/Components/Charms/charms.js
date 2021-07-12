// imports
import React, { useEffect, useState } from "react";
import axios from "axios";

import CharmsCards from "./CharmsCards";

function Charms() {
  const [charms, setCharms] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://officially-adorned-default-rtdb.firebaseio.com/charms.json"
      )
      .then((res) => {
        const charms = Object.values(res.data);
        setCharms(charms);
      });
  }, []);

  return (
    <div className="Charms">
      <h3 className="category-title">Charms</h3>
      <section className="display">
        <div className="container-fluid">
          <div className="row">
            {charms.map((charm) => {
              return <CharmsCards key={charm.id} charm={charm} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Charms;
