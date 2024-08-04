import React, { useEffect } from "react";
import Header from "../Header/Header";
import { API_OPTIONS, API_URL } from "../../utils/constant";

const Browse = () => {
  const getNowPlayingMovies = async () => {
    const data = await fetch(API_URL, API_OPTIONS);
    const json = await data.json();
    console.log(json);
  };

  useEffect(() => {
    getNowPlayingMovies();
    // Clean up the function
  }, []);
  return <Header />;
};

export default Browse;
