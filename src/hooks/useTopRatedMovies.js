import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopratedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const rawMovies = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const moviesJson = await rawMovies.json();
    dispatch(addTopRatedMovies(moviesJson.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopratedMovies;
