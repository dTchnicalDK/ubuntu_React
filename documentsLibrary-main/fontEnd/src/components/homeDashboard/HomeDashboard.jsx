import React from "react";
import "./HomeDashboard.css";
import DashboardNav from "./DashboardNav/DashboardNav";
import LeftSidebar from "./leftSidebar/LeftSidebar";
import DailyQuoteCard from "./dailyQuote/DailyQuoteCard";
import NewArrival from "./NewArrival/NewArrival";
import BookCard from "./booksCard/BookCard";

function HomeDashboard() {
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
            <div className="recommended divisions">
              <div className="div-details">
                <h4>Recommended for you</h4>
                <h5>see all</h5>
              </div>
              <div className="div-container">
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
              </div>
            </div>
            <div className="recent-reading divisions">
              <div className="div-details">
                <h4>Recent Readings</h4>
                <h5>see all</h5>
              </div>

              <div className="div-container">
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
