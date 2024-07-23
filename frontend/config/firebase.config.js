// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtOzy9QGqOY44bUgEd-r358A39D9a4OVs",
  authDomain: "knowyourlabels-1bf4a.firebaseapp.com",
  projectId: "knowyourlabels-1bf4a",
  storageBucket: "knowyourlabels-1bf4a.appspot.com",
  messagingSenderId: "234104944347",
  appId: "1:234104944347:web:d38be2218ae225d9e93efe",
  measurementId: "G-0KEHF3C91V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export{app}
