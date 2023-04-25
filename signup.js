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

document.querySelector("#signup").addEventListener("click", signup);

function signup() {
  const email = document.querySelector("#email").value;
  const username = document.querySelector("#username").value;
  const firstname = document.querySelector("#firstname").value;
  const lastname = document.querySelector("#lastname").value;
  const password = document.querySelector("#password").value;
  const confirmpassword = document.querySelector("#confirmpassword").value;
  const phone = document.querySelector("#phone").value;
  const city = document.querySelector("#city").value;
  const post = document.querySelector("#post").value;

  if (
    email === "" ||
    username === "" ||
    password === "" ||
    confirmpassword === ""
  ) {
    alert("Fill in the required fields!");
  } else if (password !== confirmpassword) {
    alert("Passwords don't match!");
  } else {
    addDoc(usersCollection, {
      email: email,
      username: username,
      password: password,
      firstname: firstname,
      lastname: lastname,
      phone: phone,
      city: city,
      post: post,
    });
  }
}
