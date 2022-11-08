
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBh-Nyj5YPaw7Zt39p2Qgf2pp93CbhYWEI",
  authDomain: "miniblog-d20e4.firebaseapp.com",
  projectId: "miniblog-d20e4",
  storageBucket: "miniblog-d20e4.appspot.com",
  messagingSenderId: "20903359926",
  appId: "1:20903359926:web:ed739029046bb4ed23fd17"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db }; 