import React, { useState, useRef, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import { JobCategories } from "../assets/assets.js";


const Addjobs = () => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('Bangalore');
  const [category, setCategory] = useState('Programming');
  const [level, setLevel] = useState('Senior Level');
  const [salary, setSalary] = useState(0);

  const editorRef = useRef(null);
  const quillRef = useRef(null);

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: 'snow',
        placeholder: 'Type here...',
      });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const jobDescription = quillRef.current.root.innerHTML;
    console.log(jobData);
    // yaha API call ya state update kar sakte ho
  };

  return (
    <div className="min-h-screen flex justify-center items-start bg-white py-10">
      <form
        onSubmit={handleSubmit}
        className="w-[90%] md:w-[80%] max-w-3xl space-y-6 bg-white"
      >
        

        {/* Job Description */}
        <div>
          <p className="text-sm font-medium mb-1">Job Description</p>
          <div
            ref={editorRef}
            style={{ minHeight: '150px', background: '#fff' }}
            className="border border-gray-300 rounded p-2"
          ></div>
        </div>

        {/* Category, Location, Level */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Job Category */}
          <div>
            <p className="text-sm font-medium mb-1">Job Category</p>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            >
              {JobCategories.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Job Location */}
          <div>
            <p className="text-sm font-medium mb-1">Job Location</p>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option>Bangalore</option>
              <option>Hyderabad</option>
              <option>Chennai</option>
              <option>Mumbai</option>
              <option>Delhi</option>
            </select>
          </div>

          {/* Job Level */}
          <div>
            <p className="text-sm font-medium mb-1">Job Level</p>
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option>Beginner Level</option>
              <option>Mid Level</option>
              <option>Senior Level</option>
            </select>
          </div>
        </div>

        {/* Salary */}
        <div className="w-1/4">
          <div className="relative">
            <input
              type="number"
              id="salary"
              placeholder=" "
              value={salary}
              onChange={(e) => setSalary(Number(e.target.value))}
              className="peer w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <label
              htmlFor="salary"
              className="absolute left-3 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-black"
            >
              Salary
            </label>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-black text-white px-5 py-2 rounded hover:bg-gray-800 transition"
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default Addjobs;
