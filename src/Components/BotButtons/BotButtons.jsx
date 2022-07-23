import React from "react";
import botButtons from "./botButtonsData";
import "./BotButtons.css";

function BotButtons() {
  return (
    <div className="finalContainer">
      {botButtons.map((b, i) => (
      <div key={i} className="botButtons_container">
        <div className="div_buttons">
          <span className="title">{b.title}</span>
          <div>
            <button className={b.style}>{b.value}</button>
          </div>
        </div>
        <div className="div_hoverButtons">
          <span className="title_hover">{b.hoverTitle}</span>
          <div>
            <button className={b.hoverStyle}>{b.value}</button>
          </div>
        </div>
      </div>
      ))}
    </div>
  )
}

export default BotButtons;