import React from "react";
import TopInputs from "./TopInputs/TopInputs"
import s from "./Inputs.module.css";

function Buttons() {
  return (
    <div className={s.container}>
      <h1 className={s.h1}>Buttons</h1>
      <TopInputs />
      <h2 className={s.created_by}>created by <span className={s.iam}>villalb4</span> - devChallenges.io</h2>
    </div>
  )
}

export default Buttons;