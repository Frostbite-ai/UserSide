import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DialogflowMessenger from "../utils/DialogflowMessenger";

import AuthImage from "../images/auth-image.webp";
import AuthDecoration from "../images/auth-decoration.png";
import TinyMiraclesLogo from "../images/tinymiracles.webp";

function ResetPassword() {
  const [isButtonPressed, setButtonPressed] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setButtonPressed(true);
    alert("Password reset link has been sent successfully.");
    navigate("/signin");
  };

  return (
    <main className="bg-white">
      <form onSubmit={handleSubmit}>
        <DialogflowMessenger />
        <div className="relative md:flex">
          {/* Content */}
          <div className="md:w-1/2">
            <div className="min-h-screen h-full flex flex-col after:flex-1">
              {/* Header */}
              <div className="flex-1">
                <div className="flex justify-between items-center mt-4 w-32 ms-4">
                  <img
                    className="object-cover object-center w-full h-full"
                    src={TinyMiraclesLogo}
                    alt="Logo"
                  />
                </div>
              </div>

              <div className="max-w-sm mx-auto px-4 py-8">
                <h1 className="text-3xl text-slate-800 font-bold mb-6">
                  Reset your Password ✨
                </h1>
                {/* Form */}
                <div className="space-y-4">
                  <div>
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor="tel"
                    >
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="tel"
                      className="form-input w-full"
                      type="tel"
                      required
                      pattern="[0-9]*"
                    />
                  </div>
                </div>
                <div className="flex justify-end mt-6">
                  <button
                    className={`btn ${
                      isButtonPressed
                        ? "bg-green-500 hover:bg-green-600"
                        : "bg-indigo-500 hover:bg-indigo-600"
                    } text-white whitespace-nowrap`}
                  >
                    Send Reset Link
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div
            className="hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2"
            aria-hidden="true"
          >
            <img
              className="object-cover object-center w-full h-full"
              src={AuthImage}
              width="760"
              height="1024"
              alt="Authentication"
            />
            <img
              className="absolute top-1/4 left-0 -translate-x-1/2 ml-8 hidden lg:block"
              src={AuthDecoration}
              width="218"
              height="224"
              alt="Authentication decoration"
            />
          </div>
        </div>
      </form>
    </main>
  );
}

export default ResetPassword;
