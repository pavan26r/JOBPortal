import React from "react";     // ✅ pointing wali image ka path
import { assets } from "../assets/assets";
const AppDownloadSection = () => {
  return (
    <div className="bg-white shadow-lg rounded-2xl flex flex-col md:flex-row items-center justify-between px-8 py-12 gap-8">
      {/* Left Section */}
      <div className="max-w-md text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 leading-snug">
          Download mobile app for <br /> better experience
        </h2>

        <div className="flex gap-4 justify-center md:justify-start mt-4">
          <a href="https://play.google.com" target="_blank" rel="noreferrer">
            <img src={assets.play_store} alt="Google Play" className="h-12 hover:scale-105 transition" />
          </a>
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer">
            <img src={assets.app_store} alt="App Store" className="h-12 hover:scale-105 transition" />
          </a>
        </div>
      </div> 
    </div>
  );
};

export default AppDownloadSection;
