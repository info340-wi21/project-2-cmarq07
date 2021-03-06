import React from "react"

export function Graph(props) {
  if (props.showGraph) {
    return (
      <div className="image m-3">
        <img src={props.imgLink} alt={props.game + " graph"}/>
      </div>
    );
  } else {
    return (<div></div>);
  }
}
