import React from 'react';

const JobCard = ({ job }) => {
  return (
    <div className="border p-6 shadow-md rounded-lg hover:shadow-lg transition bg-white flex flex-col justify-between">
      {/* Company Logo */}
      <div className="flex justify-start items-center mb-4">
        <img 
          src={job.company_logo} 
          alt={job.company} 
          className="w-12 h-12 object-contain" 
        />
      </div>

      {/* Job Title */}
      <h4 className="text-lg font-semibold mb-2">{job.title}</h4>

      {/* Meta Info */}
      <div className="flex flex-wrap gap-2 mb-3">
        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">{job.location}</span>
        <span className="px-3 py-1 bg-red-100 text-red-600 text-xs rounded-full">{job.level}</span>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-500 mb-4">
        {job.description.slice(0, 100)}...
      </p>

      {/* Actions */}
      <div className="flex gap-3 mt-auto">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm rounded-md">
          Apply now
        </button>
        <button className="border border-gray-300 hover:bg-gray-100 px-4 py-2 text-sm rounded-md">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default JobCard;
