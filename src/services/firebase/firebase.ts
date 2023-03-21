// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { ReCaptchaV3Provider, initializeAppCheck } from 'firebase/app-check';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Not a security risk, as detailed here:
// https://firebase.google.com/docs/projects/api-keys#api-keys-for-firebase-are-different
const firebaseConfig = {
  apiKey: 'AIzaSyC4lrt_o9agAD7knZXKQZ3zWO4L_SwkqyU',
  authDomain: 'bryanscduran-cv.firebaseapp.com',
  projectId: 'bryanscduran-cv',
  storageBucket: 'bryanscduran-cv.appspot.com',
  messagingSenderId: '768436447812',
  appId: '1:768436447812:web:2f929f73dd6ea08c72aa11',
  measurementId: 'G-SW2L394S1J',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// AppCheck checks the domain of the requests. It uses reCAPTCHA v3
initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('6LclEx8lAAAAAEzO1ZPx2FlgXdhbTS_xnaj6ICeg'),

  // If true, the SDK automatically refreshes App Check tokens as needed.
  isTokenAutoRefreshEnabled: true,
});

// Initialize Firebase
export const db = getFirestore(app);
