import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAclzsCJCQNzYT7aWVhOvJhS4nS2MG94_g",
  authDomain: "cinegpt-7016b.firebaseapp.com",
  projectId: "cinegpt-7016b",
  storageBucket: "cinegpt-7016b.appspot.com",
  messagingSenderId: "649555004525",
  appId: "1:649555004525:web:d09fe6d432cc2f138a0364",
  measurementId: "G-3LCTQKRS10",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();

export { auth };
