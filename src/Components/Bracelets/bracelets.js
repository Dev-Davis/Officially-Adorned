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
      <section className="display">
        <div className="container-fluid">
          <div className="row">
            <div className="bio-box col-6 offset-3">
              <h3 className="name-box"><span className="signature">Hi, I'm Damphia</span></h3>
              <img
                src="https://scontent-den4-1.xx.fbcdn.net/v/t1.6435-9/c0.0.720.720a/s851x315/157304554_3734600206625799_8288768886694129625_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=da31f3&_nc_ohc=sr53sQbp_lsAX9uoqFK&_nc_ht=scontent-den4-1.xx&oh=2b759171139e4c183cd16d954240eb6a&oe=60F18DC9"
                alt="Damphia-avi"
                className="bio-pic"
                />
              <p className="bio-section">
                Amet enim sint pariatur qui reprehenderit officia in. Proident
                amet exercitation culpa non in esse exercitation amet quis
                veniam velit. Aliqua veniam eu deserunt officia Lorem minim
                velit ut veniam est sunt fugiat esse. Proident consectetur
                voluptate ex esse ut ipsum. Exercitation fugiat quis duis
                voluptate. Voluptate esse sit officia eu veniam magna fugiat sit
                officia ut ut anim. Do magna Lorem exercitation cillum eiusmod
                Lorem.
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid">
                <h3 className="category-title">Bracelets</h3>
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
