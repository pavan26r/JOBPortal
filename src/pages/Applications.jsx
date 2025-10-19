import React, { useState } from "react";
import Navbar from "../Component/navbar";

import moment from "moment";
import Footer from "../Component/footer.jsx";

const Applications = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [resume, setResume] = useState(null);

  // Dummy applied jobs (replace with API/db data)
  const jobsApplied = [
    {
      jobId: 1,
      logo: assets.company_logo,
      company: "Google",
      title: "Frontend Developer",
      location: "Bangalore, India",
      date: new Date(),
      status: "Pending",
    },
    {
      jobId: 2,
      logo: assets.company_logo,
      company: "Microsoft",
      title: "Software Engineer",
      location: "Hyderabad, India",
      date: new Date(),
      status: "Selected",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="container px-4 min-h-[65vh] 2xl:px-20 mx-auto my-10">
        {/* Resume Section */}
        <h2 className="text-2xl font-semibold mb-4">Your Resume</h2>
        <div className="flex gap-4 mb-8">
          {isEdit ? (
            <>
              <label
                htmlFor="resumeUpload"
                className="flex items-center gap-2 cursor-pointer bg-gray-100 px-4 py-2 rounded-lg border hover:bg-gray-200"
              >
                <p>Select Resume</p>
                <input
                  id="resumeUpload"
                  type="file"
                  accept="application/pdf"
                  className="hidden"
                  onChange={(e) => setResume(e.target.files[0])}
                />
                <img
                  src={assets.profile_upload_icon}
                  alt="upload icon"
                  className="w-6 h-6"
                />
              </label>

              <button
                onClick={() => setIsEdit(false)}
                className="bg-green-500 text-white px-5 py-2 rounded-lg shadow hover:bg-green-600 transition"
              >
                Save
              </button>
            </>
          ) : (
            <div className="flex gap-4">
              <a
                href={resume ? URL.createObjectURL(resume) : "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-100 text-blue-600 px-5 py-2 rounded-lg font-medium shadow hover:bg-blue-200 transition"
              >
                View Resume
              </a>

              <button
                onClick={() => setIsEdit(true)}
                className="text-gray-600 border border-gray-300 rounded-lg px-5 py-2 shadow hover:bg-gray-100 transition"
              >
                Edit
              </button>
            </div>
          )}
        </div>

        {/* Jobs Applied Section */}
        <h2 className="text-2xl font-semibold mb-4">Jobs Applied</h2>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="px-6 py-3 text-sm font-semibold text-gray-700">Company</th>
                <th className="px-6 py-3 text-sm font-semibold text-gray-700">Job Title</th>
                <th className="px-6 py-3 text-sm font-semibold text-gray-700">Location</th>
                <th className="px-6 py-3 text-sm font-semibold text-gray-700">Date</th>
                <th className="px-6 py-3 text-sm font-semibold text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {jobsApplied.map((job, index) =>
                job.jobId ? (
                  <tr key={index} className="border-t hover:bg-gray-50 transition">
                    <td className="px-6 py-4 flex items-center gap-3">
                      <img
                        src={job.logo}
                        alt={job.company}
                        className="w-8 h-8 rounded-full border"
                      />
                      <span className="font-medium">{job.company}</span>
                    </td>
                    <td className="px-6 py-4">{job.title}</td>
                    <td className="px-6 py-4">{job.location}</td>
                    <td className="px-6 py-4">{moment(job.date).format("ll")}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 text-sm font-medium rounded-full ${
                          job.status === "Selected"
                            ? "bg-green-100 text-green-700"
                            : job.status === "Rejected"
                            ? "bg-red-100 text-red-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {job.status}
                      </span>
                    </td>
                  </tr>
                ) : null
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Applications;
