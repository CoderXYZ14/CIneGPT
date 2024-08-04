import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, API_URL } from "../utils/constant";
import { addNowPlayingMovies } from "../app/movieSlice";

const useNowPlayingMovies = () => {
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
};

export default useNowPlayingMovies;
