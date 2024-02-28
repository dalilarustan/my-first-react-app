
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCjI3yI8neuiy6nwnQZZN9F2Blgx6WxwlI",
    authDomain: "firstreactapp-68d17.firebaseapp.com",
    projectId: "firstreactapp-68d17",
    storageBucket: "firstreactapp-68d17.appspot.com",
    messagingSenderId: "510689250586",
    appId: "1:510689250586:web:b22c928af3800d323730a3",
    measurementId: "G-JVXX34T8QP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);