import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    //imp css aspect-video
    <div className="pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/3 text-justify ">{overview}</p>
      <div className="">
        <button className="bg-white text-black p-4 px-12 text-xl  rounded-md font-bold hover:bg-opacity-80">
          &#9658; Play
        </button>
        <button className=" mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-md font-bold hover:bg-[#6f7580]">
          &#9432; More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
