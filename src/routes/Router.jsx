import { createBrowserRouter } from "react-router";
import Root from "../pages/Layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import AddReview from "../pages/AddReview/AddReview";
import Reviews from "../pages/Reviews/Reviews";
import MyReviews from "../pages/MyReviews/MyReviews";
import ReviewDetails from "../pages/ReviewDetails/ReviewDetails";
import ReviewEdit from "../pages/ReviewEdit/ReviewEdit";
import MyFavorites from "../pages/MyFavorites/MyFavorites";
import NotFound from "../pages/NotFound/NotFound";
import DashboardLayout from "../pages/Layout/DashboardLayout";

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
        hydrateFallbackElement: true,
      },
      {
        path: "addReview",
        element: (
          <PrivateRoute>
            <AddReview />
          </PrivateRoute>
        ),
      },
      {
        path: "myReviews",
        element: (
          <PrivateRoute>
            <MyReviews />
          </PrivateRoute>
        ),
      },
      {
        path: "reviewDetails/:id",
        loader: ({ params }) => {
          const data = fetch(`${url}/reviews/${params.id}`);
          return data;
        },
        element: (
          <PrivateRoute>
            <ReviewDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "reviewEdit/:id",
        loader: ({ params }) => {
          const data = fetch(`${url}/reviews/${params.id}`);
          return data;
        },
        element: (
          <PrivateRoute>
            <ReviewEdit />
          </PrivateRoute>
        ),
      },
      {
        path: "myFavorites",
        loader: () => {
          const data = fetch(`${url}/reviews`);
          return data;
        },
        element: (
          <PrivateRoute>
            <MyFavorites />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
