import { initializeApp } from "firebase/app";

import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNTijRHaOE8rTHUyicrqjEEHbq1mXdqYs",
  authDomain: "testni-131f8.firebaseapp.com",
  projectId: "testni-131f8",
  storageBucket: "testni-131f8.appspot.com",
  messagingSenderId: "137597409877",
  appId: "1:137597409877:web:f1280e970c9ee3da9ed2dc",
  measurementId: "G-J2QL7RHSFD",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();
const usersCollection = collection(db, "Users");

document.querySelector("#login").addEventListener("click", login);

function login() {
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;

  getDocs(usersCollection).then((docs) => {
    docs.forEach((doc) => {
      if (
        doc.data().username === username &&
        doc.data().password === password
      ) {
        window.open("dash.html?user=" + username, "_self");
      }
    });
  });
}
