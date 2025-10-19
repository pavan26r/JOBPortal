import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Applications from "./pages/Applications.jsx";
import Applyjob from "./pages/applyjob.jsx";
import RecruiterLogin from "./Component/RecruiterLogin.jsx";
import { AppContext } from "./context/AppContext";
import Dashboard from "./pages/Dashboard.jsx";
import AddJob from "./pages/Addjobs.jsx";
import ManageJobs from "./pages/ManageJobs.jsx";
import ViewApplications from "./pages/ViewApplications.jsx";
import 'quill/dist/quill.snow.css';
// Proper imports with unique names

const App = () => {
  const { showRecruiterLogin } = useContext(AppContext);

  return (
    <div>
    <div>
      {showRecruiterLogin && <RecruiterLogin />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply-job/:id" element={<Applyjob />} />
        <Route path="/applications" element={<Applications />} />

        {/* Dashboard nested routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="add-job" element={<AddJob />} />
          <Route path="manage-job" element={<ManageJobs />} />
          <Route path="view-application" element={<ViewApplications />} />
        </Route>
      </Routes>
    </div>

   </div>
  );
};

export default App;