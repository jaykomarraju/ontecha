import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDAc09R10Vlq54AVdw-UBl-fNuGIY0zl2I",
    authDomain: "ontecha-app.firebaseapp.com",
    projectId: "ontecha-app",
    storageBucket: "ontecha-app.appspot.com",
    messagingSenderId: "124090621062",
    appId: "1:124090621062:web:35222679524a0b6a174507",
    measurementId: "G-LLXFVNLYZK"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const auth = getAuth();
  const storage = getStorage(firebaseApp);
  const db = getFirestore(firebaseApp);

  export {auth, db, storage}