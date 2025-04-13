import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL, USER_AVATAR } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleLogoClick = () => {
    navigate("/browse");
  };

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //cleanup the listener on unmount unsubscribe
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute px-6 bg-gradient-to-br from-black w-full flex justify-between z-10">
      <img
        className="w-44 m-4 cursor-pointer"
        src={LOGO_URL}
        alt="netflix-logo"
        onClick={handleLogoClick}
      />
      {user && (
        <div className="flex">
          <img className="w-16 h-16 p-2" src={USER_AVATAR} alt="profile-icon" />
          <button onClick={handleSignout} className="text-red-800 text-lg">
            SignOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
