import React, { useState, useEffect, useRef } from "react";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import DialogflowMessenger from "../utils/DialogflowMessenger";

function Messages() {
  const contentArea = useRef(null);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <DialogflowMessenger />
      {/* Content area */}
      <div
        className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden"
        ref={contentArea}
      >
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="relative flex">
            <iframe
              className="airtable-embed airtable-dynamic-height"
              src="https://airtable.com/embed/shrhtcfiJwO2PjCLf?backgroundColor=blue"
              frameborder="0"
              onmousewheel=""
              width="100%"
              height="879"
              style={{ background: "transparent", border: "1px solid #ccc" }}
              title="Airtable Form"
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Messages;
