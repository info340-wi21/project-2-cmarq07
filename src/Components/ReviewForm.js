import React from "react";

export function ReviewForm(props) {
  const handleAddReview = () => {
    let submitReviewForm = document.querySelector("form");
    let user = submitReviewForm.username.value;
    let recommendation = submitReviewForm["review-recommendation"].value;
    let review = submitReviewForm.review.value;
    let newReview = {"user": user, "recommendation": recommendation, "review": review};
    props.addReview(newReview);
  }

  return (
    <section>
      <h2>Submit a Review</h2>
      <form onSubmit={() => handleAddReview()}>
        <div className="form-group">
          <label for="review-username">Username: </label>
          <input className="form-control" name="username" id="review-username" type="text"
            required />
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="review-recommendation"
            id="review-recommended" value="Recommended" checked/>
          <label className="form-check-label mr-5" for="review-recommended">
            Recommended
          </label>
          <input className="form-check-input" type="radio" name="review-recommendation"
            id="review-not-recommended" value="Not Recommended"/>
          <label className="form-check-label" for="review-not-recommended">
            Not Recommended
          </label>
          <div className="form-group">
          <label for="review_text">Review: </label>
          <textarea className="form-control" name="review" id="review_text" rows="5"
            required></textarea>
        </div>
          <button id="submit-review-btn" type="submit" className="btn btn-dark">Submit</button>
        </div>
      </form>
    </section>
  );
}
