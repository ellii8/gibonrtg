
// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwtkPa6kfj3O0k6y5WaP_qdn47lMsMWis",
  authDomain: "gibonrtg.firebaseapp.com",
  projectId: "gibonrtg",
  storageBucket: "gibonrtg.firebasestorage.app",
  messagingSenderId: "952449401322",
  appId: "1:952449401322:web:df03abd1966df0a780b293"
};

// Initialize Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Form Submission
const form = document.getElementById("userForm");
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;

  try {
    await addDoc(collection(db, "users"), {
      username: username,
      email: email,
    });
    document.getElementById("message").innerText = "Data saved successfully!";
  } catch (error) {
    document.getElementById("message").innerText = "Error: " + error.message;
  }
});

  
