import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Body } from "./components";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { login, logout } from "./app/authSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(login({ uid, email, displayName, photoURL }));
      } else {
        dispatch(logout());
      }
    });

    return () => unsubscribe();
  }, [dispatch]); // Include dispatch in the dependency array

  return <Body />;
}

export default App;
