import { useNavigate } from "react-router-dom";

const errorMessages = [
  "Mission Failed! Your page self-destructed. 💥",
  "This page and the internet had a breakup. 💔",
  "Oops! Even Deadpool can't fix this mess. 🤷‍♂️",
  "This page vanished into the Upside Down. 🔥👀",
  "Sorry, this page ghosted you. 👻",
  "404: This page was last seen at 2 AM binge-watching. 📺",
];

const Error = () => {
  const randomMessage =
    errorMessages[Math.floor(Math.random() * errorMessages.length)];

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/browse");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white text-center p-6">
      <div className="bg-red-800 p-6 rounded-xl shadow-lg shadow-red-500/50">
        <h1 className="text-4xl font-bold">{randomMessage}</h1>
        <p className="text-md mt-1">
          Even the internet couldn't handle this much drama! 🎭
        </p>

        <button
          onClick={handleClick}
          className="mt-4 px-6 py-2 bg-red-700 hover:bg-red-600 text-white font-semibold rounded-lg transition duration-300"
        >
          Go to Home 🏠
        </button>
      </div>
    </div>
  );
};

export default Error;
