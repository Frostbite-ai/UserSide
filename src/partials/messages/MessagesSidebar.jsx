import React from "react";
import DirectMessages from "./DirectMessages";

function MessagesSidebar({ msgSidebarOpen, setMsgSidebarOpen }) {
  return (
    <div
      id="messages-sidebar"
      className={`absolute z-20 top-0 bottom-0 w-full md:w-auto md:static md:top-auto md:bottom-auto -mr-px md:translate-x-0 transition-transform duration-200 ease-in-out ${
        msgSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="sticky top-16 bg-white overflow-x-hidden overflow-y-auto no-scrollbar shrink-0 border-r border-slate-200 md:w-56 h-[calc(100vh-64px)]">
        {/* #Marketing group */}
        <div>
          {/* Group body */}
          <div className="px-5 py-4">
            {/* Direct messages */}
            <DirectMessages
              msgSidebarOpen={msgSidebarOpen}
              setMsgSidebarOpen={setMsgSidebarOpen}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessagesSidebar;
