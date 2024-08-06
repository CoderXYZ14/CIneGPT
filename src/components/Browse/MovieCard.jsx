import { IMG_CDN_URL } from "../../utils/constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4 rounded-lg">
      <img
        className="rounded-lg"
        alt="Movie Card"
        src={IMG_CDN_URL + posterPath}
      />
    </div>
  );
};
export default MovieCard;
