import React from "react";
import "./Popup.css";

const Popup = (props) => {
  return props.focused ? (
    <div className="card-popup" onClick={() => props.setFocused(false)}>
      <div className="pop-up" >
        <button className="btn-close" onClick={() => props.setFocused(false)}>
          X
        </button>
        {props.children}
      </div>
    </div>
  ):false;
};
export default Popup;
