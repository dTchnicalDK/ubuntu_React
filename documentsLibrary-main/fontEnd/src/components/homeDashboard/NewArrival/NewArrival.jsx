import React from "react";
import "./NewArrival.css";
import BookCard from "../booksCard/BookCard";

function NewArrival() {
  return (
    <div className="arrival-div">
      <h3 className="new-arri-title">New Arrival</h3>
      <div className="books">
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
    </div>
  );
}

export default NewArrival;
