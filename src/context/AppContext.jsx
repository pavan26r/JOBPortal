import React, { createContext, useState, useEffect, useCallback } from 'react';
import { jobsData } from "../assets/assets.js";
export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
  
  const [searchFilter, setSearchFilter] = useState({ title: "", location: "" });
  const [isSearched, setIsSearched] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [showRecruiterLogin, setShowRecruiterLogin] = useState(false);
  const fetchJobs = useCallback(async () => {
    try {
      setJobs(jobsData); 
    } catch (err) {
      console.error("Error fetching jobs:", err);
    }
  }, []);
  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);
  const filteredJobs = jobs.filter((job) => {
    const titleMatch = job.title.toLowerCase().includes(searchFilter.title.toLowerCase());
    const locationMatch = searchFilter.location
      ? job.location.toLowerCase() === searchFilter.location.toLowerCase()
      : true;
    return titleMatch && locationMatch;
  });
  const value = {
  
    searchFilter,
    setSearchFilter,
    isSearched,
    setIsSearched,

    jobs: filteredJobs,
    setJobs,
    showRecruiterLogin,
    setShowRecruiterLogin,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
