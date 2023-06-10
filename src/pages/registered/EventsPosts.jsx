import React, { useState, useEffect } from "react";
import axios from "axios";
import MeetupsPost from "./MeetupsPost";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import jwt_decode from "jwt-decode"; // import jwt-decode for decoding JWT token

export default function EventsPosts() {
  const [posts, setPosts] = useState([]);
  const [attendedPosts, setAttendedPosts] = useState([]);
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const token = localStorage.getItem("token");

  // Decode token and extract user ID
  const decodedToken = jwt_decode(token);
  const userID = decodedToken._id; // use "_id" to extract user ID from decoded token

  useEffect(() => {
    axios
      .get(`http://15.206.18.143:3000/user/getUsersRegisteredEvents/${userID}`)
      .then((response) => {
        console.log(response);

        const sortedPosts = response.data.sort((a, b) => {
          return (
            new Date(b.eventStartTime).getTime() -
            new Date(a.eventStartTime).getTime()
          );
        });

        setPosts(sortedPosts);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://15.206.18.143:3000/user/getUsersAttendedEvents/${userID}`)
      .then((response) => {
        console.log(response);

        const sortedPosts = response.data.sort((a, b) => {
          return (
            new Date(b.eventStartTime).getTime() -
            new Date(a.eventStartTime).getTime()
          );
        });

        setAttendedPosts(sortedPosts);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <>
      <div className="text-sm text-slate-500 italic mb-1">
        {t("TotalEvents")}: {posts.length}
      </div>
      <h1 className="text-xl md:text-2xl mb-1 text-slate-800 font-bold">
        {t("YettoAttend")}
      </h1>
      <div className="grid sm:grid-cols-2 gap-6">
        {posts.map((post) => (
          <MeetupsPost key={post._id} {...post} />
        ))}
      </div>

      <h1 className="text-xl md:text-2xl mb-1 text-slate-800 mt-4 font-bold">
        {t("AttendedEvents")}
      </h1>

      <div className="grid sm:grid-cols-2 gap-6">
        {attendedPosts.map((post) => (
          <MeetupsPost key={post._id} {...post} />
        ))}
      </div>
    </>
  );
}
