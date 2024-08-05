import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, API_URL_POPULAR } from "../utils/constant";
import { addPopularMovies } from "../app/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(API_URL_POPULAR, API_OPTIONS);
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getPopularMovies();
    // Clean up the function
  }, []);
};

export default usePopularMovies;
