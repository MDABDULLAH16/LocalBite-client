import { createBrowserRouter } from "react-router";
import Root from "../pages/Layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import AddReview from "../pages/AddReview/AddReview";
import Reviews from "../pages/Reviews/Reviews";

const url = import.meta.env.VITE_BACKEND_URL;

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "login", Component: Login },
      { path: "register", Component: Register },
      {
        path: "reviews",
        loader: () => fetch(`${url}/reviews`),
        Component: Reviews,
        hydrateFallbackElement: true
      },
      {
        path: "addReview",
        element: (
          <PrivateRoute>
            <AddReview />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
