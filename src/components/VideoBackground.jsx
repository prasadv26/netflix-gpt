import { useSelector } from "react-redux";
import useMovieTralier from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movie.moviewTrailer);
  useMovieTralier(movieId);

  return (
    <div className="relative w-screen h-[56.25vw] overflow-hidden">
      <iframe
        className="absolute top-1/2 left-1/2 w-[150%] h-[150%] transform -translate-x-1/2 -translate-y-1/2"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
};

export default VideoBackground;
