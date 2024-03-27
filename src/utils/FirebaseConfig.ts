import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqgr5lyfs9BBByUkKhLiQybcUMklB_Dmg",
  authDomain: "pokedex-a31cf.firebaseapp.com",
  projectId: "pokedex-a31cf",
  storageBucket: "pokedex-a31cf.appspot.com",
  messagingSenderId: "530745827567",
  appId: "1:530745827567:web:08b2c94fd85fa03cc23b1a",
  measurementId: "G-LBDMYQJ7VY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);


export const userRef = collection(firebaseDB, "users");
export const pokemonListRef = collection(firebaseDB, "pokemonList");