import React from "react";

const VideoTitle = ({ originalTitle, overview }) => {
  return (
    <div className="pt-[20%] w-screen aspect-video px-12 absolute text-white bg-gradient-to-r from-black">
      <h2 className="text-6xl bold my-2">{originalTitle}</h2>
      <p className="text-lg w-1/3 py-6">{overview}</p>
      <div>
        <button className="bg-white hover:bg-opacity-80 p-3 rounded-md w-36 mr-2 text-black">
          ▶️ Play
        </button>
        <button className="bg-gray-500 p-3 rounded-md w-36 mr-2 text-black">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
