import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHPr5-wDOc4E8JMcrIn910KKayUDRwLqE",
  authDomain: "portofolio-580cc.firebaseapp.com",
  projectId: "portofolio-580cc",
  storageBucket: "portofolio-580cc.appspot.com",
  messagingSenderId: "435434738855",
  appId: "1:435434738855:web:a21e9d1f6b86770310b782",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };