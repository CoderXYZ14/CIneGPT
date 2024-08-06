import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movies === null) return null; // Return null instead of nothing
  const n = movies.length;
  const mainMovies = movies[Math.floor(Math.random() * n)];
  const { original_title, overview, id } = mainMovies;
  return (
    <div className="w-full h-full overflow-hidden">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
