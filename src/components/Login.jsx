import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateForm } from "../utils/validate.js";
import { auth } from "../utils/firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice.js";
import { USER_AVATAR } from "../utils/constants.js";

//firebase url
//https://netflix-gpt-b09b4.web.app/

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState("true");
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    //validate form data
    const errorMsg = validateForm(email.current.value, password.current.value);
    setErrorMessage(errorMsg);
    //if error return
    if (errorMsg) return;

    if (!isSignInForm) {
      //signup logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + " - " + errorMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      //signin logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("user signed in ", user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };

  const handleSignInToggle = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/638e9299-0637-42d1-ba39-54ade4cf2bf6/web/IN-en-20250203-TRIFECTA-perspective_46eb8857-face-4ea6-b901-dbf22b461369_large.jpg"
          alt="login-bg-img"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 bg-gradient-to-br from-slate-900 opacity-100 my-36 p-12 mx-auto right-0 left-0 text-white rounded-md"
      >
        <h1
          className="font-bold text-3xl
        mb-6 m-1"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            className="w-full p-2 m-2 bg-gray-800 border rounded-md"
            type="text"
            placeholder="Enter full name"
          />
        )}

        <input
          ref={email}
          className="w-full p-2 m-2 bg-gray-800 border rounded-md"
          type="text"
          placeholder="Enter email address"
        />
        <input
          ref={password}
          className="w-full p-2 m-2 bg-gray-800 border rounded-md"
          type="password"
          placeholder="Enter password"
        />
        <p className="text-red-500">{errorMessage}</p>
        <button
          className="w-full p-3 m-2 mt-6 bg-red-700 rounded-md"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="my-4 m-1 cursor-pointer" onClick={handleSignInToggle}>
          {isSignInForm
            ? "New to Netflix? Signup now"
            : "Aleready registered? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
