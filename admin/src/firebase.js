import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC7GcUUzA9wQ5ETet9KQ2aj-_ikdKBGMNY",
  authDomain: "netflix-35191.firebaseapp.com",
  projectId: "netflix-35191",
  storageBucket: "netflix-35191.appspot.com",
  messagingSenderId: "551642630149",
  appId: "1:551642630149:web:4e1d7a002c8fca50aaf46c",
  measurementId: "G-RL4EMDGZWL",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;
