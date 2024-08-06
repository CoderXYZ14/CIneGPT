import Header from "../Header/Header";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../../hooks/usePopularMovies";
import GptSearch from "../GPT/GptSearch";

const Browse = () => {
  useNowPlayingMovies();

  usePopularMovies();
  return (
    <div className="">
      <Header />
      <GptSearch />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
