import React from "react";
import { Link } from "react-router-dom";

import MeetupsThumb01 from "../../images/meetups-thumb-01.jpg";

function MeetupsPosts() {
  return (
    <div className="grid xl:grid-cols-2 gap-6">
      {/* Item 1 */}
      <article className="flex bg-white shadow-lg rounded-sm border border-slate-200 overflow-hidden">
        {/* Image */}
        <Link
          className="relative block w-24 sm:w-56 xl:sidebar-expanded:w-40 2xl:sidebar-expanded:w-56 shrink-0"
          to="/community/meetups-post"
        >
          <img
            className="absolute object-cover object-center w-full h-full"
            src={MeetupsThumb01}
            width="220"
            height="236"
            alt="Meetup 01"
          />
        </Link>
        {/* Content */}
        <div className="grow p-5 flex flex-col">
          <div className="grow">
            <div className="text-sm font-semibold text-indigo-500 uppercase mb-2">
              Mon 27 Dec, 2021
            </div>
            <Link className="inline-flex mb-2" to="/community/meetups-post">
              <h3 className="text-lg font-bold text-slate-800">
                Silicon Valley Bootstrapper Breakfast Online for 2021
              </h3>
            </Link>
            <div className="text-sm">
              {/* Event details */}
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts.
            </div>
          </div>
          {/* Footer */}
          <div className="flex justify-between mt-3">
            {/* Tag */}
            <div className="text-xs inline-flex items-center font-medium bg-slate-100 text-slate-600 rounded-full text-center px-2.5 py-1">
              <span>Online Event</span> {/* Event Type */}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default MeetupsPosts;
