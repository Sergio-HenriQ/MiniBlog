import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIMSx2A7o2vfRh0fPYj07H4yw3AU2TMJ4",
  authDomain: "miniblog-4f3a3.firebaseapp.com",
  projectId: "miniblog-4f3a3",
  storageBucket: "miniblog-4f3a3.appspot.com",
  messagingSenderId: "621849128628",
  appId: "1:621849128628:web:18ea634fc704d1c5e531e1"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db }; 