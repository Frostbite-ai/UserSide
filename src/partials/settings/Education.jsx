import React, { useState, useEffect } from "react";
import axios from "axios"; // import axios for making HTTP requests
import { useTranslation } from "react-i18next";
import jwt_decode from "jwt-decode"; // import jwt-decode for decoding JWT token

function EducationStatus() {
  const [currentEducationLevel, setCurrentEducationLevel] = useState(""); // state variable for currentEmployment
  const [ongoingEducation, setOngoingEducation] = useState(""); // state variable for previousEmployment
  const [furtherStudyInterest, setFurtherStudyInterest] = useState(""); // state variable for jobTraining
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  // Get token from local storage
  const token = localStorage.getItem("token");

  // Decode token and extract user ID
  const decodedToken = jwt_decode(token);
  const id = decodedToken._id; // use "_id" to extract user ID from decoded token
  useEffect(() => {
    const fetchUserDetail = async () => {
      try {
        const response = await axios.get(
          `http://15.206.18.143:3000/user/user/${id}`
        );

        setCurrentEducationLevel(
          response.data.educationStatus.currentEducationLevel
        );
        setOngoingEducation(response.data.educationStatus.ongoingEducation);
        setFurtherStudyInterest(
          response.data.educationStatus.furtherStudyInterest
        );
      } catch (error) {
        console.error("Failed to fetch user details.", error);
      }
    };
    fetchUserDetail();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.put(
        `http://15.206.18.143:3000/user/userUpdates/${id}`,
        {
          educationStatus: {
            currentEducationLevel: currentEducationLevel,
            ongoingEducation: ongoingEducation,
            furtherStudyInterest: furtherStudyInterest,
          },
        }
      );
      console.log(response.data);
      alert("Profile updated successfully.");
    } catch (error) {
      console.error("Failed to update profile.", error);
      alert("Failed to update profile.");
    }
  };
  return (
    <form className="w-full  " onSubmit={handleSubmit}>
      <div className="grow">
        {/* Panel body */}
        <div className="p-6 space-y-6">
          <h2 className="text-2xl text-slate-800 font-bold mb-5">
            {t("EducationStatus")}
          </h2>
          {/* section 1*/}
          <section>
            <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 ">
              {/* Current Education Status,*/}
              <div className="sm:w-1/3">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="CurrentEducationLevel"
                >
                  {t("Educationlevel")}
                </label>
                <select
                  id="CurrentEducationLevel"
                  className="form-select w-full"
                  value={currentEducationLevel}
                  onChange={(e) => setCurrentEducationLevel(e.target.value)}
                >
                  <option value="">{t("Select")}</option>
                  <option value="noEducation">{t("NoEducation")}</option>
                  <option value="primarySchool">{t("PrimarySchool")}</option>
                  <option value="middleSchool">{t("MiddleSchool")}</option>
                  <option value="10th">{t("10th")}</option>
                  <option value="12th">{t("12th")}</option>
                  <option value="diploma">{t("Diploma")}</option>
                  <option value="graduate">{t("Graduate")}</option>
                </select>
              </div>

              {/* ongoing Education,*/}
              <div className="sm:w-1/3">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="OngoingEducation"
                >
                  {t("OngoingEducation")}
                </label>
                <select
                  id="OngoingEducation"
                  className="form-select w-full"
                  value={ongoingEducation}
                  onChange={(e) => setOngoingEducation(e.target.value)}
                >
                  <option value="">{t("Select")}</option>
                  <option value="yes">{t("Yes")}</option>
                  <option value="no">{t("No")}</option>
                </select>
              </div>

              {/* further Study Interest,*/}
              <div className="sm:w-1/3">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="FurtherStudyInterest"
                >
                  {t("FurtherStudyInterest")}
                </label>
                <select
                  id="FurtherStudyInterest"
                  className="form-select w-full"
                  value={furtherStudyInterest}
                  onChange={(e) => setFurtherStudyInterest(e.target.value)}
                >
                  <option value="">{t("Select")}</option>
                  <option value="yes">{t("Yes")}</option>
                  <option value="no">{t("No")}</option>
                </select>
              </div>
            </div>
          </section>
        </div>

        {/* Panel footer */}
        <footer>
          <div className="flex flex-col px-6 py-5 border-t border-slate-200">
            <div className="flex self-end">
              <button
                onSubmit={handleSubmit}
                type="submit"
                className="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3"
              >
                {t("Save")}
              </button>
            </div>
          </div>
        </footer>
      </div>
    </form>
  );
}

export default EducationStatus;
