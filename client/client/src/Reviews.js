import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const reviews = [
  { name: "Alice", rating: 5, comment: "Amazing service! Highly recommend." },
  { name: "Bob", rating: 4, comment: "Good experience, but could improve." },
  { name: "Charlie", rating: 5, comment: "Excellent Work always reliable!" }
];

const Reviews = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Customer Reviews</h2>
      <div className="row">
        {reviews.map((review, index) => (
          <div key={index} className="col-md-4">
            <div className="card mb-3 shadow">
              <div className="card-body">
                <h5 className="card-title">{review.name}</h5>
                <p className="card-text">⭐ {review.rating} / 5</p>
                <p className="card-text">{review.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
