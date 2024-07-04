import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import ProgramPage from "./pages/ProgramPage/ProgramPage.jsx";
import EventPage from "./pages/EventPage/EventPage.jsx";
import ProfilePage from "./pages/ProfilePage/ProfilePage.jsx";
// import LoginPage from "./LoginPage.jsx";
// import RegistrationPage from "./RegistrationPage.jsx";
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
      //   path: "/connexion",
      //   element: <LoginPage />,
      // },
      // {
      //   path: "/inscription",
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

