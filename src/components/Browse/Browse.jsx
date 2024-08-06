import Header from "../Header/Header";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../../hooks/usePopularMovies";
import GptSearch from "../GPT/GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();

  usePopularMovies();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  return (
    <div className="">
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
