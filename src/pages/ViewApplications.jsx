import React from "react";
import { assets, viewApplicationsPageData } from "../assets/assets.js";

const ViewApplications = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-2xl shadow-lg p-6 overflow-x-auto">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          View Applications
        </h2>

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-sm uppercase tracking-wide">
              <th className="py-3 px-6 text-left">#</th>
              <th className="py-3 px-6 text-left">User Name</th>
              <th className="py-3 px-6 text-left">Job Title</th>
              <th className="py-3 px-6 text-left">Location</th>
              <th className="py-3 px-6 text-left">Resume</th>
              <th className="py-3 px-6 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {viewApplicationsPageData.map((applicant, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-50 transition-colors duration-200"
              >
                <td className="py-4 px-6 text-gray-700 font-medium">
                  {index + 1}
                </td>

                <td className="py-4 px-6">
                  <div className="flex items-center gap-4">
                    <img
                      src={applicant.imgSrc}
                      alt=""
                      className="w-10 h-10 rounded-full object-cover border border-gray-200"
                    />
                    <span className="font-medium text-gray-800">
                      {applicant.name}
                    </span>
                  </div>
                </td>

                <td className="py-4 px-6 text-gray-700">
                  {applicant.jobTitle}
                </td>

                <td className="py-4 px-6 text-gray-700">
                  {applicant.location}
                </td>

                <td className="py-4 px-6">
                  <a
                    href={applicant.resume}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 hover:underline font-medium"
                  >
                    Resume
                    <img
                      src={assets.resume_download_icon}
                      alt="Download"
                      className="w-4 h-4"
                    />
                  </a>
                </td>

                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <button className="px-4 py-1.5 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition font-medium">
                      Accept
                    </button>
                    <button className="px-4 py-1.5 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition font-medium">
                      Reject
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        <div>
    <button> Add new Job</button>
   </div>
    </div>
  );
};

export default ViewApplications;
