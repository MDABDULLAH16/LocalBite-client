import React from "react";
import { NavLink, Outlet, Link } from "react-router";
import {
  FaUser,
  FaStar,
  FaHeart,
  FaCog,
  FaSignOutAlt,
  FaPlusCircle,
  FaHome,
} from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
 

const UserDashboard = () => {
  const { logOut, user } = useAuth();

  const handleLogOut = async () => {
    await logOut();
  };

  const sidebarLinks = (
    <>
      <div className="px-4 py-6 text-center hidden lg:block">
        <div className="avatar">
          <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={user?.photoURL || "/profile.png"} alt="User" />
          </div>
        </div>
        <h2 className="mt-2 font-bold text-lg">
          {user?.displayName || "Foodie"}
        </h2>
        <p className="text-xs text-gray-500 uppercase font-semibold">
          User Dashboard
        </p>
      </div>

      <div className="divider px-4 hidden lg:flex"></div>

      {/* Navigation Links */}
      <li>
        <NavLink
          to="/dashboard/profile"
          className={({ isActive }) =>
            isActive ? "bg-primary text-white" : ""
          }
        >
          <FaUser /> My Profile
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/my-reviews"
          className={({ isActive }) =>
            isActive ? "bg-primary text-white" : ""
          }
        >
          <FaStar /> My Reviews
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/favorites"
          className={({ isActive }) =>
            isActive ? "bg-primary text-white" : ""
          }
        >
          <FaHeart /> Favorites
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/add-bite"
          className={({ isActive }) =>
            isActive ? "bg-primary text-white" : ""
          }
        >
          <FaPlusCircle /> Share a New Bite
        </NavLink>
      </li>

      <div className="divider px-4"></div>

      {/* System Links */}
      <li>
        <NavLink
          to="/dashboard/settings"
          className={({ isActive }) =>
            isActive ? "bg-primary text-white" : ""
          }
        >
          <FaCog /> Settings
        </NavLink>
      </li>
      <li>
        <Link to="/">
          <FaHome /> Back to Home
        </Link>
      </li>
      <li>
        <button onClick={handleLogOut} className="text-error hover:bg-error/10">
          <FaSignOutAlt /> Logout
        </button>
      </li>
    </>
  );

  return (
    <div className="drawer lg:drawer-open bg-base-200 min-h-screen">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      {/* Main Content Area */}
      <div className="drawer-content flex flex-col p-6 lg:p-10">
        {/* Mobile Header */}
        <div className="flex items-center justify-between mb-8 lg:hidden bg-base-100 p-4 rounded-xl shadow-sm">
          <label htmlFor="my-drawer-2" className="btn btn-ghost drawer-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
          <span className="font-bold text-primary">LocalBite Dashboard</span>
        </div>

        {/* Outlet for Dynamic Content */}
        <div className="bg-base-100 min-h-[80vh] rounded-3xl shadow-sm p-6 lg:p-8">
          <Outlet />
        </div>
      </div>

      {/* Sidebar Side */}
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-100 text-base-content gap-2">
          {sidebarLinks}
        </ul>
      </div>
    </div>
  );
};

export default UserDashboard;
