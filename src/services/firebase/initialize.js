// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,

  authDomain: "testapp-b0ceb.firebaseapp.com",

  projectId: "testapp-b0ceb",

  storageBucket: "testapp-b0ceb.appspot.com",

  messagingSenderId: "200867255810",

  appId: "1:200867255810:web:45dd93359b0e47a4fdf91b",
};

// Initialize Firebase

export const firebaseApp = initializeApp(firebaseConfig);
