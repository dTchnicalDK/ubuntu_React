import React from "react";
import { useRef } from "react";
import "./HomeDashboard.css";
import DashboardNav from "./DashboardNav/DashboardNav";
import LeftSidebar from "./leftSidebar/LeftSidebar";
import DailyQuoteCard from "./dailyQuote/DailyQuoteCard";
import NewArrival from "./NewArrival/NewArrival";
import BookCard from "./booksCard/BookCard";

function HomeDashboard() {
  const divisionRef = useRef(null); //refrence for division div;
  const recetReadingRef = useRef(null);

  const handleExpand = () => {
    console.log("expand clicked");
    if (divisionRef.current) {
      divisionRef.current.classList.toggle("expanded");
    }
  };
  const expandRecentReadings = () => {
    console.log("recent reading clicked");
    if (recetReadingRef.current) {
      recetReadingRef.current.classList.toggle("expanded");
    }
  };

  return (
    <>
      <div className="container">
        <div className="side-bar">
          <LeftSidebar />
        </div>
        <div className="main-container">
          <DashboardNav />

          <div className="main-upper">
            <DailyQuoteCard />
            <NewArrival />
          </div>
          <div className="main-lower">
            <h2>Good Morning</h2>
            <div className="recommended divisions " ref={divisionRef}>
              <div className="div-details">
                <h4>Recommended for you</h4>
                <h5 onClick={handleExpand}>see all</h5>
              </div>
              <div className="div-container">
                <BookCard
                  bookData={{
                    title: "The Book Of Art",
                    writer: "Dharmendra",
                    cover: "/images/theBookOfArt.jpg",
                    year: "5555",
                    rating: "8",
                  }}
                />
                <BookCard
                  bookData={{
                    title: "Walk into the shadow",
                    cover: "/images/walkInto.jpeg",
                    year: "5555",
                    rating: "100",
                  }}
                />
                <BookCard
                  bookData={{
                    title: "title",
                    cover: "/images/harryPotter.png",
                    year: "5555",
                    rating: "100",
                  }}
                />
                <BookCard
                  bookData={{
                    title: "title",
                    cover: "/images/harryPotter.png",
                    year: "5555",
                    rating: "100",
                  }}
                />
                <BookCard
                  bookData={{
                    title: "title",
                    cover: "/images/harryPotter.png",
                    year: "5555",
                    rating: "100",
                  }}
                />
                <BookCard
                  bookData={{
                    title: "title",
                    cover: "/images/harryPotter.png",
                    year: "5555",
                    rating: "100",
                  }}
                />
                <BookCard
                  bookData={{
                    title: "title",
                    cover: "/images/harryPotter.png",
                    year: "5555",
                    rating: "100",
                  }}
                />
                <BookCard />
                <BookCard />
                <BookCard />
              </div>
            </div>
            <div className="recent-reading divisions" ref={recetReadingRef}>
              <div className="div-details">
                <h4>Recent Readings</h4>
                <h5 onClick={expandRecentReadings}>see all</h5>
              </div>

              <div className="div-container">
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeDashboard;
