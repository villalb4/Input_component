import React from "react";
import {midButtons, midButtons_icon, midButtons_size} from "./midButtonsData"
import "./MidButtons.css"
import cart from "./cart.png"

function MidButtons() {
  return (
    <div className="midButtons_container">

      <div className="midButtons_div">
        {midButtons.map((m, i) => (
          <React.Fragment key={i}>
            <div>
              <span className="title">{m.title}</span>
              <div>
                <button className={m.style}>{m.value}</button>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>

      <div className="midButtonsIcon_div">
        {midButtons_icon.map((m, i) => (
          <React.Fragment key={i}>
            <div>
              <span className="title">{m.title}</span>
              <div>
                <button className={m.style}><img className="cart" src={cart} alt="cart" />{m.value}</button>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>

      <div className="midButtonssize_div">
        {midButtons_size.map((m, i) => (
          <React.Fragment key={i}>
            <div>
              <span className="title">{m.title}</span>
              <div>
                <button className={m.style}>{m.value}</button>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>

    </div>
  )
}

export default MidButtons