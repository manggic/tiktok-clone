// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBTGX9abZR9VyuFkObsDcwQRvyUN_Q6ujk",
    authDomain: "tiktok-clone-14aa9.firebaseapp.com",
    projectId: "tiktok-clone-14aa9",
    storageBucket: "tiktok-clone-14aa9.appspot.com",
    messagingSenderId: "1013978018254",
    appId: "1:1013978018254:web:09499bd9a5a8f4e6bf7b9f"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()
  export default db;




