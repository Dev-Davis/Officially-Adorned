// React imports
import React from "react";

// component imports
import Bracelets from "../Components/Bracelets/bracelets";
import Charms from "../Components/Charms/charms";
import Necklaces from "../Components/Necklaces/necklaces";

// styling imports
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h3 className="app-title">
          Adorned
          <br></br>
          <h6>
            <span className="app-subtitle">by Damphia</span>
          </h6>
        </h3>
      </header>
      <Bracelets />
      <Charms />
      <Necklaces />
    </div>
  );
}

export default App;
