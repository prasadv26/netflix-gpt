import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const usePlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const movies = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const movieJSON = await movies.json();
    dispatch(addNowPlayingMovies(movieJSON.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default usePlayingMovies;
