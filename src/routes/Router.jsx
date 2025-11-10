import { createBrowserRouter } from "react-router";
import Root from './../pages/Layout/Root';
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import AddReview from "../pages/AddReview/AddReview";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path:'login', Component: Login },
      { path:'register', Component: Register },
      {
        path: 'addReview', element: <PrivateRoute>
        <AddReview></AddReview>
      </PrivateRoute>},
    ],
  },
]);