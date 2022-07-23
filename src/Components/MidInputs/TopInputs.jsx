import React from "react";
import buttonsData from "./topButtonsData"
import "./TopInputs.css"

function Inputs() {
  return (
    <div className="topInput_component"> 
      {buttonsData.map((b, i) => (
        <div key={i} className="inputs_container">
          {/* input */}
          <div className="div_inputs">
            <span className="title">{b.title}</span>
            <div className="div_input_label">
              <label className={b.label}>{b.label}</label>
              <input className={b.style} value={b.placeholder} />
            </div>
          </div>

          {/* input hover */}
          <div className="div_hoverInputs">
            <span className="others_title">{b.hoverTitle}</span>
            <div className="div_input_label">
              <label className={b.labelHover}>{b.label}</label>
              <input className={b.hoverStyle} value={b.placeholder} />
            </div>
          </div>
          
          {/* input focus */}
          <div className="div_focusInputs">
            <span className="others_title">{b.focusTitle}</span>
            <div className="div_input_label">
              <label className={b.labelFocus}>{b.label}</label>
              <input className={b.focusStyle} value={b.placeholder} />
            </div>
          </div>

        </div>
      ))}
    </div>
  )
}

export default Inputs;