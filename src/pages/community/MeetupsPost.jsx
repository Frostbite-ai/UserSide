import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";

function MeetupsPosts({
  sessionId,
  eventName,
  eventCategory,
  location,
  eventDate,
  eventTime,
  eventDescription,
  eventImage,
}) {
  return (
    <>
      {/* Item 1 */}
      <article className="flex bg-white shadow-lg rounded-sm border border-slate-200 overflow-hidden">
        {/* Image */}
        <Link
          className="relative block w-24 sm:w-56 xl:sidebar-expanded:w-40 2xl:sidebar-expanded:w-56 shrink-0"
          to={`/event/${sessionId}`}
        >
          <img
            className="absolute object-cover object-center w-full h-full"
            src={eventImage}
            width="220"
            height="236"
            alt="Meetup 01"
          />
        </Link>
        {/* Content */}
        <div className="grow p-5 flex flex-col">
          <div className="grow">
            {/* Event date */}
            <div className="text-sm font-semibold text-indigo-500 uppercase mb-2">
              {format(new Date(eventDate), "EEE , d MMM  yyyy")}
            </div>
            <Link className="inline-flex mb-2" to={`/event/${sessionId}`}>
              {/* event name */}
              <h3 className="text-lg font-bold text-slate-800">{eventName}</h3>
            </Link>
            {/* Event details */}
            <div className="text-sm">{eventDescription}</div>
          </div>
          {/* Footer */}
          <div className="flex justify-between mt-3">
            {/* Tag */}
            <div className="text-xs inline-flex items-center font-medium bg-slate-100 text-slate-600 rounded-full text-center px-2.5 py-1">
              <span>{eventCategory}</span> {/* Event Type */}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default MeetupsPosts;
