import React, { useState, useEffect } from "react";
import axios from "axios"; // import axios for making HTTP requests
import { useTranslation } from "react-i18next";
import jwt_decode from "jwt-decode"; // import jwt-decode for decoding JWT token

function MedicalStatus() {
  const [hospitalizationRecords, setHospitalizationRecords] = useState(""); // state variable for hospitalizationRecords
  const [chronicIllnesses, setChronicIllnesses] = useState(""); // state variable for chronicIllnesses
  const [currentMedications, setCurrentMedications] = useState(""); // state variable for currentMedications
  const [bloodGroup, setBloodGroup] = useState(""); // state variable bloodGroup
  const [allergies, setAllergies] = useState(""); // state variable allergies
  const [vaccinationRecords, setVaccinationRecords] = useState(""); // state variable vaccinationRecords
  const [healthInsurance, setHealthInsurance] = useState(""); // state variable healthInsurance
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

        setHospitalizationRecords(
          response.data.medicalRecords.hospitalizationRecords
        );
        setChronicIllnesses(response.data.medicalRecords.chronicIllnesses);
        setCurrentMedications(response.data.medicalRecords.currentMedications);
        setBloodGroup(response.data.medicalRecords.bloodGroup);
        setAllergies(response.data.medicalRecords.allergies);
        setVaccinationRecords(response.data.medicalRecords.vaccinationRecords);
        setHealthInsurance(response.data.medicalRecords.healthInsurance);
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
          medicalRecords: {
            hospitalizationRecords: hospitalizationRecords,
            chronicIllnesses: chronicIllnesses,
            currentMedications: currentMedications,
            bloodGroup: bloodGroup,
            allergies: allergies,
            vaccinationRecords: vaccinationRecords,
            healthInsurance: healthInsurance,
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
            {t("MedicalStatus")}
          </h2>

          {/* section 1  - Communication */}

          <section>
            <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 ">
              {/* setHospitalizationRecords,*/}
              <div className="sm:w-1/3">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="hospitalizationRecords"
                >
                  {t("HospitalizationRecords")}
                </label>

                <textarea
                  id="hospitalizationRecords"
                  className="form-textarea w-full"
                  rows="3"
                  value={hospitalizationRecords}
                  onChange={(e) => setHospitalizationRecords(e.target.value)}
                ></textarea>
              </div>
              {/* chronicIllnesses,*/}
              <div className="sm:w-1/3">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="chronicIllnesses"
                >
                  {t("Chronicillnesses")}
                </label>
                <textarea
                  id="chronicIllnesses"
                  className="form-input w-full"
                  rows="3"
                  value={chronicIllnesses}
                  onChange={(e) => setChronicIllnesses(e.target.value)}
                ></textarea>
              </div>

              {/*currentMedications,*/}
              <div className="sm:w-1/3">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="currentMedications"
                >
                  {t("CurrentMedications")}
                </label>
                <textarea
                  id="currentMedications"
                  className="form-input w-full"
                  rows="3"
                  value={currentMedications}
                  onChange={(e) => setCurrentMedications(e.target.value)}
                ></textarea>
              </div>
            </div>
          </section>

          {/* section 2      */}
          <section>
            <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-2">
              {/* bloodGroup,*/}
              <div className="sm:w-1/3">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="bloodGroup"
                >
                  {t("BloodGroup")}
                </label>
                <select
                  id="bloodGroup"
                  className="form-input w-full"
                  rows="3"
                  value={bloodGroup}
                  onChange={(e) => setBloodGroup(e.target.value)}
                >
                  <option value="">{t("Select")}</option>
                  <option value="A+">{t("Apos")}</option>
                  <option value="A-">{t("Aneg")}</option>
                  <option value="B+">{t("Bpos")}</option>
                  <option value="B-">{t("Bneg")}</option>
                  <option value="AB+">{t("ABpos")}</option>
                  <option value="AB-">{t("ABneg")}</option>
                  <option value="O+">{t("Opos")}</option>
                  <option value="O-">{t("Oneg")}</option>
                </select>
                {/* your other fields go here */}
              </div>

              {/* allergies,*/}
              <div className="sm:w-1/3">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="allergies"
                >
                  {t("Allergies")}
                </label>
                <select
                  id="allergies"
                  className="form-input w-full"
                  rows="3"
                  value={allergies}
                  onChange={(e) => setAllergies(e.target.value)}
                >
                  <option value="">{t("Select")}</option>
                  <option value="yes">{t("Yes")}</option>
                  <option value="no">{t("None")}</option>
                </select>
                {/* your other fields go here */}
              </div>
              {/* healthInsurance,*/}
              <div className="sm:w-[32%]">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="vaccinationRecords"
                >
                  {t("HealthInsurance")}
                </label>
                <select
                  id="healthInsurance"
                  className="form-input w-full"
                  rows="3"
                  value={healthInsurance}
                  onChange={(e) => setHealthInsurance(e.target.value)}
                >
                  <option value="">{t("Select")}</option>
                  <option value="yes">{t("Yes")}</option>
                  <option value="no">{t("None")}</option>
                </select>
                {/* your other fields go here */}
              </div>
            </div>
          </section>

          {/* section 3      */}
          <section>
            <div className="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-2"></div>
            {/* vaccinationRecords,*/}
            <div className="sm:w-1/3">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="vaccinationRecords"
              >
                {t("VaccinationRecords")}
              </label>
              <textarea
                id="vaccinationRecords"
                className="form-input w-full"
                rows="3"
                value={vaccinationRecords}
                onChange={(e) => setVaccinationRecords(e.target.value)}
              ></textarea>
              {/* your other fields go here */}
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

export default MedicalStatus;
