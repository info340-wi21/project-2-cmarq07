import React, { useState } from "react";
import { useParams } from 'react-router'
import { NavBar } from "./NavBar.js";
import { GameDescription } from "./GameDescription.js";
import { Buttons } from "./Buttons"
import { Review } from "./Review.js";
import { Graph } from "./Graph.js";
import { ReviewForm } from "./ReviewForm.js";

const descriptions = "../data/descriptions.json";
const getReviewPath = (game) => "../data/" + game + ".json";
const imagesPath = "../data/graphs/";
const images = {
  "civ5": "Sid Meiers Civilization 5.png",
  "gtav": "Grand Theft Auto V.png",
  "csgo": "Counter Strike Global Offensive.png",
  "dota2": "Dota 2.png",
  "tf2": "Team Fortress 2.png",
  "skyrim": "The Elder Scrolls V.png",
  "gmod": "Garrys Mod.png"
};

export function GamePage(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [reviews, setReviews] = useState([]);
  const [showGraph, setShowGraph] = useState(false);
  let gameName = useParams().gameName;

  if (!title) {
    fetch(descriptions)
      .then(resp => resp.json())
      .then(descriptions => descriptions[gameName])
      .then(game => {
        setTitle(game.title);
        setDescription(game.description);
      })
    .catch(error => {console.log(error)});
  }

  if (!description) {
    fetch(getReviewPath(gameName))
      .then(resp => resp.json())
      .then(reviews => {setReviews(reviews)})
    .catch(error => {console.log(error)});
  }

  const handleSetShowGraph = (bool) => {
    setShowGraph(bool);
  }

  const addReview = (review) => {
    reviews.push(review);
    let copy = [...reviews];
    setReviews(copy);
  }

  return (
    <div>
      <NavBar/>
      <section>
        <GameDescription title={title} description={description} />
      </section>
      <Buttons handleSetShowGraph={handleSetShowGraph}/>
      <section>
        <h2>Top Reviews</h2>
      </section>
      {reviews.map(review =>
        <Review key={review.user} user={review.user} recommendation={review.recommendation} review={review.review} showGraph={showGraph}/>)}
      <Graph showGraph={showGraph} imgLink={imagesPath + images[gameName]} game={gameName}/>
      <ReviewForm addReview={addReview}/>
    </div>
  );
}
