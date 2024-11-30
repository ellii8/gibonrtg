
// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwtkPa6kfj3O0k6y5WaP_qdn47lMsMWis",
  authDomain: "gibonrtg.firebaseapp.com",
  projectId: "gibonrtg",
  storageBucket: "gibonrtg.firebasestorage.app",
  messagingSenderId: "952449401322",
  appId: "1:952449401322:web:df03abd1966df0a780b293"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Form Submission
const form = document.getElementById("userForm");
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;

  try {
    await db.collection("users").add({
      username: username,
      email: email
    });
    document.getElementById("message").innerText = "Data saved successfully!";
  } catch (error) {
    document.getElementById("message").innerText = "Error: " + error.message;
  }
});

  
