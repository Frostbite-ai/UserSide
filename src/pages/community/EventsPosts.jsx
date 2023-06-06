import React, { useState, useEffect } from "react";
import axios from "axios";
import MeetupsPost from "./MeetupsPost";
import { Link } from "react-router-dom";
// import SearchForm from "../../partials/actions/SearchForm";

export default function EventsPosts() {
  const [posts, setPosts] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    axios
      .get("https://json.extendsclass.com/bin/c6c7aca8a86e")
      .then((response) => {
        const sortedPosts = response.data.sort((a, b) =>
          b.eventDate.localeCompare(a.eventDate)
        );
        setPosts(sortedPosts);
        const today = new Date().toISOString().split("T")[0];
        const upcoming = sortedPosts.filter((post) => post.eventDate >= today);
        const past = sortedPosts.filter((post) => post.eventDate < today);
        setUpcomingEvents(upcoming);
        setPastEvents(past);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const categories = [
    "Legal counsel",
    "Financial",
    "Employment and Entrepreneurship",
    "Health and Wellness",
    "Women's Rights",
  ];

  return (
    <>
      <div className="sm:flex sm:justify-between sm:items-center mb-2">
        {/* Filters */}
        <div className="mb-0">
          <ul className="flex flex-wrap -m-1">
            {categories.map((category) => (
              <li
                className="inline-flex m-1 items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 hover:border-slate-300 shadow-sm bg-white text-slate-500 duration-150 ease-in-out"
                key={category}
              >
                <button onClick={() => setSelectedCategory(category)}>
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-sm text-slate-500 italic mb-1">
        Total events: {posts.length}
      </div>
      <h1 className="text-xl md:text-2xl mb-1 text-slate-800 font-bold">
        Future Events
      </h1>
      <div className="grid sm:grid-cols-2 gap-6">
        {upcomingEvents
          .filter(
            (event) =>
              !selectedCategory || event.eventCategory === selectedCategory
          )
          .map((post) => (
            <MeetupsPost key={post.sessionId} {...post} />
          ))}
      </div>
      <h1 className="text-xl md:text-2xl text-slate-800 mt-6 mb-1 font-bold">
        Past Events
      </h1>

      <div className="grid sm:grid-cols-2 gap-6">
        {pastEvents
          .filter(
            (event) =>
              !selectedCategory || event.eventCategory === selectedCategory
          )
          .map((post) => (
            <MeetupsPost key={post.sessionId} {...post} />
          ))}
      </div>
    </>
  );
}
