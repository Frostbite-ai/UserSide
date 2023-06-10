import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// import ProtectedRoute from "./utils/ProtectedRoute";
// import withProtection from "./hooks/ProtectedRoute";
import { AuthProvider } from "./hooks/AuthContext";
import ProtectedRoute from "./hooks/ProtectedRoute";
import "./css/style.css";
import { useRoutes } from "react-router-dom";
// import ProtectedRoute from "./hooks/ProtectedRoute";

import "./charts/ChartjsConfig";

// Import pages

import Account from "./pages/settings/Account";
import MedicalRecords from "./pages/settings/MedicalRecords";
import EducationStatus from "./pages/settings/EducationStatus";
import EmploymentStatus from "./pages/settings/EmploymentStatus";
import GovtID from "./pages/settings/GovtID";
import SocioeconomicStatus from "./pages/settings/SocioeconomicStatus";

import Feedback from "./pages/Feedback";
import Meetups from "./pages/community/Meetups";
import MeetupsPost from "./pages/community/MeetupsPost";
import TasksList from "./pages/tasks/TasksList";
import Messages from "./pages/Messages";
import Calendar from "./pages/Calendar";
import Campaigns from "./pages/Campaigns";
import Faqs from "./pages/utility/Faqs";
import PageNotFound from "./pages/utility/PageNotFound";
import EventPost from "./pages/community/EventPage";

import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import RegisteredEventsList from "./pages/registered/Events";
import RegisteredEventPost from "./pages/registered/EventPage";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <AuthProvider>
        <Routes>
          <Route
            path="/settings/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />

          <Route path="/" element={<Meetups />} />
          <Route path="/meetups" element={<Meetups />} />
          <Route path="/meetups/post" element={<MeetupsPost />} />
          <Route path="/settings" element={<Account />} />
          <Route path="/contact" element={<Messages />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/tasks/list" element={<TasksList />} />
          <Route path="/utility/faqs" element={<Faqs />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/community/meetups" element={<Meetups />} />
          <Route path="/community/meetups-post" element={<MeetupsPost />} />
          <Route path="/settings/MedicalRecords" element={<MedicalRecords />} />
          <Route
            path="/settings/EducationStatus"
            element={<EducationStatus />}
          />
          <Route
            path="/settings/EmploymentStatus"
            element={<EmploymentStatus />}
          />
          <Route path="/settings/GovtID" element={<GovtID />} />
          <Route
            path="/settings/SocioeconomicStatus"
            element={<SocioeconomicStatus />}
          />
          <Route path="/event/:id" element={<EventPost />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/registered" element={<RegisteredEventsList />} />
          <Route path="/registered/:id" element={<RegisteredEventPost />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
