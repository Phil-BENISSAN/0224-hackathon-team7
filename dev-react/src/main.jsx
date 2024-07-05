import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import HomePage from "../src/pages/HomePage/HomePage.jsx";
import ProgramPage from "../src/pages/ProgramPage/ProgramPage.jsx";
import EventPage from "../src/pages/EventPage/EventPage.jsx";
import ProfilePage from "../src/pages/ProfilePage/ProfilePage.jsx";
import "./index.css";
import ConferencePage from "./pages/ConferencePage/ConferencePage.jsx";
import { getConferenceById } from "./services/conferenceService.js";

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
      {
        path: "/conference",
        element: <ConferencePage />,
        loader: ({ params }) => getConferenceById(params.id),
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
