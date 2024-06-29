
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyDaw9eDMVG6b2kJqeXitGBZKdAAXgaVY4g",
  authDomain: "fabric-arts-textile.firebaseapp.com",
  projectId: "fabric-arts-textile",
  storageBucket: "fabric-arts-textile.appspot.com",
  messagingSenderId: "1002040646574",
  appId: "1:1002040646574:web:4c4dfcbef05466b8f3063f"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;