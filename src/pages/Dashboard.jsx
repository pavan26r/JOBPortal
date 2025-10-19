import React from 'react'
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { assets } from "../assets/assets.js";
const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <div className="shadow py-4 px-5 flex justify-between items-center bg-white">
        <img 
          onClick={() => navigate('/')} 
          className="max-sm:w-32 cursor-pointer" 
          src={assets.logo} 
          alt="logo"
        />
        <div className="flex items-center gap-3">
          <p className="max-sm:hidden font-medium text-gray-700">Welcome, Pavan Bro</p>
          <div className="relative group">
            <img 
              className="w-8 border rounded-full cursor-pointer" 
              src={assets.company_icon} 
              alt="profile"
            />
            <div className="absolute right-0 mt-2 w-28 bg-white border rounded-lg shadow-md hidden group-hover:block">
              <ul className="list-none p-2 text-sm">
                <li className="px-2 py-1 hover:bg-gray-100 cursor-pointer pr-10">Logout</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Main content with sidebar + page content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-56 bg-white shadow-md py-6 px-4 border-r">
          <ul className="space-y-4">
            <li>
              <NavLink 
                to="/dashboard/add-job"
                className={({ isActive }) => 
                  `flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 ${isActive ? 'bg-blue-100 text-blue-600' : 'text-gray-700'}`
                }
              >
                <img src={assets.add_icon} alt="add" className="w-5 h-5" />
                <p className="font-medium">Add Job</p>
              </NavLink>
            </li>

            <li>
              <NavLink 
                to="/dashboard/manage-job"
                className={({ isActive }) => 
                  `flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 ${isActive ? 'bg-blue-100 text-blue-600' : 'text-gray-700'}`
                }
              >
                <img src={assets.home_icon} alt="manage" className="w-5 h-5" />
                <p className="font-medium">Manage Job</p>
              </NavLink>
            </li>

            <li>
              <NavLink 
                to="/dashboard/view-application"
                className={({ isActive }) => 
                  `flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 ${isActive ? 'bg-blue-100 text-blue-600' : 'text-gray-700'}`
                }
              >
                <img src={assets.person_tick_icon} alt="applications" className="w-5 h-5" />
                <p className="font-medium">View Applications</p>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Page Content */}
        <div className="flex-1 p-6">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
