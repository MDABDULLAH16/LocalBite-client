import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import Container from "../Container/Container";
import logo from "/logo.png";
import userImage from "/profile.png";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import Loader from "../Loader/Loader";

const Navbar = () => {
  const { user, logOut, loading } = useContext(AuthContext);

  const handleLogOut = async () => {
    await logOut();
  };

  const navLinks = (
    <nav className="flex flex-col gap-2 lg:flex-row">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/reviews">All Reviews</NavLink>
      </li>
      <li>
        <NavLink to="/addReview">Add Review</NavLink>
      </li>
      <li>
        <NavLink to="/myReviews">My Reviews</NavLink>
      </li>
    </nav>
  );

  return (
    <div className="bg-base-100 shadow-sm">
      <Container>
        <div className="navbar">
          {/* Navbar start */}
          <div className="navbar-start">
            {/* Mobile menu */}
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {navLinks}
              </ul>
            </div>

            {/* Logo */}
            <Link
              to="/"
              className="flex items-center justify-center gap-2 lg:text-2xl lg:font-bold text-xl font-semibold font-poppins text-primary"
            >
              <img className="lg:w-12 lg:h-12 w-5 h-5" src={logo} alt="logo" />
              LocalBite
            </Link>
          </div>

          {/* Navbar center */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLinks}</ul>
          </div>

          {/* Navbar end */}
          <div className="navbar-end gap-4">
            {loading ? (
              <Loader /> // Shows spinner while checking login state
            ) : user ? (
              <div className="dropdown dropdown-end relative">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Profile"
                      src={user.photoURL || userImage}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                <ul
                  tabIndex="-1"
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box shadow absolute right-0 top-full mt-2 w-52 z-50"
                >
                  <li>
                    <Link to="/myReviews" className="justify-between">
                      My Reviews
                    </Link>
                  </li>
                  <li>
                    <Link to="/myFavorites" className="justify-between">
                      My Favorites
                    </Link>
                  </li>
                  <li>
                    <Link to="/addReview">Add Review</Link>
                  </li>
                  <li onClick={handleLogOut}>
                    <button className="w-full text-left">Logout</button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/login" className="btn btn-primary text-white">
                Login
              </Link>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
