import React, { useEffect } from "react";
import Header from "../Header/Header";
import { API_OPTIONS, API_URL } from "../../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../../app/movieSlice";

const Browse = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(API_URL, API_OPTIONS);
    const json = await data.json();
    //console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
    // Clean up the function
  }, []);
  return <Header />;
};

export default Browse;
