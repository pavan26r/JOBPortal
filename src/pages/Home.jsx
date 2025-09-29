import React from "react";
import Navbar from "../Component/navbar.jsx";
import Heron from "../Component/hero.jsx";
import Joblisting from "../Component/joblisting.jsx";
import AppDownloadSection from "../Component/appdownload.jsx";
import Footer from "../Component/footer.jsx"
const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Heron />

      {/* Job Listings */}
      <div className="flex-1">
        <Joblisting />
      </div>

      {/* App Download Banner */}
      <div className="bg-gray-50 py-10">
        <AppDownloadSection />
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
