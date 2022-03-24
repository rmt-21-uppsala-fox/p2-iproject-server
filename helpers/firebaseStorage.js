// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getStorage } = require("firebase/storage");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuwtsVQZAg55WGprz0hyEV-AF3FhO4I6A",
  authDomain: "fastorder-20638.firebaseapp.com",
  projectId: "fastorder-20638",
  storageBucket: "fastorder-20638.appspot.com",
  messagingSenderId: "621944102195",
  appId: "1:621944102195:web:1d6bc6837849d75935f246",
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);

const storage = getStorage(fireBaseApp);

module.exports = storage;
