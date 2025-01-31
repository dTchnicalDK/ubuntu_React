import React from "react";
import "./AddBook.css";

function AddBook() {
  return (
    <div className="add-book-container">
      <form action="#" method="post" id="upload-form">
        <h3>Upload Your Book here</h3>
        <label htmlFor="title">Book name</label>
        <input type="text" name="title" id="title" />

        <label htmlFor="title">description</label>
        <input type="text" name="title" id="title" />

        <label htmlFor="description">Book name</label>
        <input type="text" name="description" id="description" />
        <button>upload now</button>
      </form>
    </div>
  );
}

export default AddBook;
