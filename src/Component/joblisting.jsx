import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { assets, JobCategories, JobLocations } from "../assets/assets";
import JobCard from "./JobCard";

const Joblisting = () => {
  const { isSearched, searchFilter, setSearchFilter, jobs } = useContext(AppContext);
  const [showFilter, setShowFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const jobsPerPage = 6; // ek page par kitne jobs dikhane hain
  const totalPages = Math.ceil((jobs?.length || 0) / jobsPerPage);

  // slice of jobs for current page
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs?.slice(indexOfFirstJob, indexOfLastJob);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="p-4 w-64 border-r border-gray-200 h-screen sticky top-0 overflow-y-auto">
        {/* Filters + Search */}
        {isSearched && (searchFilter.title || searchFilter.location) && (
          <div className="mb-6">
            <h3 className="text-gray-600 font-semibold mb-2">Current Search</h3>
            <div className="flex gap-2 flex-wrap">
              {searchFilter.title && (
                <span className="flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                  {searchFilter.title}
                  <img
                    onClick={() => setSearchFilter((prev) => ({ ...prev, title: "" }))}
                    className="cursor-pointer w-3 h-3"
                    src={assets.cross_icon}
                    alt="remove"
                  />
                </span>
              )}
              {searchFilter.location && (
                <span className="flex items-center gap-2 px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm">
                  {searchFilter.location}
                  <img
                    onClick={() => setSearchFilter((prev) => ({ ...prev, location: "" }))}
                    className="cursor-pointer w-3 h-3"
                    src={assets.cross_icon}
                    alt="remove"
                  />
                </span>
              )}
            </div>
          </div>
        )}

        <button
          onClick={() => setShowFilter((prev) => !prev)}
          className="px-6 py-1.5 rounded border border-gray-400 lg:hidden"
        >
          {showFilter ? "Close" : "Filters"}
        </button>

        {/* Categories */}
        <div className={`${showFilter ? "" : "max-lg:hidden"} mb-6`}>
          <h4 className="text-gray-700 font-semibold mb-3">Search by Categories</h4>
          <ul className="flex flex-col gap-3">
            {JobCategories.map((category, index) => (
              <li key={index} className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                <input
                  type="checkbox"
                  id={`category-${index}`}
                  className="cursor-pointer w-4 h-4 accent-blue-500"
                />
                <label htmlFor={`category-${index}`} className="cursor-pointer">
                  {category}
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* Locations */}
        <div className="mb-6">
          <h4 className="text-gray-700 font-semibold mb-3">Search by Locations</h4>
          <ul className="flex flex-col gap-3">
            {JobLocations.map((loc, index) => (
              <li key={index} className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                <input
                  type="checkbox"
                  id={`location-${index}`}
                  className="cursor-pointer w-4 h-4 accent-blue-500"
                />
                <label htmlFor={`location-${index}`} className="cursor-pointer">
                  {loc}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-bold mb-2">Available Opportunities</h2>
        <p className="text-gray-500 mb-6">Find your dream job and start your career today 🚀</p>

        {/* Grid Layout for Jobs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentJobs && currentJobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 gap-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="px-3 py-1 border rounded hover:bg-gray-100"
            disabled={currentPage === 1}
          >
            &lt;
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-3 py-1 border rounded ${
                currentPage === index + 1 ? "bg-blue-600 text-white" : "hover:bg-gray-100"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="px-3 py-1 border rounded hover:bg-gray-100"
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Joblisting;
