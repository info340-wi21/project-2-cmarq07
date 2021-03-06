import React, { useState } from "react";
import { NavBar } from "./NavBar.js";
import { GameDescription } from "./GameDescription.js";
import { Buttons } from "./Buttons"
import { Review } from "./Review.js";

const descriptions = "./data/descriptions.json";
const getReviewPath = (game) => "./data/" + game + ".json";

export function GamePage(props) {
  const [title, setTitle] = useState(getTitle(props.game));
  const [description, setDescription] = useState(getDescription(props.game));
  const [reviews, setReviews] = useState([]);
  const [showGraph, setShowGraph] = useState(false);

  // fetch(descriptions)
  //   .then(resp => resp.json())
  //   .then(descriptions => descriptions[props.game])
  //   .then(game => {
  //     setTitle(game.title);
  //     setDescription(game.description);
  //   })
  // .catch(error => {console.log(error)});

  fetch(getReviewPath(props.game))
    .then(resp => resp.json())
    .then(reviews => {setReviews(reviews)})
  .catch(error => {console.log(error)});

  return (
    <div>
      <NavBar />
      <section>
        <GameDescription title={title} description={description} />
      </section>
      <Buttons />
      <section>
        <h2>Top Reviews</h2>
      </section>
      {reviews.map(review =>
        <Review key={review.user} user={review.user} recomendation={review.recomendation} review={review.review}/>)}
    </div>
  )
}

async function getTitle(game) {
  let title = "";
  fetch(descriptions)
    .then(resp => resp.json())
    .then(descriptions => descriptions[game])
    .then(game => {
      title = game.title;
    })
  .catch(error => {console.log(error)});
  return title.toString();;
}

async function getDescription(game) {
  let description = "";
  fetch(descriptions)
    .then(resp => resp.json())
    .then(descriptions => descriptions[game])
    .then(game => {
      description = game.description;
    })
  .catch(error => {console.log(error)});
  return description.toString();
}
