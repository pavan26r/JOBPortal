import React from "react";
import { manageJobsData } from "../assets/assets.js";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const ManageJobs = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-2xl shadow-lg p-6 overflow-x-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Manage Jobs</h2>

          <button
            onClick={() => navigate("/dashboard/add-job")} 
            className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            + Add New Job
          </button>
        </div>

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-sm uppercase tracking-wide">
              <th className="py-3 px-6 text-left">#</th>
              <th className="py-3 px-6 text-left">Job Title</th>
              <th className="py-3 px-6 text-left">Date</th>
              <th className="py-3 px-6 text-left">Location</th>
              <th className="py-3 px-6 text-left">Applicants</th>
              <th className="py-3 px-6 text-left">Visible</th>
            </tr>
          </thead>

          <tbody>
            {manageJobsData.map((job, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-50 transition-colors duration-200"
              >
                <td className="py-4 px-6 text-gray-700 font-medium">
                  {index + 1}
                </td>

                <td className="py-4 px-6 font-medium text-gray-800">
                  {job.title}
                </td>

                <td className="py-4 px-6 text-gray-700">
                  {moment(job.date).format("ll")}
                </td>

                <td className="py-4 px-6 text-gray-700">{job.location}</td>

                <td className="py-4 px-6 text-gray-700">{job.applicants}</td>

                <td className="py-4 px-6">
                  <input
                    type="checkbox"
                    checked={job.visible}
                    readOnly
                    className="w-5 h-5 accent-blue-600 cursor-pointer"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageJobs;
