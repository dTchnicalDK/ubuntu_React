import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/Register/Register";
import NavBar from "./components/navbar/NavBar";
import UserDashboard from "./pages/dashboard/UserDashboard";
import About from "./pages/about/About";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
