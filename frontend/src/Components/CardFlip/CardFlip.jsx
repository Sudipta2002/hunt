import React from "react";
import "./CardFlip.css";

function CardFlip({ frontContent, backContent, flipped }) {
  const flipClass = flipped ? "flip" : "";

  return (
    <div className={`card ${flipClass}`}>
      <div className="front">{frontContent}</div>
      <div className="back">{backContent}</div>
    </div>
  );
}

export default CardFlip;