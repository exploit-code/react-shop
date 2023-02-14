// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2eyRPCrHvEYLvaWC1tK4bbyO3h_a4wSo",
  authDomain: "fir-auth-fadcd.firebaseapp.com",
  projectId: "fir-auth-fadcd",
  storageBucket: "fir-auth-fadcd.appspot.com",
  messagingSenderId: "995909506569",
  appId: "1:995909506569:web:87cd4aae480126d9388ad8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;