import React from "react";

export function GameDescription(props) {
  return (
    <div className="mt-5 pt-5">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  )
}
