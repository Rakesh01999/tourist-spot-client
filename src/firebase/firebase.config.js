// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAG7lnsy0c6pCE6c5k5u1fHx9OjWk8GZAM",
  authDomain: "real-estate-d06a5.firebaseapp.com",
  projectId: "real-estate-d06a5",
  storageBucket: "real-estate-d06a5.appspot.com",
  messagingSenderId: "920801959851",
  appId: "1:920801959851:web:81df6315d0e23ddafd7cee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app) ;

// export default app  ;
export default auth ;
