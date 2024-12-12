import React, { useState } from "react";

export function ReviewForm(props) {
  const [username, setUsername] = useState("");
  const [recommendation, setRecommendation] = useState("Recommended");
  const [reviewText, setReviewText] = useState("");

  const handleAddReview = (event) => {
    event.preventDefault();
    console.log("submitting");
    props.addReview(
      {
        "user": username,
        "recommendation": recommendation,
        "review": reviewText
      }
    );
    setUsername("");
    setRecommendation("Recommended");
    setReviewText("");
    event.target.reset();
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handleRecommendationChange = (event) => {
    setRecommendation(event.target.value);
  }

  const handleReviewTextChange = (event) => {
    setReviewText(event.target.value);
  }

  return (
    <section>
      <h2>Submit a Review</h2>
      <form onSubmit={(event) => handleAddReview(event)}>
        <div className="form-group">
          <label htmlFor="review-username">Username: </label>
          <input className="form-control" name="username" id="review-username" type="text"
            required onChange={handleUsernameChange}/>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="review-recommendation"
            id="review-recommended" value="Recommended" defaultChecked onChange={handleRecommendationChange}/>
          <label className="form-check-label mr-5" htmlFor="review-recommended">
            Recommended
          </label>
          <input className="form-check-input" type="radio" name="review-recommendation"
            id="review-not-recommended" value="Not Recommended" onChange={handleRecommendationChange}/>
          <label className="form-check-label" htmlFor="review-not-recommended">
            Not Recommended
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="review_text">Review: </label>
          <textarea className="form-control" name="review" id="review_text" rows="5"
            required onChange={handleReviewTextChange}></textarea>
        </div>
        <button id="submit-review-btn" type="submit" className="btn btn-dark">Submit</button>
      </form>
    </section>
  );
}
