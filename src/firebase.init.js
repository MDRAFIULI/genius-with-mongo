// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//Your web app's Firebase configuration
/* const firebaseConfig = {
  apiKey: process.env.REACT_App_apiKey,
  authDomain: process.env.REACT_App_authDomain,
  projectId: process.env.REACT_App_projectId,
  storageBucket: process.env.REACT_App_storageBucket,
  messagingSenderId: process.env.REACT_App_messagingSenderId,
  appId: process.env.REACT_App_appId,
}; */
const firebaseConfig = {
  apiKey: "AIzaSyAXr46Rci5KBG_41b14sIX9gdYrj43jJoI",
  authDomain: "ginius-with-mongo.firebaseapp.com",
  projectId: "ginius-with-mongo",
  storageBucket: "ginius-with-mongo.appspot.com",
  messagingSenderId: "408674695377",
  appId: "1:408674695377:web:14f252e6e41d359921edf0"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
