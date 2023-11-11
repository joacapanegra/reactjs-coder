import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBAFxFI11zLjmxqinuoGryfdzjAUvMa_Rs",
  authDomain: "coder-react-23d86.firebaseapp.com",
  projectId: "coder-react-23d86",
  storageBucket: "coder-react-23d86.appspot.com",
  messagingSenderId: "332414268273",
  appId: "1:332414268273:web:5477fc95b087b8b5887cd0",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
