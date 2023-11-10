import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvbKr24vWkquqf0W1exhOHOIgq2_kmv0E",
  authDomain: "coder-react-5299a.firebaseapp.com",
  projectId: "coder-react-5299a",
  storageBucket: "coder-react-5299a.appspot.com",
  messagingSenderId: "403307026525",
  appId: "1:403307026525:web:dd3457287bf13744f2d5b4",
  measurementId: "G-2MRN8GG034",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
