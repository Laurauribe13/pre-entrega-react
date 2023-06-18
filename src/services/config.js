import { initializeApp } from "firebase/app"
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "identy-beauty.firebaseapp.com",
    projectId: "identy-beauty",
    storageBucket: "identy-beauty.appspot.com",
    messagingSenderId: "770342144115",
    appId: "1:770342144115:web:045b386e10b887a5ea0206"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);