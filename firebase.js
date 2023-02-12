// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getDatabase} from 'firebase/database'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfigWeb = {
  apiKey: "AIzaSyCp2Q7Bfyo6LEGbCrLD_a5h5GZNOkJtxn4",
  authDomain: "theredapplestorewebsite.firebaseapp.com",
  projectId: "theredapplestorewebsite",
  storageBucket: "theredapplestorewebsite.appspot.com",
  messagingSenderId: "371715398322",
  appId: "1:371715398322:web:e3ef1b59c253c44cce87ab",
  measurementId: "G-DNQKVGEPCN"
};

const firebaseConfigBack = {
  apiKey: "AIzaSyBmb-GNbxtr9ilzYTMfb8dG6DT_K6t4yQw",
  authDomain: "theredapplestorewebsiteb-5523a.firebaseapp.com",
  projectId: "theredapplestorewebsiteb-5523a",
  storageBucket: "theredapplestorewebsiteb-5523a.appspot.com",
  messagingSenderId: "805053853454",
  appId: "1:805053853454:web:6fbc4230639c8d87bcb15f",
  measurementId: "G-GKWHZXK74R"
};

const firebaseConfigRedApple = {
  apiKey: "AIzaSyC98IdVVVgf29ajFO39R62sFByL8aMrIJw",
  authDomain: "redapple-25797.firebaseapp.com",
  projectId: "redapple-25797",
  storageBucket: "redapple-25797.appspot.com",
  messagingSenderId: "601784890787",
  appId: "1:601784890787:web:4fadb14ad985e73a6bd616",
  measurementId: "G-JE387B8VK9"
};


// Initialize Firebase
const web = initializeApp(firebaseConfigWeb);
const back = initializeApp(firebaseConfigBack, "Other");
const redapple = initializeApp(firebaseConfigRedApple, "RedApple");

const analyticsWeb = getAnalytics(web);
const analyticsBack = getAnalytics(back);
const analyticsRedApple = getAnalytics(redapple);

export const authenticationWeb = getAuth(web)
export const firestoreWeb = getFirestore(web)
export const fireDbWeb = getDatabase(web)
export const storageWeb = getStorage(web)

export const authenticationBack = getAuth(back)
export const firestoreBack = getFirestore(back)
export const fireDbBack = getDatabase(back)
export const storageBack = getStorage(back)


export const authenticationRedApple = getAuth(redapple)
export const firestoreRedApple = getFirestore(redapple)
export const fireDbRedApple = getDatabase(redapple)
export const storageRedApple = getStorage(redapple)