import React, { useEffect } from "react";
import Logo from "../../assets/CINEGPT_LOGO.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../app/authSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        //navigate("/error");
      });
  };
  //shifted here as we want navigate in one of children of body which is always accessable ie is header
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          login({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(logout());
        navigate("/");
      }
    });
    //unsubscribe when component unmount
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute top-0 left-0 w-full z-20 px-8 py-2 bg-gradient-to-b from-black flex justify-between items-center">
      <img src={Logo} alt="logo" className="w-44" />
      {user && (
        <div className="flex p-2">
          <img className="w-12 h-12" alt="usericon" src={user?.photoURL} />
          <button onClick={handleSignOut} className="font-bold text-white">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
