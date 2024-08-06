import React from "react";
import { GptSearchBar, GptMovieSuggestions } from "./index";

const GptSearch = () => {
  return (
    <div className="relative h-screen w-full">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/f5a613af-ff99-444d-8305-e4cecd6d6cf6/US-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_591dffe8-33f4-4fb4-a734-9ff362a96145_medium.jpg"
          alt="background-img"
          className="w-full h-full object-cover filter blur-sm brightness-90"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
