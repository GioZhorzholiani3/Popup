import Popup from "./components/Popup";
import { useState } from "react";

function App() {
  const [btnPopup, setBtnPopup] = useState(false);
  return (
    <div className="main">
      <div>
        <h1>Popup example </h1>
        <button className="btn" onClick={() => setBtnPopup(true)}>
          click me
        </button>
        <Popup focused={btnPopup} setFocused={setBtnPopup}>
          <p>hello</p>
          <p>my name is</p>
          <p>giorgi</p>
          <p>and</p>
          <p>i love react</p>
        </Popup>
      </div>
    </div>
  );
}

export default App;
