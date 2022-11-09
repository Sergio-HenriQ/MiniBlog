import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAnD_h1dBikrdBJ9G-Pw4aPbCB5_tylwxo",
  authDomain: "miniblog-f0772.firebaseapp.com",
  projectId: "miniblog-f0772",
  storageBucket: "miniblog-f0772.appspot.com",
  messagingSenderId: "8748090115",
  appId: "1:8748090115:web:14ef9886f4e4f986f45f36"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db }; 