import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDKIH8m_PBUCjTyI1HT2tsgppByq7_ru1U",
  authDomain: "sossego-7afc4.firebaseapp.com",
  projectId: "sossego-7afc4",
  storageBucket: "sossego-7afc4.appspot.com",
  messagingSenderId: "642245325672",
  appId: "1:642245325672:web:df4e26fb5654a02304dcdd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoreApp() {
  return app;
}
