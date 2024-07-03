import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    element: <App />,

    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/program",
        element: <programPage />,
      },
      {
        path: "/event",
        element: <EventPage />,
      },
      {
        path: "/profil",
        element: <ProfilPage />,
      },
      {
        path: "/connexion",
        element: <LoginPage />,
      },
      {
        path: "/inscription",
        element: <RegistrationPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
