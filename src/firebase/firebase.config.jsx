import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC72aBzUWNa-IYj-t23-HyWPiYxqRoUpgY",
  authDomain: "web-hieu-thuoc.firebaseapp.com",
  projectId: "web-hieu-thuoc",
  storageBucket: "web-hieu-thuoc.appspot.com",
  messagingSenderId: "1001414723368",
  appId: "1:1001414723368:web:64526e80fa1f9eb557321d",
  measurementId: "G-2GRJ5L7QXW"
};
initializeApp(firebaseConfig);
export const auth = getAuth();
