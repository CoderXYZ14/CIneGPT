import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App"; // Import App
import { Provider } from "react-redux";
import { appStore } from "./app/store";
import { Browse } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Use App as the main component
  },
  {
    path: "/browse",
    element: <Browse />, // Ensure Browse is correctly imported and used
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
