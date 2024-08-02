import React, { useState } from "react";
import { Header } from "../index";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/f5a613af-ff99-444d-8305-e4cecd6d6cf6/US-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_591dffe8-33f4-4fb4-a734-9ff362a96145_medium.jpg"
          alt="background-img"
        />
      </div>
      <div className="grid place-items-center h-screen">
        <form className="absolute p-12 bg-black/80 text-white w-3/12 rounded-lg">
          <h1 className="font-bold text-3xl py-4">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {isSignIn && (
            <input
              type="text"
              placeholder="Name"
              className="p-4 my-4 w-full rounded-sm bg-black/40"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="p-4 my-4 w-full rounded-sm bg-black/40 "
          />

          <input
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full rounded-sm bg-black/40"
          />
          <button type="submit" className="py-4 my-4 bg-red-700 w-full">
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>

          <p className="py-4 m-1 text-gray-400 inline-block">
            {isSignIn ? "New to Netflix" : "Already Registered"} ?
          </p>

          <p className="inline-block cursor-pointer" onClick={toggleSignInForm}>
            {isSignIn ? "Sign Up Now" : "Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
