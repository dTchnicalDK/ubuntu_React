import React from "react";
import "./BookCard.css";

function BookCard({
  bookData = {
    title: "dummy tittle",
    writer: "jonathan swift,",
    cover: "/images/harryPotter.png",
    year: 9999,
    rating: 10,
  },
}) {
  const { title, writer, cover, year, rating } = bookData;
  // console.log(title);

  return (
    <div className="book-div">
      <div className="cover-page">
        <img src={cover} alt="book-cover" />
      </div>
      <div className="details">
        <h3>{title}</h3>
        <div className="sub-details">
          <span> {writer} </span>
          <span>{year}</span>
        </div>
      </div>
      <small>{rating}/10</small>
    </div>
  );
}

export default BookCard;
