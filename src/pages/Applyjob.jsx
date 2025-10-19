import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext.jsx";
import Loading from "../Component/Loading";
import Navbar from "../Component/navbar";
import moment from 'moment';
const Applyjob = () => {
  const { id } = useParams();
  const [jobData, setJobData] = useState(null);

  const { jobs } = useContext(AppContext);

  useEffect(() => {
    if (jobs && id) {
      const data = jobs.find((job) => job._id === id);
      if (data) {
        setJobData(data);
        console.log("Job Data:", data);
      }
    }
  }, [id, jobs]);

  if (!jobData) return <Loading />;

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto mt-8 p-6 flex gap-8">
        {/* Left Side - Job Details */}
        <div className="w-2/3 border rounded-lg shadow bg-white p-6">
          {/* Company Info */}
          <div className="flex items-center gap-4 mb-6">
            <img src={assets.company_icon} alt="company" className="w-14 h-14" />
            <div>
              <h1 className="text-2xl font-semibold">{jobData.title}</h1>
              <p className="text-gray-600">{jobData.company}</p>
            </div>
          </div>

          {/* Job Meta */}
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
              {jobData.location}
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">
              {jobData.level}
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-600 text-sm rounded-full">
              CTC: {jobData.salary}
            </span>
          </div>

          {/* Job Description */}
          <div className="text-gray-700 leading-relaxed mb-6">
            <h2 className="text-lg font-semibold mb-2">Job Description</h2>
            <p>{jobData.description}</p>
          </div>

          {/* Key Responsibilities */}
          {jobData.responsibilities && (
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">Key Responsibilities</h2>
              <ul className="list-decimal list-inside text-gray-700 space-y-1">
                {jobData.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Skills Required */}
          {jobData.skills && (
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">Skills Required</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {jobData.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Apply Button */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md">
            Apply Now
          </button>
        </div>

        {/* Right Side - More Jobs */}
        <div className="w-1/3">
          <h3 className="font-semibold text-lg mb-4">More jobs from {jobData.company}</h3>
          <div className="space-y-4">
            {jobs
              .filter((job) => job.company === jobData.company && job._id !== id)
              .slice(0, 3)
              .map((relatedJob) => (
                <div
                  key={relatedJob._id}
                  className="border rounded-lg p-4 shadow-sm bg-white"
                >
                  <h4 className="font-semibold">{relatedJob.title}</h4>
                  <p className="text-gray-500 text-sm">{relatedJob.location}</p>
                  <p className="text-gray-600 text-sm mb-2">{relatedJob.level}</p>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 text-sm rounded-md">
                    Apply now
                  </button>
                  <p> Posted {moment(jobData.date).fromNow()}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Applyjob;
