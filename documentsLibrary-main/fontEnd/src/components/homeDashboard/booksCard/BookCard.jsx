import React from "react";
import "./BookCard.css";

function BookCard() {
  return (
    <div className="book-div">
      <div className="cover-page">
        <img src="./harryPotter.png" alt="book-cover" />
      </div>
      <h3>The Gulliver's travel</h3>
      <div className="details">
        <span> jonathan swift, </span>
        <span>1983</span>
      </div>
      <small>4/10</small>
    </div>
  );
}

export default BookCard;