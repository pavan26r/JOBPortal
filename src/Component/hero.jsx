import React,{useContext,useRef} from 'react';
import { assets } from "../assets/assets.js";

import { AppContext } from '../context/AppContext';
const Heron = () => {
 const {setSearchFilter,setIsSearched} = useContext(AppContext)
   const titleref = useRef(null);
    const locationref = useRef(null);
    const onSearch = ()=>{
     setSearchFilter({
      title: titleref.current.value,
      location: locationref.current.value
     })
     setIsSearched(true)
   const searchData = {
  title: titleref.current.value,
  location: locationref.current.value,
};
setSearchFilter(searchData);
setIsSearched(true);

    }
  return (
    <div className="container 2xl:px-20 mx-auto my-10">
      <div className="bg-gradient-to-r from-purple-800 to-purple-950 text-white py-16 px-4 text-center rounded-xl mx-2">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
          Over 10,000+ jobs to apply
        </h2>
        <p className="max-w-xl mx-auto text-sm md:text-base mb-8">
          Your Next Big Career Move Starts Right Here – Explore The Best Job Opportunities
          And Take The First Step Toward Your Future!
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-3xl mx-auto">
          <div className="flex items-center bg-white rounded-md px-3 py-2 w-full sm:w-[300px]">
            <img src={assets.search_icon} alt="search" className="w-5 h-5 mr-2" />
            <input
              type="text"
              placeholder="Search for jobs"
              className="text-sm text-black w-full outline-none"
              ref ={titleref}
            />
          </div>

          <div className="flex items-center bg-white rounded-md px-3 py-2 w-full sm:w-[200px]">
            <img src={assets.location_icon} alt="location" className="w-5 h-5 mr-2" />
            <input
              type="text"
              placeholder="Location"
              className="text-sm text-black w-full outline-none"
              ref ={locationref}
            />
          </div>

          <button onClick = { onSearch} className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md w-full sm:w-auto">
            Search
          </button>
        </div>
      </div>

      {/* Trusted by section */}
      <div className="bg-white py-8 px-4 shadow-sm rounded-xl mt-6 mx-2">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-sm md:text-base font-medium">
            Trusted by
          </p>
          <div className="flex items-center flex-wrap justify-center gap-8">
            <img
              src={assets.microsoft_logo}
              alt="Microsoft"
              className="h-6 md:h-8 object-contain"
            />
            <img
              src={assets.walmart_logo}
              alt="Walmart"
              className="h-6 md:h-8 object-contain"
            />
            <img
              src={assets.accenture_logo}
              alt="Accenture"
              className="h-6 md:h-8 object-contain"
            />
              <img
              src={assets.samsung_logo}
              alt="Samsung"
              className="h-6 md:h-8 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heron;
// 54