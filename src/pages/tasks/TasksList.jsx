import React, { useState, useEffect } from "react";
import axios from "axios";

import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import DialogflowMessenger from "../../utils/DialogflowMessenger";
import Tasks from "./Tasks";

function TasksList() {
  const [tasks, setTasks] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    axios
      .get("http://15.206.18.143:3000/events/list")
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <DialogflowMessenger />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Smaller container */}
            <div className="max-w-3xl mx-auto">
              {/* Page header */}
              <div className="sm:flex sm:justify-between sm:items-center mb-8">
                {/* Left: Title */}
                <div className="mb-4 sm:mb-0">
                  <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">
                    Follow Up
                  </h1>
                </div>
              </div>

              {/* Tasks */}
              <div className="space-y-6">
                {/* Group 1 */}
                <div>
                  <h2 className="grow font-semibold text-slate-800 truncate mb-4">
                    To Do's 🖋️
                  </h2>
                </div>

                {/* Group 2 */}
                <div>
                  <h2 className="grow font-semibold text-slate-800 truncate mb-4">
                    In Progress ✌️
                  </h2>
                  <div className="space-y-2">
                    {/* Task */}
                    {tasks.map((task) => (
                      <div
                        className="bg-white shadow-lg rounded-sm border border-slate-200 p-4"
                        draggable="true"
                        key={task._id}
                      >
                        <div className="sm:flex sm:justify-between sm:items-start">
                          {/* Left side */}
                          <Tasks task={task} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Group 3 */}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default TasksList;
