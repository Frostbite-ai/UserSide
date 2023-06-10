import React, { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import TinyMiraclesLogo from "../images/tinymiracles.webp";
import AuthImage from "../images/auth-image.webp";
import { useAuth } from "../hooks/AuthContext";
import DialogflowMessenger from "../utils/DialogflowMessenger";

const Signin = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://15.206.18.143:3000/user/login",
        {
          PhoneNumber: phoneNumber,
          pwd: password,
        }
      );

      if (response.status === 200) {
        // store JWT token in localStorage or sessionStorage
        localStorage.setItem("token", response.data.accessToken);
        setIsLoggedIn(true);

        // or
        // sessionStorage.setItem('token', response.data.token);

        // redirect to home or dashboard
        navigate("/");
      }
    } catch (error) {
      // check if error response contains specific message
      if (
        error.response &&
        error.response.data.message === "NO ENTRY FOUND !!!"
      ) {
        alert("Wrong details! Please try again.");
      } else {
        console.log(error);
        // handle other errors
      }
    }
  };

  return (
    <main className="bg-white">
      <DialogflowMessenger />
      <div className="relative md:flex">
        <div className="md:w-1/2">
          <div className="flex flex-col h-full min-h-screen after:flex-1">
            <div className="flex-1">
              <div className="flex justify-between items-center mt-4 w-32 ms-4">
                <img
                  className="object-cover object-center w-full h-full"
                  src={TinyMiraclesLogo}
                  alt="Logo"
                />
              </div>
            </div>

            <div className="px-8 py-8 mx-auto w-full max-w-lg">
              <h1 className="mb-6 text-3xl font-bold text-slate-800">
                {t("login")} ✨
              </h1>
              {/* Form */}
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label
                      className="block mb-1 text-sm font-medium"
                      htmlFor="phone"
                    >
                      {"Phone Number"}
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      className="w-full form-input"
                      value={phoneNumber}
                      onChange={(e) => {
                        // Regex to check if value is numeric
                        const isNum = /^\d+$/.test(e.target.value);
                        if (isNum) {
                          setPhoneNumber(e.target.value);
                        }
                      }}
                    />
                  </div>

                  <div>
                    <label
                      className="block mb-1 text-sm font-medium"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      required
                      className="w-full form-input"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="on"
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center mt-6">
                  <div className="mr-1">
                    <Link
                      className="text-sm underline hover:no-underline"
                      to="/reset-password"
                    >
                      {t("forgotPassword")}
                    </Link>
                  </div>
                  <button
                    type="submit"
                    className="ml-3 text-white bg-indigo-500 btn hover:bg-indigo-600"
                  >
                    {t("login")}
                  </button>
                </div>
              </form>
              {/* Footer */}
              <div className="pt-5 mt-6 border-t border-slate-200">
                <div className="text-sm">
                  Dont Have An Account?{" "}
                  <Link
                    className="font-medium text-indigo-500 hover:text-indigo-600"
                    to="/signup"
                  >
                    {t("register")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div
          className="hidden absolute top-0 right-0 bottom-0 md:block md:w-1/2"
          aria-hidden="true"
        >
          <img
            className="object-cover object-center w-full h-full"
            src={AuthImage}
            width="760"
            height="1024"
            alt="Authentication"
          />
        </div>
      </div>
    </main>
  );
};

export default Signin;
