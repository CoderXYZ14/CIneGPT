import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Body } from "./components";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { login, logout } from "./app/authSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    //console.log("Setting up onAuthStateChanged");
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // console.log("onAuthStateChanged triggered");
      if (user) {
        //console.log("User is logged in");
        const { uid, email, displayName } = user;
        dispatch(login({ uid, email, displayName }));
        //console.log("User logged in:", user);
      } else {
        console.log("User is logged out");
        dispatch(logout());
      }
    });

    return () => unsubscribe(); // Cleanup the subscription
  }, []);

  return <Body />;
}

export default App;
