import React from "react";
import "./NewArrival.css";
import BookCard from "../booksCard/BookCard";

function NewArrival({ expandNewArrival }) {
  return (
    <div className="arrival-div ">
      <h3 className="new-arri-title">New Arrival</h3>
      <div id="see-all">
        <h5 onClick={expandNewArrival}>See All</h5>
      </div>
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
