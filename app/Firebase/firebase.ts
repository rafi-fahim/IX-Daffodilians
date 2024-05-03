// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRwcNgZnC8YxeyeuPCzyeKGi0v1-D8aI4",
  authDomain: "daffodilians-9.firebaseapp.com",
  projectId: "daffodilians-9",
  storageBucket: "daffodilians-9.appspot.com",
  messagingSenderId: "299359125781",
  appId: "1:299359125781:web:21cd7f8da64041da63691c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)