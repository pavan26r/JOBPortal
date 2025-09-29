import { createContext, useState, useEffect } from 'react';
import { jobsData } from "../assets/assets";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  // Search filters
  const [searchFilter, setSearchFilter] = useState({
    title: "",
    location: ""
  });

  // Track if user has searched
  const [isSearched, setIsSearched] = useState(false);

  // Job state
  const [jobs, setJobs] = useState([]);

  // Function to fetch job data
  const fetchJobs = async () => {
    setJobs(jobsData);
  };

  // Fetch jobs once on mount
  useEffect(() => {
    fetchJobs();
  }, []);

  // Values to share with whole app
  const value = {
    searchFilter, setSearchFilter,
    isSearched, setIsSearched,
    jobs, setJobs
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};
