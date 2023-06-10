import React from "react";
import { classNamesShape } from "react-transition-group/cjs/utils/PropTypes";

function Tasks({ task }) {
  return (
    <div className="grow space-y-3 ">
      <div>
        <div className="flex items-center">
          <label className="flex items-center">
            <span className="font-medium text-slate-800 text-base  ml-2 mb-4">
              {task.eventName} {/* Display the event name here */}
            </span>
          </label>
        </div>
        {/* Nested checkboxes */}

        {task.category === "Child Education and Enrichment" && (
          <ul className="pl-12 space-y-3 ">
            <li>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                />
                <span className="text-sm text-slate-800  ml-3">
                  Finish the presentation
                </span>
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                />
                <span className="text-sm text-slate-800 ml-3">
                  Finish the design
                </span>
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                />
                <span className="text-sm text-slate-800 ml-3">
                  Publish the content
                </span>
              </label>
            </li>
          </ul>
        )}

        {task.category === "Legal" && (
          <ul className="pl-12 space-y-3">
            <li>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                />
                <span className="text-sm text-slate-800  ml-3">
                  Finish the presentation
                </span>
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                />
                <span className="text-sm text-slate-800 ml-3">
                  Finish the design
                </span>
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                />
                <span className="text-sm text-slate-800 ml-3">
                  Publish the content
                </span>
              </label>
            </li>
          </ul>
        )}

        {task.category === "Women's Rights" && (
          <ul className="pl-12 space-y-3">
            <li>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                />
                <span className="text-sm text-slate-800  ml-3">
                  Finish the presentation
                </span>
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                />
                <span className="text-sm text-slate-800 ml-3">
                  Finish the design
                </span>
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                />
                <span className="text-sm text-slate-800 ml-3">
                  Publish the content
                </span>
              </label>
            </li>
          </ul>
        )}

        {task.category === "Financial Literacy" && (
          <ul className="pl-12 space-y-3">
            <li>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                />
                <span className="text-sm text-slate-800  ml-3">
                  Finish the presentation
                </span>
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                />
                <span className="text-sm text-slate-800 ml-3">
                  Finish the design
                </span>
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                />
                <span className="text-sm text-slate-800 ml-3">
                  Publish the content
                </span>
              </label>
            </li>
          </ul>
        )}

        {task.category === "Health and Wellbeing" && (
          <ul className="pl-12 space-y-3">
            <li>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                />
                <span className="text-sm text-slate-800  ml-3">test</span>
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                />
                <span className="text-sm text-slate-800 ml-3">
                  Finish the design
                </span>
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                />
                <span className="text-sm text-slate-800 ml-3">
                  Publish the content
                </span>
              </label>
            </li>
          </ul>
        )}

        {task.category === "Government Assistance Programs" && (
          <ul className="pl-12 space-y-3">
            <li>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                />
                <span className="text-sm text-slate-800  ml-3">
                  Finish the presentation
                </span>
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                />
                <span className="text-sm text-slate-800 ml-3">
                  Finish the design
                </span>
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                />
                <span className="text-sm text-slate-800 ml-3">
                  Publish the content
                </span>
              </label>
            </li>
          </ul>
        )}

        {task.category === "Employment and Career Development" && (
          <ul className="pl-12 space-y-3">
            <li>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                />
                <span className="text-sm text-slate-800  ml-3">
                  Finish the presentation
                </span>
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                />
                <span className="text-sm text-slate-800 ml-3">
                  Finish the design
                </span>
              </label>
            </li>
            <li>
              <label className="flex items-center ">
                <input
                  type="checkbox"
                  className="peer focus:ring-0 focus-visible:ring w-5 h-5 bg-white border border-slate-200 text-indigo-500 rounded-full"
                />
                <span className="text-sm text-slate-800 ml-3">
                  Publish the content
                </span>
              </label>
            </li>
          </ul>
        )}
      </div>

      {/* Start */}
      <div className="flex justify-end mt-2">
        <button className="btn bg-emerald-500 hover:bg-emerald-600 text-white">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Tasks;
