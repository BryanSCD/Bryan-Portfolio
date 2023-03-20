// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC4lrt_o9agAD7knZXKQZ3zWO4L_SwkqyU',
  authDomain: 'bryanscduran-cv.firebaseapp.com',
  projectId: 'bryanscduran-cv',
  storageBucket: 'bryanscduran-cv.appspot.com',
  messagingSenderId: '768436447812',
  appId: '1:768436447812:web:2017cc39d010ca9272aa11',
  measurementId: 'G-LKP8M11TXM',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase
export const db = getFirestore(app);
