import { assets } from "../assets/assets";
import React from "react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user } = useUser();
  const { openSignIn } = useClerk();

  return (
    <div className="shadow py-4">
      <div className="max-w-[1400px] px-4 2xl:px-20 mx-auto flex justify-between items-center">
        {/* Logo */}
        <img src={assets.logo} alt="Logo" className="h-10 w-auto" />

        {/* Right side */}
        {user ? (
          <div className="flex items-center gap-6">
            <Link to="/applications" className="text-gray-700">
              Applied Jobs
            </Link>
            <p className="max-sm:hidden text-gray-600">
              Hi, {user.firstName} {user.lastName}
            </p>
            <UserButton afterSignOutUrl="/" />
          </div>
        ) : (
          <div className="flex gap-6 sm:gap-10 items-center">
            <button
              onClick={() => openSignIn()}
              className="text-gray-600 text-sm px-3 py-1"
            >
              Recruiter Login
            </button>
            <button
              onClick={() => openSignIn()}
              className="bg-blue-600 text-white text-sm px-4 py-1.5 rounded-full"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
