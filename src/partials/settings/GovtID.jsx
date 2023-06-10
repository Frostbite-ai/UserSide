import React, { useState, useEffect } from "react";
import axios from "axios"; // import axios for making HTTP requests
import { useTranslation } from "react-i18next";
import jwt_decode from "jwt-decode"; // import jwt-decode for decoding JWT token

function GovtID() {
  const [aadharcard, setAadharCard] = useState(""); // state variable for aadharcard
  const [rationcard, setRationCard] = useState(""); // state variable for rationcard
  const [esharamcard, setEsharamCard] = useState(""); // state variable for esharamCard
  const [voterID, setVoterID] = useState(""); // state variable for voterID
  const [pancard, setPancard] = useState(""); // state variable for pancard
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

        setAadharCard(response.data.govtSchemes.aadharCard);
        setRationCard(response.data.govtSchemes.rationCard);
        setEsharamCard(response.data.govtSchemes.esharamCard);
        setVoterID(response.data.govtSchemes.panCard);
        setPancard(response.data.govtSchemes.voterId);
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
          govtSchemes: {
            rationCard: rationcard,
            aadharCard: aadharcard,
            esharamCard: esharamcard,
            panCard: pancard,
            voterId: voterID,
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
            {t("GovernmentIDs")}
          </h2>

          {/* section 1 */}
          <section>
            <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 ">
              {/* Ration Card */}
              <div className="sm:w-1/3">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="RationCard"
                >
                  {t("RationCard")}
                </label>
                <select
                  id="RationCard"
                  className="form-input w-full"
                  value={rationcard}
                  onChange={(e) => setRationCard(e.target.value)}
                >
                  <option value="">{t("Select")}</option>
                  <option value="Yes">{t("Yes")}</option>
                  <option value="No">{t("No")}</option>
                </select>
              </div>

              {/* Aadhar Card */}
              <div className="sm:w-1/3">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="Aadharcard"
                >
                  {t("AadharCard")}
                </label>
                <select
                  id="Aadharcard"
                  className="form-input w-full"
                  value={aadharcard}
                  onChange={(e) => setAadharCard(e.target.value)}
                >
                  <option value="">{t("Select")}</option>
                  <option value="Yes">{t("Yes")}</option>
                  <option value="No">{t("No")}</option>
                </select>
              </div>

              {/* Pan card */}
              <div className="sm:w-1/3">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="PanCard"
                >
                  {t("PanCard")}
                </label>
                <select
                  id="PanCard"
                  className="form-input w-full"
                  value={pancard}
                  onChange={(e) => setPancard(e.target.value)}
                >
                  <option value="">{t("Select")}</option>
                  <option value="Yes">{t("Yes")}</option>
                  <option value="No">{t("No")}</option>
                </select>
              </div>
            </div>
          </section>

          {/* section 2 */}
          <section>
            <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-2">
              {/* e-Sharam Card */}
              <div className="sm:w-[32%]">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="EsharamCard"
                >
                  {t("ESharamCard")}
                </label>
                <select
                  id="EsharamCard"
                  className="form-input w-full"
                  value={esharamcard}
                  onChange={(e) => setEsharamCard(e.target.value)}
                >
                  <option value="">{t("Select")}</option>
                  <option value="Yes">{t("Yes")}</option>
                  <option value="No">{t("No")}</option>
                </select>
              </div>

              {/* Voter ID Card */}
              <div className="sm:w-[32.2%]">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="VoterID"
                >
                  {t("VoterIDCard")}
                </label>
                <select
                  id="VoterID"
                  className="form-input w-full"
                  value={voterID}
                  onChange={(e) => setVoterID(e.target.value)}
                >
                  <option value="">{t("Select")}</option>
                  <option value="Yes">{t("Yes")}</option>
                  <option value="No">{t("No")}</option>
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

export default GovtID;
