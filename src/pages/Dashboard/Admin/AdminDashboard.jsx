import React, { useState } from "react";
import { NavLink, Outlet, Link } from "react-router";
import {
  FaChartPie,
  FaUsers,
  FaUtensils,
  FaFlag,
  FaBars,
  FaTimes,
  FaHome,
  FaChevronLeft,
} from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
 

const AdminDashboard = () => {
  const { logOut, user } = useAuth();
  // Sidebar state: open by default on desktop, closed on mobile
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const menuItems = [
    {
      name: "Statistics",
      path: "/admin-dashboard/statistics",
      icon: <FaChartPie />,
    },
    {
      name: "Manage Users",
      path: "/admin-dashboard/manage-users",
      icon: <FaUsers />,
    },
    {
      name: "Manage Content",
      path: "/admin-dashboard/manage-reviews",
      icon: <FaUtensils />,
    },
    { name: "Reports", path: "/admin-dashboard/reports", icon: <FaFlag /> },
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex overflow-x-hidden">
      {/* --- SIDEBAR --- */}
      <aside
        className={`
                    fixed inset-y-0 left-0 z-50 bg-slate-900 text-white
                    transition-all duration-300 ease-in-out
                    ${
                      isSidebarOpen
                        ? "w-72 translate-x-0"
                        : "w-0 -translate-x-full"
                    }
                    lg:relative lg:translate-x-0 ${
                      !isSidebarOpen && "lg:w-0 lg:overflow-hidden"
                    }
                `}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="h-20 flex items-center justify-between px-6 bg-slate-950">
            <span className="text-xl font-bold tracking-tight">
              LocalBite Admin
            </span>
            <button onClick={toggleSidebar} className="lg:hidden text-2xl">
              <FaTimes />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() =>
                  window.innerWidth < 1024 && setIsSidebarOpen(false)
                }
                className={({ isActive }) => `
                                    flex items-center gap-4 px-4 py-3 rounded-lg transition-all
                                    ${
                                      isActive
                                        ? "bg-primary text-white"
                                        : "hover:bg-slate-800 text-slate-400"
                                    }
                                `}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </NavLink>
            ))}
          </nav>

          {/* Bottom Logout */}
          <div className="p-4 border-t border-slate-800">
            <button
              onClick={logOut}
              className="flex items-center gap-4 px-4 py-3 w-full text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
            >
              <FaChevronLeft /> <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Navbar (Always Top) */}
        <header className="h-20 bg-white shadow-sm flex items-center justify-between px-4 md:px-8 sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <button
              onClick={toggleSidebar}
              className="p-3 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 transition-colors"
            >
              <FaBars />
            </button>
            <h2 className="font-bold text-slate-800 hidden sm:block">
              Dashboard
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <Link to="/" className="btn btn-ghost btn-sm hidden md:flex">
              Home
            </Link>
            <div className="text-right hidden sm:block leading-tight">
              <p className="text-sm font-bold">{user?.displayName}</p>
              <p className="text-[10px] uppercase text-primary font-bold">
                Administrator
              </p>
            </div>
            <div className="avatar">
              <div className="w-10 h-10 rounded-full ring-2 ring-slate-200">
                <img src={user?.photoURL || "/profile.png"} alt="Admin" />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content Area */}
        <main className="p-4 md:p-8 flex-1">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 min-h-[calc(100vh-160px)] p-6">
            <Outlet />
          </div>
        </main>
      </div>

      {/* Mobile Overlay (Click to close) */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
        />
      )}
    </div>
  );
};

export default AdminDashboard;
