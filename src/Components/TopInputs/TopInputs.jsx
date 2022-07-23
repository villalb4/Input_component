import React from "react";
import buttonsData from "./topButtonsData"
import "./TopInputs.css"

function Inputs() {
  return (
    <div className="topInput_component"> 
      {buttonsData.map((b, i) => (
        <div key={i} className="inputs_container">
          <div className="div_inputs">
            <span className="title">{b.title}</span>
            <div className="div_input_label">
              <label className="label">{b.label}</label>
              <input className={b.style} value={b.placeholder} />
            </div>
          </div>
          <div className="div_hoverInputs">
            <span className="title">{b.hoverTitle}</span>
            <div className="div_input_label">
              <label className="label">{b.label}</label>
              <input className={b.hoverStyle} value={b.placeholder} />
            </div>
          </div>
          <div className="div_focusInputs">
            <span className="title">{b.focusTitle}</span>
            <div className="div_input_label">
              <label className="label">{b.label}</label>
              <input className={b.focusStyle} value={b.placeholder} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Inputs;