import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import HomePage from "../src/pages/HomePage/HomePage.jsx";
import ProgramPage from "../src/pages/ProgramPage/ProgramPage.jsx";
import EventPage from "../src/pages/EventPage/EventPage.jsx";
import ProfilePage from "../src/pages/ProfilePage/ProfilePage.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/program",
        element: <ProgramPage />,
      },
      {
        path: "/event",
        element: <EventPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      // {
      //   path: "/login",
      //   element: <LoginPage />,
      // },
      // {
      //   path: "/registration",
      //   element: <RegistrationPage />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

