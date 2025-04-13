import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4 cursor-pointer rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg">
      <img
        className="cursor-pointer"
        src={IMG_CDN_URL + posterPath}
        alt="movie-poster-img "
      />
    </div>
  );
};

export default MovieCard;
