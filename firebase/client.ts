import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQd8TebguOMWaAqY8YYLEN1MHBEhOYR_w",
  authDomain: "speakeezy-7147a.firebaseapp.com",
  projectId: "speakeezy-7147a",
  storageBucket: "speakeezy-7147a.firebasestorage.app",
  messagingSenderId: "850801167032",
  appId: "1:850801167032:web:88f5dedc2e64fc53b1024d",
  measurementId: "G-2L42ZTZWDE"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);