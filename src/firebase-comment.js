import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCHPr5-wDOc4E8JMcrIn910KKayUDRwLqE",
    authDomain: "portofolio-580cc.firebaseapp.com",
    projectId: "portofolio-580cc",
    storageBucket: "portofolio-580cc.firebasestorage.app",
    messagingSenderId: "435434738855",
    appId: "1:435434738855:web:a21e9d1f6b86770310b782",
    measurementId: "G-VD9LKN0H8L"
  };

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };