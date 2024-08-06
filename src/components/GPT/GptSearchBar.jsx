import React from "react";

const GptSearchBar = () => {
  return (
    <div className="pt-[10%] flex justify-center rounded-2xl">
      <form className="w-1/2 bg-black grid grid-cols-12 rounded-2xl">
        <input
          type="text"
          className="p-4 m-6 col-span-9 rounded-2xl"
          placeholder="What would u like to watch today?"
        />
        <button
          type="submit"
          className="py-2 px-4 col-span-3 m-6 bg-red-700 hover:bg-red-800 text-white rounded-lg"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
