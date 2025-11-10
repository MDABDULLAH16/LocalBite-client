import React, { use } from "react";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router";
import Loader from "../components/Loader/Loader";
 

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);
    if (loading) {
     return  <Loader></Loader>;
    }
  const location = useLocation();
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
    }
    return children
};

export default PrivateRoute;
