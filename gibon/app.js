// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyBwtkPa6kfj3O0k6y5WaP_qdn47lMsMWis",
    authDomain: "gibonrtg.firebaseapp.com",
    databaseURL: "https://gibonrtg.firebaseio.com",
    projectId: "gibonrtg",
    storageBucket: "gibonrtg.firebasestorage.app",
    messagingSenderId: "952449401322",
    appId: "1:952449401322:web:df03abd1966df0a780b293",
    measurementId: "G-NR5Z0KGKF3"
  };
  
  // Initialize Firebase
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
  import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";
  
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  
  // Form Submission
  const form = document.getElementById("userForm");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
  
    // Save data to Firebase
    set(ref(database, "users/" + username), {
      username: username,
      email: email,
    })
      .then(() => {
        document.getElementById("message").innerText = "Data saved successfully!";
      })
      .catch((error) => {
        document.getElementById("message").innerText = "Error: " + error.message;
      });
  });
  