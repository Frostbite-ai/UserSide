import React, { useState, useEffect } from "react";
import axios from "axios"; // import axios for making HTTP requests
import { useTranslation } from "react-i18next";

function Employment() {
  const [currentEmployment, setCurrentEmployment] = useState(""); // state variable for currentEmployment
  const [previousEmployment, setPreviousEmployment] = useState(""); // state variable for previousEmployment
  const [jobTraining, setJobTraining] = useState(""); // state variable for jobTraining
  const [workNature, setWorkNature] = useState(""); // state variable for workNature
  const [workIndustry, setWorkIndustry] = useState(""); // state variable for workExperience
  const [openForEmployment, setOpenForEmployment] = useState(""); // state variable for openForEmployment
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const id = "d667476a-6f64-47c4-8eb7-4d4504927b60"; // Constant user ID for now

  useEffect(() => {
    const fetchUserDetail = async () => {
      try {
        const response = await axios.get(
          `http://15.206.18.143:3000/user/user/${id}`
        );

        setCurrentEmployment(response.data.employmentStatus.currentEmployment);
        setPreviousEmployment(response.data.employmentStatus.prevEmployment);
        setJobTraining(response.data.employmentStatus.jobTraining);
        setWorkNature(response.data.employmentStatus.workNature);
        setWorkIndustry(response.data.employmentStatus.workIndustry);
        setOpenForEmployment(response.data.employmentStatus.openForEmployment);
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
        `hhttp://15.206.18.143:3000/user/userUpdates/${id}`,
        {
          employmentStatus: {
            currentEmployment: currentEmployment,
            prevEmployment: previousEmployment,
            jobTraining: jobTraining,
            workNature: workNature,
            workIndustry: workIndustry,
            openForEmployment: openForEmployment,
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
            {t("EmploymentStatus")}
          </h2>

          {/* section 1*/}

          <section>
            <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 ">
              {/* Current Employment Status,*/}
              <div className="sm:w-1/3">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="CurrentEmployment"
                >
                  {t("CurrentEmploymentStatus")}
                </label>
                <select
                  id="CurrentEmployment"
                  className="form-select w-full"
                  value={currentEmployment}
                  onChange={(e) => setCurrentEmployment(e.target.value)}
                >
                  <option value="">{t("Select")}</option>
                  <option value="employed">{t("Employed")}</option>
                  <option value="unemployed">{t("Unemployed")}</option>
                  <option value="retired">{t("Retired")}</option>
                  <option value="student">{t("Student")}</option>
                </select>
              </div>

              {/* work nature,*/}
              <div className="sm:w-1/3">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="WorkNature"
                >
                  {t("Worknature")}
                </label>
                <select
                  id="WorkNature"
                  className="form-select w-full"
                  value={workNature}
                  onChange={(e) => setWorkNature(e.target.value)}
                >
                  <option value="">{t("Select")}</option>
                  <option value="permanent">{t("Permanent")}</option>
                  <option value="contract">{t("Contract")}</option>
                  <option value="casual">{t("Casual")}</option>
                </select>
              </div>

              {/* workIndustry,*/}
              <div className="sm:w-1/3">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="WorkIndustry"
                >
                  {t("IndustryofWork")}
                </label>
                <select
                  id="WorkIndustry"
                  className="form-select w-full"
                  value={workIndustry}
                  onChange={(e) => setWorkIndustry(e.target.value)}
                >
                  <option value="">{t("Select")}</option>
                  <option value="agriculture">{t("Agriculture")}</option>
                  <option value="manufacturing">{t("Manufacturing")}</option>
                  <option value="construction">{t("Construction")}</option>
                  <option value="other">{t("Other")}</option>
                </select>
              </div>
            </div>
          </section>

          <section>
            <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 ">
              {/* PreviousEmployment,*/}
              <div className="sm:w-[32%]">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="PreviousEmployment"
                >
                  {t("PreviousEmployment")}
                </label>
                <input
                  id="PreviousEmployment"
                  className="form-input w-full"
                  type="text"
                  value={previousEmployment}
                  onChange={(e) => setPreviousEmployment(e.target.value)}
                />
              </div>

              {/* openForEmployment,*/}
              <div className="sm:w-[32.2%]">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="OpenForEmployment"
                >
                  {t("OpenForEmployment")}
                </label>
                <select
                  id="OpenForEmployment"
                  className="form-select w-full"
                  value={openForEmployment}
                  onChange={(e) => setOpenForEmployment(e.target.value)}
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

export default Employment;
