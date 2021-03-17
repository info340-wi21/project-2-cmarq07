import React, { useState } from "react";
import { useParams } from 'react-router'
import { NavBar } from "./NavBar.js";
import { GameDescription } from "./GameDescription.js";
import { Buttons } from "./Buttons"
import { Review } from "./Review.js";
import { Graph } from "./Graph.js";
import { ReviewForm } from "./ReviewForm.js";
import firebase from "firebase";
import "firebase/database";

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

  // Use this to add reviews to firebase, otherwise leave commented
  // if (!description) {
  //   const ref = firebase.database().ref(gameName);
  //   fetch(getReviewPath(gameName))
  //     .then(resp => resp.json())
  //     .then(reviews => {
  //       setReviews(reviews)
  //       for (let review of reviews) {
  //         console.log(review);
  //         ref.push(review);
  //       }
  //     })
  //   .catch(error => {console.log(error)});
  // }

  const setReviewsFromFirebase = (gameName) => {
    firebase.database().ref(gameName).get()
      .then(reviewsObj => reviewsObj.val())
      .then(reviewsObj => {
        const allKeys = Object.keys(reviewsObj);
        const reviewsArray = allKeys.map(key => {
          const singleReview = {...reviewsObj[key]};
          singleReview.key = key;
          return singleReview;
        });
        setReviews(reviewsArray);
      });
  }

  if (!description) {
    setReviewsFromFirebase(gameName);
  }

  const handleSetShowGraph = (bool) => {
    setShowGraph(bool);
  }

  const addReview = (review) => {
    const reviewsRef = firebase.database().ref(gameName);
    reviewsRef.push(review);
    setReviewsFromFirebase(gameName);
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
