import React from "react";
import "./AdminDasBoard.css";
import LeftSidebar from "../components/homeDashboard/leftSidebar/LeftSidebar";
import DashboardNav from "../components/homeDashboard/DashboardNav/DashboardNav";
import AddBook from "../components/addBook/AddBook";

function AdminDasBoard() {
  return (
    <div id="admin-container">
      <div className="nav-bar">
        <DashboardNav />
      </div>
      <LeftSidebar />
      <h3>Admin dashboard</h3>
      <AddBook />
    </div>
  );
}

export default AdminDasBoard;
