import React from "react";
import Logo from "../../assets/CINEGPT_LOGO.png";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        //navigate("/error");
      });
  };
  return (
    <div className=" absolute px-8 py-2 bg-gradient-to-b from-black w-full z-10 flex justify-between">
      <img src={Logo} alt="logo" className="w-44" />
      <div className="flex p-2">
        <button onClick={handleSignOut} className="font-bold  text-white">
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
