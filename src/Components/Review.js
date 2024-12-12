import React from "react";

export function Review(props) {
  if (!props.showGraph) {
    return (
      <div>
        <section>
          <h3>{props.user}</h3>
          <h3>{props.recommendation}</h3>
          <p>{props.review}</p>
        </section>
      </div>
    );
  } else {
    return (<div></div>);
  }
}
