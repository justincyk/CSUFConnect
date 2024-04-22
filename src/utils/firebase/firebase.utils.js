// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAg7_d5a0B3y7SSEWUH4KfR4iHuKyRVkZM",
  authDomain: "csuf-connect.firebaseapp.com",
  projectId: "csuf-connect",
  storageBucket: "csuf-connect.appspot.com",
  messagingSenderId: "68166830246",
  appId: "1:68166830246:web:fac2c8729317c8234c4c67",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const createAccount = (email, password) => {
  if (email.split("@")[1] !== "csu.fullerton.edu") return;
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        resolve(user);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const signInUser = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
  return await signOut(auth);
};

// is a listener. It will return whatever you get back from onauthstatechanged. Takes 2 arguments. The auth and the callback
// you want to call whenever the auth changes. We are gonna pass in a callback function whenever we instantiate the function.
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};
