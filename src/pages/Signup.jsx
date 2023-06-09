import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import DialogflowMessenger from "../utils/DialogflowMessenger";

import AuthImage from "../images/auth-image.webp";
import AuthDecoration from "../images/auth-decoration.png";
import TinyMiraclesLogo from "../images/tinymiracles.webp";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [community, setCommunity] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userDetails = {
      pwd: password,
      basicDetails: {
        PhoneNumber: phoneNumber,
        name: name,
        gender: gender,
        Community: community,
      },
    };

    const response = await fetch("http://localhost:3000/user/register/byUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    });

    if (response.ok) {
      const data = await response.json();
      // Check if response contains "accessToken"
      if (data.accessToken) {
        alert("Registration successful!");
        navigate("/signin");
      } else {
        console.log("Signup failed");
      }
    } else {
      console.log("Signup failed");
    }
  };

  return (
    <main className="bg-white">
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
                Create your Account ✨
              </h1>
              {/* Form */}
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor="name"
                    >
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="name"
                      className="form-input w-full"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor="tel"
                    >
                      Phone Number <span className="text-rose-500">*</span>
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
                      className="block text-sm font-medium mb-1"
                      htmlFor="communnity"
                    >
                      Community <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="community"
                      className="form-select w-full"
                      value={community}
                      onChange={(e) => setCommunity(e.target.value)}
                      required
                    >
                      <option value="">Select</option>
                      <option value="">Select</option>
                      <option value="">Select</option>
                      <option value="Maratha">Maratha</option>
                      <option value="Brahmin">Brahmin</option>
                      <option value="Kunbi">Kunbi</option>
                      <option value="Dhangar">Dhangar</option>
                      <option value="Chambhar">Chambhar</option>
                      <option value="Mahadev Koli">Mahadev Koli</option>
                      <option value="Mali">Mali</option>
                      <option value="Agri">Agri</option>
                      <option value="Bhandari">Bhandari</option>
                      <option value="Vanjari">Vanjari</option>
                      <option value="Teli">Teli</option>
                      <option value="Leva Patil">Leva Patil</option>
                      <option value="Matang">Matang</option>
                      <option value="Nhavi">Nhavi</option>
                      <option value="Lingayat">Lingayat</option>
                    </select>
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor="gender"
                    >
                      Gender <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="gender"
                      className="form-select w-full"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      required
                    >
                      <option value="">Select</option>
                      <option value="Female">Female</option>
                      <option value="Male">Male</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor="password"
                    >
                      Password <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="password"
                      className="form-input w-full"
                      type="password"
                      autoComplete="on"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-6">
                  <div className="mr-1"></div>

                  <button
                    type="submit"
                    className="ml-3 text-white bg-indigo-500 btn hover:bg-indigo-600"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
              {/* Footer */}
              <div className="pt-5 mt-6 border-t border-slate-200">
                <div className="text-sm">
                  Have an account?{" "}
                  <Link
                    className="font-medium text-indigo-500 hover:text-indigo-600"
                    to="/signin"
                  >
                    Sign In
                  </Link>
                </div>
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
    </main>
  );
}

export default Signup;
