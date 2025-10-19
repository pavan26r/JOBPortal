import React, {  useContext } from "react";
import { assets } from "../assets/assets.js";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { Link, useNavigate} from "react-router-dom";
import { AppContext } from "../context/AppContext"; // 👈 yeh import add karo
// use navigate ko impor tkr -> 3 : 25
const Navbar = () => {
  const { user } = useUser();
  const { openSignIn } = useClerk();
  const navigate = useNavigate();
  const { setShowRecruiterLogin } = useContext(AppContext);

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
              onClick={e => setShowRecruiterLogin(true)} 
              className="text-gray-600 text-sm px-3 py-1"
            >
              Recruiter Login
            </button>
            <button
              onClick={e => openSignIn()}
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
