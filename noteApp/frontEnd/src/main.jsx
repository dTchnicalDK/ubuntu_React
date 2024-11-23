import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { NoteComponent } from "./components/noteComponent/NoteComponent.jsx";
import Toaster from "react-hot-toast";

//configuring routerProvider
const router = createBrowserRouter([
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/about",
    element: "welcome to about string",
  },
  {
    path: "/notes",
    element: <NoteComponent />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster />
    {/* <App /> */}
  </StrictMode>
);
