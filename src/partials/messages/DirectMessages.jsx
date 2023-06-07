import React from "react";

function DirectMessages({ setMsgSidebarOpen }) {
  return (
    <div className="mt-4">
      <div className="text-xs font-semibold text-slate-400 uppercase mb-3">
        Chat Options
      </div>
      <ul className="mb-6">
        <li className="-mx-2">
          <button
            className="flex items-center justify-between w-full p-2 rounded bg-indigo-100"
            onClick={() => setMsgSidebarOpen(false)}
          >
            <div className="flex items-center truncate">
              <div className="w-8 h-8 " width="32" height="32" />
              <div className="truncate">
                <span className="text-sm font-medium text-slate-800">
                  English
                </span>
              </div>
            </div>
          </button>
        </li>
        <li className="-mx-2">
          <button
            className="flex items-center justify-between w-full p-2 rounded"
            onClick={() => setMsgSidebarOpen(false)}
          >
            <div className="flex items-center truncate">
              <div className="w-8 h-8" width="32" height="32" />
              <div className="truncate">
                <span className="text-sm font-medium text-slate-800">
                  Hindi
                </span>
              </div>
            </div>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default DirectMessages;
