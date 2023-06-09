import React, { useState } from "react";

import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import SearchForm from "../../partials/actions/SearchForm";
import MeetupsPosts from "../../partials/community/MeetupsPosts";
import PaginationNumeric from "../../components/PaginationNumeric";
// import { eventsList } from "./data";
// import EventsList from "./Eventlist/index";
import EventsPosts from "./EventsPosts";
import DialogflowMessenger from "../../utils/DialogflowMessenger";

function Meetups() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <DialogflowMessenger />
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Page header */}
            {/* Content */}
            {/* <EventsList events={eventsList} /> */}
            <EventsPosts />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Meetups;
