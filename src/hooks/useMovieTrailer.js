import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addMoviewTrailer } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useMovieTralier = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const videos = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const jsonVideos = await videos.json();
    const videoResults = jsonVideos.results;
    const filtereddata = videoResults.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filtereddata.length ? filtereddata[0] : videoResults[0];
    dispatch(addMoviewTrailer(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};
export default useMovieTralier;
