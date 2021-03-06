import React from "react";

export function Buttons(props) {
  return (
    <div className="btn-group btn-group-toggle d-flex justify-content-center m-3"
      data-toggle="buttons">
      <button id="show-reviews" type="button" className="btn btn-dark btn-lg" data-toggle="button"
        aria-pressed="false" autocomplete="off" onClick={() => {props.handleSetShowGraph(false)}}>
        Reviews
      </button>
      <button id="show-graph" type="button" className="btn btn-dark btn-lg" data-toggle="button"
        aria-pressed="false" autoComplete="off" onClick={() => {props.handleSetShowGraph(true)}}>
        Graph
      </button>
    </div>
  )
}
